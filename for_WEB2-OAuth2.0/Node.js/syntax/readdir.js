var testFolder = './data';
var fs = require('fs');     //File System모듈 전체 메소드 https://nodejs.org/api/fs.html
 
fs.readdir(testFolder, function(error, filelist){
  console.log(filelist);
})

//<li><a href="/?id=HTML">HTML</a></li>
//<li><a href="/?id=CSS">CSS</a></li>
//<li><a href="/?id=JavaScript">JavaScript</a></li>
//위와 같이 데이터 안의 js파일을 불러들일때,
//갯수가 많다면, 기계에 맡기는 자동화가 필요할때
//  검색 nodejs file list in directory
