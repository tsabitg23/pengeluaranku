// STATE
import React from 'react';
import Square from './Component/Square';
import { DatePicker } from 'antd';

class ComponentDua extends React.Component {
    state = {
        nama : "Hallo",
        angka : 1,
        warna : ['green', 'yellow', 'red', 'blue']
    };

    gantiNama = () => {
        //let nama = "agus";
        //nama = "zacky";
        //let buah = {
        //    nama : "apple"
        //};
        //buah.nama = 'anggur';
        this.setState({
            nama : "Agus"
        });
    }

    tambahAngka = () => {
        let angkaSekarang = this.state.angka;
        let angkaBaru = angkaSekarang + 1;
        this.setState({
            angka : angkaBaru     
        })
    };

    kurangAngka = () => {
        let angkaSekarang = this.state.angka;
        let angkaBaru = angkaSekarang - 1;
        this.setState({
            angka : angkaBaru     
        })
    };

    render(){
        return (
            <div>
                belajar state {this.state.nama}
                <button onClick={this.gantiNama}>Ganti nama</button>
                <div>
                    <button onClick={this.kurangAngka}>-</button>
                    <div>{this.state.angka}</div>
                    <button onClick={this.tambahAngka}>+</button>
                </div>
                <Square 
                    warna={'green'} 
                    title={"Box 1"}
                >
                    <div><h2>ini box</h2></div>
                </Square>
                {/* <Square 
                    title={"Box 2"}
                />
                <Square 
                    warna={'yellow'} 
                    title={"Box 3"}
                /> */}
                <DatePicker/>
            </div>
        )
    }
};

export default ComponentDua;