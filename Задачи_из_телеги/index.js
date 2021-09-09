// // Задачка на наличие ключей в объекте----------------------------------->
// const isEmpty = object => !(Object.getOwnPropertyNames(object).length + Object.getOwnPropertySymbols(object).length)

// let shedule = {}
// console.log(isEmpty(shedule)) // true

// // shedule['8:30'] = 'get up'
// console.log(isEmpty(shedule)) // false

// // shedule[Symbol('a')] = 'lol'
// console.log(isEmpty(shedule)) //  false

// console.log(Object.getOwnPropertySymbols(shedule))
// console.log(Object.getOwnPropertyNames(shedule))
// console.log(Object.keys(shedule))
// console.log(shedule)

// const o = {}
// console.log(Object.getOwnPropertyNames(o))
