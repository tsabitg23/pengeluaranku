import React from 'react';
import { Input, Radio, Button, Modal} from 'antd';
import {postData} from '../../store/pengeluaran';
import swal from 'sweetalert';

class Pengeluaran extends React.Component{
    state = {
        type : 'debit',
        name : '',
        code : ''
    };

    onChangeType = (event) => {
        this.setState({
            type : event.target.value
        })
    }

    viewData = () => {
        this.props.history.push('/app/pengeluaran_list');
    }

    onChangeText = (key, value) => {
        this.setState({
            [key] : value
        });
    }

    save = () => {
        const data = this.state;
        return postData(data).then(res=>{
            swal('Berhasil', 'Data berhasil ditambahkan', 'success');
            this.setState({
                type : 'debit',
                name : '',
                code : ''
            })
        }).catch(err=>{
            swal('Error', 'gagal menyimpan data', 'error');
        })
    }

    render(){
        return (
            <div>
                <h3>Form Pengeluaran</h3>
                <div className="form-controller">
                    <Input 
                        value={this.state.name} 
                        onChange={(event)=>this.onChangeText('name', event.target.value)}
                        placeholder={"Nama pengeluaran"}/>
                </div>
                <div className="form-controller">
                    <Input
                        value={this.state.code} 
                        onChange={(event)=>this.onChangeText('code', event.target.value)} 
                        placeholder={"Kode Pengeluaran"}/>
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
                    <Button type="primary" onClick={this.save}>Submit</Button>
                    <Button style={{marginLeft: 10}} onClick={this.viewData}>View Data</Button>
                </div>
            </div>
        )
    }
}

export default Pengeluaran;