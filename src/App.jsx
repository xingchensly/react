import React ,{Component}from 'react';
import './App.css'
import logo from "./logo.svg";
import Index from './index/index.jsx'
import Manage from './manage/manage.jsx'
import {BrowserRouter, NavLink, Route} from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <img src={logo} alt=""/>
            <Route exact path='/' component={Index}></Route>
            <Route path='/manage' component={Manage}></Route>
            <div className="tab-bar">
                <NavLink exact to='/' activeClassName='tab-bar__active'> 
                首页
                </NavLink>
                <NavLink to='/manage' activeClassName='tab-bar__active'>
                人员管理
                </NavLink>
            </div>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
