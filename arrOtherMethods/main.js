// flat 
// let arr = [ [ 1, 3, [ 34, 2, [ 4, 5, [ 9, 7 ] ] ] ] ]
// console.log(arr.flat(Infinity)) // Infinity что бы вывести все массивы в один уровень

// Math.random 
// let math = []
// for (let i = 0; i <= 10; i++) {
//     math.push(Math.floor(Math.random() * 10))
// }
// console.log(math)

// let heroes = ['magnus', 'ursa', 'ShadowFiend', 'DrowRanger', 'zeus']
// heroes.splice(0)
// console.log(heroes)

// let numSort = [1, 4, 2, 54, 27, 21, 32, 8,]
// numSort.sort((a, b) => a - b)
// console.log(numSort)

let num = Array(10).fill(null).map(() => Math.floor(Math.random() * 2000) - 1000)
const arr = [1, 0, 2, -1, 3, 2, 4, -5, 5]
// const center = (arr.length - 1) / 2
// for (let i = 0; i < center; i++) {
//     const change = arr[i]
//     arr[i] = arr[arr.length-i-1]
//     arr[arr.length-i-1] = change
// }  
// console.log(arr)
function zxc (item) {
    for (let i = 0; i < item.length; i++) {
        for (let j = 0; j < item.length; j++) {
            if (item[j] > item[j - 1]) {
                let result = item[j]
                item[j] =item[j - 1]
                item[j - 1] = result
            }
        }
    }
    console.log(item)
}
zxc(num)

// const arr = [1, 0, 2, -1, 3, 2, 4, -5, 5]
// const center = (arr.length - 1) / 2
// for (let i = 0; i < center; i++) {
//     const change = arr[i]
//     arr[i] = arr[arr.length-i-1]
//     arr[arr.length-i-1] = change
// }  
// console.log(arr)
// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
//   };
  
// let doublePrices = Object.fromEntries(
// Object.entries(prices).map(([key, value]) => [key, value * 2])
// );
// console.log(doublePrices)

// let asd = ['qwe', 'asd', 'zxc']
// for (let [key, value] of asd.entries()) {
//     console.log(value)
// }  


// ['erl', 'marlen', 'beka', 'bisard', 'ac', 'dead'] отфильтровать элементы у 
// больше 4 букв

// [{name: 'erlan', age: 24}, {name: 'marlen', age: 18}, {name: 'eli', age: 26}] вывести
// тех учатников которые могут пить
let person = [{name: 'erlan', age: 24}, {name: 'marlen', age: 18}, {name: 'eli', age: 26}]
let asd = []
for (let i = 0; i < person.length; i++) {
    if (person[i].age > 18) {
        asd.push(person[i])
    }
}
console.log(asd)

/**
 * [
 *  {
 *      field: [
 *          {name: 'erlan', age: [48, 13]}
 *      ]
 *  }
 * ]
 */

let marlen = [
    {
        field: [
            {name: 'erlan', age: [48, 13]}
        ]
    }
]
console.log(marlen[0].field[0].age[1])

let first = ['erl', 'marlen', 'beka', 'bisard', 'ac', 'dead']
function includes (arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true
        }
    }
    return false
}
let inc = includes(first, 'marlen')
console.log(inc)
