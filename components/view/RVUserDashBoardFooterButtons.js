
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import base64 from 'react-native-base64'
import { actionButtonTextConstants, routeConsts } from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVDashBoardTestimonialSwiper } from './RVDashBoardTestimonialSwiper';

export const RVUserDashBoardFooterButtons = props => {

    const { userDashboard, setUserDashboard, phoneNumber } = props;

    return (
        <React.Fragment>
            <View style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.justifyContentSpaceBetween, RVGenericStyles.mb20]}>
                <View style={[RVGenericStyles.alignItemsCenter]}>
                    <TouchableOpacity activeOpacity={.7} style={RVStyles.sendFeedBackButtonStyle}
                        onPress={() => setUserDashboard({ ...userDashboard, showFeedbackModal: true })}>
                        <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText, RVGenericStyles.bold]}>{actionButtonTextConstants.FEEDBACK}</Text>
                    </TouchableOpacity>
                </View>
                <View style={[RVGenericStyles.alignItemsCenter]}>
                    <TouchableOpacity activeOpacity={.7} style={RVStyles.dashBoardRequestBlood} onPress={() => props.navigation.navigate(routeConsts.BLOOD_REQUEST, {
                        isFrom: routeConsts.USER_DASHBOARD, phoneNumber: userDashboard.phoneNumber
                    })}>
                        <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText, RVGenericStyles.bold]}>{actionButtonTextConstants.REQUEST_BLOOD}</Text>
                    </TouchableOpacity>
                </View>
                {
                    userDashboard.testimonials && userDashboard.testimonials.length && !(userDashboard.testimonialAdded || userDashboard.testimonials.some(testimonial =>
                        phoneNumber == base64.decode(testimonial.testimonial_provided_by))) &&
                    <View style={RVGenericStyles.alignItemsCenter}>
                        <TouchableOpacity activeOpacity={.7} style={[RVStyles.dashBoardTestimonials, RVGenericStyles.backGroundColorGreen]} onPress={() => setUserDashboard({ ...userDashboard, showTestimonialModal: true })}>
                            <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText, RVGenericStyles.bold]}>{actionButtonTextConstants.TESTIMONIAL}</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
            {
                userDashboard.testimonials && userDashboard.testimonials.length && <RVDashBoardTestimonialSwiper userDashboard={userDashboard} />
            }
        </React.Fragment >
    )
}
