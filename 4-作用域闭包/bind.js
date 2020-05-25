console.log('bind.js')
//使用bind函数
function fn1(a,b){
    console.log('this', this) //{x: 100}
    console.log('a,b', a, b) //10 20
    return 'this is fn1' //this is fn1
}
// const fn2=fn1.bind({x:100},10,20)
// console.log(fn2())


// call apply看作是对象的方法，通过调用方法的形式间接调用函数，
// 第一个实参是要调用函数的母对象，是调用的上下文，在函数体内通过this获得对它的引用
// 第一个实参之后的左右参数是要传入待调用函数的值
// 两者区别在于 apply()实参放在数组中
f.call(o,1,2)
f.apply(o, [1, 2])

// bind方法主要的作用是将函数绑定至某个对象，当函数f()上调用bind()方法并传入对象o作为参数，这个方法将返回一个新的函数
function f(y){return this.x+y}
var o={x:1}
var g=f.bind(o)//this指向对象o
g(2) //3

// 手写bind函数
// step0:在Function原型上定义方法bind1
Function.prototype.bind1=function(){
    // arguments:可以获取函数所有的参数
    console.log(arguments) //[{x: 100},10,20]
    // slice() 方法可从已有的数组中返回选定的元素。
    // step1:将参数拆解为数组
    
    const args = Array.prototype.slice.call(arguments)

    // step2:获取this(数组第一项)
    const this_ = args.shift() //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

    // 存储 fn1.bind(...)中的fn1
    const self = this //this指向fn1

    //返回一个函数
    return function(){
        return self.apply(this_, args)
    }
}
const fn3 = fn1.bind1({
    x: 100
}, 10, 20)


