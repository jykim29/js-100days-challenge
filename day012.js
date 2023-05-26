/*
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
*/

// 작성 코드
function solution(my_string) {
  let reverseArr = [];

  for(let i = my_string.split('').length-1 ; i >= 0 ; i--) {
  reverseArr.push(my_string.split('')[i]);
  }
  return reverseArr.join('');
}


// 솔루션 코드 : string을 배열화하고 reverse()를 이용하여 요소를 반전시킨다. 그리고 join()을 이용하여 다시 문자열로 반환한다.
function solution(my_string) {
  return my_string.split('').reverse().join('');
}