var f = function(){
  console.log(1+1);
  console.log(1+2);
}
//함수는 처리해야할 정보를 갖고 있는 값.
// var i = if(true){console.log(1)} 조건문이라는 구문은 값이 아니다.

var a = [f];
a[0](); //2,3
/*
변수 a는 배열로서 f의 값을 가지게끔 선언하고
a[0]은 f이고 f()의 의미는, 함수 실행
*/

var o = {
  func:f
}
o.func();   //2,3
/*
    오브젝트 func의 객체의 값으로 f를 주고, 
    
*/



//Object Oriented Programming
//객체 지향 
//