// // new Object() === {}

// const obj1 ={
//     name: 'erlan',
//     age: 20,
//     school: {
//         name: 'sebat',
//         address: 'jalal-abad',
//         students: 1000
//     }
// }
// let num = 10

// const anotherObject = obj1
// let copyNum = num

// copyNum += 1
// anotherObject.age = 25

// console.log(anotherObject, obj1)
// console.log(copyNum, num)

// const obj2 = {...obj1}
// const combine = {
//     master: 'shifu',
//     name: 'panda'
// }
// const obj3 = Object.assign(obj1, combine)
// obj3.school.address = 'bishkek'
// console.log(obj1, obj3)

// const isEqual = Object.is(obj1, anotherObject)
// console.log(isEqual)

// const createObj = Object.create({})

// const pop = Object.defineProperty(createObj, 'name', {
//     value: 'keychron',
//     writable: false // if here true you can change of value
// })
// pop.name = 'erlan'
// console.log(pop)

const freezedObj = Object.freeze(createdObj)
freezedObj.name = 'erlan'
console.log(freezedObj)

const entries = [
    ['name', 'erlan']
]
const objFromEntry = Object.fromEntries(entries)
console.log(objFromEntry)