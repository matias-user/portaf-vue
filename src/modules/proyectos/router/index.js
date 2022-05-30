
const routes = {
    path: '/proyectos',
    component: () => import('../layouts/ProyectosLayout.vue'),
    children:[
        {
            path:'',
            name:'proyectos',
            component: ()=> import('../pages/ProyectoPage.vue')
        }
    ]
}

export default routes