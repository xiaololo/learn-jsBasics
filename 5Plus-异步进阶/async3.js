async function async1() {
    console.log('async1 start') //2
    await async2() //立马执行async2 返回undefined
    //await后面，都可以看作是calback里的内容，即异步
    console.log('async1 end')//5 异步代码
}
async function async2() {
    console.log('async2')//3
}
console.log('script start')//1
async1() //立马执行
console.log('script end')//4

// script start
// async1 start
// async2
// script end
// async1 end

// ----------------------------------------------
async function async1() {
    console.log('async1 start')//2
    await async2()
        // 以下三行都是 async2 的异步回调callback的内容
        console.log('async1 end') 
        await async3()
            //以下一行是async3 的异步回调callback的内容
            console.log('async1 end 2')
}
async function async2() {
    console.log('async2') 
}
async function async3() {
    console.log('async3')
}

console.log('script start') //1
async1()
console.log('script end') 

// script start
// async1 start
// async2
// script end
// async1 end
// async3
// async1 end 2


// 异步的本质是什么？
// JS是单线程的
// 异步需要回调
