function loadImg(src) {
    return new Promise(
        //参数 resolve reject 均是函数
        (resolve, reject) => {
            const img = document.createElement('img')
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                const err = new Error(`图片加载失败！${src}`)
                reject(err)
            }
            img.src = src
        }
    )
}
const url1 = 'https://img3.mukewang.com/5686a790000124f701000100-100-100.jpg'
const url2 = 'https://img3.mukewang.com/5686a790000124f701000100-100-100.jpg'

!(async function(){
    console.log('start')
    const img1 = await loadImg(url1)
    console.log(img1.width)
    const img2 = await loadImg(url2)
    console.log(img2.height)
})()//立即执行函数