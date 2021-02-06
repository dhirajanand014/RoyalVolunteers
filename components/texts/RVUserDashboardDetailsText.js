
import React from 'react';
import { Text, View } from 'react-native';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';

export const RVUserDashboardDetailsText = props => {
    return (
        <View style={RVStyles.dashBoardUserDetailsTextView}>
            <View style={RVStyles.dashBoardUserTextStyle}>
                <Text style={RVGenericStyles.ft18}>{props.text}</Text>
            </View>
            <View style={RVStyles.dashBoardUserValueStyle}>
                <Text style={[RVGenericStyles.ft18, RVGenericStyles.bold]}>{props.value}</Text>
            </View>
        </View>
    )
}
