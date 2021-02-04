import React from 'react';
import { Text, View } from 'react-native';
import { RVStyles } from '../../styles/Styles';
import { actionButtonTextConstants } from '../../constants/Constants';
import { RVDatePicker } from '../picker/RVDatePicker';
export const RVDatePickerView = props => {
    return (
        <View style={RVStyles.RVDatePickerView}>
            {
                props.requestForm.needed_request == actionButtonTextConstants.DATE &&
                <RVDatePicker {...props} />
            }
            <Text style={RVStyles.registrationFormInputError}>{props.formState.errors[props.inputName]?.message}</Text>
        </View>
    );
}