import React, { Component } from 'react';
import { Table } from 'antd';
class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Table 
        rowKey={(row) => row.id} 
        loading={this.props.loading} 
        columns={this.props.columns} 
        dataSource={this.props.data} 
        pagination={this.props.pagination}  
      />
    );
  }
}
 
export default TableList;