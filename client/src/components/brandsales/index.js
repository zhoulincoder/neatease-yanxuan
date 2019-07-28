import React, { Component } from 'react';
import './brandsales.css'

class BrandSales extends Component {


  render() {
    const { directSales } = this.props
    return (
      <div>
        <div className="brand-sales">
          <div className="wrapper-title">品牌制造商直供</div>
          <div className="wrapper-brand">
            {
              directSales.map((item, index) => {
                return (
                  <div className="sales-item" key={index}>
                    <div className="float-title">
                      <div className="sales-maintitle">{item.mainTitle}</div>
                      <div className="sales-subtitle">{item.subTitle}</div>
                    </div>
                    <img src={item.bgImg} alt="" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default BrandSales;