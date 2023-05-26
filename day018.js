/*
머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ order ≤ 1,000,000
*/

// 작성 코드
function solution(order) {
  return  Array.from(order.toString()).filter(x => x == 3 || x == 6 || x == 9).length;
}

// 솔루션 코드 1  -- match(정규식)을 이용
function solution(order) {
  let value = order.toString().match(/[369]/g) ?? [];
  return value.length;
}

/*  String 메서드인 match(정규식)을 이용하여 해당 스트링에서 match되는 문자를 찾아 새롭게 배열로 반환한다.
    // 사이에 정규식을 넣으며 [369]는 3 또는 6 또는 9가 match될 경우를 말한다.
    그리고 //뒤에 g(global)을 넣어 여러개를 찾을 수 있도록 한다.
    ??는 널 병합 연산자로 만약 'abc' ?? 0 일 경우 'abc'가 null일 경우 ?? 오른쪽 0이 되며, 'abc'가 null이 아닐 경우 
    ?? 왼쪽인 그대로 'abc'가 됩니다.
*/


// 솔루션 코드 1  -- set을 이용하여 filter를 간소화
function solution(order) {
  let mySet = new Set('369');
  return  order.toString().split('').filter(v => mySet.has(v)).length;
}

/*  Set이라는 객체를 새로 만들어 이곳에 찾을 문자를 저장한다.
    Set 객체 선언 시 앞에 new 연산자를 붙여 객체 타입으로 선언하게 한다.
    만약 Set('369')라면 Set 객체는 {0: 3 , 1: 6 , 2: 9} 라는 프로퍼티가 저장된다.
    Set안에 존재 유무를 확인하는 has 메서드를 이용하여 각 배열의 요소가 존재하는지 판단한 뒤
    filter()메서드를 이용하여 존재하는 요소들을 새롭게 반환하고 그 길이를 리턴한다.
*/