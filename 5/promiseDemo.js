
function loadImg(src2) {
    return new Promise(
        //参数 resolve reject 均是函数
        (resolve,reject)=>{
            const img1 = document.createElement('image')
            img1.src = src2
            img1.onload=()=>{
                resolve(img1)
            }
            img1.onerror=()=>{
                const err = new Error(`图片加载失败！${src}`)
                reject(err)
            }
            
        }
    )
}
const url1 = 'https://img4.sycdn.imooc.com/szimg/5dbffa9109ef425a12000676-360-202.png'
const url2 = 'https://img4.sycdn.imooc.com/szimg/5dbffa9109ef425a12000676-360-202.png'
loadImg(url1).then(img=>{
    console.log(img.width)
    return img
}).then(img=>{
    console.log(img.height)
    return loadImg(url2)
}).then(img2=>{
    console.log(img2.width)
    return img2
}).then(img2=>{
    console.log(img2.height)
})
.catch(err=>{
    console.log(err)
})