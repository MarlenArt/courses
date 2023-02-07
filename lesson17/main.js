// const key = 'area'
// const object = {
//     area: 1,
//     color: 'white',
//     name: 'cube',
//     show: () => console.log('aaaa')
// }

// object.area = 2
// object.color = 'blue'
// object.never = 'asdfafaf'
// object['hell'] = 'hell'

// // delete object.area
// object.show()
// console.log(object)

// for (let i in object) {
//     console.log(object[i])
// }

// console.log(Object.values(object))
//напишите функцию которая проверяет является ли элемент именно простым обьектом а не массивом
// const func = (item) => {
//     const isArray = Array.isArray(item)
//     if (typeof item === 'object' && !isArray && item) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(func({a: 3}))

// const without = (object, ...args) => {
//     for (let i = 0; i < args.length; i++) {
//         delete object[args[i]]
//     }
//     return object
// }
// console.log(without({a: 1, b: 2, c: 3}, 'a', 'c'))





function say (...mat) {
	console.log(`hello my name is ${this.name}, ${mat}`)
}

// key, field, property, value
// methods, functions
// args (arguments), тернарный оператор => ...
// context, this, link, bind, apply, call, instance

// const marlen = {
// 	name: "marlen",
//     age: 18,
//     brother: "erlan"
// }

// const erlan = {
// 	name: 'erla',
//     age: 24
// }

// const marlenSay = say.bind(marlen, 'suka')
// const erlanSay = say.bind(erlan, 'blyat')
// const marlenApply = say.apply(marlen, ['huyak', 'pidor'])
// say.call(marlen, 'hehehe')

// erlanSay()
// marlenSay()
// marlenApply()


// class Hero {
//     constructor(name, typeForce, skills, skins, talants) {
//         this.name = name
//         this.typeForce = typeForce
//         this.skills = skills
//         this.skins = skins
//         this.talants = talants
//     }

//     ulty () {

//     }
// }

// const magnus = new Hero("Magnus", "strengs", ["wave", "empower", "skewer", "rp"], null, ['a', 'b'])

// console.log(magnus)



function consoleLog () {
    console.log(`${this.name}`)
    console.log(`name=${this.name}\npopulation=${this.population}`)
}

function getObj () {
    return this
}

let city1 = {
    name: 'ГородN',
    population: 1000000, 
    getCity: getObj
}
console.log(city1)
const city1GetName = consoleLog.bind(city1)
city1GetName()

let city2 = {
    name: 'ГородM',
    population: 1e6, 
    getCity: getObj
}
console.log(city2)
const city2GetName = consoleLog.bind(city2)
city2GetName()


//a,b => a - b