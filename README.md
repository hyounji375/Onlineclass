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

