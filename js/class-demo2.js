// step1: 定义父类 class People
// step2: 声明子类 class Student extends People

// 父类
class People{
    // constructor 构造函数
    constructor(name){
        this.name=name
    }
    eat() {
        console.log(
            `${this.name} eat something...`
        )
    }
}

// 子类
// [extends] (ES6)关键字用来创建一个普通类或者内建对象的子类
class Student extends People {
    //constructor 属性返回对创建此对象的数组函数的引用。
    constructor(name,number){
        //[super](ES6)关键字用于访问和调用一个对象的父对象上的函数。
        super(name)
        this.number = number
    }
    sayHi(){
        console.log(
            `姓名 ${this.name} ，学号 ${this.number}`
        )
    }
}

// 子类
class Teacher extends People {
    constructor(name, major) {
        super(name)
        this.major = major
    }
    teach() {
        console.log(
            `${this.name} 教授 ${this.major}`
        )
    }
}
//通过类声明对象/实例
// const xialuo =new Student('夏洛' ,100)
// console.log(xialuo.name) //夏洛
// console.log(xialuo.number) //100
// xialuo.sayHi() //姓名 夏洛 ，学号 100
// xialuo.eat() //夏洛 eat something...

// // //通过类声明对象/实例
// const wang = new Teacher('王老师', '语文')
// console.log(wang.name) //王老师
// console.log(wang.major) //语文
// wang.teach() //王老师 教授 语文
// wang.eat() //王老师 eat something...


//------------------原型-----------
// class实际上是函数，可见是语法糖
// console.log(typeof Student)//function
// console.log(typeof People) //function

console.log(xialuo.sayHi()) //姓名 夏洛 ，学号 100
console.log(xialuo.__proto__.sayHi()) //姓名 undefined ，学号 undefined

console.log(xialuo.__proto__) //xialuo的隐式原型：People {constructor: ƒ, sayHi: ƒ}
console.log(xialuo.prototype) //xialuo的显式原型：undefined
console.log(Student.prototype) //Student的显式原型 People {constructor: ƒ, sayHi: ƒ}
console.log(xialuo.__proto__ === Student.prototype) //true

// 3-3原型关系 见实例图
// 每个class都有显式原型 prototype
// 每个实例都有隐式原型 __proto__
// 实例的 __proto__ 指向对应class的 prototype

// 原型的执行规则
// 获取属性xialuo.name或执行方法xialuo.sayhi时
// 现在自身属性和方法寻找
// 如果找不到自动去__proto__查找

//------------------类型判断-----------
// 类型判断-instanceof 

console.log(xialuo instanceof Student) //true
console.log(xialuo instanceof People) //true
console.log(xialuo instanceof Object) //true

console.log([] instanceof Array) //true
console.log([] instanceof Object) //true
console.log({} instanceof Object) //true