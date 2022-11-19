/**
 * Created by chencheng on 17-9-13.
 */
import React from 'react';
import styles from './index.scss';
import { Spin, SpinProps } from 'antd';

interface BoxSpinProps {
    style: React.CSSProperties;
    spinProps: SpinProps;
}

const BoxSpin: React.FC<BoxSpinProps> = ({ style, spinProps}) => {
    style = Object.assign({
        position: 'relative',
        width: '100%',
        height: "100%",
        minHeight: 200,
        textAlign: 'center',
    }, style || {});

    return (
        <div style={style} className={styles.center}>
            {/*
            // @ts-ignore */}
            <Spin  {...spinProps} />
        </div>
    );
}

export default BoxSpin;
