/**
 *  路由配置
 */
import Home from '../containers/Home';
const router = [
  {path:'/',component:Home,exact:true},
  {path:'/about',component:Home},
];

export default router;