/*
우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

제한사항
age는 자연수입니다.
age ≤ 1,000
PROGRAMMERS-962 행성은 알파벳 소문자만 사용합니다.
*/

// 작성 코드
function solution(age) {
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  let ageArr = String(age).split('');
  let newAge = '';

  for(let i = 0; i < ageArr.length ; i++) {
      newAge += alphabet[ageArr[i]];
  }
  return newAge;
}

// 솔루션 코드  -- map() 메서드를 이용
function solution(age) {
  let chr = 'abcdefghij';

  return Array.from(age.toString()).map(v => chr[v]).join('');
}

/*  작동 알고리즘 (age = 23일 경우)
    1. 숫자형 age는 바로 배열로 변환할 수 없다.
    2. 숫자형 age를 스트링으로 변환 : age.toString()
    3. 문자형 age의 각 문자를 배열로 변환 : Array.from( age.toString() )
      * Array()로 하면 ['23']이 되버리니 Array.from() 사용
    4. 이제 배열로 바꾸었으니 map()을 이용하여 조건에 맞게 새로운 배열 생성
      * map(v => chr[v]) : 배열의 각 요소 v를 chr의 인덱스에 넣고 그 인덱스에 있는 문자를 뽑아온다.
      * 배열만 인덱스가 존재하는 것이 아니라, 스트링도 인덱스가 존재한다! -- 'abcde'[1] = 'b'
    5. 각 요소가 문자를 뽑아온 새롭게 만든 배열에 join('')을 사용하여 다시 스트링으로 변환 후 리턴
*/