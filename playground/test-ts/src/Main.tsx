/**
 * @description 项目入口文件
 */
import React from "react";
// import ErrorBoundary from './components/ErrorBoundary';
// import loadable from '@/utils/loadable';
// import { IntlWrapper } from '@/lang';
//
// const Hello = loadable(import("./pages/Hello"));
//
// /**
//  * 渲染程序
//  */
// export default () => (
//     <IntlWrapper>
//         <ErrorBoundary>
//             <Hello />
//         </ErrorBoundary>
//     </IntlWrapper>
// );


export default () => {
    return <div>
        <p>only this paragraph will get the style :)</p>

        { /* you can include <Component />s here that include
         other <p>s that don't get unexpected styles! */ }

        <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    </div>
}


// import css from "styled-jsx/css"
//
// function getLinkStyles(color) {
//     return css.resolve`
//     a { color: ${color} }
//   `;
// }
//
// export default (props) => {
//     const { className, styles } = getLinkStyles("red")
//
//     return (
//         <div>
//             <a className={className}>About</a>
//             {styles}
//         </div>
//     )
// }




