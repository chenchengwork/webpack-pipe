/**
 * @description 项目入口文件
 */
import React, { Fragment } from 'react';
import ReactDOM  from 'react-dom';
import Main from './Main';
import { Button, Drawer } from 'antd'

interface IProps {
    color: string,
    size?: string,
}

interface IState {
    count: number,
}

// class Main extends React.Component{
//
//     render(){
//         return (
//             <Fragment>
//                 {/*<Drawer />*/}
//                 <Button>"111"</Button>
//             </Fragment>
//         )
//     }
// }


/**
 * 渲染程序
 */
ReactDOM.render(<Main />, document.querySelector('#wrapper'));



