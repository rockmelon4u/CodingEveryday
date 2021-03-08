var args = process.argv;
console.log(args[0]);
console.log(args[1]);
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] === '1'){
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');

//nodejs consle input parameters
//node syntax/conditional.js 234    234라는 정보를 입력받아 출력
// args[0] C:\Program Files\nodejs\node.exe
// args[1] C:\Users\Jack\Documents\GitHub\CodingEveryday\for_WEB2-OAuth2.0\Node.js\syntax\conditional.js