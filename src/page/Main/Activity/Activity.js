import React, { Component , Fragment } from 'react';
import TableList from '../../../Common/TableList/TableList';
import Dropdowns from '../../../Common/Dropdown/Dropdown'
import AddActivity from '../../AddActivity/AddActivity'
import axios from 'axios';
import { Menu } from 'antd'

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tableDate: [],
      loading: false,
      current: 1,
      pageSize: 10,
      total: null
    }
  };
  componentDidMount () {
    this.upDatalist();
  };
  pageChange (current,pageSize) {
    this.setState({
      current: current,
      pageSize: pageSize
    }, () => {
      this.upDatalist()
    })
  };
  upDatalist () {
    let { current, pageSize } = this.state;
    this.setState({
      loading: true
    });
    let obj = {
      "contractIds": [],
      "contractNo": "",
      "contractStatus": "",
      "customerName": "",
      "page": current,
      "projectName": "",
      "projectType": "",
      "roomName": "",
      "rows": pageSize,
      "time": "",
      "userName": ""
    };
    var objJson = JSON.stringify(obj);
    axios.post(`https://testepms.epark.com/api/console/contract/list`,objJson,{
      headers: {
        'x-auth-token': 'd26afabe-02ed-426d-9976-1baedd678b96',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then( res => {
      if (res.data.success) {
        this.setState({
          tableDate: res.data.data.list,
          loading: false,
          current: res.data.data.pageNum,
          pageSize: res.data.data.pageSize,
          total: res.data.data.total
        });
      } else {
        this.setState({
          loading: false
        })
      }
    });
  };
  remove (params) {
    console.log(params.id)
  };
  AddActivityShowModal (e) {
    this.refs.AddActivityShowModal.showModal(e); // 调用组件中showModal方法
    // this.refs.AddActivityShowModal.setState({ 更改组件中state的值
    //   visible: true
    // })
  };
  render() { 
    
    const tableName = [
      { title: 'id', dataIndex: 'id' },
      { title: 'Name', dataIndex: 'projectName' },
      { title: 'rentType', dataIndex: 'rentType' },
      { 
        title: '操作',
        render: (h,params) => {
          const menu = (
            <Menu>
              <Menu.Item key="0">
                <div onClick={() => {this.AddActivityShowModal(params)}}>修改房间</div>
              </Menu.Item>
              <Menu.Item key="1">
                <div onClick={() => {this.remove(params)}}>删除</div>
              </Menu.Item>
            </Menu>
          );
          return (
            <Dropdowns menu={menu}></Dropdowns>
          )
        }
      },
    ]
    return ( 
      <Fragment>
        <TableList 
          loading={this.state.loading} 
          columns={tableName} 
          data={this.state.tableDate}
          pagination={{current: this.state.current, total: this.state.total, onChange: this.pageChange.bind(this)}}>
        </TableList>

        <AddActivity  ref='AddActivityShowModal' current={this.state.current} onChange={this.upDatalist.bind(this)} tableDate={this.state.tableDate}></AddActivity>
      </Fragment>
    );
  }
}
 
export default Activity;