var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    //console.log(url);
    //parrs 분석 검색할 시에 nodejs url parse query string
    var queryData = url.parse(_url, true).query;    //이 부분이 쿼리스트링에서 받아오는 값을 넣어주는 변수
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);
 
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
