/*
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
3 ≤ numbers의 길이 ≤ 20
direction은 "left" 와 "right" 둘 중 하나입니다.
*/

// 작성 코드
function solution(numbers, direction) {
  if(direction == 'right') {
    return ([numbers.pop(), ...numbers]);
  }
  else if(direction == 'left') {
    let first = numbers.shift();
    return ([...numbers, first]);
  }
}

// 솔루션 코드 1  -- shift와 unshift 메서드 사용
function solution(numbers, direction) {
  if(direction == 'right') {
    numbers.unshift(numbers.pop());
  }
  else numbers.push(numbers.shift());

  return numbers;
}

// 솔루션 코드 2  -- slice 메서드의 추가
function solution(numbers, direction) {
  if(direction == 'right') {
    numbers = [numbers.pop(), ...numbers];
  }
  else [numbers.slice(1), ...numbers.shift()];

  return numbers;
}

/*  pop() : 마지막 요소 제거 후 그 요소를 반환, 기존 배열은 변한다.
    shift() : 첫번째 요소 제거 후 그 요소 반환, 기존 배열은 변한다.
    unshift('요소') : 맨 앞에 '요소' 추가 후 새로운 배열의 길이 반환, 기존 배열은 변한다.
    slice(시작, 끝) : 배열의 '시작'인덱스 부터 '끝 직전' 인덱스까지를 잘라내어 새로운 배열로 반환
                      기존 배열은 변하지 않는다.
*/