/*
문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < before의 길이 == after의 길이 < 1,000
before와 after는 모두 소문자로 이루어져 있습니다.
*/

// 작성 코드  -- sort()를 통한 문자 종류 일치 비교
function solution(before, after) {
  return [...before].sort().join('') == [...after].sort().join('') ? 1 : 0;
}

// 솔루션 코드 -- 작성 코드와 일치
function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('') ? 1 : 0;
}

/*  before의 순서를 바꾸어 after를 만들 수 있다는 말은 곧, before와 after의 문자 구성이 일치한다는 뜻이므로
    before과 after를 배열화 시킨다음 sort()를 이용하여 정렬을 시킨다.
    그리고 3항 연산자를 이용하여 서로 일치하면 1을 반환하고 불일치하면 0을 반환한다.
*/