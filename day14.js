/*
두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ s1, s2의 길이 ≤ 100
1 ≤ s1, s2의 원소의 길이 ≤ 10
s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
s1과 s2는 각각 중복된 원소를 갖지 않습니다.
*/

// 작성 코드
function solution(s1, s2) {
  let result = 0;
  
  for(let i = 0 ; i < s1.length ; i++) {
    for(let j = 0 ; j < s2.length ; j++) {
      if(s1[i] === s2[j]) { result++ }
    }
  }
      return result;
  }

// 솔루션 코드
function solution(s1, s2) {
  return s1.filter(v => s2.includes(v)).length;
  }
/* filter() 메서드를 이용하여 s1의 요소 v가 s2.includes(v)인지 비교해서 true인 요소만 반환한다.
  그리고 새로 반환된 요소의 .length를 입력하여 개수를 반환한다. */