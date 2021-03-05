import React from 'react';
import { Text, View } from 'react-native';
import { isIOS } from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVDatePickerView } from '../view/RVDatePickerView';
export const AuthenticatedDatePicker = props => {
    return (
        <View style={[isIOS && props.isFromRegistration && RVGenericStyles.rowFlexDirection,
        RVStyles.registrationUserInputView]}>
            <Text style={RVStyles.registrationUserInputTextView}>{props.inputTextName}</Text>
            <RVDatePickerView {...props} />
            <Text style={RVStyles.registrationFormInputError}>{props.formState.errors[props.inputName]?.message}</Text>
        </View>
    );
}