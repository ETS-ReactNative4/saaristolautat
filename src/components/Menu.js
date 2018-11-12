import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from './MenuItem';
import { L2 } from '../lib/localizer';
import { menuItemClicked } from '../lib/ferries';

class Menu extends Component {

  menuItems = ["gettingthere", "alandferriesinfo", "finlandferriesinfo", "live", "linksinfo", "appinfo"];

  render() {
    const items = this.menuItems.map(item => {
      return (<MenuItem key={item} name={L2("menu." + item)} onClick={() => menuItemClicked(item)} />);
    })
    return (
      <div id="menu">
        <div className="menucontainer" id="menucontent">
          {items}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.settings.locale
  };
};

export default connect(mapStateToProps)(Menu);