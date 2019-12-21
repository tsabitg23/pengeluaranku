import React from 'react';
import { Input, Radio, Button} from 'antd';

class Pengeluaran extends React.Component{
    state = {
        type : 'debit'
    };

    onChangeType = (event) => {
        this.setState({
            type : event.target.value
        })
    }
    render(){
        return (
            <div>
                <h3>Form Pengeluaran</h3>
                <div className="form-controller">
                    <Input placeholder={"Nama pengeluaran"}/>
                </div>
                <div className="form-controller">
                    <Input placeholder={"Kode Pengeluaran"}/>
                </div>
                <div className="form-controller">
                <div style={{
                    fontWeight:'bold', 
                    marginBottom : 10
                }}>Tipe pengeluaran</div>
                <Radio.Group onChange={this.onChangeType} value={this.state.type}>
                    <Radio value={"debit"}>Debit</Radio>
                    <Radio value={"kredit"}>Kredit</Radio>
                </Radio.Group>
                </div>
                <div className="form-controller">
                    <Button type="primary">Submit</Button>
                </div>
            </div>
        )
    }
}

export default Pengeluaran;