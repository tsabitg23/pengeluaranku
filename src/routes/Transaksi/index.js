import React from 'react';
import { Input, Radio, Button} from 'antd';

class Transaksi extends React.Component{
    render(){
        return (
            <div>
                <h3>Form Transaksi</h3>
                <div className="form-controller">
                    <Input placeholder={"Nama pengeluaran"}/>
                </div>
                <div className="form-controller">
                    <Input placeholder={"Besar Pengeluaran"}/>
                </div>
                <div className="form-controller">
                    <Input placeholder={"Keterangan"}/>
                </div>
                <div className="form-controller">
                    <Button type="primary">Submit</Button>
                </div>
            </div>
        )
    }
}

export default Transaksi;