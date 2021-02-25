import React from 'react';
import { stringConstants } from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { OTPTextView } from './OTPTextView';

export const OTPTimeText = props => {
    const { text, time } = props;
    return (
        <OTPTextView style={[RVGenericStyles.centerAlignedText, RVStyles.otpResendTimerText, RVGenericStyles.mt24]}>
            {text}
            <OTPTextView style={[RVGenericStyles.bold]}>{stringConstants.SPACE + time}s</OTPTextView>
        </OTPTextView>
    );
};