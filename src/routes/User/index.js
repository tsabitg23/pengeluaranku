import React from 'react';
import { Input, Radio, Button} from 'antd';
const TextArea = Input.TextArea;

class User extends React.Component{
    render(){
        return (
            <div>
                <h3>Form User</h3>
                <div className="form-controller">
                    <TextArea rows={4} placeholder={"Alamat"}/>
                </div>
                <div className="form-controller">
                    <Input placeholder={"Email"}/>
                </div>
                <div className="form-controller">
                    <Input placeholder={"Nama"}/>
                </div>
                <div className="form-controller">
                    <Input placeholder={"Phone"}/>
                </div>
                <div className="form-controller">
                    <Button type="primary">Submit</Button>
                </div>
            </div>
        )
    }
}

export default User;