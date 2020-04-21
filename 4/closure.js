console.log('closure.js')
// 函数作为返回值
function create() {
    let a = 100
    return function () {
        console.log(a)
    }
}
let fn = create()
let a = 200
fn() //100 

//函数作为参数传递
function print(fn){
    const a=200
    fn()
}
const a=100
function fn(){
    console.log(a)
}
print(fn) //100


//闭包：所有自由变量的查找，是在定义函数的地方，向上级作用域查找，不是在函数执行的地方！！！