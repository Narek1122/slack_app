import Login from "./components/Auth/Login";
import Welcome from "./components/Welcome";
import SignUp from "./components/Auth/SignUp";
import Dashboard from "./components/User/Dashboard";


export const routes = [{
        name: 'home',
        path: '/',
        component: Welcome
    },
    {
        name: 'signUp',
        path: '/sign_up',
        component: SignUp,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('user_token')) {
                return next({
                    name: 'dashboard'
                })
            }
            next()
        }

    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem('user_token')) {
                return next({
                    name: 'dashboard'
                })
            }
            next()
        }

    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('user_token')) {
                return next({
                    name: 'login'
                })
            }
            next()
        }

    },
];