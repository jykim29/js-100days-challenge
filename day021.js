/*
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

i! ≤ n
제한사항
0 < n ≤ 3,628,800
*/

// 작성 코드
function solution(n) {
  let factorial = 1;
  let result = 0;
  for(let i = 1 ; i <= 12 ; i++ ) {
    if(factorial <= n) {
      factorial *= i;
    }
    else {
      result = i - 2;
      break;
    }
  }
  return result;
}

// 솔루션 코드
function solution(n) {
  let i = 1;
  let factorial = 1;
  while(factorial <= n) {
    i += 1;
    factorial *= i;
  }
  return i - 1;
}