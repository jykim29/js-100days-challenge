/*
문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
letter은 길이가 1인 영문자입니다.
my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
대문자와 소문자를 구분합니다.
*/

// 작성 코드
function solution(my_string, letter) {
  return my_string.replaceAll(letter, '');
}

// 솔루션 코드
function solution(my_string, letter) {
  let reg = new RegExp(letter, 'g');
  return my_string.replace(reg, '');
}

/* RegExp 생성자 함수를 이용하여 정규식을 만든다음, 
  replace() 이라는 string 메서드를 통해 정규식에 해당하는 문자를 제거했다.
  원래 replaceAll()을 이용하여 string 내의 모든 letter를 제거할 수 있지만
  relace()는 string내의 여러 letter가 포함되어 있어도 단 한번만 치환이 이루어지므로
  RegExp 생성자에서 두 번째 인자를 'g' 전역 플래그로 두어 전부 치환될 수 있도록 하였다.

  string.replace('대상', '대체문자열')     -- 한 번만 치환
  string.replaceAll('대상', '대체문자열')  -- 전부 다 치환
  */