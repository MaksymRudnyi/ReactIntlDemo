import React from 'react';
import { injectIntl } from 'react-intl';

const Input = ({ intl}) => {
    console.log(intl);
    debugger
    return <input type="text" placeholder={intl.formatMessage({id: 'demo-placeholder'})}/>
};

export default injectIntl(Input)