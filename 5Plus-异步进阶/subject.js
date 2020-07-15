async function async1(){
    console.log('async1 start')//2
    await async2() //await后面都作为回调内容 微任务1=>放在微任务队列
    console.log('async1 end') 
}
async function async2() {
    console.log('async2')//3
}
console.log('script start')//1

setTimeout(() => { //宏任务 setTimeout =>callback queue
    console.log('setTimeout')
});

async1()//

//初始化Promise是，传入的函数会立刻被执行
new Promise((resolve=>{
    console.log('promise1')//4
    resolve()
})).then(function () { //微任务2=>放在微任务队列
    console.log('promise2')
})
console.log('script end')//5


// script start
// async1 start
// async2
// promise1
// script end 
// 同步代码执行完毕 call stack被清空----
// 开始执行微任务----
// async1 end
// promise2
// (尝试出触发DOM渲染)
// 触发Event Loop ,执行宏任务------
// setTimeout