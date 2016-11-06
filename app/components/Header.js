import React from 'react';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import List from 'material-ui/List'
import MenuList from '../components/MenuList'

class Header extends React.Component {

  constructor() {
    super();
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    e.preventDefault();
    this.refs.drawer.setState({open : true});
  }

	render() {
		return (
				<div id="page_container">
					<Drawer
						ref="drawer"
						docked={false}>
            <MenuList />
          </Drawer>
					<header>
						<AppBar title='Materialized React' onLeftIconButtonTouchTap={this._handleClick} />
					</header>
				</div>
			);
  }
}

export default Header
