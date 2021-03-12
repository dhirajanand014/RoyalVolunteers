import React from 'react';
import { Controller } from 'react-hook-form';
import DropDownPicker from 'react-native-dropdown-picker';
import { miscMessage } from '../../constants/Constants';
import { onChangeByValueType } from '../../helper/Helper';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVArrowDownIcon } from '../icons/RVArrowDownIcon';
import { RVArrowUpIcon } from '../icons/RVArrowUpIcon';

export const InputPicker = props => {
    return (
        <Controller name={props.inputName} control={props.control} defaultValue={props.defaultValue} rules={props.rules}
            render={inputProps => {
                return (
                    <DropDownPicker items={props.list} containerStyle={RVStyles.bloodGroupPickerStyle} globalTextStyle={RVGenericStyles.ft16}
                        selectedLabelStyle={[RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal, RVGenericStyles.selectedDropDownColor]}
                        dropDownStyle={RVGenericStyles.dropDownBackGround} itemStyle={RVGenericStyles.justifyItemsStart} customArrowUp={(size, color) =>
                            <RVArrowUpIcon width={size} height={size} color={color} />} customArrowDown={(size, color) =>
                                <RVArrowDownIcon width={size} height={size} color={color} />} controller={props.bloodGroupControllerCallback}
                        onChangeItem={item => onChangeByValueType(inputProps, item.value, props)} defaultValue={props.dropDownDefaultValue}
                        placeholder={miscMessage.SELECT_A_BLOOD_GROUP} placeholderStyle={[RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal, RVGenericStyles.selectedDropDownColor]}
                    />
                )
            }} />
    )
}