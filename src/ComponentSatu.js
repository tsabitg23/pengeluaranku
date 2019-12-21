import React from 'react';
let hallo = "Hello World";

class ComponentSatu extends React.Component{
    hitung(nilai){
        return nilai+2;
    }

    render(){
        let hitungNilai = (nilai) => {
            return nilai+3
        }
        let cuaca = "Hari ini cuaca cerah";
        return (
            <div>
                <div>
                    <h2>{hallo}</h2>
                </div>
                <div>
                    <h2>{cuaca}</h2>
                </div>
                <div>hitung : {this.hitung(2)}</div>
                <div>hitung ke 2 : {hitungNilai(2)}</div>
            </div>           
        );
    }    
}

export default ComponentSatu;
