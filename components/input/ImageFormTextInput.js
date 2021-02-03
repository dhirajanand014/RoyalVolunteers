import React from 'react';
import { Controller } from 'react-hook-form';
import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { countryCodesConstants, miscMessage } from '../../constants/Constants';
import { onChangeByValueType } from '../../helper/Helper';
import { colors, RVStyles } from '../../styles/Styles';

export const ImageFormTextInput = props => {
    return (
        <Controller name={props.inputName} control={props.control} defaultValue={props.defaultValue} rules={props.rules}
            render={inputProps => {
                return (
                    <React.Fragment>
                        {
                            props.isPhoneNumberEntry &&
                            <Text style={RVStyles.mobileCountryCode}>{countryCodesConstants.INDIA}</Text>
                        }
                        <TextInput {...inputProps} maxLength={props.maxLength} value={inputProps.value} textContentType={props.textContentType}
                            autoCapitalize={miscMessage.NONE} placeholder={props.placeHolderText} secureTextEntry={props.isSecureTextEntry}
                            keyboardType={props.keyboardType} style={RVStyles.signUpTextInput} placeholderTextColor={colors.DARK_GREY}
                            onChangeText={value => onChangeByValueType(inputProps, value, props)} autoFocus={props.autofocus}
                            onSubmitEditing={props.onSubmitEditing} ref={props.refCallback} />
                    </React.Fragment>
                )
            }} />
    )
}