// 8. Object(객체) 
// -1. 배열(Array)
//   - 순서대로 값을 저장
//   - 집합 자료형
//   - 순서대로 값을 꺼낼 수 있다. (index로)
//   - 자바스크립트의 배열 index는 0부터 시작
//   - 배열의 길이는 .length 라는 속성으로 확인
var array1 = [1, '가', true, null, undefined, [1, 2, 3]];
array1
console.log(array1[4]);
console.log(typeof array1);
console.log(array1.length);


// 실습: array1이라는 배열을 만들고 apple, banana, carrot 세개의 문자열을 각 index에 넣어보세요.
var array1 = ['apple', 'banana', 'carrot'];
array1
console.log(array1[0]);

// 순서대로 값을 저장하는 자료구조 (선형 자료구조)
// 맨 뒤에 값을 삽입 push(), 삭제 pop()
array1.push("daisy");
console.log(array1);
array1.pop();
console.log(array1);

// 맨 앞(unshift, shift)
array1.unshift("daisy");
console.log(array1);
array1.shift();
console.log(array1);

// 중간 어딘가 값을 추가(splice)
array1.splice(1, 1, "ban");
console.log(array1);

// 맨 뒤에 donut을 추가
// ban~ 를 삭제하고 bee, betray라는 단어 넣기
array1.push("donut");
console.log(array1);
array1.splice(1, 1, 'bee', 'betray');
console.log(array1);

// JS의 sort는 기본적으로 유니코드로 정렬을 합니다. 숫자는 어떻게 정렬해야 할까요?
var array2 = [-565, -3, 556, 1.3, NaN, null, undefined, true, 0];
array2
console.log(Number(NaN));
console.log(typeof(NaN));

console.log(array2.sort(function(a, b){
  return a - b;
}));
// -2. Set(집합) - 중복을 걸러내는 유형. new Set([1,3,4,5,6,6])
var set1 = [1,3,4,5,6,6];
set1 = new Set(set1);
set1
console.log(typeof(set1));
// set1.push(6, 7, 8)
set1.add(7);
console.log(set1);
set1.add(6);
console.log(set1);
set1.delete(6);
console.log(set1);

// -3. Object(일반 객체) - key(기본 자료형)로 value를 부르는 종류의 dictionary 타입
//   - key는 기본자료형만 사용 가능합니다. (object, array, function은 불가)
//   - key는 중복될 수 없습니다. (중복된 key로 삽입하면 나중에 삽입한 값으로 덮어씌워집니다.)
//   - key의 순서는 보장되지 않습니다. (입력한 순서대로 출력되지 않습니다.)
//   - key 중심으로 움직입니다. value로 key를 찾을 수 없습니다.
//   - key의 자료형은 string, number, boolean, null, undefined, symbol이 가능합니다.
//   - value는 모든 자료형이 가능합니다. (기본자료형, 참조자료형 모두 가능)
var dict1 = {"name" : "김경모", "age" : 24, "hobby" : ["음악 듣기", "볼링"]};
//key(문패) : value(값), key : value
console.log(dict1['name']);

// dict2 만들고,, 가: 가위 / 나: 나비, 라: 라디오, 다 : 다람쥐

var dict2 = {"가" : "가위", "나" : "나비", "라" : "라디오", "다" : "다람쥐", 1: 1010, true: {'참': true}};
console.log(dict2[1]);
dict2['가'] = "가랑이";
dict2['마'] = "마술사";
dict2
delete dict2['가'];
dict2

console.log('가' in dict2);
console.log('나' in dict2);

console.log(Object.keys(dict2));
console.log(Object.values(dict2));
console.log(Object.entries(dict2));

/* -4. Map: dictionary와 마찬가지로 키-값으로 쌍을 저장합니다. 키로 값을 꺼내 씁니다.
    - 키로 모든 데이터 타입을 받아줍니다. 
    - 삽입 순서대로 요소를 반복할 수 있습니다.
    - size 속성을 사용해서 요소의 개수를 확인할 수 있습니다.
    - set() get()으로 삽입, 조회를 할 수 있습니다.
    - 뎁스가 복잡하거나, 데이터의 입력 순서, 양이 많을 때 
*/
var map1 = new Map();
map1.set('나', '나비');
map1.set('다', '다람쥐');
map1.set('다', '다리미'); // 이미 있는 key는 value가 바뀝니다.
map1.set(1, 1010); // 들어오는 순서가 보장됩니다. 
console.log(map1.get('나')) // set으로 삽입한 값만 get으로 부를 수 있습니다.
map1.delete('나')
// console.log(Object.entries(map1)); // dict로 우겨넣은 값만 출력됨 
console.log(map1.get('1')); // undefined: key에 원래 자료형 그대로를 보관하기 때문에 문자열로 변환되지 않습니다. 
map1;
console.log(map1.keys());
console.log([...map1.keys()]);
console.log([...map1.values()]);
console.log([...map1.entries()]);

/*
9. 반복문: for/while
-1. for (초기값; 조건; 증감식) {
  반복되어야 할 실행문
}
*/

for (var i = 0; i < 3; i++) {
  console.log(i);
}

// 1~5까지 출력
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// 5~1까지 출력
for (var i = 5; i > 0; i--) {
  console.log(i);
}

// 실습: 5, 3, 1이 출력되도록 변경
for (var i = 5; i >= 1; i -= 2) {
  console.log(i);
}

// 배열의 길이는 .length 라는 속성으로 확인
var arr = ['김경모','신짱구', '신짱아'];
console.log(arr.length);

for (var i = 0; i < arr.length; i++) {
  console.log(`${arr[i]}야, 안녕? `);
}

dict2 
for (var key in dict2) {
  console.log(`key: ${key} - value: ${dict2[key]}`);
}

map1
for (var [key, value] of map1) {
  console.log(`key: ${key} - value: ${value}`);
}
// -2. while문 - 반복할 횟수가 정해지지 않았을 때
// 1. while문 바깥에 조건을 끝낼 실마리를 만들어주기
var i = 1;
while (i < 6) {
  console.log(i);
  i++;
}

// 5~1까지 출력
var i = 5;
while (i > 0) {
  console.log(i);
  i--;
}

// 1,3,5가 출력되도록 변경
var i = 1;
while (i <= 5) {
  console.log(i);
  i+= 2;
}

// 2. 무한반복으로 작성하고 break, continue로 강제로 흐름을 제어
var i = 1;
while (true) {
  console.log(i);
  i++;
  if (i > 5) {
    break;
  }
}

var i = 5;
while (true) {
  console.log(i);
  i--;
  if (i < 1) {
    break;
  }
}

var i = 1;
while (true) {
  console.log(i);
  i+= 2;
  if (i > 5) {
    break;
  }
}

// arr 와 .length 속성을 이용해서 arr의 모든 원소를 출력하는 while문을 만들어보세요.
var i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// forEach (인덱스를 경유하지 않고 바로 값만 출력하는 메서드)


// for ... of : 인덱스를 경유하지 않고 각 원소에 직접 접근



/* 10. 함수 : 코드를 재사용하기 위해 씁니다.
- 1. 기본형
  function 함수명(파라미터1, 파라미터2, 파리미터3 ...) {
      파라미터를 받아서 실행할 실행문
      return 달고 돌아갈 덩어리 하나    
}

- 2. 익명함수: lambda처럼 쓰고 버리는 걸 기본으로 합니다.
- var 함수명 = function(파라미터1, 파라미터2, 파리미터3 ...) {
      파라미터를 받아서 실행할 실행문
      return 달고 돌아갈 덩어리 하나
}

-3. 화살표함수: () => { 동작 }
*/

var arr = ['짱구', '짱아', '훈이']
arr

function hello(){
  console.log('안녕하세요!');
}

hello();

function hello1(이름, 나이) {
  console.log(`${이름}님, 안녕하세요. ${나이}살이시군요.`);
}

hello1('철수', 25);

function hello2(이름, 나이) {
  return `${이름}님, 안녕하세요. ${나이}살이시군요.`;
}

var hi = hello2();
var hello = hello1();

console.log(hello);
console.log(hi);

function hello3(){
  return `hello3가 종료될 때 달고 돌아온 값`;
}

var hi2 = hello3();
console.log(hi2);

// 1, 3, 5를 출력하는 반복문 oddNums() 호출
function oddNums(){
  for (var i = 1; i < 6; i+=2) {
    console.log(i);
  }
}
oddNums();

// 1~5까지 홀수 리턴
function setOddNums(){
  var oddNums = [];

  for (var i = 1; i < 6; i += 2) {
    oddNums.push(i);
  }

  return oddNums;
}

var result = setOddNums();
console.log(result); // [1, 3, 5]

// start, end 홀수 출력
function getOddNums(start=1, end=10){
  for (var i = start; i <= end; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
getOddNums(2, 16);

// start, end 홀수 리턴
function setOddNumsFinal(start=1, end=5){
  var oddNums = [];
  for (var i = start; i <= end; i++) {
    if (i % 2 === 1) {
      oddNums.push(i);
    }
  }
  return oddNums;
}
var arr = setOddNumsFinal(2, 10);
console.log(arr);

var test = (a) => {
  console.log(`${a} 테스트`);
}
test('Hello');

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

var ordered = function (a, b) {
  return a - b;
}


// -4. 함수의 스코프
//     1. 스코프 : 변수나 함수가 어디까지 접근해서 사용할 수 있는지. 
//     2. 호이스팅(Hoisting): 변수나 함수의 선언이 스코프의 최상단에서 먼저 읽은 것처럼 동작하는 것. 
//         - 호이스팅은 선언만 끌어올려지고, 값은 끌어올려지지 않습니다.           
//     3. TDZ(Temporal Dead Zone): 변수가 선언되기 전까지 접근할 수 없는 구간
// | 키워드 | 스코프 범위   | 재선언 | 재할당 | 호이스팅     | 특징 요약                           |
// |--------|----------------|--------|--------|--------------|----------------------------------|
// | `var`  | 함수 스코프     | O      | O      | O            | 블록 무시, 중복 선언 가능        |
// | `let`  | 블록 스코프     | X      | O      | O (TDZ)      | 블록 안에서만 유효, 중복 선언 불가|
// | `const`| 블록 스코프     | X      | X      | O (TDZ)      | 상수 선언, 객체 내부 변경 가능    |

//         변수를 선언하는 방법 : 
//     1) var : 함수 단위(스코프)에서 사용이 됨.(블록스코프는 무시)
//                 변수를 새로 만들고 값을 새로 쓸 수 있음.
//     2) let: 블록 단위에서 사용이 됨. { } 
//                 같은 블록 안에서 변수를 중복해 만들 수는 없지만 값은 바꿀 수 있음.
//     3) const : 블록 단위에서 사용이 됨. { } 
//                 한번 값을 넣으면 바꿀 수 없음. 그러나 객체 내부의 속성 등은 수정 가능


// scope : 변수에 접근할 수 있는 위치를 제어 
var x = '가'; // 함수 범위
let y = '나'; // 블록 범위
const z = '다'; // 블록 범위, 상수 (값 변경 불가)

function variableExample() {
    var x = 10; // 함수 범위
    let y = 20; // 블록 범위
    const z = 30; // 블록 범위, 상수 (값 변경 불가)

    if (true) {
        var x = 40; // 같은 함수 내에서 var 변수는 덮어씌워짐
        let y = 50; // 블록 내에서만 유효
        const z = 60; // 블록 내에서만 유효

        console.log('if문 내부:', x, y, z); // 40, 50, 60
    }

    console.log('if문 외부:', x, y, z); // 40, 20, 30 (var는 재할당되었지만, let과 const는 블록 범위를 가짐)
}
variableExample();


/* 11.  클래스: 같은 형식으로 사용하기 위한 자료형을 미리 만들어놓고 계속 객체를 찍어서 재사용 
 - 실제로는 function 으로 만들어집니다.
 - sugar coated 문법: 다른 언어와 호환되다 보니까 class 클래스명으로 만들면 내부적으로 코드를 변환해서 동작시켜줍니다. 
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
    console.log('안녕하세요!' + this.name)
  }

var 김경모 = new Person('김경모', 24);
var 신짱구 = new Person('신짱구', 5);

console.log(김경모.age);
김경모.greet();
console.log(신짱구.name);
신짱구.greet();

// static: 클래스를 통해 접근하는 클래스 변수, 클래스 메서드
// 인스턴스를 통해 접근하는 인스턴스 변수(this로 전달), 인스턴스 메서드
// 은닉성 구현: #을 붙인 private 변수를 사용하여 외부에서 접근하지 못하도록 숨길 수 있습니다.

class Person2 {
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메서드
  greet() {
    console.log('Person2에서 - 안녕하세요!' + this.name)
  }
}

var 김경모 = new Person2('김경모', 24);
console.log(김경모.age);
김경모.greet();

// Attacker
class Fighter extends Person2 {
  fighting() {
    console.log(`${this.name}이 싸웁니다.`)
  }
}

var Attacker = new Fighter('공격자', 24);
console.log(Attacker.name);
Attacker.greet();
Attacker.fighting();

// Student
class Student extends Person2 {
  study() {
    console.log(`${this.name}이 공부합니다.`)
  }
}

var Student1 = new Student('학생1', 20);
Student1.greet();
Student1.study();

// OnlineFighter
class OnlineFighter extends Fighter {
  keyboardFighting() {
    console.log(`${this.name}이 숨어서 싸웁니다.`)
  }
}

var 온라인공격자 = new OnlineFighter('온라인공격자', 24);
온라인공격자.greet();
온라인공격자.fighting();
온라인공격자.keyboardFighting();

// BankAccount 라는 은행 계좌를 관리하기 위한 class를 만들어보겠습니다.
// bankName, name, accountNumber, balance 


// BankAccount 라는 은행 계좌를 관리하기 위한 class를 만들어보겠습니다.
// bankName, name, accountNumber, balance 
// #을 붙이면 private 변수
class BankAccount {

  #balance;

  // 클래스 변수: static 이라는 키워드를 앞에 적어둔 클래스 변수로 클래스에서 관리하기 위한 속성을 저장합니다. 
  static bankName = '우리';
  static accountNo = 0; // 해당 은행 총 계좌 수

  // 클래스 메서드: static 이라는 키워드를 앞에 적어서 클래스에서 필요한 동작을 만듭니다.
  static hello() {
    console.log(`어서오세요. ${this.bankName}은행입니다~ 개설 이래 현재까지 총 ${this.accountNo}개의 계좌가 개설되었습니다.`);
  }

  // 인스턴스 변수: this 라는 키워드로 각 새로 만들어진 고객 인스턴스만의 고유한 값들을 전달  
  constructor(name, accountNumber, balance) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.#balance = balance;
    this.cusAccountNo = ++BankAccount.accountNo; // 그 때의 계좌수
  }

  // 인스턴스 메서드: deposit: 입금  - 기존 balance에 새로 들어온 금액을 추가
  set deposit(amount=0) { // setter
    this.#balance += amount;
  } 

  // 인스턴스 메서드: withdraw: 출금 - 기존 balace에 새로 빠져나간 금액을 제외 
  set withdraw(amount=0) { // setter
    this.#balance -= amount;
  } 

  get checkAmount() { // getter
    console.log(this.#balance);
  }
}

var 아이유 = new BankAccount('IU', '123-45', 30000);
아이유.deposit = 40000;
아이유.checkAmount;
아이유
아이유.withdraw = 4000;
아이유
console.log(BankAccount.bankName);
아이유.checkAmount;
아이유

// BankAccount 상속 InsAccount
// 클래스 변수를 bankName "동양"으로 바꿔서 재정의(override)
// 생성자에 kind라는 인스턴스 변수 추가 변액(default) / 정액 등 보험의 종류 추가
class InsAccount extends BankAccount {
  static bankName = '동양';
  static accountNo = 0;

  constructor(name, accountNumber, balance, kind='변액') {
    super(name, accountNumber, balance);
    this.kind = kind;
    this.cusAccountNo = ++InsAccount.accountNo; // 그 때의 계좌수
  }

  set changeKind(newKind) {
    this.kind = newKind;
  }

  get checkKind() {
    console.log(this.kind);
  }
}

InsAccount.hello();
var 사용자 = new InsAccount('사용자', '123-66', 30000, '정액');
사용자
InsAccount.hello();
사용자.deposit = 20000;
사용자.checkAmount;
사용자.withdraw = 5000;
사용자.checkAmount
사용자.changeKind = '차액';
사용자.checkKind;
console.log(InsAccount.bankName);