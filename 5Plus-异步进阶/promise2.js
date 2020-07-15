const p1 = Promise.resolve(200)
// console.log('p1', p1) //resolved: 200
p1.then(data=>{
    console.log('data', data) //data 200
}).catch(err=>{
    console.error('err',err)
})

const p2 = Promise.reject('error')
// console.log('p2', p2) //rejected: error
p2.then(data => {
    console.log('data', data)
}).catch(err => {
    console.error('err', err) //err error
})