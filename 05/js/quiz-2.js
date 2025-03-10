var num1 = parseInt(prompt("비교할 첫 번째 숫자: "));
var num2 = parseInt(prompt("비교할 두 번재 숫자: "));
var result = compareNum(num1, num2);

function compareNum(a, b) {
    (a > b) ? alert(a + "(이)가 " + b + "보다 큽니다.") : alert(b + "(이)가 " + a + "보다 큽니다.");
}