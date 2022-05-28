
const routerHome = {
    path:'/home',
    name: 'home',
    component: () => import('../layouts/InicioHome.vue'),
    children:[
        {
            path:'',
            name:'sobre-mi',
            component: () => import('../pages/AboutMi.vue')
        }
    ]
}

export default routerHome