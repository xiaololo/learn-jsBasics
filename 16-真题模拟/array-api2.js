// const arr =[10,20,30,40,50]

// slice 纯函数 startIndex endIndex
// const arr1=arr.slice()
// const arr2=arr.slice(1,4) // 从第1位选择到index为4前的数据
// console.log(arr1) // [10, 20, 30, 40, 50]
// console.log(arr2) // [20, 30, 40]

// //splice 非纯函数 startIndex length
// const arr5 = arr.splice(1, 2, 'a', 'b', 'c') // 从1的位置剪切2位后，拼接后面的数值
// const arr6 = arr.splice(1, 2) //从1的位置剪切2位，不拼接
// const arr7 = arr.splice(1, 0, 'a', 'b', 'c') // 从1的位置不剪切，拼接后面的数值
// console.log(arr5) // [20, 30]
// console.log(arr) //[10, "a", "b", "c", 40, 50]




// [10, 20, 30].map(parseInt) 返回结果是什么？
//   map的参数和返回值
//   map() 方法定义在JavaScript的Array中， 它返回一个新的数组， 数组中的元素为原始数组调用函数处理后的值。
//   array.map(function (currentValue, index, arr), thisIndex)
//   currentValue： 必须。 当前元素的的值。
//   index： 可选。 当前元素的索引。
//   arr： 可选。 当前元素属于的数组对象。
// thisIndex可选。 对象作为该执行回调时使用， 传递给函数， 用作 "this"的值。
// 如果省略了 thisValue， 或者传入 null、 undefined， 那么回调函数的 this 为全局对象。


// 实例
//   let array = [1, 2, 3, 4, 5];
//   let newArray = array.map((item) => {
//       return item * item;
//   })
//   console.log(newArray) // [1, 4, 9, 16, 25]

// parseInt参数和返回值
// parseInt() 函数可解析一个字符串， 并返回一个整数。
// 语法
// parseInt(string, radix)
// 要被解析的字符串。
// 表示要解析的数字的基数。 该值介于 2~36 之间。
// 如果省略该参数或其值为 0， 则数字将以 10 为基础来解析。 如果它以“ 0x” 或“ 0X” 开头， 将以 16 为基数。
// 如果该参数小于 2 或者大于 36， 则 parseInt() 将返回 NaN


console.log([10, 20, 30].map(parseInt)) //[10, NaN, NaN]

// 拆解：
[10, 20, 30].map((num,index)=>{
    return parseInt(num,index)
})

