import HomePage from "../containers/UserTemplate/HomePage/HomePage"
import Admin from "../containers/AdminTemplate/Admin"
import CommingSoonPage from '../containers/CommingSoonPage/CommingSoonPage'

const routeUser = [
    {
        exact: true,
        path: '/',
        component: HomePage
    },
    {
        exact: false,
        path: '/comming-soon',
        component: CommingSoonPage
    }
]

const routeAdmin = [
    {
        exact: true,
        path: '/admin',
        component: Admin
    }
]
export {routeUser, routeAdmin}