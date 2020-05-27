// 创建XMLHttpRequest对象
const xhr=new XMLHttpRequest()
// 创建一个 get 请求，true 采用异步
xhr.open('GET','./test.json',true)
xhr.onreadystatechange=function(){
    if (xhr.readyState === 4) {
        if (xhr.status=== 200) {
            alert(xhr.responseText)
        }
    }
}
//发送请求
xhr.send(null)

// xhr.readyState 状态
//  0： 请求未初始化: 还没有调用 open()。 
//  1： 请求已经建立: 但是还没有发送， 还没有调用 send()。
//  2： 请求已发送: 正在处理中（ 通常现在可以从响应中获取内容头）。 
//  3： 请求在处理中: 正在解析响应内容
//  4： 响应已完成: 内容解析完成，可以在客户端调用

// xhr.status 
// 1 xx - 信息提示
// 2 xx - 成功 服务器成功地接受了客户端请求
// 3 xx - 重定向，浏览器直接跳转
// 4 xx - 客户端错误 （客户端请求不存在的页面，客户端未提供有效的身份验证信息。）
// 5 xx - 服务器错误 服务器由于遇到错误而不能完成该请求
// 常见：
// 200 - OK 一切正常，对GET和POST请求的应答文档跟在后面

// 300 - Multiple Choices 客户请求的文档可以在多个位置找到
// 301 - Moved Permanently 永久重定向
// 302 - Found 临时重定向
// 304 - Not Modified 资源未改变,使用缓存的资源

// 400 - Bad Request 请求出现语法错误。
// 403 - Unauthorized 没有权限访问，访问被拒绝
// 404 - Not Found 请求地址有错误
 


// post 
// 创建XMLHttpRequest对象
const xhr = new XMLHttpRequest()
// 创建一个 get 请求，true 采用异步
xhr.open('POST', './test.json', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            alert(xhr.responseText)
        }
    }
}
//发送请求
const postData={
    userName:'zhangsan',
    password:'xxx'
}
xhr.send(JSON.stringify(postData))//发送格式为json字符串


function ajax(url){
    return p =new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        xhr.open('GET',url,true)
        xhr.onreadystatechange=function(){
            if (xhr.readyState === 4) {
                if (xhr.status===200) {
                    resolve(JSON.parse(xhr.responseText))
                } else if (xhr.status === 404) {
                    reject(new Error('404 not found！'))
                }{

                }
            }
        }
        xhr.send(null)
    })
}
