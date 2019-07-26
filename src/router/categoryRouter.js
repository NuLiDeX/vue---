export default [
    {
        path: '/category',
        component: ()=>import('../pages/category/Category/Category.vue'),
        children: [
            {
                path: 'cateList/:cate_id/:sub_cate_id',
                component: ()=>import('../pages/category/CateList/CateList.vue'),
                children:[
                    {
                        path: 'detail/:goods_id',
                        component: ()=>import('../pages/common/Detail/Detail.vue')
                    }
                    
                ] 
            }

        ]
    }
]