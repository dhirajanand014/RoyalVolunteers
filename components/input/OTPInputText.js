import React from 'react';
import { View, ViewPropTypes, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { formRequiredRules } from '../../constants/Constants';
import { Controller } from 'react-hook-form';

export const OTPInputText = props => {
    const { containerStyle, style, LeftComponent, RightComponent, control, refCallback, ...remainingProps } = props;

    return (
        <View style={[RVStyles.otpContainerStyle, containerStyle]}>
            {LeftComponent}
            <Controller name={`otpInput`} control={control} defaultValue={``}
                render={(props) => {
                    return (
                        <TextInput {...remainingProps} style={[RVStyles.otpInputStyle, RVGenericStyles.fill, RVGenericStyles.bold, style]} ref={refCallback} />
                    )
                }} />
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