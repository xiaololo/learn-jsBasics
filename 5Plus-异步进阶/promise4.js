Promise.resolve().then(() => { //step1. Promise.resolve()返回的 resolve状态的Promise
    console.log(1) //step2.resolved 触发then回调 : console.log(1);then正常返回resolved状态的Promise
}).catch(()=>{
    console.log(2)
}).then(() => { //step3.1resolved 触发then回调: console.log(3)
    console.log(3)
})
// 1 3

Promise.resolve().then(() => { // Promise.resolve()返回的 resolve状态的Promise
    console.log(1) // resolved 触发then回调 : console.log(1)
    throw new Error('error1') // then里面有报错则返回rejected状态的Promise
}).catch(() => { // rejected 触发catch回调: console.log(2)
    console.log(2) // catch正常返回resolved状态的Promise
}).then(() => { // resolved 触发then回调: console.log(3)
    console.log(3)
})
// 1 2 3


Promise.resolve().then(() => { // Promise.resolve()返回的 resolve状态的Promise
    console.log(1) // resolved 触发then回调 : console.log(1)
    throw new Error('error1') // then里面有报错则返回rejected状态的Promise
}).catch(() => { // rejected 触发catch回调: console.log(2)
    console.log(2) // catch正常返回resolved状态的Promise
}).catch(() => { // resolved 触发then回调，无法触发catch回调
    console.log(3)
})
//  1 2 