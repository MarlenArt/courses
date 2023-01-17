// true && true => true
// true && false => false
// false && true => false
// false && false => false

// true || true => true
// true || false => true 
// false || true => true
// false || false => false

// const x = true
// const y = 1
// if (x === y) { //we have == 
//     console.log(1)
// }


// const fl = false
// const fl2 = false 

// if (!fl & !fl2) {
//     console.log(1)
// }

// const position = 2
// const positionCafe = 3
// const isNear = positionCafe - position < 3
// const myMoney = 500 
// const timeToSpend = 30
// const devilery = 50
// const price = 501
// const fullPrice = price + devilery
// const canBuy = isNear && timeToSpend < 40 && fullPrice

// if (canBuy){
//     console.log("заказываем")
// } else if (fullPrice - devilery <= myMoney) {
//     console.log("самовывоз")
// } else {
//     console.log("голодаем")
// }

const sexOfBabyIsGirl = true
// const weight = 5
let nameOfChild = sexOfBabyIsGirl ? 'bybysara' : 'aitmatov'

if (sexOfBabyIsGirl) {
    nameOfChild = 'bybysara'
}else {
    nameOfChild = 'aitmatov'
}