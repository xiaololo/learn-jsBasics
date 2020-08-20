// 数组拍平

// 方法一：concat() 
// 方法用于连接两个或多个数组。
// 该方法不会改变现有的数组， 而仅仅会返回被连接数组的一个副本
// 返回一个新的数组。 该数组是通过把所有 arrayX 参数添加到 arrayObject 中生成的。 如果要进行 concat() 操作的参数是数组， 那么添加的是数组中的元素， 而不是数组。

// const res= [].concat(1, 2, [3, 4], 5)
// console.log(res) //[1, 2, 3, 4, 5] 只有一层数组，完成数组拍平
// const res2 = [].concat(1, 2, [3, [4]], 5)
// console.log(res2) //[1, 2, 3, [4], 5] 超过一层数组，只能拍平一层数组

// 结论： concat()方法只能拍平一层数组


// 利用concat方法进行递归
function flat(arr) {
    // 验证 arr中，还有没有深层数组
    var isDeep = arr.some(item => item instanceof Array)
    if (!isDeep) {
        //如果不是深层数组
        return arr 
    }
    //是深层数组，拍平数组后，递归继续判断处理
    const res = Array.prototype.concat.apply([], arr)
    return flat(res)

}
const res = flat([1, 2, [3, [4, 6], 7], 5])
console.log(res) //[1, 2, 3, 4, 6, 7, 5]