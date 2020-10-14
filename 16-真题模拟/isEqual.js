const obj1={
    a:100,
    b:{
        x:100,
        y:200
    }
}
const obj2 = {
    a: 100,
    b: {
        x: 100,
        y: 200
    },
}


console.log(isEqual(obj1,obj2))

//判断是否是对象或数组
function isObject(obj){
    return typeof obj === 'object' && obj !== null
}
function isEqual(obj1, obj2){
    // 判断是否为对象
    if (!isObject(obj1) || !isObject(obj2)) {
        //值类型
        return obj1 === obj2
    }
    // 判断是否是同一个对象
    if (obj1 === obj2) {
        return true
    }
    // 两个都是对象或者数组，而且不全等
    // 1.比较个数
    // Object.keys()方法会返回一个由一个给定对象的自身可枚举属性组成的数组， 
    // 数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致。
    
    const obj1keys=Object.keys(obj1)
    const obj2keys=Object.keys(obj2)
    if (obj1keys.length !== obj2keys.length) {
        return false
    }
    // 以 obj1为基准，和obj2依次进行比较
    for (const key in obj1) {
       const res = isEqual(obj1[key], obj2[key])
       if (!res){
           return false
       }
    }
    //3.全相等
    return true
}