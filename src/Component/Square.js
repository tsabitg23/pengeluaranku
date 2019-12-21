import React from 'react';

class Square extends React.Component {
    render(){
        return (
            <div style={{
                backgroundColor : this.props.warna,
                marginTop : 20,
                width : "200px",
                height : "200px"  
            }}>
                {this.props.title}
                {this.props.children}
            </div>
        )
    }
}
Square.defaultProps={
    warna : 'red'
};
export default Square;