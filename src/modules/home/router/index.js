
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
            name:'proyectos',
            component: () => import('../pages/ProyectosPage.vue')

        }
    ]
}

export default routerHome