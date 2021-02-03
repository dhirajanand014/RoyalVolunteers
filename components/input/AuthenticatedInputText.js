import React from 'react';
import { Text, View } from 'react-native';
import { RVStyles } from '../../styles/Styles';
import { RegistrationInput } from './RegistrationInput';
export const AuthenticatedInputText = props => {
    return (
        <View style={RVStyles.registrationUserInputView}>
            <Text style={RVStyles.registrationUserInputTextView}>{props.inputTextName}</Text>
            <View style={RVStyles.authenticatedUserInputViewStyle}>
                <RegistrationInput {...props} />
            </View>
            <Text style={RVStyles.registrationFormInputError}>{props.formState.errors[props.inputName]?.message}</Text>
        </View>
    );
}