import React, { Component } from 'react';
import './searchbox.css'
import searchicon from '@assets/icon/search_icon.png'
class SearchBox extends Component {
  render() { 
    return (  
      <div className="searchBox">
        <div className="searchLogo">
          <img src={searchicon} width="100%" height="100%" alt=""/>
        </div>
        <input type="text" placeholder="为中国消费者严选好货" className="searchInput" />
      </div>
    );
  }
}
 
export default SearchBox;