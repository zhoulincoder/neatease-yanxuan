import React, { Component } from 'react';
import './recoptions.css'
class RecOptions extends Component {
  constructor(props) {
    super(props)
  }
  render() { 
    const { recommendIcon } = this.props
    return (  
      <div className='rec-wrapper'>
        {
          recommendIcon.map((item, index) => {
            return (
              <div className="rec-item" key={index}>
                <div className="rec-icon">
                  <img src={item.iconUrl} alt=""/>
                </div>
                <div className="rec-title">{item.title}</div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
 
export default RecOptions;