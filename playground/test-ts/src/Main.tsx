/**
 * @description 项目入口文件
 */
import React from "react";
import ErrorBoundary from './components/ErrorBoundary';
import loadable from '@/utils/loadable';
import { IntlWrapper } from '@/lang';

const Hello = loadable(import("./pages/Hello"));

/**
 * 渲染程序
 */
export default () => (
    <IntlWrapper>
        <ErrorBoundary>
            <Hello />
        </ErrorBoundary>
    </IntlWrapper>
);




