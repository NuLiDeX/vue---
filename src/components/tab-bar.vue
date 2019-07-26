<template>
    <nav class='tab-bar border-top'>
        <template v-for='item in tabData'> 
            <router-link class='tab-item' :key='item.id'  :to='item.path'>
                <span></span>
                <span>{{item.name}}</span>
            </router-link>

        </template>


    </nav>
</template>

<script>
export default {
    name: 'tab-bar',
    data(){
        return {
            tabData: [
                {id: 1, name: '首页', path: '/home'},
                {id: 2, name: '分类', path: '/category'},
                {id: 3, name: '识物', path: '/topic'},
                {id: 4, name: '购物车', path: '/cart'},
                {id: 5, name: '我的', path: '/mine'}
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
.tab-bar{
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #eee;
    display: flex;
    .tab-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        span:nth-of-type(1){
            width: 24px;
            height: 24px;
            // background: red;
            margin: 4px auto 0;
            background-image: url('/images/tab.png');
            background-size: 100%;
            // background-position: 0 -30px;
        }
        span:nth-of-type(2){
            flex: 1;
            text-align: center;
        } 

    }
    .tab-item:nth-of-type(1){
        span:nth-of-type(1){
            background-position: 0 -150px;
        }
    }
    .tab-item.router-link-active:nth-of-type(1){
        span:nth-of-type(1){
            background-position: 0 -120px;
        }
    }
    .tab-item:nth-of-type(2){
        span:nth-of-type(1){
            background-position: 0 -90px;
        }
    }
    .tab-item.router-link-active:nth-of-type(2){
        span:nth-of-type(1){
            background-position: 0 -60px;
        }
    }
    .tab-item:nth-of-type(3){
        span:nth-of-type(1){
            background-position: 0 -210px;
        }
    }
    .tab-item.router-link-active:nth-of-type(3){
        span:nth-of-type(1){
            background-position: 0 -180px;
        }
    }
    .tab-item:nth-of-type(4){
        span:nth-of-type(1){
            background-position: 0 -30px;
        }
    }
    .tab-item.router-link-active:nth-of-type(4){
        span:nth-of-type(1){
            background-position: 0 0;
        }
    }
    .tab-item:nth-of-type(5){
        span:nth-of-type(1){
            background-position: 0 -270px;
        }
    }
    .tab-item.router-link-active:nth-of-type(5){
        span:nth-of-type(1){
            background-position: 0 -240px;
        }
    }
}
</style>
