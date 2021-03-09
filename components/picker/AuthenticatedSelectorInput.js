import React from 'react';

import { Text, View } from 'react-native';
import { stringConstants } from '../../constants/Constants';
import { RVStyles } from '../../styles/Styles';
import { InputSelector } from '../input/InputSelector';
export const AuthenticatedSelectorInput = props => {
    return (
        <React.Fragment>
            <View style={[props.isFromDashBoard && RVStyles.userDashBoardPickerView
                || RVStyles.registrationUserInputPickerView]}>
                <Text style={RVStyles.registrationUserInputPickerText}>{!props.isFromDashBoard && props.inputTextName || stringConstants.EMPTY}</Text>
                <InputSelector {...props} />
            </View>
            {
                props.isFromRegistration &&
                <Text style={RVStyles.registrationFormInputError}>{props.formState.errors[props.inputName]?.message}</Text>
            }
        </React.Fragment>
    );
}