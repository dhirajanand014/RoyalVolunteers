import React from 'react';

import { Text, View } from 'react-native';
import { stringConstants } from '../../constants/Constants';
import { RVStyles } from '../../styles/Styles';
import { InputSelector } from '../input/InputSelector';
export const AuthenticatedSelectorInput = props => {

    console.log(props.initial, props.value)
    return (
        <React.Fragment>
            <View style={RVStyles.registrationUserInputPickerView}>
                <Text style={RVStyles.registrationUserInputPickerText}>{!props.isFromDashBoard && props.inputTextName || stringConstants.EMPTY}</Text>
                <InputSelector {...props} />
            </View>
            <Text style={RVStyles.registrationFormInputError}>{props.formState.errors[props.inputName]?.message}</Text>
        </React.Fragment>
    );
}