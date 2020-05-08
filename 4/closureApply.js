console.log('closureApply.js')
// 实际开发中闭包的应用
// 隐藏数据
// 如何做一个简单的catch工具
// 闭包隐藏数据，只提供API
function creatCache(){
    const data={}//闭包中的数据，被隐藏，不被外界访问
    return {
        set:function(key,val){
            data[key] = val
        },
        get:function(key){
            return data[key]
        }
    }
}
const c = creatCache()
c.set('name','lolo')
console.log(c.get('name')) //lolo

// 创建10个a标签，点击时弹对应的序号
var a
for (var i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = i
    a.addEventListener('click', function (e) {
        e.preventDefault() //取消默认事件
        alert(i)
    })
    document.body.appendChild(a)
}
// 结果：点击10个元素均为 10
// 分析：点击事件点击的时候for循环执行完毕，并且i作用域是全局作用域，i的值已经变为10，故点击10个元素均为10
let  a
for (let i = 0; i < 10; i++) {
    a = document.createElement('a')
    a.innerHTML = i
    a.addEventListener('click', function (e) {
        e.preventDefault() //取消默认事件
        alert(i)
    })
    document.body.appendChild(a)
}
// 结果：点击每个元素均对应当前元素的i值
// 分析：let i定义在for循环块级作用域内，每次for循环执行的时候都会形成一个新的块，每个块及作用域下都生成一个i,每个元素点击是事件都对应不同的i；
//闭包：所有自由变量的查找，是在定义函数的地方，向上级作用域查找，不是在函数执行的地方！！！