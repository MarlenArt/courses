// let arr = [45, 345, 23, 45]
// let sum = arr.reduce((acc, curr) => {
//     return acc + curr
// }, 0)
// console.log(sum)


let arr = [1, 2, 3, 0, 4, 5, 6];
let empty = 0
let result = arr.reduce(function (acc, curr) {
    if (curr == 0) {
        empty = acc
    } else {
        return acc + curr
    }
})
console.log(empty)

const usb_drives = [
    {
      vendor: 'Samsung',
      Flash_Drive_Capacity: 128
    },
    {
      vendor: 'Goodram',
      Flash_Drive_Capacity: 512
    },
    {
      vendor: 'Apacer',
      Flash_Drive_Capacity: 32
    },
    {
      vendor: 'SanDisk',
      Flash_Drive_Capacity: 512
    },
    {
      vendor: 'Verbatim',
      Flash_Drive_Capacity: 512
    },
    {
      vendor: 'Transcend',
      Flash_Drive_Capacity: 256
      },
    {
      vendor: 'Kingston',
      Flash_Drive_Capacity: 256
    }
]
// let usb = usb_drives.reduce(function (acc, curr) {
//     if (curr.Flash_Drive_Capacity == 512) {
//         acc.push(curr.vendor)
//     }
//     return acc
// }, [])
// console.log(usb)
const speed = {
    SamsungGroup: 150,
    WesternDigital: 75,
    Apacer: 100,
    VerbatimCorp: 270
};
let usb_speed = usb_drives.reduce(function (acc, curr) {
    let key =  curr.vendor.replace(' ', '')
    if  (speed[key]) {
        curr.speed = speed[key]
    } else {
        curr.speed = '-'
    }
    acc.push(curr)
    return acc
}, [])
console.log(usb_speed)

let a = (document) => {
    return document.reduce((general, document))
}

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

let marlen = new Person('marlen', 18, 'M')
console.log(marlen)
  