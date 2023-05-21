// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
    var answer = 0;
    return ~~(num1 / num2);
}
solution(10, 4);
/*
 비트연산자 ~  : 양수를 음수로, 음수를 양수로 만든다.  ~ n = -(n+1) 
 ~~ 연산자 : 그대로 양수, 음수 유지. 
 key point : 비트연산자 ~를 사용하면 소수자리가 제거되는 원리를 이용.
 */


//  정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
function solution(num1, num2) {
    var answer = 0;
    return (num1 === num2 ? 1 : -1);
}
solution(10, 4);
// 3항 연산자  ( 조건 ? 참 일때 : 거짓 일때 )