import React from 'react';
import { View, ViewPropTypes, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';

export const OTPInputText = props => {
    const { containerStyle, style, LeftComponent, RightComponent, refCallback, ...remainingProps } = props;

    return (
        <View style={[RVStyles.otpContainerStyle, containerStyle]}>
            {LeftComponent}
            <TextInput {...remainingProps} style={[RVStyles.otpInputStyle, RVGenericStyles.fill, style]} ref={refCallback} />
            {RightComponent}
        </View>
    );
}

OTPInputText.defaultProps = {
    LeftComponent: <></>,
    RightComponent: <></>,
};

OTPInputText.propTypes = {
    containerStyle: ViewPropTypes.style,
    style: ViewPropTypes.style,
    LeftComponent: PropTypes.object,
    RightComponent: PropTypes.object,
    refCallback: PropTypes.func,
};