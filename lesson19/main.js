// const arr = ['erlan', 'ermek']

// const str = 'erlan, ermek, stas, link'

// const arrFromStr = str.split(',')

// const strFromArr = arr.join('')

// // const mutated = str.toUpperCase()
// // const mutated = str.charAt(10) //str[10]
// // const mutated = str.includes('link')
// // const mutated = str.replace('link', 'push')

// console.log(strFromArr)
// console.log(arrFromStr)

// const first = 'aaa@bbb@ccc'
// const firstChange = first.replaceAll('@', '!')
// console.log(firstChange)

// const second = 'aaa bbb ccc'
// const secondChange = second.substring()
// const second2 = 'aaa bbb ccc'+ ani.slice()
// const secondChange2 = second2.slice(0, 4) + second.slice(8, 11)

// console.log(secondChange)
// console.log(secondChange2)


// let date = '2025-12-31'
// let splited = date.split('-')
// let result = splited.reverse().join('/')
// // let result2 = `${splited[2]}/${split[1]}/${splited[0]}`
// console.log(result)


// const arr = ['a', 'b', 'c']
// arr.push(1, 2, 3)
// // arr.push(2)
// // arr.push(3)
// console.log(arr)

// let arr = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = arr.concat(arr2)
// console.log(arr3)

// const arr = [1, 2, 3, 4, 5]
// const center = (arr.length - 1) / 2
// for (let i = 0; i < center; i++) {
//     const change = arr[i]
//     arr[i] = arr[arr.length-i-1]
//     arr[arr.length-i-1] = change
// }   

// console.log(arr)

let arr = [1, 2, 3, 4, 5, 5, 10, 8, 2, 9, 4]
function arrAll (item) {
    let result = []
    for (let i = 0; i < item.length; i++){
        if (!result.includes(item[i])) {
            result.push(item[i])
        }
    }
    return result
}
console.log(arrAll(arr))

let person = {
    name: 'erlan',
    age: '18'
}
console.log(`Hi, my name is ${person.name} and I'm ${person.age} years old`)

let asd = [1, 6, 2, 10, 4]
asd.sort((a, b) => a - b)
console.log(asd)


let res = []
for (let i = asd.length - 1; i >= 0; i--) {
    res.push(asd[i])
}
console.log(res)