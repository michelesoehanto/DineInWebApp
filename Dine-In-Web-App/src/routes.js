import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Map from './components/Map.vue'

export default[
    {
        path:'/',
        component:Home
    },
    {
        path:'/profile',
        component: Profile
    },
    {
        path:'/map',
        component: Map
    }
]