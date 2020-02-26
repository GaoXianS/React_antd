import React, { Component } from 'react';
import { Dropdown, Icon } from 'antd';

class Dropdowns extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Dropdown overlay={this.props.menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="javaScript#" onClick={e => e.preventDefault()}>
          操作<Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
 
export default Dropdowns;