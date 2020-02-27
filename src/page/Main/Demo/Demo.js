import React, { Component } from 'react';
import TableList from '../../../Common/TableList/TableList'
import Dropdowns from '../../../Common/Dropdown/Dropdown'
import { Menu } from 'antd'
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <div>1st menu item</div>
        </Menu.Item>
        <Menu.Item key="1">
          <div>2nd menu item</div>
        </Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    )
    const demoName = [
      { title: 'Name', dataIndex: 'name' },
      { title: 'Sex', dataIndex: 'sex' },
      { title: 'Age', dataIndex: 'age' },
      { title: 'Work', dataIndex: 'work' },
      { 
        title: '操作',
        render: (h,params) => {
          return (
            <div>
              <Dropdowns menu={menu}></Dropdowns>
            </div>
          )
        }
      }
    ]
    const demoDate = [
      { name: 'Demo', age: 20,sex: '女', work:'测试', id:'0'},
      { name: 'Demo', age: 20,sex: '女', work:'测试', id:'1'},
      { name: 'Demo', age: 20,sex: '女', work:'测试', id:'2'},
      { name: 'Demo', age: 20,sex: '女', work:'测试', id:'3'},
    ]
    return (
      <TableList columns={demoName} data={demoDate}></TableList>
    );
  }
}
 
export default Demo;