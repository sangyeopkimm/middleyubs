//4. 변수(variable):데이터를 저장하는 기억장소,자료형(데이터 타입)을 입력하지 않음
//dynamic data typing(변수에 값이 대입되는 순간 자료형이 결정,선언하지 않아도 사용할 수 있따)
//변수 통용범우ㅣ : local variable, global variable
//let과 var 구분
//-자료형 : number 등등 
///-typeof() :자료형을 확인
let age = 100; //글로벌 변수
{
let age = 20;
console.log(age);
age=30;
console.log(age);
}
console.log(age);

b=70;
var b;
console.log("b"=b);
b="경정";
console.log("b" + b);

c=100;
let c;
console.log("c=" + c );
console.log(typeof(c));