// pending状态的Promise
const p1 = new Promise((resolve, reject) => {})
console.log('p1', p1) //PromiseStatus: pending


// pending状态的Promise -> resolved状态的Promise：
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve() // Promise.resolve返回一个解析过的Promise对象,状态为resolved
    });
})
console.log('p2', p2) //开始打印时为：pending状态
setTimeout(() => {
    console.log('p2-setTimeout', p2)
}); //计时器回调成功：resolved状态


// pending状态的Promise -> rejected状态的Promise：
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject() //Promise.reject返回一个解析过的Promise对象,状态为rejected
    });
})
console.log('p3', p3) //开始打印时为：pending状态
setTimeout(() => {
    console.log('p3-setTimeout', p3)
}); //计时器回调成功：rejected状态