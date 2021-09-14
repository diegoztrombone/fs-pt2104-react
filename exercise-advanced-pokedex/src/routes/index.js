import Index from '../pages/index'
import Detal from '../pages/detail'
import Header from '../components/Header'

export default [
    {
        path: '/',
        component: Index,
        exact: true,
      },
      {
        path: '/detail',
        component: Detal,
        exact: true,
      }
]