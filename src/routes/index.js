import Home from '../pages/index';
import QandA from '../pages/q-and-a/index'
import Subject from '../pages/q-and-a/[subject]/index'
import SubSubject from '../pages/q-and-a/[subject]/[subsubject]/index'
// import ChieldSubject from '../pages/q-and-a/[subject]/[subsubject]/[chieldsubject]/index'
import TextbookSolutionsManuals from '../pages/textbook-solutions-manuals/index'
import Book from '../pages/textbook-solutions-manuals/[subject]/index'
import SubSubjectBook from '../pages/textbook-solutions-manuals/[subject]/[subsubject]'
import WritingHelp from '../pages/writing-help/index'
import OnlineAssignmentHelp from '../pages/writing-help/online-assignment-help'
import OnlineAssignmentHelp2 from '../pages/writing-help/online-assignment-help-2/[online_assignment_help_2]'
import SignIn from '../pages/auth/signin';
import SignUp from '../pages/auth/signup';
import Contact from '../pages/contact';
import About from '../pages/about';
import PrivacyAndPolicy from '../pages/privacy';
import TermsAndConditions from '../pages/terms';
import Blog from '../pages/blogs/index';
import BlogId from '../pages/blogs/[id]'
import Search from '../pages/search/[search]';

import Dashboard from '../pages/dashboard'
import MyOrders from '../pages/user/my-orders'
import MyProfile from '../pages/user/my-profile'
import MyTbs from '../pages/user/my-tbs'
import MySubs from '../pages/user/my-subs'
import AskQuestion from '../pages/user/ask-a-question'
import MyQuestion from '../pages/user/my-question'
import Notifications from '../pages/user/notifications'
import MyOrderDetails from '../pages/user/my-order-details/[my_order_details]'
import Cancelation from '../pages/user/cancelation'

import Faq from '../pages/faqs/index'
import FaqId from '../pages/faqs/[id]'

import PayNow from '../pages/paynow';

export const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/search/:search',
        component: Search
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/blog/:id',
        component: BlogId
    },
    {
        path: '/q-and-a',
        component: QandA,
    },
    {
        path: '/q-and-a/:subject',
        component: Subject,
    },
    {
        path: '/q-and-a/:subject/:subsubject',
        component: SubSubject,
    },
    // was used to show child category
    // {
    //     path: '/q-and-a/:subject/:subsubject/:chieldsubject',
    //     component: ChieldSubject,
    // },
    {
        path: '/textbook-solutions-manuals',
        component: TextbookSolutionsManuals,
    },
    {
        path: '/textbook-solutions-manuals/:subject',
        component: Book,
    },
    {
        path: '/textbook-solutions-manuals/:subject/:subsubject',
        component: SubSubjectBook,
    },
    {
        path: '/writing-help',
        component: WritingHelp,
    },
    {
        path: '/writing-help/online-assignment-help',
        component: OnlineAssignmentHelp,
    },
    {
        path: '/writing-help/online-assignment-help-2/:my_order_details',
        component: OnlineAssignmentHelp2,
    },
    {
        path: '/auth/signin',
        component: SignIn,
    },
    {
        path: '/auth/signup',
        component: SignUp,
    },
    {
        path: '/contact',
        component: Contact,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/privacy-and-policy',
        component: PrivacyAndPolicy,
    },
    {
        path: '/terms-and-conditions',
        component: TermsAndConditions,
    },
    {
        path: '/faqs',
        component: Faq
    },
    {
        path: '/faqs/:id',
        component: FaqId
    },
]
export const privateRoutes = [
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/user/my-orders',
        component: MyOrders
    },
    {
        path: '/user/my-profile',
        component: MyProfile
    },
    {
        path: '/user/my-tbs',
        component: MyTbs
    },
    {
        path: '/user/my-subs',
        component: MySubs
    },
    {
        path: '/user/ask-a-question',
        component: AskQuestion
    },
    {
        path: '/user/my-question',
        component: MyQuestion
    },
    {
        path: '/user/notifications',
        component: Notifications
    },
    {
        path: '/user/cancelation',
        component: Cancelation
    },
    {
        path: '/user/my-order-details/:my_order_details',
        component: MyOrderDetails
    },
    {
        path: '/paynow',
        component: PayNow
    },
]