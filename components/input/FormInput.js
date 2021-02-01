import React from 'react';

import { Text, View } from 'react-native';
import { RVStyles } from '../../styles/Styles';
import { ImageFormTextInput } from './ImageFormTextInput';
export const FormInput = props => {
    return (
        <View messagestyle={RVStyles.signInUserInputView}>
            <Text style={RVStyles.userInputTextView}>{props.inputTextName}</Text>
            <View style={[RVStyles.userInput, props.formState.errors[props.inputName]?.message && RVStyles.errorInputBorder ||
                RVStyles.normalInputBorder]}>
                {props.icon && props.icon}
                <ImageFormTextInput {...props} />
            </View>
            <Text style={RVStyles.formInputError}>{props.formState.errors[props.inputName]?.message}</Text>
        </View>
    );
}