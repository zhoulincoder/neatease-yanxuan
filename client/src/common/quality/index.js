import React, { Component } from 'react';
import './quality.css'

class Quality extends Component {
  constructor(props) {
    super(props)
    this.state = {
      qTitle: [
        {
          title: '网易自营品牌',
          id: 'quality_logo'
        },
        {
          title: '30天无忧退货',
          id: 'quality_safe'
        },
        {
          title: '48小时快速退款',
          id: 'quality_good'
        }
      ]
    }
  }

  render() {
    return (
      <div className="quality-wrapper">
        {
          this.state.qTitle.map((item, index) => {
            const iconPath = (require('../../../assets/icon/'+item.id+'.png'))
            return (
              <div className='quality-item' key={index}>
                <div className="quality-icon">
                  <img src={iconPath} alt=""/>
                </div>
                <div className="quality-title">{item.title}</div>
              </div>
            )
          })
        }
        
      </div>
    );
  }
}

export default Quality;