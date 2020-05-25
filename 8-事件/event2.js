console.log('event.js')

// 事件代理
// 原理： 事件冒泡机制

// 优点：
// 1、代码简洁，把事件处理器添加到一个父级元素上， 这样就避免了把事件处理器添加到多个子级元素上。
// 2. 大量减少内存占用， 减少事件注册。
// 3. 适用新增元素实现动态绑定事件

// 实现方式：

// 一、 可用addEventListener(); //所有主流浏览器，除了IE8及更早IE版本。

// 实例：
// 给每个a标签添加点击事件
// function bindEvent(elem,type,fn) {
//     elem.addEventListener(type,fn)
// }
// function bindEvent(elem, type, fn) {
//     elem.addEventListener(type, fn)
// }

// const div3=document.getElementById('div3')
// bindEvent(div3,'click',event=>{
//     event.preventDefault();
//     const target=event.target
//     if (target.nodeName == 'A') {
//         alert(target.innerHTML)
//     }
// })


//通用的事件监听函数
function bindEvent(elem, type, selector,fn) {
    // step1.判断传参为 3 个还是 4 个
    if (fn == null) {//
        // 如果为3个，默认第3个赋值为函数
        fn = selector
        selector=null
    }
    // step2.做事件绑定
    elem.addEventListener(type,event=>{
        const target =event.target
        //step3.判断是否传入selector
        if (selector) {
            //代理绑定 -过滤指定选择器的绑定
            if (target.matches(selector)) { //match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
               fn.call(target,event) //call 改变this的指向，调用的事件指向当前选择的DOM元素
            }
        }else{
            //普通绑定 -不过滤所有选择器绑定都有效
            fn.call(target, event)
        }
        
    })
}

const div3 = document.getElementById('div3')
bindEvent(div3,'click','a',function(event){
    event.preventDefault();
    alert(this.innerHTML)
})


