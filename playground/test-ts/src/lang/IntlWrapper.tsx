import React, {Fragment, PropsWithChildren} from 'react';
import {ConfigProvider} from "antd";
import {IntlProvider, useIntl} from 'react-intl';
import {EnumLangType} from '@/lang/EnumLangType';
import {langUtil} from '@/lang';

const currentLang = "zh";

const lang = {
    "zh": {
        antdLocale: require('antd/lib/locale-provider/zh_CN').default,
        intlLocale: EnumLangType.zh,
        intlMessages: require('../../locales/zh.json'),
    },
    "en": {
        antdLocale: require('antd/lib/locale-provider/en_US').default,
        intlLocale: EnumLangType.en,
        intlMessages: require('../../locales/en.json'),
    },
};

const InitIntl: React.FC<PropsWithChildren<any>> = ({children}) => {
    langUtil.setIntl(useIntl());

    return <Fragment>{children}</Fragment>
};

const IntlWrapper: React.FC<PropsWithChildren<any>> = ({children}) => {
    const {antdLocale, intlLocale, intlMessages} = lang[currentLang];

    return (
        <ConfigProvider locale={antdLocale}>
            <IntlProvider locale={intlLocale} messages={{...intlMessages}}>
                <InitIntl>{children}</InitIntl>
            </IntlProvider>
        </ConfigProvider>
    );
};

export default IntlWrapper
