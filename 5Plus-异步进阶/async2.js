
async function fn1() {
    return 100
}
console.log(fn1()) //Promise {<resolved>: 100}
fn1().then(data => {
    console.log(data) //100
})
// 执行async函数，返回的是Promise对象


!(async function(){
    const data = await Promise.resolve(300) 
    console.log(data)//300
    const data2 = await 400 
    console.log(data2) //400
    const data3 = await fn1() //执行async函数 返回的promise对象
    console.log(data3) //100
})()
// await相当于Promise的then



!(async function(){
    const p=Promise.reject('err')
    try{
        const res =await p
        console.log(res)
    }catch(ex){
        console.error(ex) //err : try..catch可捕获异常，代替了Promise的catch
    }
})()
// try..catch可捕获异常，代替了Promise的catch
