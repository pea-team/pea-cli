import BasicLayout from '@layouts/BasicLayout'
import Index from '@pages/index'
import TodoList from '@pages/TodoList'
import TodoItem from '@pages/TodoItem'
//

const routes = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        component: Index,
      },
    ],
  },
  {
    path: '/todo',
    component: BasicLayout,
    children: [
      {
        path: '/list',
        component: TodoList,
      },
      {
        path: '/item',
        component: TodoItem,
      },
    ],
  },
]

export default routes

