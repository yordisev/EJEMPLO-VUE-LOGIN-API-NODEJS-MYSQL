import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Inicio from '../views/Inicio'
import DatosBasicos from '../views/DatosBasicos'
import EditarFuncionario from '../views/EditarFuncionario'
import Ingresos from '../views/Ingresos'
import axios from 'axios'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/inicio',
        name: 'Inicio',
        component: Inicio,
        meta: { requiresAuth: true }
    },
    {
        path: '/datosbasicos',
        name: 'DatosBasicos',
        component: DatosBasicos,
        meta: { requiresAuth: true }
    },
    {
        path: '/editarf',
        name: 'EditarFuncionario',
        component: EditarFuncionario,
        meta: { requiresAuth: true }
    },
    {
        path: '/ingresos',
        name: 'Ingresos',
        component: Ingresos,
        meta: { requiresAuth: true }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


axios.interceptors.response.use(success => success, error => {
    // console.log(error.response)
    if (error.response.status === 500 && error.response.data.message === 'jwt expired' || error.response.data.message === 'jwt malformed') {
        localStorage.clear();
        sessionStorage.clear();

    } else {
        console.log('este es el router')
    }
    return error;

})

function existToken() {
    var peticiontoken = localStorage.getItem("token");
    return peticiontoken;

}

router.beforeEach(async(to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && !(await existToken())) {
        next('/')
    } else {
        next()
    }
});
// router.beforeEach (async(to, from, next) => {
// const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//         if (requiresAuth && !(await login())){
//             next()
//         } else {
//             next('/')
//         }
// })

export default router