import axios from 'axios';
import api from '../request/api'
const requestHomeNavData = ()=>{
    return new Promise((resolve,reject)=>{
        axios.get(api.HOME_NAV_CATEGORY,)
        .then(response=>{
            if(response.status===200 && response.data.code===0){
                let newData = response.data.data.map(({id,name})=>({id,name}))
                // this.newData = newData;
                resolve(newData)
            }else{
                console.log('失败')
            }
        })
        .catch(error=>{
            console.log(error)
        })

    })
}


const requestHomeBanner = async ()=>{
let response = await axios.get(api.HOME_BANNER);
    if(response.status===200 && response.data.code===0){
        // console.log(this)
        console.log(response)
        let newUrlData = response.data.data.map(function(item){
            return {picUrl:item.picUrl}
        })
        return newUrlData;
    }else{
        console.log('失败')
    }  
}

// const requestHomeHot = ()=>{
//     return new Promise((resolve,reject)=>{
//         axios.get('/api/home/cate').then(response=>{
//             if(response.status===200 && response.data.code===0){
//                 let newCateData = response.data.data.map(({picUrl,text})=>({picUrl,text}))
//                 // this.newCateData = newCateData;
//                 resolve(newCateData)
//             }
//         })

//     })
// }
const requestHomeCate = async ()=>{
   
     let  response = await  axios.get(api.HOME_CATE)
            if(response.status===200 && response.data.code===0){
                let newCateData = response.data.data.map(({picUrl,text})=>({picUrl,text}))
                // this.newCateData = newCateData;
                return newCateData
            }else{
                console.log('失败')
            }  
}


// const requestHomeHot = ()=>{
//     return new Promise((resolve,reject)=>{
//         axios.get('/api/home/hot')
//         .then(response=>{
//             if(response.status===200 && response.data.code===0){
//                 let newHotData = response.data.data.map(({picUrl})=>({picUrl}))
//                 resolve(newHotData)
//             }else{
//                 console.log('失败')
//             }
//         })
//         .catch((error)=>{
//             console.log(error)
//         })

//     })
// }
const requestHomeHot = async ()=>{
    
    let response =await axios.get(api.HOME_HOT)
       
            if(response.status===200 && response.data.code===0){
                let newHotData = response.data.data.map(({picUrl})=>({picUrl}))
                return newHotData;
            }else{
                console.log('失败')
            } 
}


export default {
    requestHomeNavData,
    requestHomeBanner,
    requestHomeCate,
    requestHomeHot
}