import React from 'react';
import { Card, Form, Icon, Input,Checkbox, Button } from 'antd';

class Login extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            this.props.history.push('/app/pengeluaran_list')
          }
        });
      };


    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{
                width: '100vw',
                height : '100vh',
                backgroundColor : '#F0F2F5',
                display :'flex',
                justifyContent :'center',
                alignItems:'center'
            }}>
                <Card title="Login Pengeluaranku" bordered={false} style={{ width: 300 }}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item>
                    
                    
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    {/* Or <a href=""> register now!</a> */}
                    </Form.Item>
                </Form>
                </Card>
            </div>
        )
        
    }
}

export default Form.create({ name: 'normal_login' })(Login);