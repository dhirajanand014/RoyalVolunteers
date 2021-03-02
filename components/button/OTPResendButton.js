import { TouchableOpacity, Text, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { RVStyles } from '../../styles/Styles';
import { keyBoardTypeConst, stringConstants } from '../../constants/Constants';

export const OTPResendButton = props => {
    const style = { borderWidth: 0 };
    return (
        <TouchableOpacity {...props} style={[RVStyles.buttonStyle, style, props.buttonStyle, props.disabled &&
            RVStyles.otpResendDisabled || stringConstants.NODE]}>
            <Text style={props.textStyle}>{props.text}</Text>
        </TouchableOpacity>
    );
};

OTPResendButton.defaultProps = {
    type: keyBoardTypeConst.DEFAULT,
    disabled: false,
};

OTPResendButton.propTypes = {
    buttonStyle: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    text: PropTypes.string.isRequired,
};