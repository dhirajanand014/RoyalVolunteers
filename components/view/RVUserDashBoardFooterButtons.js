
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { actionButtonTextConstants, routeConsts } from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';

export const RVUserDashBoardFooterButtons = props => {
    return (
        <React.Fragment>
            <View style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.justifyContentSpaceBetween, RVGenericStyles.mb15]}>
                <View style={[RVGenericStyles.alignItemsCenter]}>
                    <TouchableOpacity activeOpacity={.7} style={RVStyles.sendFeedBackButtonStyle}
                        onPress={() => props.setUserDashboard({ ...props.userDashboard, showFeedbackModal: true })}>
                        <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText, RVGenericStyles.bold]}>{actionButtonTextConstants.SEND_FEEDBACK}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[RVGenericStyles.alignItemsCenter]}>
                    <TouchableOpacity activeOpacity={.7} style={RVStyles.dashBoardRequestBlood} onPress={() => props.navigation.navigate(routeConsts.BLOOD_REQUEST, {
                        isFrom: routeConsts.USER_DASHBOARD, phoneNumber: props.userDashboard.phoneNumber
                    })}>
                        <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText, RVGenericStyles.bold]}>{actionButtonTextConstants.REQUEST_FOR_BLOOD}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={[RVGenericStyles.alignItemsCenter, RVGenericStyles.mb30]}>
                <TouchableOpacity activeOpacity={.7} style={[RVStyles.dashBoardTestimonials, RVGenericStyles.backGroundColorGreen]} onPress={() => props.setUserDashboard({ ...props.userDashboard, showTestimonialModal: true })}>
                    <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText, RVGenericStyles.bold]}>{actionButtonTextConstants.TESTIMONIAL}</Text>
                </TouchableOpacity>
            </View> */}
        </React.Fragment>
    )
}
