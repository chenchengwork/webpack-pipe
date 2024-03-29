/**
 * @description 项目入口文件
 */
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Main from './Main';

/**
 * 渲染程序
 */
const render = (props: any) => {
    const { container } = props;

    const root = ReactDOMClient.createRoot(getRenderContainer(container));
    root.render(<Main />);
}

// 监听webpack热替换(HRM)
if(module.hot){
    module.hot.accept("./Main", () => {
        render({});
    });
}

/*
 |------------------------------------------------------------------------------------------------------------
 | qiankun微前端应用架构，需要导出相应的生命周期钩子
 |------------------------------------------------------------------------------------------------------------
 */

/**
 * 获取渲染的容器
 * @param container
 */
const getRenderContainer = (container: HTMLElement) => container ? container.querySelector('#wrapper') : document.querySelector('#wrapper')


// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

// const storeState = (props: any) => {
//     props.onGlobalStateChange((value:any, prev: any) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev), true);
//     props.setGlobalState({
//         ignore: props.name,
//         user: {
//             name: props.name,
//         },
//     });
// }

/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
    console.log('[test-ts] react app bootstraped');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props: any) {
    console.log('[test-ts] props from main framework', props);
    // storeState(props);
    render(props)
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: any) {
    console.log('[test-ts] unmount', props);
    const { container } = props;
    // ReactDOM.unmountComponentAtNode(getRenderContainer(container));
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props: any) {
    console.log('update props', props);
}
