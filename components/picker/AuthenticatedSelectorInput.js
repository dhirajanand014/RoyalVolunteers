import React from 'react';

import { Text, View } from 'react-native';
import { RVStyles } from '../../styles/Styles';
import { InputSelector } from '../input/InputSelector';
export const AuthenticatedSelectorInput = props => {
    return (
        <React.Fragment>
            <View style={RVStyles.registrationUserInputPickerView}>
                <Text style={RVStyles.registrationUserInputPickerText}>{props.inputTextName}</Text>
                <InputSelector {...props} />
            </View>
            <Text style={RVStyles.registrationFormInputError}>{props.formState.errors[props.inputName]?.message}</Text>
        </React.Fragment>
    );
}