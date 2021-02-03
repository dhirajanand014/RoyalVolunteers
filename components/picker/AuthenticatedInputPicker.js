import React from 'react';

import { Text, View } from 'react-native';
import { RVStyles } from '../../styles/Styles';
import { InputPicker } from '../input/InputPicker';
export const AuthenticatedInputPicker = props => {
    return (
        <React.Fragment>
            <View style={RVStyles.registrationUserInputPickerView}>
                <Text style={RVStyles.registrationUserInputPickerText}>{props.inputTextName}</Text>
                <InputPicker {...props} />
            </View>
            <Text style={RVStyles.registrationFormInputError}>{props.formState.errors[props.inputName]?.message}</Text>
        </React.Fragment>
    );
}