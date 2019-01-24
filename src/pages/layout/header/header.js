import React from 'react';
import {connect} from 'react-redux';
import {toggle as toggleAction} from '../../../redux';
class Header extends React.Component{
    render(){
        const {toggle, dispatch} = this.props;
        console.log(111, 'header', toggle, this.props);
        return(
            <div onClick={() => {dispatch(toggleAction());console.log(toggle)}}>
                头部
            </div>
        );
    }
}
export default connect((state)=> {
    const {toggle} = state;
    return {toggle};
})(Header);