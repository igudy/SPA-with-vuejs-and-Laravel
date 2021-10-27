import Home from './components/Home';
import About from './components/About';



export default{
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },

        {
            path: '/about',
            name: 'about',
            component: About,
        }
    ]
}