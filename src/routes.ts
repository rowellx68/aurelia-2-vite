import { Routeable } from 'aurelia'

const routes: Routeable[] = [
  {
    id: 'home',
    path: '',
    component: import('./modules/landing/landing-page'),
    title: 'Home'
  },
  {
    id: 'account',
    path: 'account',
    component: import('./modules/account/account-page'),
    title: 'My Account'
  }
]

export default routes