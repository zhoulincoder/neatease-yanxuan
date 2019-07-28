import React, { Component } from 'react';
import TabBar from '@common/tabbar/index';
import SearchBox from '@common/searchbox/index';
import MySwiper from '@common/swiper/index';
import Scroll from '@common/scroll/index';
import Quality from '@common/quality/index'
import RecOptions from '@components/recoptions/index'
import NewDisc from '@components/newdiscount/index'
import BrandSales from '@components/brandsales/index'
import axios from 'axios';
import './home.css';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsList: [],
      swiperImg: [],
      recommendIcon: [],
      directSales: []
    }
  }
  componentDidMount() {
    console.log('componentDidMount');
    axios
      .get('/homepage')
      .then(res => {
        const { swiperImg, tabsList, recommendIcon, directSales } = res.data
        console.log('请求数据了');
        this.setState({
          swiperImg,
          recommendIcon,
          tabsList,
          directSales
        })
      })
  }
  render() {
    const { swiperImg, tabsList, recommendIcon, directSales } = this.state
    return (
      <div className="homePage">
        <div className="pageTop">
          <div className="headWrapper">
            <div className="textLogo">
              <img src="http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt=""
                width="100%" height="100%" />
            </div>
            <div className="homeSearch"><SearchBox /></div>
            <div className="handleLogin">登录</div>
          </div>
          <TabBar tabsList={tabsList} />
        </div>
        <Scroll >
          {/* 这里要以推荐，居家生活等做单独的组件 */}
          <div className="pageContent">
            <MySwiper swiperImg={swiperImg} />
            <Quality />
            <RecOptions recommendIcon={recommendIcon} />
            <NewDisc />
            <BrandSales directSales={directSales}/>
          </div>
        </Scroll>

      </div>
    );
  }
}

export default Home;