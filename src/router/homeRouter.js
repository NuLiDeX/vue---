export default [
    {
        path: '/home',
        component: ()=>import('../pages/home/Home/Home.vue'),
        children: [
             //搜索
            {
                path: 'search',
                component: ()=>import('../pages/home/Search/Search.vue'),
                children: [
                    {
                        path: 'result/:keyword',
                        component: ()=>import('../pages/home/SearchResult/SearchResult.vue')
                    }

                ]
            },
            //分类列表
            {
                path: 'cate/:cate_id',
                component: ()=>import('../pages/home/CateList/CateList.vue'),
                children: [
                    {
                        path: 'detail/:goods_id',
                        component: ()=>import('../pages/common/Detail/Detail.vue')
                    }

                ]
            },
            //详情
            {
                path: 'detail/:goods_id',
                component: ()=>import('../pages/common/Detail/Detail.vue')
            }

        ]
    }
    
]

