function muti(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000);
    })
}

const nums = [1, 2, 3]
    // nums.forEach(async (i)=>{
    //     const res =await muti(i)
    //     console.log(res)
    // })
    //执行完同步函数，然后执行异步

!(async function () {
    for (const i of nums) {
        const res = await muti(i)
        console.log(res)
    }
})()
//异步执行完才继续执行

// for forEach for - in for - of 的区别
// https: //segmentfault.com/a/1190000018340362
// https: //blog.csdn.net/one_girl/article/details/80192899
// https: //blog.csdn.net/weixin_42729761/article/details/89216599