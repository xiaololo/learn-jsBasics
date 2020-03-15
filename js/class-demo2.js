// 父类
class People{
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
const xialuo =new Student('夏洛' ,100)
console.log(xialuo.name) //夏洛
console.log(xialuo.number) //100
xialuo.sayHi() //姓名 夏洛 ，学号 100
xialuo.eat() //夏洛 eat something...

//通过类声明对象/实例
const wang = new Teacher('王老师', '语文')
console.log(wang.name) //王老师
console.log(wang.major) //语文
wang.teach() //王老师 教授 语文
wang.eat() //王老师 eat something...