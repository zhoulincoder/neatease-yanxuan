import React, { Component } from 'react';
import Swiper from 'swiper';
import './swiper.css'
import 'swiper/dist/css/swiper.css';
class MySwiper extends Component {
  componentDidMount() {
    this.slider= new Swiper('.slider-container', {
      loop: true,
      autoplay: true,
      pagination: '.swiper-pagination'
    })
    console.log('123');

  }

  render() {
    const { swiperImg } = this.props

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