// 路由代码分割
import React, { lazy, Suspense } from "react";
import Home from '../views/Home/home'
import Login from '../views/Login/login'
// import SusLoading from '../components/suspenseCom'
// const SuspenseComponent= Components => {
//     return props => {
//         return (
//             <Suspense fallback={<SusLoading/>}>
//                 <Component {...props}></Component>
//             </Suspense>
//         )
//     }
// }

// const Home = lazy(() => import('../views/Home/home'))

export default [
    {
        name: '首页',
        path: '/',
        exact: true,
        component: Home,
    },
    {
        name: '登录页',
        path: '/login',
        component: Login
    }
]