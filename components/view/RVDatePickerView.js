import React from 'react';
import { Text, View } from 'react-native';
import { RVStyles, RVGenericStyles } from '../../styles/Styles';
import { actionButtonTextConstants, isAndroid, isIOS } from '../../constants/Constants';
import { RVIOSDatePicker } from '../picker/RVIOSDatePicker';
import { RVAndroidDatePicker } from '../picker/RVAndroidDatePicker';
export const RVDatePickerView = props => {
    return (
        <View style={[RVStyles.RVDatePickerView, props.isFromBloodRequestForm && RVGenericStyles.alignItemsEnd]}>
            {
                (props.isFromBloodRequestForm && props.requestForm.needed_request == actionButtonTextConstants.DATE
                    || props.isFromRegistration) &&
                (isIOS && <RVIOSDatePicker {...props} /> || isAndroid && <RVAndroidDatePicker {...props} />)
            }
            <Text style={RVStyles.registrationFormInputError}>{props.formState.errors[props.inputName]?.message}</Text>
        </View>
    );
}