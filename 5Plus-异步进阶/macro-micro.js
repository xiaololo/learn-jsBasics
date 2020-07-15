console.log(1)
// 宏任务：DOM渲染后触发
setTimeout(() => {
   console.log(2)
});
// 微任务： DOM渲染前触发
Promise.resolve().then(()=>{
    console.log(3)
})
console.log(4)
//1 4 3 2