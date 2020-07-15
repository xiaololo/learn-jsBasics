console.log('class demo')
// 类
class Student{
    //constructor 属性返回对创建此对象的数组函数的引用。
    constructor(name,number){
        this.name=name
        this.number = number
    }
    sayHi(){
        console.log(
            `姓名 ${this.name} ，学号 ${this.number}`
        )
    }
}
//通过类声明对象/实例
const xialuo =new Student('夏洛' ,100)
console.log(xialuo.name) //夏洛
console.log(xialuo.number) //100
xialuo.sayHi() //姓名 夏洛 ，学号 100

