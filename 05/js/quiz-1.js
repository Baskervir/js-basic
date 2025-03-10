var num1 = parseInt(prompt("첫 번째 숫자 입력 : "));
var num2 = parseInt(prompt("두 번째 숫자 입력 : "));
var result = sumMulti(num1, num2);

function sumMulti(a, b) {
    if (a == b) {
        result = a * b;
        document.write("두 수의 값이 같아서 곱합니다. 값은 : " + result);
    } else {
        result = a + b;
        document.write("두 수의 값이 달라서 더합니다. 값은 :" + result);
    }
}