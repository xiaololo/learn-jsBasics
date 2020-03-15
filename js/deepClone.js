console.log('deepClone')
/**
 * 深拷贝
 */

var obj1 = {
    age: 20,
    name: 'xxx',
    address: {
        city: 'baijign'
    },
    arr: ['w', 'wf', 'sd']
}
//直接赋值给对象obj2=>把obj1的对象地址赋值给obj2
// const obj2 = obj1
//当obj2改变对象属性值，obj1的该值也随之改变
// obj2.address.city = 'shanghai'
// console.log(obj1.address.city) //'shanghai'   

/**
 * 深拷贝(问题三)
 * @param {Object} obj 要拷贝对象
 */
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        // 不是对象，或者是null
        return obj
    }
    //初始化返回结果
    let result
    if (obj instanceof Array) {
        result =[]
    }else{
        result = {}
    }
    for (const key in obj) {
        //保证key不是原型的属性
        if (obj.hasOwnProperty(key)) { 
            //递归调用！！
            result[key] = deepClone(obj[key])
        }
    }
    //返回结果
    return result
}
var obj3 = deepClone(obj1)
console.log(obj3)
obj3.address.city = 'shanghai'
console.log(obj1.address.city) //'shanghai'  


// 浅拷贝： 也就是拷贝A对象里面的数据， 但是不拷贝A对象里面的子对象

// 深拷贝： 会克隆出一个对象， 数据相同， 但是引用地址不同（ 就是拷贝A对象里面的数据， 而且拷贝它里面的子对象）

// 问题延伸： 赋值、深拷贝、浅拷贝的区别
// https: //www.jianshu.com/p/56598f2ac42e
