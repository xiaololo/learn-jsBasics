console.log('jquery demo')
//dom查询
class jQuery{
    // constructor 构造器
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length=result.length
        for (let i = 0; i < length; i++) {
            this[i]=result[i]
        }
        this.length=length
        this.selector = selector
    }
    //类数组
    get (index){
        return this[index]
    }
    each(fn){
        for (let i = 0; i < this.length; i++) {
            const elem = this[i];
            fn(elem)
        }
    }
    //建立方法
    on(type,fn){
        return this.each(elem=>{
            elem.addEventListener(type,fn,false)
        })
    }

}
// 使用
var p = new jQuery('p')
console.log(p) // jQuery {0: p, 1: p, 2: p, length: 3, selector: "p"}
console.log(p.get(2)) //<p>第一段文字3</p>
p.each(elem => console.log(elem.nodeName)) // p p p
p.on('click',()=>alert('clicked'))

//插件
jQuery.prototype.dialog=function(info){
    console.log(info)
}
p.dialog('abc') //abc


//造轮子
// [extends](ES6) 关键字用来创建一个普通类或者内建对象的子类
class myJquery extends jquery{
    //constructor 属性返回对创建此对象的数组函数的引用。
    constructor(selector){
        //[super](ES6)关键字用于访问和调用一个对象的父对象上的函数
        super(selector)
    }
    //扩展自己的方法
    addclass(className){

    }
    style(data){

    }
}