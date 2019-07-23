import React, { Component } from 'react';
import axios from 'axios';
class Category extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {
    axios
      .get('/categorypage')
      .then(res => {
        console.log(res);
      })
  }
  render() { 
    return (  
      <div>
        categortpage
      </div>
    );
  }
}
 
export default Category;