let varC = (value) => {
    console.log(value)
    return value + 1;
    return 1;
}

console.log(varC(10));



// console.log(person)

// let name = person.name;
// console.log(name)

// let age = person["age"]
// console.log(age)

// person.job = "Fe devlopt"
// person["favoriteFood"] = "떡볶이"


// console.log(person.job)

// console.log(person.favoriteFood)

// delete person.job;
// console.log(person)

// let result = "name" in person;
// console.log(result)




//상수 객체
const animal = {
    type: "고양이"
    , name: "나비"
    , color: "black"
}

animal.age = 2;
animal.name = "까망이"
delete animal.color;

//animal = "123"
console.log(animal);

const person2 = {
    name: "이정환",
    //a메서드 선언
    sayHi() {
        console.log("안녕")
    }
}

person2.sayHi()
person2["sayHi"]();



let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
    job: "FE DEVLOPER",
    10: 20,
    "Like cat": true
}


// let { name, age, hobby } = person

//console.log(name, age, hobby)


let { name, age, hobby, extra = "hello" } = person;
console.log(name, age, hobby, extra)

const func = ({ name, age, hobby, extra }) => {
    console.log(name, age, hobby, extra)

}

func(person)

let arr = [1, 2, 3]
let arr2 = [4, ...arr, 5, 6]

console.log(arr2)

let obj1 = {
    a: 1,
    b: 2
}

let obj2 = {
    ...obj1,
    c: 3,
    d: 4
};


console.log(obj2)

let keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i])
}
//객체 순환 for of
for (let key of keys) {
    console.log("key > ", key)
}


keys = Object.values(person)

for (let key of keys) {
    console.log("key > ", key)
}
//리스트 순환 for in
for (let key in person) {
    const value = person[key]
    console.log(key)
}

let arr5 = [1, 2, 3, 4, 5]
let slice = arr5.slice(2, 5)
console.log(slice)
let sliced3 = arr5.slice(-3)
console.log(sliced3)