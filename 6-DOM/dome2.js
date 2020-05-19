// DOM结构操作
// -新增、插入节点 createElement appendChild

//容器
const div1=document.getElementById('div1')
// 新建节点
const newp=document.createElement('p')
newp.innerHTML="this is newp"
// 插入节点
div1.appendChild(newp)

// 移动节点 对现有节点进行appendChild操作是会移动该节点
// 容器 2
const div2 = document.getElementById('div2')
const p1=document.getElementById('p1') //
div2.appendChild(p1)



// -获取父元素 parentNode
console.log(p1.parentNode)

// -获取子元素列表 childNodes
console.log(div1.childNodes) //[#test,p ...]//包含文本元素
// 只获取节点子元素 (数组filter()解决)：
const divChildNodesP=Array.prototype.slice.call(div.childNodes).filter(child=>{
    if (child.nodeType == 1) {
        return true
    }
    return false
})
console.log(divChildNodesP) //[p,p,p]


// -删除子节点 removeChild()
div1.removeChild(divChildNodesP[0])//删除第一个p元素