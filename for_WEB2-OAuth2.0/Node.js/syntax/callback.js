//callback 나중에 함수를 호출하는 것으로 실행

/*
function a(){
  console.log('A');
}
*/
var a = function(){
  console.log('A');
}
//위의 것과 같다
 
function slowfunc(callback){
  callback();
}
//함수가 실행이 끝났으니까, 다음일을 하세요, 라고 할때 인수로 callback, 그리고 실행

slowfunc(a);
//오랜시간이 걸려서 실행되는 함수가 실행되고, callback 파라미터는 a가 가리키는 함수값을 가지게 된다
