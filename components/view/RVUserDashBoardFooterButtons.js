
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { actionButtonTextConstants, routeConsts, stringConstants } from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';

export const RVUserDashBoardFooterButtons = props => {

    return (
        <View style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.justifyContentSpaceBetween]}>
            <View style={[RVStyles.signInUserInputView, RVGenericStyles.rowFlexDirection, RVGenericStyles.alignItemsCenter]}>
                <TouchableOpacity activeOpacity={.7} style={RVStyles.sendFeedBackButtonStyle}
                    onPress={() => props.setUserDashboard({ ...props.userDashboard, showFeedbackModal: true })}>
                    <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText, RVGenericStyles.bold]}>{actionButtonTextConstants.SEND_FEEDBACK}</Text>
                </TouchableOpacity>
            </View>
            <View style={[RVStyles.signInUserInputView, RVGenericStyles.rowFlexDirection, RVGenericStyles.alignItemsCenter]}>
                <TouchableOpacity activeOpacity={.7} style={RVStyles.dashBoardRequestBlood} onPress={() => props.navigation.navigate(routeConsts.BLOOD_REQUEST)}>
                    <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText, RVGenericStyles.bold]}>{actionButtonTextConstants.REQUEST_FOR_BLOOD}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}