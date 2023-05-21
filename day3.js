/* 
각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.
*/

function solution(angle) {
  var answer = 0;
      if (angle < 90) return 1;
      else if (angle === 90) return 2;
      else if (angle < 180) return 3;
      else return 4;
}

/* filter를 이용한 솔루션 : angle값과 배열[0, 90, 91, 180] 각 요소의 값을 비교하여 true인 요소들만 필터링 후 새로 만들어진 배열의 length를 계산하여 정답 도출
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}
*/