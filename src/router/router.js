import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    {
        path: "/generarToken",
        component: () => import('../modules/inscripcion/page/GenerarToken') 
    },
    {
        path: "/guardarEstudiante",
        component: () => import('../modules/inscripcion/page/GuardarEstudiante') 
    },
    {
        path: "/:pathMatch(.*)*",
        //component: NoEncontradaPage
        component: () => import('../modules/inscripcion/components/NoEncontradaPage')
    }

]



const router=createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
