import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RVStyles } from '../../styles/Styles';

export const NeededOptions = props => {
    return (
        props.neededOptions.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <TouchableOpacity style={RVStyles.neededRadioCircle}
                        onPress={() => props.setRequestForm({ ...props.requestForm, needed_request: item.value })}>
                        {
                            item.value == props.requestForm.needed_request && <View style={RVStyles.neededSelectedRb} />
                        }
                    </TouchableOpacity>
                    <Text style={RVStyles.neededOptionsLabel}>{item.label}</Text>
                </React.Fragment>
            )
        })
    )
}