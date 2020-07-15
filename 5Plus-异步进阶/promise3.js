// then正常返回resolved状态的Promise， 里面有报错则返回rejected状态的Promise
const p1 = Promise.resolve().then(() => { //resolve返回一个状态为resolved的Promise对象,
    return 100
})
p1.then(() => { // p1是: then正常返回resolved状态的Promise
    console.log('p1 then') //打印p1 then :resolved触发then回调
})

const p2 = Promise.resolve().then(() => {
    throw new Error('then error')
})
p2.then(() => { //p2是 :then里面有报错则返回rejected状态的Promise
    console.log('p2 then') 
}).catch(() => {
    console.log('p2 catch') //打印p2 catch :rejected触发catch回调
})


// catch正常返回resolved状态的Promise， 里面有报错则返回rejected状态的Promise
const p3 = Promise.reject('err').catch(err => {
    console.error(err)
})
p3.then(() => { //p3是: catch正常返回resolved状态的Promise
    console.log('p3 then') //打印 p3 then :resolved触发then回调
})

const p4 = Promise.resolve().then(() => {
    throw new Error('then error')
})
p4.then(() => { //p4是 :catch里面有报错则返回rejected状态的Promise
    console.log('p4 then')
}).catch(() => {
    console.log('p4 catch') //打印p4 catch :rejected触发catch回调
})