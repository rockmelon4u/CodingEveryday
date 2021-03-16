var fs = require('fs'); 
//fs모듈을 불러와서 fs변수 이름을 붙임
//The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
//fs모듈은 표준화된 POSIX기능의 모델화된 방법 중 파일시스템과 상호작용할 수 있도록 한다.
//fs모듈은 표준 POSIX기능을 모델로 하는 방식으로 파일 시스템과 상호작용할 수 있습니다.


//readFileSync
//동기는 값을 함수안에서 바로 리턴하며, I/O작업이 수행하는 동안 다른 코드가 실행되는 것을 막는다.
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');

//ABC
 
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
//ACB

/*----------
synchronous 동기
asynchronous 비동기

node.js v14.16.0 node --version


nodejs 기능을 끌어올리기 위해서는 비동기식으로.

*/