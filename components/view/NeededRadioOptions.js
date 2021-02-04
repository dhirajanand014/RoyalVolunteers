import React from 'react';
import { View, Text } from 'react-native';
import { RVStyles } from '../../styles/Styles';
import { NeededOptions } from '../input/NeededOptions';

export const NeededRadioOptions = props => {
    return (
        <View style={RVStyles.neededOptionsView}>
            <Text style={RVStyles.registrationUserInputPickerText}>{props.inputTextName}</Text>
            <NeededOptions {...props} />
        </View>
    )
}