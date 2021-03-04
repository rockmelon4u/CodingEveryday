var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    //console.log(url);
    //parrs 분석 검색할 시에 nodejs url parse query string
    var queryData = url.parse(_url, true).query;    //이 부분이 쿼리스트링에서 받아오는 값을 넣어주는 변수 세팅
    var title = queryData.id;
    console.log(queryData.id);
    if(_url == '/'){
        title = 'Welcome';
        //_url = '/index.html'; 조건이 / 일때 index.html로 하기 위해 설정
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
    var template = `        
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
      <img src="coding.jpg" width="100%">
      </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
      </p>
    </body>
    </html>
    `;  //변수 받아오는 방법 ${}
    
    response.end(template);
    //response.end(queryData.id);   //여기가 쿼리 스트링으로 받을 수 있는 부분.
    })
 
});
app.listen(3000);

//https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm


//app.listen(3000) -> localhost:3000
//http://127.0.0.1:3000/


//query string
//웹 서버에 정보를 전달할 수 있다.
//시작은 ? 물음표로
//값 값 & 구분
//값의 이름과 값은 = 로 구분
