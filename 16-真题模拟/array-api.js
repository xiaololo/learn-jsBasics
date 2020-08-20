// 功能、 返回值、 是否会对原数组造成影响
// const arr=[10,20,30,40]
// const popRes = arr.pop() //40
// console.log(popRes, arr) //arr:[10, 20, 30]
// // 删除尾元素 被删除的元素 是

// const arr2 = [10, 20, 30, 40]
// const pushRes = arr2.push(50) // 5 
// console.log(pushRes, arr2) //arr:[10, 20, 30, 40, 50]
// // 在结尾追加元素 数组长度 是

// const arr3 = [10, 20, 30, 40]
// const shiftRes = arr3.shift()// 10
// console.log(shiftRes, arr3) //arr: [20, 30, 40]
// // 删除第一位 被删除的元素 是

// const arr4 = [10, 20, 30, 40]
// const unshiftRes = arr4.unshift(0, 5) // 6
// console.log(unshiftRes, arr4) //arr:[0, 5, 10, 20, 30, 40]
// // 在第一位新增一或多个数据 数组长度 是



// 扩展数组的API, 有哪些是纯函数？
// 纯函数： 1. 不改变原数组 2. 返回一个数组
// const arr = [10, 20, 30, 40]
// //concat
// console.log(arr.concat([50, 60])) //[10, 20, 30, 40, 50, 60]
// console.log(arr) // [10, 20, 30, 40]

// console.log(arr.map(num => num * 10)) //[20, 40, 60, 80]
// console.log(arr) //[10, 20, 30, 40]

// console.log(arr.filter(num => num > 20)) //[30, 40]
// console.log(arr) //[10, 20, 30, 40]


// console.log(arr.slice()) //[10, 20, 30, 40]
// console.log(arr) //[10, 20, 30, 40]

// 非纯函数
// pop push shift unshift
// forEach
// some every
// reduce