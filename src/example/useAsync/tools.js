function getUserName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('lwp')
            // reject('请求错误')
        },1000)
    })
}
function getEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['1462191066@qq.com','1462191066@qq.com','1462191066@qq.com','1462191066@qq.com','1462191066@qq.com'])
            // reject('请求错误')
        },1000)
    })
}
export {getUserName,getEmail}