import React, { Component } from 'react';
import './bottombar.css';
import tabsicon from '@assets/icon/bottom-bar.png';
class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() { 
    const spriteIcon = {
      backgroundSize: '100% 100%',
      background: `url(${tabsicon})`
    }
    return (  
      <div>
        <div className="tabsWrapper">
          <div className="tabs">
            <div className="tabItem main">
              <div className="spriteIcon" style={spriteIcon}> </div>
              <div className="tabTit">首页</div>
            </div>
            <div className="tabItem type">
              {/* <img src={tabsicon} alt=""/> */}
              <div className="tabTit">分类</div>
            </div>
            <div className="tabItem things">
              {/* <img src={tabsicon} alt=""/> */}
              <div className="tabTit">识物</div>
            </div>
            <div className="tabItem mall">
              {/* <img src={tabsicon} alt=""/> */}
              <div className="tabTit">购物车</div>
            </div>
            <div className="tabItem mine">
              {/* <img src={tabsicon} alt=""/> */}
              <div className="tabTit">个人</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default BottomBar;