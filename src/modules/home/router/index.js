import routerProyecto from '@/modules/proyectos/router'


const routerHome = {
    path:'/home',
    component: () => import('../layouts/InicioHome.vue'),
    children:[
        {
            path:'',
            name:'sobre-mi',
            component: () => import('../pages/AboutMi.vue')
        },
        {
            path:'/proyectos',
            ...routerProyecto
        },    ]
}

export default routerHome