var express = require('express')
var app = express()
var fs = require('fs');
var template = require('./lib/template.js');
var qs = require('querystring');
var bodyParser = require('body-parser')

//라우터로 파일분리
var topicRouter = require('./routes/topic');

//static files
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//압축
var compression = require('compression');
var { request } = require('http');
var { send } = require('process');
app.use(compression());

//리스트를 호출하는 미들웨어를 만들어보자
//app.use(function(request, response, next){
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});

app.use('/topic', topicRouter);
// /topic으로 시작하는 주소 이름은 미드웨어를 적용하겠다라는 의미.

//route, routing
//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', function(request, response) { 
  //console(request.list);
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `<h2>${title}</h2>${description},
    <img src="/images/hello.jpg" style="width:300px; display:block"></img>`,
    `<a href="/topic/create">create</a>`
  ); 
  response.send(html);
});




app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});