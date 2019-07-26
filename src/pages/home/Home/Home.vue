<template>
    <div>
        <div class="page" id="home">
            <div class="header border-bottom">
                <h1>首页</h1>
            </div>
            <ul class="nav-cate" >
                <li v-for='(item,index) in newData' :key='index'>{{item.name}}</li>
            </ul>
            <div class="content">
                <div>
                    <div class='con-banner'>
                        <!-- <router-link to="/home/cate/123">test</router-link> -->
                        <img 
                        v-for='(item,index) in newUrlData'
                        :key="index"
                        :src="item.picUrl" alt="">
                    </div>

                </div>
            </div>
        </div>

        <!-- <transition enter-active-class='slideInRight' leave-active-class='slideOutRight'>
        <router-view></router-view>
        </transition> -->
        <!-- <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view></router-view>
        </transition> -->
    </div>
</template>

<script>
import axios from 'axios'
import homeService from '../../../services/homeServices'
export default {
    data(){
        return {
            newData: [],
            newUrlData: [],
            newCateData: [],
            newHotData: []
        }
    },
    created(){
        homeService.requestHomeNavData().then((data)=>{
           this.newData = data;
       })
        homeService.requestHomeBanner().then((data)=>{
            this.newUrlData = data;
        }) 
       homeService.requestHomeCate().then((data)=>{
           this.newCateData = data;
       })
        homeService.requestHomeHot().then((data)=>{
            this.newHotData = data;
        })
        // axios.get('/api/home/hot')
        // .then(response=>{
        //     if(response.status===200 && response.data.code===0){
        //         // console.log(response)
        //         let newHotData = response.data.data.map(({picUrl})=>({picUrl}))
        //     // console.log('1')
        //         this.newHotData = newHotData;
        //     }else{
        //         console.log('失败')
        //     }
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })

    }
}
</script>

<style lang='scss' scoped>
.header{
    width: 100%;
    height: 44px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
}
.nav-cate{
    width: 100%;
    height: 30px;
    display: flex;
    position: absolute;
    top: 44px;
    left: 0;
    li{
        width: 143px;
    }
}
.content{
    position: absolute;
    top: 104px;
    bottom: 49px;
    left: 0;
    overflow: auto;
    .con-banner{
        height: 185px;
        width: 100%;
        overflow: hidden;
        img{
            // background-size: 100%;
            height: 185px;
            width: 100%;
        }
    }

}
</style>

