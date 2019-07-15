import React, { Component } from 'react'
import './tabbar.css'

class TabBar extends Component {

  render() {
    const { tabsList } = this.props
    return (
      <div className="tabbar">
        <div className="tabsList">
          {
            tabsList.map((item, index) => (
              <div key={index} className="tabsItem">
                <div className="tabsText">{item}</div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default TabBar;