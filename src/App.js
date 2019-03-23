/**
 * 返回一个基本的App
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './containers/Home';
import  {ConnectedRouter}  from 'react-router-redux';
import router from './router/route';
import './assets/main.less';
import './assets/font icons/fonts.css';
import titleImg from './assets/img/u139.png';

const configRoute = (router)=>{
  return (
     <div>
      {
          router.map((route,index) =>(
            <Route key= { index + 'route-render'} path={ route.path } exact={route.exact?route.exact: false } component={route.component}  />
          ))
      }
    </div>
  )

} 
const BasicExample = () => (
    <div className="app-container">
      <header id='header'>
        <div className="hbox clearfix">
          <h1 className='logo'>
            <a title="爱定网" href='/'>爱定网</a>
          </h1>
        </div>
          {/* nav */}
        <ul className='nav_ul'>
          <li className='nav_li'><Link to="/">全部分类</Link></li>
          <li className='nav_li'><Link to="/clothes">服装定制</Link></li>
          <li className='nav_li'><Link to="/company">定制公司</Link></li>
          <li className='nav_li'><Link to="/college">定制学堂</Link></li>
        </ul>
          {/* search form */}
          <div className="search_form">
            <form method="get" action="/s" className="form">
              <input type="text" className="search-box" />
              <i className='icon-search'></i>
            </form>
          </div>
      </header>
      <section id='content' >
        {
          configRoute(router)
        }
     </section>
     <footer id="footer">
          <span className="copyright">
              &copy Copyright 2019 AiDingWang
          </span>
      </footer>
    </div>
)
export default BasicExample;