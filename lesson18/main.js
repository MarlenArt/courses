const array = [1, 4, 5, 12, 45]
array[array.length] = 10

const arrayFromObject = Array(5)
const emptyArr = [,,,,,,]

const arrayOfObjects = [
    {
        id: 1,
        name: 'erlan',
        skills: ['program', 'teach'],
        numbers: ['234526456', '243425265'],
        hobbies: [
            {
                name: 'guitar',
                do: 'play'
            },
            {
                name: 'cs',
                do: 'shooter'
            }
        ]
    },
    {
        id: 2,
        name: 'stas',
        skills: ['suppert', 'zxc'],
        numbers: ['234526456', '243425265'],
        hobbies: [
            {
                name: 'run',
                do: 'run'
            },
            {
                name: 'cs',
                do: 'shooter'
            }
        ]
    },
]
console.log(arrayOfObjects[0].hobbies[0].name)

// for (let i = 0; i < array.length; i++) {
//     // console.log(array[i])
// }

const arr = [2, 4, 5, 7]

arr.push(234)

const newArr = arr.map((item) => {
    return item + 10
})

const filteredArr = arr.filter((elem) => {
    return elem> 10
})

arr.forEach((item) => {
    console.log(item)
})


const foundElementj = arr.find((item) => {
    return item === 2
})
console.log(foundElementj)

arr.unshift('first')
arr.shift()
arr.push(546)
const a = [234, 234, 46]
arr.push(...a)
arr.pop()

console.log(arr)