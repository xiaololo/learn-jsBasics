// console.log(a) //undefined
// var a = 100 

// 变量提升:
// var a
// console.log(a)
// a = 100


// console.log(b) // Cannot access 'b' before initializatio
// let b = 10


//---------------------------------
// 块级作用域
for (let i = 0; i < 10; i++) {
    var j=i+1
}
console.log(i,j)