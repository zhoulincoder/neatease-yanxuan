import React, { Component } from 'react';
import Swiper from 'swiper';
import './swiper.css'
import 'swiper/dist/css/swiper.css';
class MySwiper extends Component {
  constructor(props) {
    super(props)
  }
  // componentDidMount() {
  //   console.log('123');
    
  // }
  // componentWillReceiveProps() {
  //   console.log('12222');
  //   console.log(this.props);
  // }
  // componentWillUpdate() {
  //   console.log('14');
  //   console.log(this.props);
    
  // }
  render() {
    // console.log(this.props);
    const { swiperImg } = this.props
    new Swiper('.slider-container', {
      loop: true,
      autoplay: true,
      delay: 3000,
      // pagination: '.swiper-pagination',
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true//修改swiper的父元素时，自动初始化swiper
    })
    
    return (
      <div>
        <div className="slider-container">
          <div className="swiper-wrapper">
            {
              swiperImg.map((slider, index) => (
                <div className="swiper-slide" key={index}>
                  <img src={slider.imgUrl} alt="" width="100%" height="100%" />
                </div>
              ))
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>

    );
  }
}

export default MySwiper;