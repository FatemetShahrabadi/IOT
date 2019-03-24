import React, {Component} from 'react';

class SidebarMinimizer extends Component {

  sidebarMinimize() {
    document.body.classList.toggle('sidebar2-minimized');
  }

  brandMinimize() {
    document.body.classList.toggle('brand-minimized');
  }

  render() {
    return (
      <button className="sidebar2-minimizer" type="button" onClick={(event) => { this.sidebarMinimize(); this.brandMinimize() }}></button>
    )
  }
}

export default SidebarMinimizer;
