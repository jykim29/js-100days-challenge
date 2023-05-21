/*
정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ num_list의 길이 ≤ 100
0 ≤ num_list의 원소 ≤ 1,000
*/

// 작성 코드
function solution(num_list) {
  even = num_list.filter(x => x % 2 === 0).length;
  odd = num_list.filter(x => x % 2 === 1).length;
  return [even, odd];
}

// 솔루션 코드
// for ~ of 문 사용으로 짝수 나머지 0, 홀수 나머지 1을 인덱스로 활용
function solution(num_list) {
  var answer = [0, 0];
  for(item of num_list) {
    answer[item % 2] += 1;
  }
  return answer;
}

