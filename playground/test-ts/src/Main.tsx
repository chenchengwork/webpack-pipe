/**
 * @description 项目入口文件
 */
import React from "react";
import ErrorBoundary from './components/ErrorBoundary';
import loadable from '@/utils/loadable';

const Hello = loadable(import("./pages/Hello"));

/**
 * 渲染程序
 */
export default () => (
    <ErrorBoundary>
        <Hello />
    </ErrorBoundary>
);




