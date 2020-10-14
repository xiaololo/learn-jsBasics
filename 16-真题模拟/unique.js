function unique(arr) {
    const res=[]
    arr.forEach(item => {
       if (res.indexOf(item) < 0) {
           res.push(item)
       }
    });
    return res
}
unique([20, 30, 30, 50, 4, 4]) //[20, 30, 50, 4]


// 使用Set
// set ES6 提供新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
// Set本身是一个构造函数， 用来生成 Set 数据结构。
// Set函数可以接受一个数组作为参数， 用来初始化。
function unique(arr){
    return [...new Set(arr)]
}
console.log(unique([20, 30, 30, 50, 4, 4]))

// 传统遍历两次，使用set性能更优
