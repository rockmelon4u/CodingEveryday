var M = {
  v:'v',
  f:function(){
    console.log(this.v);
  }
}
 
module.exports = M;

/*
    Module이라는 약속된 객체를 적어두고, 
    우리가 만들고 있는 M 
    M 이 가리키고 있는 객체를 바깥에서 쓸 수 있도록 하겠다.
*/