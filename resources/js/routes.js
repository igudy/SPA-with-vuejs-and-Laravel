import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



export default{
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

        {
            path: '/about',
            name: 'about',
            component: About
        },

        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
}