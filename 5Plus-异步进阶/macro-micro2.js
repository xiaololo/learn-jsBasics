$('#container').append($p1).append($p2).append($p3)

// 宏任务：DOM渲染后触发
setTimeout(() => {
    console.log('length2', $('#container').children.length)//3
    alert('setTimeout')//DOM 渲染了
});
// 微任务： DOM渲染前触发
Promise.resolve().then(() => {
    console.log('length1', $('#container').children.length)//3
    alert('Promise then') //DOM没渲染
});

// 执行顺序
// alert('Promise then')
// 渲染节点
// alert('setTimeout')