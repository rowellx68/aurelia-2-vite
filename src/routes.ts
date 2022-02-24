import { Routeable } from '@aurelia/router'

const routes: Routeable[] = [
  {
    id: 'home',
    name: 'home-page',
    path: '',
    component: () => import('./modules/landing/landing-page'),
    title: 'Home'
  },
  {
    id: 'account',
    name: 'account-page',
    path: 'account',
    component: () => import('./modules/account/account-page'),
    title: 'My Account'
  }
]

export default routes