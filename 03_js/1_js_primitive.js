// https://runjs.app/play

/*
여러줄
주석
*/
// 한 줄 주석
// html -> CSS -> JS 입히는 방식으로 화면을 렌더링하기 때문에 하나의 파일에 이 코드들을 작성할 때는 BODY의 맨 마지막에 <script> </script> 사이에 작성합니다.

/* 
1. 변수: int(숫자) / string(문자) / boolean(참/거짓) / null /
선언과 할당으로 변수를 만들 수 있습니다. 
- var: 매번 만들고 지울 수 있는 방
- let: 한번 만들면 값을 바꾸는 건 가능, 새로 지우고 만들 수는 없는 방
- const: 한번 만들면 값을 바꾸는 게 불가능한 방
*/

const a = "apple";
a
// a = "alter";
// a

// 코드가 길어지면, 여러사람이 작업을 하게 되면 var는 권장되지 않습니다. 
// const로 다 만들고 나서 변경이 필요해지는 변수들은 let으로 바꾸기를 권장합니다. 

/*
2. 변수 명명규칙
# camelCase : 소문자로 시작하고 띄어쓰기 자리마다 대문자로 처리하는 이름 규칙(default)
# PascalCase: 대문자로 시작하고, 띄어쓰기 자리마다 대문자로 처리하는 이름 규칙(class 이름 같은 변수들)
# snake_case: 소문자로 시작하고 띄어쓰기 자리마다 _(언더바)로 처리하는 이름 규칙
# kebab-case: 소문자로 시작하고 띄어쓰기 자리마다 -(dash)로 처리하는 이름 규칙

- camelCase 또는 snake_case를 권장합니다.
- class를 만들때는 PascalCase를 씁니다.
- 숫자, _, $을 변수명에 사용 가능합니다. 근데 숫자는 맨 앞에는 들어올 수 없습니다.
- 공백, 마침표, 자바스크립트가 이미 쓰는 keyword(예약어)는 불가합니다.
*/
var num_Edit1 = 1;
num_Edit1


/*

3. 자료형 
- 7개의 기본자료형(primitive, 원시자료형), 1개의 참조자료형(reference, JS에서는 모두 object로 찍힘)  
  - number(숫자)
  - string(문자열)
  - boolean: true, false로 반환
  - null: 값이 없음. 자료형은 object로 찍힘. 웬만하면 우리가 작성하는 빈방에는 null로 채웁니다.
  - undefined: 정의되지 않음
      - 값을 대입하지 않은 변수 / 리턴이 없는 함수의 실행 결과 / 존재하지 않는 속성을 가리킬 때 자바스크립트가 돌려주는 결과
  - symbol: 고유하고 변경할 수 없는 값. 
  - bigint: 아주 큰 숫자. 숫자 뒤에 소문자 n을 붙여서 관리.

  - object: 객체
    - 배열, 날짜, 함수, Map, Set, 정규식
*/
var num1 = 1;
num1
typeof(num1);
console.log(typeof(num1));

// BigInt
// number가 100% 정확하게 표현할 수 있는 가장 큰 정수는 9,007,199,254,740,991(약 9007조)입니다. 이 숫자를 넘어가는 순간 자바스크립트는 계산 실수를 하기 시작합니다.
console.log(9007199254740992 === 9007199254740993); // true

// 1. 숫자 끝에 n 붙이기 (가장 많이 씀)
const bigNum1 = 123456789012345678901234567890n;
console.log(typeof(bigNum1));

// 2. BigInt() 함수 사용하기 (주로 문자열을 변환할 때 씀)
const bigNum2 = BigInt("123456789012345678901234567890");

console.log(typeof bigNum2); // "bigint"

// 3. String
var str = "안녕하세요";
console.log(typeof(str)); 

var str1 = "'안녕하세요.'라고 김철수가 말했다."; // escaping 문자
console.log(str1);
console.log(typeof(str1));

// 4. boolean - 소문자로 작성합니다: true / false
var bool = true;
console.log(typeof(bool));

// 5. null: 개발자가 대입해놓은 값 없음
var null1 = null;
console.log(typeof(null1));
// 'object'로 자료형이 찍힘. 자바스크립트의 자체 버그. 그러나 그대로 유지되고 있습니다.
// boolean으로 형변환해서 false로 null 체크
console.log(Boolean(null1));

// 6. null -> 인터프리터가 코드를 돌렸는데 줄 게 없음 (return 없음)
var undef1;
console.log(typeof(undef1));
console.log(Boolean(undef1));


/* 실습:
- alert() - 출력만 가능한 팝업을 띄우는 함수
- confirm() - true, false 값만 입력받을 수 있습니다.
- prompt() - 값을 직접 입력받을 수 있습니다. input()

mathScore 라는 변수에 수학점수, engScore라는 변수에 영어점수를 입력받고 
그 결과를 avgScore라는 변수에 (mathScore+engScore)/2 
평균값을 저장합니다. 
 */ 

// let startTF = confirm("시작하시겠습니까?");
// if(startTF) {
// 	let mathScore = Number(prompt("수학점수를 입력하세요"));
// 	let engScore = Number(prompt("영어점수를 입력하세요"));
// 	let avgScore = (mathScore + engScore) / 2;
// 	alert("평균은 " + avgScore + "입니다.");
// } else {
// 	alert("종료합니다");
// }


var avgScore = 90;
console.log(`평균 점수는 ${avgScore}점 입니다.`);

console.log(Number("90"));
console.log(Number("90년생")); // NaN(Not a Number)

//Boolean() : false, 0, null, undefined
console.log(Boolean(' '));

/* 4. 연산자 우선순위 - 다른언어와 같습니다
  1) ( )- 감싸준 연산자가 제일 상위에 동작
  2) ** 제곱
  3) -, 음수부호 
  4) * / %(나머지) 
  5) +, - 연산이 동작합니다.
  6) ++, --   a -=  1   a--(후위식) / --a(전위식)
*/
var num = 0;
num++;
num;

var num = 1;
++num;
num;

/* 5. 비교연산자
== (항등연산자, 동등성 비교): 값이 같은지
=== (완전항등연산자, 동일성 비교): 자료형, 값까지 비교
*/
console.log(1 == "1");
console.log(1 === "1");
/* 
6. 논리연산자 &&(and), ||(or), !(not) 
*/

console.log(false && true);
console.log(false || true);
console.log(!true);

// 7. 조건문 : if ~ else if ~ else / switch ~ case 문이 존재합니다. 

if(true){
  console.log("참입니다!");
}

/* 실습1: 아래 자바스크립트가 제공하는 Date 객체를 활용하여
현재 시간이 12시보다 작은 시간이면 AM, 큰 시간이면 PM을 출력하는 시계를 만들어 주세요. */
// let date = new Date() // 현재 날짜와 시간 기준으로 생성
// date = new Date("2025/12/25"); // 입력받은 문자열을 파싱하여 생성 - 한국시간대라서 -9해서 출력됨
// date
// date.getFullYear();
// date.getMonth()+1; // 월이 0부터 시작함 
// date.getDate();
// date.getDay(); // 0(일) ~ 6(토)
// date.getHours(); // 0 ~ 23
// date.getMinutes(); // 0 ~ 59

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let now = date.getDate();
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();

switch(day) {
case (0) : day ="일요일"
break;
case (1) : day ="월요일"
break;
case (2) : day ="화요일"
break;
case (3) : day ="수요일"
break;
case (4) : day ="목요일"
break;
case (5) : day ="금요일"
break;
case (6) : day ="토요일"
break;
}

if(hours > 12) {
  if(hours === 24){
    hours = `AM ${hours-12}`
  } else {
    hours = `PM ${hours-12}`
  }
} else {
  if(hours === 12){
    hours = `PM ${hours}`
  } else{
    hours = `AM ${hours}`
  }
}

let today = String(`현재 ${year}년 ${month}월 ${now}일 ${day} ${hours}시 ${minutes}분 입니다.`);
//alert(today);


/* swtich (명제) {
    case (1) : 조건 만족시 실행문
               break;
    case (2) : 조건 만족시 실행문
               break;
    default: 위의 모든 조건을 만족하지 못할 경우 실행문 
              break; // 마지막이면 안 걸어도 됩니다.
}
*/


/* 실습2: if / switch 문으로 각각 작성해보세요.
1. 짜장면  2. 짬뽕   3. 샐러드 중 하나를 받으면 
menu + 를 드시는군요. 를 출력
1, 2, 3 이 아닌 경우는 '그럼 뭐 드실래요?'를 출력해보세요. */

let menu = "짜장면";
switch (menu){
  case ("짜장면"):
    console.log(`${menu}를 드시는군요.`)
    break;
  case ("짬뽕"):
    console.log(`${menu}를 드시는군요.`)
    break;
  case ("샐러드"):
    console.log(`${menu}를 드시는군요.`)
    break;
  default:
    console.log("그럼 뭐 드실래요?")
}

if(menu === "짜장면"){
  console.log(`${menu}를 드시는군요.`);
} else if(menu === "짬뽕"){
  console.log(`${menu}를 드시는군요.`);
} else if(menu === "샐러드"){
  console.log(`${menu}를 드시는군요.`);
} else {
  console.log("그럼 뭐 드실래요?");
}

if(menu === "짜장면" || menu === "짬뽕" || menu === "샐러드"){
  console.log(`${menu}를 드시는군요.`);
} else {
  console.log("그럼 뭐 드실래요?");
}

// 삼항연산자 - 불표현식 ? 참 : 거짓
(menu === "짜장면" || menu === "짬뽕" || menu === "샐러드") ?
  console.log(`${menu}를 드시는군요.`) :
  console.log("그럼 뭐 드실래요?");

console.log("----------------");
  switch (menu){
  case ("짜장면"):
  case ("짬뽕"):
  case ("샐러드"):
    console.log(`${menu}를 드시는군요.`);
    break;
  default:
    console.log("그럼 뭐 드실래요?");
}

