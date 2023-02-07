// let heroes = ['ursa', 'drow', 'magnus', 'nikes']
// let heroesFilter = heroes.filter(function (r) {
//     return r  == 'ursa'
// })
// console.log(heroesFilter)

// let countries = [
//     {
//         name: 'kyrgyzstan',
//         population: 7000000,
//         nation: 'kyrgyz'
//     },
//     {
//         name: 'russia',
//         population: 143000000,
//         nation: 'russian'
//     },
//     {
//         name: 'china',
//         population: 1000000000,
//         nation: 'chinies'
//     }
// ]
// let about = countries.filter(function (elem) {
//     return elem.population > 10000000
// }).sort(function (a, b) {
//     return a.population - b.population
// }).map(function (elem) {
//     return `${elem.name} : ${elem.population}`
// })
// console.log(about)

// let nums = [-4, -23, -34, 5, 65, 34]
// let filternums = nums.filter(a => a > 0)
// console.log(filternums)

// let nums = [2, 3, 4, 5, 6, 7, 34]
// let odd = nums.filter(a => a % 2 == 0)
// console.log(odd)

// let arr = ['sasha', 'aleksandr', 'ilya', 'bit']
// let arr5 = arr.filter(a => a.length >= 5)
// console.log(arr5)

// let arr = [1, 2, 'string', [3, 4], 5, [6, 7]]
// // let arr2 = arr.filter(function (elem) {
// //     return Array.isArray(elem)
// // })
// let arr2 = arr.filter(a => Array.isArray(a))
// console.log(arr2)

// let arr = [-6, 4, -5, -3 , -34, 2 ,-6]
// let arr2 = arr.filter(e => e < 0)
// console.log(arr2)

let arr = [true, "js", NaN, "world", 7];
let result = arr.filter(a => typeof a === 'string')
console.log(result)

