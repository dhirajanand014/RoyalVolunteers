import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';

export const NeededOptions = props => {
    return (
        props.neededOptions.map((item, index) => {
            return (
                <View key={index} style={RVGenericStyles.rowFlexDirection}>
                    <TouchableOpacity style={RVStyles.neededRadioCircle}
                        onPress={() => props.setRequestForm({ ...props.requestForm, needed_request: item.value })}>
                        {
                            item.value == props.requestForm.needed_request && <View style={RVStyles.neededSelectedRb} hitSlop={RVStyles.neededRadioSlop} />
                        }
                    </TouchableOpacity>
                    <Text style={RVStyles.neededOptionsLabel} onPress={() => props.setRequestForm({ ...props.requestForm, needed_request: item.value })}
                        hitSlop={RVStyles.neededRadioSlop}>{item.label}</Text>
                </View>
            )
        })
    )
}