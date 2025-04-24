//1. 변수
let age = 30;
console.log(age)

let myName = "오스템";
let myLocation = "목동"

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`
console.log(introduceText)

let ag = 10;

let age2 = typeof (ag);
age2 = String(ag)
console.log(typeof (age2))


let str2 = "100개"
console.log(str2)
let str = parseInt(str2)
console.log(str)

let num8 = 10;
console.log(++num8)
console.log(--num8)

let val1;
let val2; // = 20;
let var4 = val1 ?? val2;
console.log(var4)


let animal = "cat2"
switch (animal) {
    case "cat": {
        console.log("고양이")
        break;
    }
    case "dog": {
        console.log("강아지")
        break;
    }
    default: {
        console.log("해당 사항 없습니다")
    }
}


function greeting(a, b) {
    console.log(
        "안녕하세욧 !"
    )

    let width = a;
    let height = b;
    let area = width * height;
    console.log(area)
}

greeting(10, 20);


function funA() {
    console.log("funCA")
}

let varA = funA;
console.log(varA)

let varB = function () {
    console.log("funB")
}

varB();