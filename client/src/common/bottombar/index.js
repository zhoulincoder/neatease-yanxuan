import React, { Component } from 'react';
import './tabitem.css';
import TabItem from './tabitem'
// import tabsicon from '@assets/icon'
class BottomBar extends Component {
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
  itemNav (index) {
    //在这里就可以取到子组件传来的值
    this.setState({
      current: index,
    })
  }

  render() {
    // (require(`${tabsicon}/${item.id}_active.png`)) : (require(`${tabsicon}/${item.id}.png`))
  
    const tabsList = this.state.tabs.map((item, index) => {
      var tabUrl = index === this.state.current ? 
      (require('../../../assets/icon/'+item.id+'_active.png')) : 
      (require('../../../assets/icon/'+item.id+'.png'))
      var tabClass = index === this.state.current ? 'tab-active' : ''
      return (
        <TabItem key={index} tabClass={tabClass} tabUrl={tabUrl} tabName={item.tabName}
        tabEvent={ () => { this.itemNav(index)}} linkId={item.id}/>
      )
    })
    return (
      <div className="tabsWrapper">
          { tabsList }
      </div>
    );
  }
}

export default BottomBar;


