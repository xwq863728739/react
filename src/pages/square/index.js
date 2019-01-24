import React from 'react';
export default class Square extends React.Component{
    constructor(){
        super(); // 只有这样才能使用this
        this.state = {
            value:1,
        }
    }
    handleClickAdd=()=>{
        this.setState({value:this.state.value+1})
    }
    handleClickDel=()=>{
        this.setState({value:this.state.value-1})
    }
    render(){
        return(
            // <div onClick={()=>this.setState({value:'X'})}>{this.state.value}</div>
            <div>
                {this.state.value}
                <div onClick={this.handleClickAdd}>+</div>
                <div onClick={this.handleClickDel}>-</div>
            </div>
        );
    }
}