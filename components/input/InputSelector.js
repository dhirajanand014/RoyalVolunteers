import React from 'react';
import { Controller } from 'react-hook-form';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import SwitchSelector from 'react-native-switch-selector';
import { onChangeByValueType } from '../../helper/Helper';
import { numericConstants } from '../../constants/Constants';

export const InputSelector = props => {
    return (
        <Controller name={props.inputName} control={props.control} defaultValue={props.defaultValue}
            render={(selectorProps) => {
                return (
                    <SwitchSelector initial={props.initial} onPress={value => onChangeByValueType(selectorProps, value, props)} value={props.value}
                        options={props.options} fontSize={props.fontSize} style={RVStyles.availabilityStatusStyle} bold={props.isFromDashBoard && true || false}
                        height={numericConstants.THIRTY} hasPadding={props.hasPadding} textStyle={RVGenericStyles.fontFamilyNormal} selectedTextStyle={RVGenericStyles.fontFamilyNormal}
                    />
                )
            }} />
    )
}