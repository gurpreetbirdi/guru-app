import React, { Component } from 'react';


class navigationbar extends Component {

 render() {
  return (
    <button className="sud" type="button" onClick={this.props.Increment}>Increment</button>
  );
 }
}
export default navigationbar;
