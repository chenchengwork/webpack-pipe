/**
 * @description 项目入口文件
 */
import React from "react";
import { App } from "antd";
import ErrorBoundary from './components/ErrorBoundary';
import loadable from '@/utils/loadable';
import { IntlWrapper } from '@/lang';

import { StyleRegistry} from "styled-jsx";
import css from "styled-jsx/css";

const Hello = loadable(import("./pages/Hello"));

/**
 * 渲染程序
 */
export default () => (
    <StyleRegistry>
        <App>
            <IntlWrapper>
                <ErrorBoundary>
                    <Hello />
                </ErrorBoundary>
            </IntlWrapper>
        </App>
        <style jsx global>{getGlobalStyle}</style>
    </StyleRegistry>
);


// 全局样式
// language=SCSS
const getGlobalStyle = css.global`
    body {
      height: 100%;
    }
`;





