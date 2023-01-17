// типы данных
/*
1.number
2.string
3.null
4.undefined
5.object
6. boolean

7.symbol
8.BigInt
*/
// 1. 12
// 2. "Hello world"
// 3. null
// 4. undefined
// 5. {
//     hello: "Привет"
//     bye: "пока"
// }
// 6.true or false


// let number = 1;
// let str = "String";
// let nulling = null;
// let undef = undefined;
// let obj = {
//     a: 34,
//     b: true,
// };
// let bool = false;
// let world = "hello world";

let arr = [1, 2, 3, 4, true, false, {
    someNewArr: [[{ l: { d:"Hello world", f:"asd"}}]]
}];
console.log(arr[6].someNewArr[0] [0].l.d)

// let w = arr[6].someNewArr[0] [0].l.d[6]
// let o = arr[6].someNewArr[0] [0].l.d[7]
// let r = arr[6].someNewArr[0] [0].l.d[8]
// let l = arr[6].someNewArr[0] [0].l.d[9]
// let d = arr[6].someNewArr[0] [0].l.d[10]

// console.log(arr[6].someNewArr[0] [0].l.d)
// console.log(w + o + r + l + d)

// const name1 = window.prompt("введите ваше имя")
// const age = window.prompt("введите ваш возраст")
// window.alert(`${name1} ${age}`)


// const number1 = +window.prompt("1")
// const number2 = +window.prompt("2")
// const number3 = +window.prompt("3")
// const number4 = +window.prompt("4")
// const number5 = +window.prompt("5")

// window.alert(number1 + number2)
// window.alert((number1 + number2) - number3 * number4 / number5) 