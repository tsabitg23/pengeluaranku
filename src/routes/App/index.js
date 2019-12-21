import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Pengeluaran from '../Pengeluaran';
import User from '../User';
import Transaksi from '../Transaksi';
  
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class App extends React.Component {
    navigateTo = (route) => {
        this.props.history.push(route);
    }

    render(){
        return (
            <Layout style={{height: '100vh'}}>
                <Header className="header">
                    <h2 style={{color:'white'}}>Pengeluaranku App</h2>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="fund" />
                                        Transaksi
                                    </span>
                                }
                            >
                                <Menu.Item onClick={()=>this.navigateTo('/app/pengeluaran')} key="1">Pengeluaran</Menu.Item>
                                <Menu.Item onClick={()=>this.navigateTo('/app/transaksi')} key="2">Transaksi</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        User Management
                                    </span>
                                }
                            >
                                <Menu.Item onClick={()=>this.navigateTo('/app/user')} key="5">User</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: '#fff',
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                <Route exact path="/app" component={Pengeluaran}/>
                                <Route exact path="/app/transaksi" component={Transaksi}/>
                                <Route exact path="/app/user" component={User}/>
                                <Route exact path="/app/pengeluaran" component={Pengeluaran}/>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign : 'center'}}>Copyright EMI Bootcamp @2019</Footer>
                    </Layout>
                </Layout>
            </Layout>            
        )
    }
}

export default App;