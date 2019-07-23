import React, { Component } from 'react';
import { BrowserRouter as NavLink } from 'react-router-dom'
class TabItem extends Component {

	render() {
		console.log(this.props.linkId);
		
		return (
			<NavLink className='nav-link' to={`/${this.props.linkId}`}>
				<div className={`tab-item ${this.props.tabClass}`} onClick={this.props.tabEvent}>
					<div className="tab-item-icon"><img src={this.props.tabUrl} /></div>
					<div className="tab-item-name">{this.props.tabName}</div>
				</div>
			</NavLink>
		);
	}
}

export default TabItem;