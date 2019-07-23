import React, { Component } from 'react'
import {
  BrowserRouter as Router, Route, Switch,
  Redirect, NavLink
} from 'react-router-dom';
import './tabbar.css'

class TabBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0,
    }
  }
  tabsToLink(e) {
    console.log(e);
    this.setState({
      current: e
    })
  }
  render() {
    const { tabsList } = this.props
    const { current } = this.state
    return (
      <div className="tabbar">
        <div className="tabs-list">
          {
            tabsList.map((item, index) => (
              <NavLink key={index} className="nav-link" 
              to={ item.id === '' ? `/home` : `/home/${item.id}`}
              onClick={() => {this.tabsToLink(index)}}>
                <div className={current === index ? 'tabs-item_active' : 'tabs-item'}>
                  <div className="tabs-text">{item.tabName}</div>
                </div>
              </NavLink>
            ))
          }
        </div>
      </div>
    );
  }
}

export default TabBar;