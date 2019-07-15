import React, { Component } from 'react';
import TabBar from '@common/tabbar/index'
import SearchBox from '@common/searchbox/index';
import './home.css'
class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      tabsList: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色'],
    }
  }
  render() {
    return (
      <div className="homePage">
        <div className="headWrapper">
          <div className="textLogo">
            <img src="http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt=""
            width="100%" height="100%" />
          </div>
          <div className="homeSearch"><SearchBox /></div>
          <div className="handleLogin">登录</div>
        </div>
        <TabBar tabsList={this.state.tabsList} />
      </div>
    );
  }
}

export default Home;