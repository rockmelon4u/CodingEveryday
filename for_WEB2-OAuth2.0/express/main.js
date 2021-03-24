var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

/*
    지금부터 템플릿이라는 객체를 만들고 html이라는 property 값을 넣을 것.
    refactoring
*/
var template = require('./lib/template.js');

var path =require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
            
          /*
          var list = templateList(filelist);
          var template = templateHTML(title, list, `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`);
          response.writeHead(200);
          response.end(template);
          */
          var list = template.list(filelist);
          var html = template.HTML(title, list, `<h2>${title}</h2>${description}`, `<a href="/create">create</a>`);
          response.writeHead(200);
          response.end(html);

        });
      } else {
        fs.readdir('./data', function(error, filelist){
            var filteredId = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
            var title = queryData.id;
            var sanitizedTitle = sanitizeHtml(title);
            var sanitizedDescription = sanitizeHtml(description);
            var list = template.list(filelist);
            var html = template.HTML(sanitizedTitle, list, `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`, 
            `
            <a href="/create">create</a> 
            <a href="/update?id=${sanitizedTitle}">update</a>
            <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${sanitizedTitle}">
                <input type="submit" value="delete">
            </form>
            `);
            //<a href="/delete?id=${title}">delete</a> 이런식으로 링크로 만들면 대단히 잘못됨,
            //링크는 클릭했을 때 이동, 무언가를 보낼수 있다. 미리 다운로드 받는 캐싱이라는 기능.
            // 이 기능이 활성화 된 상태에서, 겟방식으로 구현해 놓았더니,
            // 플러그 인이 미리 찾아서 들어가서 삭제해놓아버린 상태.
            // 삭제는 링크로 하면 안된다.
            response.writeHead(200);
            response.end(html);
          });
        });
      }
    } else if(pathname === '/create'){
      fs.readdir('./data', function(error, filelist){
        var title = 'WEB - create';
        var list = template.list(filelist);
        var html = template.HTML(title, list, `
          <form action="/create_process" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit">
            </p>
          </form>
        `, ``);
        response.writeHead(200);
        response.end(html);
      });
    } else if(pathname === '/create_process'){
      var body = '';
      request.on('data', function(data){
          body = body + data;
      });   //수신할때 마다 콜백 호출하고, data라는 인자를 통해서 조금씩 붙여나가는 형식이랄까..
      request.on('end', function(){
          var post = qs.parse(body);
          //console.log(post);
          var title = post.title;
          var description = post.description
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});       //302는 페이지를 다른 곳으로 리다이렉션 
            response.end();
          })
      });
    } else if(pathname == `/update`){
        fs.readdir('./data', function(error, filelist){
            var filteredId = path.parse(queryData.id).base;
            fs.readFile(`data/${filteredId}`, 'utf8', function(err, description){
            var title = queryData.id;
            var list = template.list(filelist);
            var html = template.HTML(title, list, 
            `
            <form action="/update_process" method="post">
            <input type="hidden" name="id" value="${title}" >
            <p><input type="text" name="title" placeholder="title" value="${title}"></p>
            <p>
              <textarea name="description" placeholder="description">${description}</textarea>
            </p>
            <p>
              <input type="submit">
            </p>
                </form> 
                
            `, 
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a>)`);
            response.writeHead(200);
            response.end(html);
          });
      });
    }
    else if(pathname === `/update_process`){
        var body = '';
      request.on('data', function(data){
          body = body + data;
      });   //수신할때 마다 콜백 호출하고, data라는 인자를 통해서 조금씩 붙여나가는 형식이랄까..
      request.on('end', function(){
          var post = qs.parse(body);
          //console.log(post);
          var id = post.id;
          var title = post.title;
          var description = post.description
          //console.log(post);
          fs.rename(`data/${id}`,`data/${title}`, function(error){
            fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});       //302는 페이지를 다른 곳으로 리다이렉션 
            response.end();
          })
          });

      });
    }
    else if(pathname === `/delete_process`){
        var body = '';
      request.on('data', function(data){
          body = body + data;
      });   //수신할때 마다 콜백 호출하고, data라는 인자를 통해서 조금씩 붙여나가는 형식이랄까..
      request.on('end', function(){
          var post = qs.parse(body);
          //console.log(post);
          var id = post.id;
          //nodejs delete file
          var filteredId = path.parse(id).base;
          fs.unlink(`data/${filteredId}`, function(error){
            response.writeHead(302, {Location: `/`});      
            response.end();
          })
      });
    }
    else {
      response.writeHead(404);
      response.end('Not found');
    }
 
 
 
});
app.listen(3000);

/*
 nodejs file write\
 nodejs redirection
*/