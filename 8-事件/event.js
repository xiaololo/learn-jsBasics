console.log('event.js')
//原生js事件绑定
// const btn = document.getElementById('btn1')
// btn.addEventListener('click', enevt => {
//     alert('clicked')
// })

// 封装通用的事件绑定函数
function bindEvent(elem,type,fn) {
    elem.addEventListener(type,fn)
}
// const btn1=document.getElementById('btn1')
// bindEvent(btn1,'click',event=>{
//     // console.log(event.target)//获取触发的元素
//     event.preventDefault();//阻止默认行为
//     alert('clicked')
// })

//事件冒泡
// const body=document.body
// bindEvent(body,'click',event=>{
//     console.log('body clicked')
//     console.log(event.target)
// })

// const div2 = document.getElementById('div2')
// bindEvent(div2, 'click', event => {
//     console.log('div2 clicked')
//     console.log(event.target)
// })

// 点击div2时， 先打印 div2 clicked 后打印了body clicked 


//通过时间冒泡给p元素绑定事件
const p1 = document.getElementById('p1')
bindEvent(p1, 'click', event => {
    event.stopPropagation();//阻止冒泡
    console.log('激活')
})

const body = document.body
bindEvent(body, 'click', event => {
    console.log('取消')
})
