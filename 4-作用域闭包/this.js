console.log('this.js')
// this 5中应用场景
// 作为普通函数
function fn1() {
    console.log(this)
}
fn1() //window 
// 在全局执行，this指向windows

// 使用call apply bind
fn1.call({
    x: 1
}) //{x:1}
const fn2 = fn1.bind({
    x: 2
})
fn2() //{x: 2}
// 延伸： JavaScript 中 call()、 apply()、 bind() 的用法

// 作为对象方法被调用
const zhangsan={
    name:'zhangsan',
    sayHi(){
        // this 即为当前对象
        console.log(this)
    },
    wait(){
        setTimeout(function() {
            // this == window
            console.log(this)
        }, 1);
    }
}
zhangsan.sayHi() //{name:"zhangsan",sayHi:f,wait:f} =>指向对象防范
zhangsan.wait()// window
// sayHi()作为对象方法被执行，this指向当前对象。
// wait()执行时，打印的this是在 wait()内部的函数setTimeout中，而内部函数setTimeout指向了window,所以当前this指向Windows。


// 箭头函数''
const zhangsan = {
    name: 'zhangsan',
    sayHi() {
        // this 即为当前对象
        console.log(this)
    },
    waitAgain() {
        setTimeout(()=> {
            // this 即为当前对象
            console.log(this)
        }, 1);
    }
}
zhangsan.sayHi() //{name:"zhangsan",sayHi:f,wait:f} =>指向当前对象
zhangsan.waitAgain() //{name:"zhangsan",sayHi:f,wait:f} =>指向当前对象
// **箭头函数的this取上级作用域中的this**,所以waitAgain()中的this指向了当前对象

// 在class中被调用
class People{
    constructor(name){
        this.name=name
        this.age=20
    }
    sayHi(){
        console.log(this)
    }
}
const xialuo=new People('夏洛')
xialuo.sayHi() //People {name: "夏洛", age: 20} this指向xiaola这个实例



// this的取什么值，是在函数执行的时候确认的，不是函数定义的时候确认的！！！

// call apply bind区别