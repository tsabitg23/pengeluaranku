import React from 'react';
import {Table, Button} from 'antd';

export default class TableComponent extends React.Component {
    render(){
        return (
            <div>
                <div style={{
                    display: 'flex', 
                    flexDirection:'row', 
                    justifyContent:'space-between',
                    marginBottom : 10
                }}>
                    <h2>{this.props.title}</h2>
                    <Button 
                        type="primary" 
                        icon="plus" 
                        size="large" 
                        onClick={this.props.onClickAdd}
                    />
                </div>
                <Table 
                    dataSource={this.props.dataSource} 
                    columns={this.props.columns}/>
            </div>
        )
    }
}