import React from 'react';
import { Text, View } from 'react-native';
import { RVStyles } from '../../styles/Styles';
import { actionButtonTextConstants, isAndroid, isIOS } from '../../constants/Constants';
import { RVIOSDatePicker } from '../picker/RVIOSDatePicker';
import { RVAndroidDatePicker } from '../picker/RVAndroidDatePicker';
export const RVDatePickerView = props => {
    return (
        <View style={RVStyles.RVDatePickerView}>
            {
                props.requestForm.needed_request == actionButtonTextConstants.DATE &&
                (isIOS && <RVIOSDatePicker {...props} /> || isAndroid && <RVAndroidDatePicker {...props} />)
            }
            <Text style={RVStyles.registrationFormInputError}>{props.formState.errors[props.inputName]?.message}</Text>
        </View>
    );
}