import React, { Component  } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Route ,Link} from 'react-router-dom';
import Activity from './Activity/Activity'
import Demo from './Demo/Demo'

import 'antd/dist/antd.css'

import './Main.css';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [
        {username: "Activity",title: '活动列表'},
        {username: "Demo",title: '模拟'}
      ],
    }
  }
  render() { 
    const { repos } = this.state;

    return ( 
      <div className="layout">
        <Layout>
          <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        subnav 1
                      </span>
                    }
                  >
                    {
                      repos.map( (item,index) => {
                        return (
                          <Menu.Item key={item.username}>
                            <Link to={`/Layouts/${item.username}`}>{item.title}</Link>
                          </Menu.Item>
                        )
                      })
                    }
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                <Route path={`/Layouts/Activity`} component={Activity}></Route>
                <Route path={`/Layouts/Demo`} component={Demo}></Route>
              </Content>
            </Layout>
          </Content>
        </Layout>
      </div>
    );
  }
}
 
export default Main;