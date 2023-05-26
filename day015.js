/*
가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

제한사항
0 < rsp의 길이 ≤ 100
rsp와 길이가 같은 문자열을 return 합니다.
rsp는 숫자 0, 2, 5로 이루어져 있습니다.
*/

// 작성 코드
function solution(rsp) {
  let arr = rsp.split('');
  let result = [];
  for(let i = 0 ; i < arr.length ; i++) {
  if (arr[i] == 2) { result[i] = 0 }
  else if (arr[i] == 0) { result[i] = 5 }
  else { result[i] = 2 }
  }
  return result.join('');
}

// 솔루션  코드
function solution(rsp) {
  let answer = {
    2 : 0,
    0 : 5,
    5 : 2,
  }
  return [...rsp].map(v => answer[v]).join('');
}
/* 먼저 가위(2) 바위(0) 보(5)가 각각 이기는 경우를 객체로 만들어 저장한다.
  그리고 rsp를 배열로 변환한 다음, map()메서드를 이용하여
  rsp의 요소 v가 이기는 경우를 알기 위해 answer 객체에 접근하여 answer[v]를 반환한다.
  반환된 새로운 배열을 join('')을 이용하여 string으로 바꾼다.   */