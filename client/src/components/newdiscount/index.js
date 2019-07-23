import React, { Component } from 'react';
import mew15 from '@assets/img/new15.png'
import bottle from '@assets/img/newbottle.png'
import bottle2 from '@assets/img/newbottle2.png'
import './newdiscount.css'
class NewDisc extends Component {

  render() {
    return (
      <div>
        <div className="news-discount">
          <div className="news-title">新人专享礼</div>
          <div className="news-welfare">
            <div className="welfare-left">
              <div className="title">新人专享礼包</div>
              <div className="left-bg">
                <img src={mew15} alt="" />
              </div>
            </div>
            <div className="welfare-top">
              <div className="top-title">
                <div className="top-matitle">福利社</div>
                <div className="top-subtitle">今日特价</div>
              </div>
              <div className="top-bg">
                <img src={bottle} alt="" />
              </div>
              <div className="active-item">
                <div className="item-mai">￥64.9</div>
                <div className="item-sub">￥74.9</div>
              </div>
            </div>
            <div className="welfare-bot">
              <div className="top-title">
                <div className="top-matitle">新人拼团</div>
                <div className="bot-subtitle">1元起包邮</div>
              </div>
              <div className="top-bg">
                <img src={bottle2} alt="" />
              </div>
              <div className="active-item">
                <div className="item-mai">￥10</div>
                <div className="item-sub">￥17.8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewDisc;