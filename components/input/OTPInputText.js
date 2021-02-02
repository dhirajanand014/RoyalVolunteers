import React from 'react';
import { View, ViewPropTypes, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';

export const OTPInputText = props => {
    const { containerStyle, LeftComponent, RightComponent, control, refCallback, ...remainingProps } = props;
    return (
        <View style={[RVStyles.otpContainerStyle, containerStyle]}>
            {LeftComponent}
            <TextInput {...remainingProps} style={[RVStyles.otpInputStyle, RVGenericStyles.fill, RVGenericStyles.bold, RVGenericStyles.centerAlignedText,
            { fontSize: 18, width: '100%' }]} ref={refCallback} />
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