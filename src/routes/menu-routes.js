import HomePage from "../containers/UserTemplate/HomePage/HomePage";
import Admin from "../containers/AdminTemplate/Admin";
import MovieDetailPage from "../containers/UserTemplate/MovieDetailPage/MovieDetailPage";
import CommingSoonPage from '../containers/CommingSoonPage/CommingSoonPage'
import BookingTicketPage from "../containers/UserTemplate/BookingTicketPage/BookingTicketPage"

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
    },
    {
        exact: false,
        path: '/phim',
        component: MovieDetailPage
    },
]

const routeAdmin = [
    {
        exact: true,
        path: '/admin',
        component: Admin
    }
]
export {routeUser, routeAdmin}