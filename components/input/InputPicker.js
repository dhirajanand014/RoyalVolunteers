import React from 'react';
import { Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker'
import { onChangeByValueType } from '../../helper/Helper';
import { colors, RVGenericStyles, RVStyles } from '../../styles/Styles';
import { isIOS, numericConstants } from '../../constants/Constants';

export const InputPicker = props => {
    return (
        <Controller name={props.inputName} control={props.control} defaultValue={props.defaultValue} rules={props.rules}
            render={inputProps => {
                return (
                    <Picker selectedValue={inputProps.value} style={RVStyles.bloodGroupPickerStyle}
                        itemStyle={[isIOS && RVStyles.pickerItemStyleIOS, RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal]}
                        onValueChange={(value) => onChangeByValueType(inputProps, value, props)}>
                        {
                            props.list.map((item, index) => {
                                return (
                                    <Picker.Item key={index} color={item.value == numericConstants.ZERO && colors.LIGHT_GREY || colors.DARK_RED}
                                        label={item.label} value={item.value} />
                                )
                            })
                        }
                    </Picker>
                )
            }} />
    )
}