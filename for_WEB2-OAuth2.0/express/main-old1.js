// var http = require('http');
// var fs = require('fs');
// var url = require('url');
 
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     //console.log(url);
//     //parrs 분석 검색할 시에 nodejs url parse query string
//     var queryData = url.parse(_url, true).query;    //이 부분이 쿼리스트링에서 받아오는 값을 넣어주는 변수 세팅
//     var pathname = url.parse(_url, true).pathname;
    
//     //var title = queryData.id;
//     //console.log(queryData.id);
//     //console.log(url.parse(_url,true));
//     //if(_url == '/'){
//     //    title = 'Welcome';
//         //_url = '/index.html'; 조건이 / 일때 index.html로 하기 위해 설정
//     //}
//     //if(_url == '/favicon.ico'){
//     //  return response.writeHead(404);
//     //}
//     if(pathname === '/'){   //여기가 기본 경로, 다른 경로로 들어올경우, 
//         if(queryData.id === undefined){
//             fs.readdir('./data', function(error,FileList){
//                 var title = 'Welcome';
//                 var description = 'Hello, Node.js';
//                 var list = '<ul>';
//                 var i = 0;
//                 while(i < FileList.length){
//                     list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
//                     i = i + 1;
//                 }
//                 list = list+'</ul>';
                
//             }
//                       )
            
            
            
            
            
            
            
//             fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){ //각 파일이 본문이 description이 되는것.
//                 var title = 'Welcome';
//                 var description = 'Hello, Node.js';
//                 var template = `        
//                 <!doctype html>
//                 <html>
//                 <head>
//                   <title>WEB1 - ${title}</title>
//                   <meta charset="utf-8">
//                 </head>
//                 <body>
//                   <h1><a href="/">WEB</a></h1>
//                   <ul>
//                     <li><a href="/?id=HTML">HTML</a></li>
//                     <li><a href="/?id=CSS">CSS</a></li>
//                     <li><a href="/?id=JavaScript">JavaScript</a></li>
//                   </ul>
//                   <h2>${title}</h2>
//                   <p>${description}</p> //
//                 </body>
//                 </html>
//                 `;  //변수 받아오는 방법 ${}
//                 response.writeHead(200);    //200은, 파일을 성공적으로 전송했다
//                 response.end(template);
//             });
//         } else {
//             fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
//                 var title = queryData.id;
//                 var template = `
//                   <!doctype html>
//                   <html>
//                   <head>
//                     <title>WEB1 - ${title}</title>
//                     <meta charset="utf-8">
//                   </head>
//                   <body>
//                     <h1><a href="/">WEB</a></h1>
//                     <ul>
//                       <li><a href="/?id=HTML">HTML</a></li>
//                       <li><a href="/?id=CSS">CSS</a></li>
//                       <li><a href="/?id=JavaScript">JavaScript</a></li>
//                     </ul>
//                     <h2>${title}</h2>
//                     <p>${description}</p>
//                   </body>
//                   </html>
//                   `;
//                   response.writeHead(200);
//                   response.end(template);
//                 });
//         }
        
        
//     } else {
//         response.writeHead(404);
//         response.end('Not found')
//     }

    
    
//     //response.end(template);
//     //response.end(queryData.id);   //여기가 쿼리 스트링으로 받을 수 있는 부분.
//     //})
 
// });
// app.listen(3000);

// //https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm


// //app.listen(3000) -> localhost:3000
// //http://127.0.0.1:3000/


// //query string
// //웹 서버에 정보를 전달할 수 있다.
// //시작은 ? 물음표로
// //값 값 & 구분
// //값의 이름과 값은 = 로 구분

// //각 파일을 읽어드리는 식으로 하면, 파일내용을 변경하면 바로바로 업데이트 되는걸 확인할 수 있다.
// // main을 다시 실행하시 않아도.