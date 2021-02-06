
import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native-gesture-handler';
import { onChangeByValueType } from '../../helper/Helper';
import { colors, RVStyles } from '../../styles/Styles';
export const RVUserDashboardTextInput = props => {
    return (
        <Controller name={props.inputName} control={props.control} defaultValue={props.defaultValue} rules={props.rules}
            render={inputProps => {
                return (
                    <TextInput {...inputProps} maxLength={props.maxLength} value={props.value} placeholderTextColor={colors.DARK_GREY}
                        keyboardType={props.keyboardType} style={[RVStyles.underlineTextInput, props.formState.errors[props.inputName]?.message && RVStyles.errorInputBorder ||
                            RVStyles.normalInputBorder, props.extraStyles, props.style]} placeHolderText={props.placeHolderText} onSubmitEditing={props.onSubmitEditing}
                        onChangeText={value => onChangeByValueType(inputProps, value, props)} autoFocus={props.autofocus} underlineColorAndroid={props.underlineColorAndroid}
                    />
                )
            }} />
    )
}
