import React from 'react';

import { Text, View } from 'react-native';
import { isIOS } from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { InputPicker } from '../input/InputPicker';
export const AuthenticatedInputPicker = props => {
    return (
        <React.Fragment>
            <View style={[RVStyles.registrationUserInputPickerView, isIOS && RVGenericStyles.zIndex10]}>
                <Text style={RVStyles.registrationUserInputPickerText}>{props.inputTextName}</Text>
                <InputPicker {...props} />
            </View>
            <Text style={RVStyles.registrationFormInputError}>{props.formState.errors[props.inputName]?.message}</Text>
        </React.Fragment>
    );
}