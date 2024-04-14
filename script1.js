let obj = {
    name: 'sv',
    someFoo: function (param1, param2, param3) {
        console.log(obj.someFoo.name);
    },
    someFoo2: () => {
        console.log(obj.someFoo2.name);
    },
    someFoo3() {
        console.log(obj.someFoo3.name);         // = стр. 4
    }
}

obj.someFoo(1,2,3)


const someFoo = function() {
    console.log(someFoo.name);
}

const someArrow = () => {
    console.log(someArrow.name);
}

function someFoo3 () {
    console.log(someFoo3.name);
}

// function sum1(num1, num2, num3) {
//     console.log(sum1.name);
//     return num1 + num2 + num3
// }



function sum2() {
    console.log(sum2.arguments);

    const paramIndexLength = arguments.length - 1 // 8
    // console.log(paramIndexLength);
    let result = 0 // 0
    for (let i = 0; i <= paramIndexLength; i++) {
        const el = arguments[i]
        result += el
    }
    return result
  
}

// let result1 = sum1(1,2,3)
// console.log(result1);

let result2 = sum2(1,2,3,4,5,6,7,8,9)
console.log(result2);

const str = 'f';
const arr = ['q', 'w', 'e']
console.log (arr[1]);
console.log(arr.toString());
const myName = 'sveta';
console.log(myName.length);

let index = 1 
// console.log(myName[1])
console.log(myName[index]);
console.log(myName.toUpperCase());
console.log(myName)
const upperCaseMyName = myName.toUpperCase()
console.log(upperCaseMyName)


function formatUserName(str){
    const lowerCase = str.toLowerCase().slice(1)
    const firstLetter = str[0].toUpperCase()
    console.log(lowerCase);
    console.log(firstLetter);
    return firstLetter + lowerCase
}

console.log(formatUserName('djdddjAAAFFDHJH'))