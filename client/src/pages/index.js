import React, { Component } from 'react';
import Home from '@pages/home/Home'
import Category from '@pages/category/category'
import Things from '@pages/things/things'
import Mall from '@pages/mall/mall'
import Mine from '@pages/mine/mine'
import {
  BrowserRouter as Router, Route, Switch,
  Redirect, NavLink
} from 'react-router-dom';
import './index.css'


class YanXuan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        { tabName: '首页', id: 'home' },
        { tabName: '分类', id: 'category' },
        { tabName: '识物', id: 'things' },
        { tabName: '购物车', id: 'mall' },
        { tabName: '个人', id: 'mine' },
      ],
      current: 0
    }
  }
  tabsToLink(e) {
    console.log(e);
    this.setState({
      current: e
    })
  }
  render() {
    const { current } = this.state
    return (
      <Router>
        <div>
          <div className="tabsWrapper">
            {
              this.state.tabs.map((item, index) => {
                return (
                  <NavLink className="nav-link" to={`/${item.id}`} key={index} 
                    onClick={() => {this.tabsToLink(index)}}>
                    <div className="tab-item" >
                      <div className="tab-item-icon">
                        <img src={current === index ? require(`../../assets/icon/${item.id}_active.png`) : 
                          require(`../../assets/icon/${item.id}.png`) } alt="" />
                      </div>
                      <div className={current === index ? 'tab-item-name_active' : 'tab-item-name'}>
                      {item.tabName}</div>
                    </div>
                  </NavLink>
                )
              })
            }
          </div>
          <Switch>
            <Route path='/mine' component={Mine} />
            <Route path='/mall' component={Mall} />
            <Route path='/things' component={Things} />
            <Route path='/category' component={Category} />
            <Route path='/home' component={Home} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default YanXuan;