// 1.type of能判断哪些类型
// 所有的值类型
let a
console.log(typeof a) //undefined
console.log(typeof 'abc') //string
console.log(typeof 100) //number
console.log(typeof true) //boolean
console.log(typeof Symbol('s')) //symbol
//能判断函数
console.log(typeof console.log) //function
console.log(typeof
    function () {}) //function
//能判断引用类型（不能再继续识别）
console.log(typeof null) //object
console.log(typeof ['a', 'b']) //object
console.log(typeof {
    x: 100
}) //object
console.log('--------------------------------')