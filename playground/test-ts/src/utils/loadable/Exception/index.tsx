import React from 'react';
import { Link } from 'react-router-dom'
import styles from "./index.scss";
import img_404 from './img/404.svg';
import img_403 from './img/403.svg';
import img_500 from './img/500.svg';

import {createElement} from 'react';
import { Button } from 'antd';

interface ExceptionProps {
    className?: string;
    linkElement?: string | typeof Link;
    type: string;
    title?: string;
    desc?: string;
    img?: string;
    style?: React.CSSProperties,
}

interface ConfigItem {
    img: string;
    title: string;
    desc: string;
}

interface Config {
    [index: string]: ConfigItem
}

const config: Config = {
    "403": {
        img: img_403,
        title: '403',
        desc: '抱歉，你无权访问该页面',
    },
    "404": {
        img: img_404,
        title: '404',
        desc: '抱歉，你访问的页面不存在',
    },
    "500": {
        img: img_500,
        title: '500',
        desc: '抱歉，服务器出错了',
    },
    "loadPageError": {
        img: img_500,
        title: '加载...',
        desc: '抱歉，当前页面加载失败',
    },
};

export default ({ className = "", linkElement = 'a', type, title, desc, img, ...rest }: ExceptionProps) => {
    const pageType = type in config ? type : '404';


    return (
        <div className={styles.exception + " " + className} {...rest}>
            <div className={styles.imgBlock}>
                <div
                    className={styles.imgEle}
                    style={{ backgroundImage: `url(${img || config[pageType].img})` }}
                />
            </div>
            <div className={styles.content}>
                <h1>{title || config[pageType].title}</h1>
                <div className={styles.content}>{desc || config[pageType].desc}</div>
                <div className={styles.actions}>
                    {
                        createElement(linkElement, {
                            to: "/",
                            // @ts-ignore
                            href: "/",
                        }, <Button type="primary">返回首页</Button>)
                    }
                </div>
            </div>
        </div>
    );
};
