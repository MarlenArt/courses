const arr = ['ursa', 'sf', 'void']
arr.forEach((value, index) => {
    console.log(index, value)
})

let arr2 = [
    {1: 'first'},
    {2: 'second'},
    {3: 'third'},
    {4: 'fourth'},
    {5: 'fifth'},
]
arr2.forEach(function (value, index) {
    console.log(value, index + 1)
})

let arr3 = [3, 4, 3, 56, 23, 76]
let newarr3 = []
arr3.forEach(function (value, index) {
    newarr3.push(value * value)
})
console.log(newarr3)

let arr4 = [4, 1, 6, 7, 23]
let arr4Sum = 0
arr4.forEach(function (value) {
    arr4Sum += value
})
console.log(arr4Sum)

function forArr5 (value, index) {
    console.log(`I'm ${value}, and my line ${index + 1}`)
}
let arr5 = ['sasha', 'egor', 'elena']
arr5.forEach(forArr5)

let fruit = ['apple', 'pineapple', 'mango']
fruit.forEach((value, index) => {
    console.log(`${value} toke ${index + 1} place`)
})

let classMate = [
    {
        name: 'aleksandr', 
        grades: 4,
    }, 
    {
        name: 'sanya',
        grades: 4,
    },
    {
        name: 'nikita',
        grades: 3
    },
    {
        name: 'botan',
        grades: 5
    }
]
classMate.forEach(function (value) {
    console.log(`${value.name} her grades ${value.grades}`)
})

// reduce, forEach, map, for, while

let nums = [4, 23, 56, 27, 78, 34]
let sum = 0

// let num = nums.forEach((value) => {
//     return sum += value
// })
// console.log(sum)

// let numSum = nums.reduce((acc, curr) => {
//     return acc + curr
// }, 0)
// console.log(numSum)

// let numMap = nums.map((value, ad) => {
//     return sum += value
// })
// console.log(sum)

// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
// }
// console.log(sum)

// let i = 0
// while (i < nums.length) {
//     sum += nums[i]
//     i++
// }
// console.log(sum)

// let j = 0
// do {
//     sum += nums[j]
//     j++
// } while (j < nums.length)
// console.log(sum)

