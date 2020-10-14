import React from "react";
import {FormattedMessage} from 'react-intl';

const A = () => {
    return <div>
        测试 jsx
        <FormattedMessage
            id="myMessage"
            defaultMessage="Today is {ts, date, ::yyyyMMdd}"
            values={{ts: Date.now()}}
        />
    </div>
}

export default A;