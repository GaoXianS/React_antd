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
      loading: true
    }
  };
  componentDidMount () {
    this.upDatalist();
  };
  upDatalist () {
    let obj = {
      "contractIds": [],
      "contractNo": "",
      "contractStatus": "",
      "customerName": "",
      "page": 1,
      "projectName": "",
      "projectType": "",
      "roomName": "",
      "rows": 10,
      "time": "",
      "userName": ""
    };
    var objJson = JSON.stringify(obj);
    console.log(objJson)
    axios.post(`https://testepms.epark.com/api/console/contract/list`,objJson,{
      headers: {
        'x-auth-token': 'd26afabe-02ed-426d-9976-1baedd678b96',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then( res => {
      if (res.data.success) {
        this.setState({
          tableDate: res.data.data.list,
          loading: false
        })
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
    console.log(1)
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
            // <div onClick={()=> { this.remove(params)}}>删除</div>
            // <div onClick={()=> { this.remove(params)}}>删除</div>
            <Dropdowns menu={menu}></Dropdowns>
          )
        }
      },
    ]
    return ( 
      <Fragment>
        <TableList loading={this.state.loading} columns={tableName} data={this.state.tableDate}></TableList>
        <AddActivity ref='AddActivityShowModal'>添加</AddActivity>
      </Fragment>
    );
  }
}
 
export default Activity;