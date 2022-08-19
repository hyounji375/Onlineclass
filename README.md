# youtube_class

0711 

코딩앙마 JS 기초 강좌

1. 변수
2. 자료형
3. alert, prompt, confirm
  - prompt(a,b) => a는 메시지창에 보이는 내용. ex) 이름을 입력해주세요.
                   b는 입력칸에 보이는 default값. input 태그에서 placeholder과 같은 느낌. ex) JiHyeon
  - alert는 확인 버튼밖에 없지만 comfirm은 취소, 확인 이렇게 버튼이 2개. 그래서 취소는 false를, 확인은 true를 반환한다.
4. 형변환
  - Number(null) = 0 , Number(undefined) = NaN
  - Boolean(0) = false, Boolean("0") = true
     Boolean('') = false, Boolean(' ') = true
5. 연산자
  - let num = 10;
    num = num + 5; === num += 5; => 둘 다 console.log(num); = 15
  - let num = 10;
    let result = num++; => console.log(result); = 10. 증가하기 전의 값을 반환
    let result = ++num; => console.log(result); = 11. 증가한 값 반환
 
--------------------------------------------------------------------------------------------------------------------------

0712

코딩앙마 JS 기초 강좌

6. 비교 연산자, 조건문
7. 논리 연산자
  - &&가 ||보다 우선순위가 더 높다.
  - 남자이고 이름이 Mike이거나 성인이면 통과 => if(성별===남자 && (이름===Mike || 나이>19)) 이렇게 괄호로 묶어서 해줘야 함.
  - &&에서 false가 나오면 그 즉시 평가를 끝내고 마찬가지로 ||에서도 true가 나오면 그 뒤의 조건들은 평가하지 않음.
8. 반복문
  - continue는 코드 실행을 멈추고 다음 반복으로 넘어감.
    ex) for(i = 0; i < 10; i++){
        if(i%2){
          continue;
        }
        console.log(i);
    };
    => 나머지값이 0이면 false니까 if문 실행을 안 하고 console.log(i)가 찍힘. 
       나머지값이 1이면 true니까 continue를 만나서 코드 실행을 멈추고(console.log 실행 안 함) 다시 반복문을 실행.
       그래서 짝수값만 콘솔에 찍힘.
9. switch문
  - case 2개가 조건은 다르지만 같은 값을 출력할 때는 아래와 같이 써줄 수 있다.
    case 멜론 :
    case 수박 : 
    실행할 코드;
    break;
10. 함수

--------------------------------------------------------------------------------------------------------------------------

0713

코딩앙마 JS 기초 강좌

11. 함수 표현식, 화살표 함수
  - 함수 선언문은 어디서든 호출이 가능. 함수 실행문이 함수 선언문보다 먼저 나와도 호출된다.
    함수 표현식은 함수를 만난 이후에 호출 가능.
12. 객체
  - 추가하기 : 객체이름.추가할 키 = "추가할 값";
  - 삭제하기 : delete 객체이름.삭제할 키;
  - 프로퍼티의 유무 확인 : "키" in 객체이름 => 있으면 true, 없으면 false.
  - for in문 
    const apple = {
      name : "apple",
      color : "red",
    };
    for(x in apple){
      console.log(apple[x])
    }
    => "apple", "red"가 콘솔로그에 찍힌다.
       여기서 x는 apple 객체의 키를 의미하며 x말고 자유롭게 적어도 된다.
13. method, this
  - method는 객체에 프로퍼티로 할당된 함수를 뜻한다.
  - 화살표 함수는 this를 갖지 않는다. 만약 화살표 함수에서 this를 사용하면 함수 내부가 아닌 외부에서 값을 가져와서 전역 객체를 가리킨다.
    * 브라우저 환경에서의 전역 객체는 window, NodeJS 환경에서의 전역 객체는 global.
14. 배열
  - 배열명.unshift(추가할 값); => 배열 앞에 데이터 추가
  - 배열명.shift(); => 배열 앞의 데이터 삭제
  - for of문
    let days = ["월", "화", "수"];
    
    for(i = 0; i < days.length; i++){
      console.log(days[i]);
    }
    이 반복문과 아래의 반복문은 같은 값을 출력한다.
    for(let x of days){
      console.log(x);
    }
    여기서 x는 배열의 요소를 뜻하며 자유롭게 적어도 된다.

--------------------------------------------------------------------------------------------------------------------------

0714

코딩앙마 JS 중급 강좌

1.변수, 호이스팅, TDZ
  - TDZ(Temporal Dead Zone)
    ////////////////////
    const name = banana;
    console.log(name);
    => 빗금이 쳐져 있는 곳에 console.log(name);을 하면 변수를 선언하기 전이므로 에러가 뜬다.
       저 빗금 부분을 TDZ라고 한다.
       
2. 생성자 함수
  - 여러 객체를 만들 때 편리. 수업 시간에서 class 상속할 때 배웠던 것 같다.
  - function Item(title, price){
    this.title = title;
    this.price = price;
   };
   
   const Item1 = new Item("인형", 3000);
   const Item2 = new Item("가방", 5000);

3. 객체 메소드, 계산된 프로퍼티
  - 계산된 프로퍼티 : 변수를 객체의 키로 사용하는 것. 계산식도 가능.
  - 객체 복제 : Object.assign({}, 복사할 객체명);
    => {} 얘는 초기값. 비어 있는 상태에 복사할 객체가 들어가는 것.
       {name : "apple"}처럼 기존값을 가지고 있으면 여기에 복사된 데이터가 추가됨. 만약 키가 같다면 값이 덮어씌워진다.
       ,로 여러 개를 복사해서 합칠 수 있다. 
       기존 객체와 복사된 객체는 다른 메모리 주소를 가지고 있으므로 서로에게 영향을 끼치지 않음.
  - 키 배열 반환 : Object.keys(객체명);
    => 객체의 키들을 배열로 반환.
  - 값 배열 반환 : Object.values(객체명);
    => 객체의 값들을 배열로 반환.
  - 키와 값 배열 반환 : Object.entries(객체명);
    => 배열 안에 배열로 키와 값을 쌍으로 묶어서 각각 반환.
       [["name", "apple"], ["color", "red"]]
  - 키와 값의 배열을 객체로 반환 : Object.fromEntries(배열명);
    => Object.entries(객체명);의 반대

--------------------------------------------------------------------------------------------------------------------------

0802 

코딩앙마 JS 중급 강좌

4. 심볼형
  - const a = symbol();
    const b = symbol();
    이렇게 했을 경우 a === b는 false, a == b도 false가 나온다. 값이 아예 다른 것. 
    이름이 같다 해도 다른 존재다. 
  - symbol()에서 괄호 안에 심볼에 대한 설명을 문자열로 넣어줄 수 있다. 
  - const a = symbol(id);
    const user = {name : "mike", age : 30, [id : "myid""]}
    Object.keys(객체명);, Object.values, Object.entries(객체명);을 했을 때 변수 id로 넣은 키는 콘솔로그에 찍히지 않는다. 
    숨겨진 심볼을 보려면 
     첫째, Object.getOwnPropertySymbols(user); => 숨겨진 심볼만 보여준다.      
     둘째, Reflect.ownkeys(user); => 객체 플러스 숨겨진 심볼까지 다 보여준다. 
  - a.descrption; => id.  
    descrption을 이용해서 심볼의 이름을 알 수 있다. 
  - 심볼을 이용하면 원본 데이터를 훼손하지 않고 속성을 추가할 수 있다. 
  - 전역 심볼 symbol.for()
      : 하나의 심볼만 보장 받는다. 
        심볼 하나를 생성하고 키를 통해 같은 심볼을 공유하는 개념.
        const a = symbol.for();
        const b = symbol.for(); 
        => a === b는 true
      : const a = symbol.for(id);
        symbol.keyfor(a) => id
        즉, keyfor을 이용해서 심볼 만들 때 붙여줬던 이름을 알 수 있다. 

--------------------------------------------------------------------------------------------------------------------------

0818 

코딩앙마 JS 중급 강좌

5. 숫자, 수학 method
  - toString() : 10진수의 숫자를 2진수 또는 16진수로 변환.
    
    let num1 = 10;

    num1.toString(2);
    console.log(num1.toString(2)); //1010

    let num2 = 255;
    num2.toString(16);
    console.log(num2.toString(16)); //ff

  - 수학 메소드
    1) Math.PI : 파이, 즉 원주율을 나타낸다.
                 Math.PI;
                 console.log(Math.PI); //3.141592653589793
    2) Math.ceil() : 소수점과 상관없이 올림
    3) Math.floor() : 소수점과 상관없이 내림
    4) Math.round() : 반올림
    5) 변수.toFixed() : () 안의 숫자, 예를 들어 2가 있으면 반올림을 해서 소수점 둘째 자리까지 표현
                        () 안에 0이 들어가면 소수점 없이 정수 부분만 표현, 둘째 소수점까지만 있는데 3이 들어가면 뒷부분은 0으로 표현(1.23 -> 1.230처럼)
                        반환값이 문자열이다.
    6) isNaN() : ()안의 변수가 NaN인지 판단. 변수가 숫자면 false, 숫자가 아니면 true 반환.
    7) parseInt() : 문자열을 숫자로 변환.
                    Number()와 다른 점은 문자가 섞여 있어도 숫자로 변환한다. 예를 들어 변수가 10px이면 10을 숫자로 변환해준다. 하지만 변수의 첫 글자가 숫자가 아닌 경우는 NaN을 반환한다.
                    두 번째 인수를 받아서 2진수나 16진수를 10진수로 변환이 가능하다. parseInt("f3", 16) -> 243
    8) parseFloat() : parseInt와 동일하나 소수점까지 반환
    9) Math.random() : 0~1 사이의 무작위 숫자 생성
                       1 ~ n 사이에서 임의의 숫자 뽑기 : Math.floor(Math.random()*n)+1
   10) Math.max() / Math.min() : 괄호 안의 인수 중에서 최대값 / 최소값 구하기
   11) Math.abs() : 괄호 안 인수의 절대값 구하기
   12) Math.pow(n, m) : n의 m승의 값
   13) Math.sqrt() : 제곱근 구하기
                   
