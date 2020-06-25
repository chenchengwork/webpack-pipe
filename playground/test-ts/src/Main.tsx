/**
 * @description 项目入口文件
 */
import ErrorBoundary from './components/ErrorBoundary';

import Hello from './pages/Hello';

/**
 * 渲染程序
 */
export default () => (
    <ErrorBoundary>
        <Hello />
    </ErrorBoundary>
);




