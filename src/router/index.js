import { createRouter, createWebHistory } from 'vue-router'
import CoachDetail from '../pages/coaches/CoachDetail.vue';
import CoachesList from '../pages/coaches/CoachesList.vue';
import CoachRegistration from '../pages/coaches/CoachRegistration.vue';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import RequestsReceived from '../pages/requests/RequestsReceived.vue';
import NotFound from '../pages/NotFound.vue';
import UserAuth from '../pages/auth/UserAuth.vue';

const routes = [
  {
    path: '/',
    redirect: '/coaches'
  },
  {
    path: '/coaches',
    name: 'coachesList',
    component: CoachesList
  },
  {
    path: '/coaches/:id',
    name: 'coachDetail',
    component: CoachDetail,
    props: true,
    children: [
      {
        path: 'contact',
        name: 'contactCoach',
        component: ContactCoach // /coaches/c1/contact
      }
    ]
  },
  {
    path: '/register',
    name: 'coachRegistration',
    component: CoachRegistration
  },
  {
    path: '/requests',
    name: 'requestsReceived',
    component: RequestsReceived
  },
  {
    path: '/auth',
    name: 'userAuth',
    component: UserAuth
  },
  {
    path: '/:notFound(.*)',
    name: 'notFound',
    component: NotFound
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
