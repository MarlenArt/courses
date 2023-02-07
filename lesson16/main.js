let punch = function (x, y) {
    const sum = x + y
    return sum
}

function sumOfTwoDigitits (a, b) {
    const sum = a + b
    return sum
}
const a = sumOfTwoDigitits(1, 20)   
console.log(a)

const array = [1, 2, 3, 4, 5, 234]
const array2 = [14, 25, 334, 42, 35, 234]

let sum = 0
function sumOfArrayNumbers (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    console.log(sum)
}
sumOfArrayNumbers(array)
sumOfArrayNumbers(array2)

const sumTwoNumbers = (a, b) => a + b
console.log(sumTwoNumbers(2, 5))

// num += ++

const list = [1, 2, 3, 4, -1]
const isPositive = (a) => {   
    if (a > 0) {
        return true
    } else {
        return false
    }
}
// const isPositive = (a) => a > 0

let newList = []
for (let i = 0; i < list.length; i++) {
    let a = isPositive(list[i])
    if (a) {
        newList.push(list[i])
    }
}