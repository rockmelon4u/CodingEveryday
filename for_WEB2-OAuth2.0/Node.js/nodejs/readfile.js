var fs = require('fs');
//fs.readFile(path[, options], callback)
fs.readFile('sample.txt', 'utf8', function(err, data){      
  console.log(data);
});

//nodejs에서 파일을 다루는 방법
//정보를 다루는 핵심적인 방법 CRUD
//Create
//Read
//Update
//Delete
// nodejs file read 검색하면
// fs readfile 공식 화면 https://nodejs.dev/learn/reading-files-with-nodejs
// fs(FileSystem) https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfile_path_options_callback
// 
// 같은 폴더안에서 node readfile.js 을 실행해야만 한다. 상위폴더에서 실행하면, path의 위치가 달라짐