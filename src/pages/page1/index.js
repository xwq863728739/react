import React from 'react';
import TableDemo from '../table';
import BackToTop from '../backTop';
import { Button,Input,Spin,Skeleton  } from 'antd';
import Add from '../add';
const Search = Input.Search;
class Page1 extends React.Component{
    constructor(){
        super();
        this.state = {
            isShow:false
        }
    }
    render(){
        const numbers = [1, 2, 3, 4, 5];
        const list = numbers.map((number,index)=>
            <li key={index}>{number}</li>
        )
        
        return(
            <div>
                <div className='page-menu'>
                    <Add isShow={this.state.isShow}/>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                </div>
                {/* {list} */}
                <Spin />
                <Skeleton active loading={true} />
                <TableDemo />
                <TableDemo />
                <TableDemo />
                <TableDemo />
                <TableDemo />
                <TableDemo />
                <TableDemo />
                <TableDemo />
                <TableDemo />
                <TableDemo />
            </div>
        );
    }
}
export default Page1;