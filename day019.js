/*
문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string ≤ 110
my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
대문자와 소문자를 구분합니다.
공백(" ")도 하나의 문자로 구분합니다.
중복된 문자 중 가장 앞에 있는 문자를 남깁니다.
*/

// 작성 코드 1  -- includes()와 map() 사용
function solution(my_string) {
  let result = [];
  [...my_string].map(v => result.includes(v) == 0 ? result.push(v) : '' );
  return result.join('');
}

// 작성 코드 2  -- Set과 Map() 사용
function solution(my_string) {
  let mySet = new Set();
  
  [...my_string].map(v => mySet.add(v));
  return [...mySet].join('');
}

// 솔루션 코드  -- Set만 사용
function solution(my_string) {

  return [...new Set(my_string)].join('');
}

/*  Set 객체를 사용하여 my_string을 Set 안에 넣는다.
    여기서 객체 Set의 특성은 문자열 순서를 보장받으며 문자열 속에 중복된 문자는 저장하지 않는다.
    1. Set(my_string)을 선언하여 my_string에 중복된 문자를 제외하고 Set 객체에 저장한다.
    2. Set(my_string)은 객체형이므로 [...]을 붙여서 배열로 변환한다.
    3. join('')을 사용하여 문자열로 변환한다.
      my_string에 'people'을 넣었을 경우 'peol'만 남게 된다.
*/