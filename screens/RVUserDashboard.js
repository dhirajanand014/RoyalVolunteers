import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';
import { RVGenericStyles, RVStyles } from '../styles/Styles';
import * as Animatable from 'react-native-animatable';
import { fetchUserDashboardDetails } from '../helper/Helper';
import {
    availablilityStatusOptions, bloodGroupsList, fieldTextName,
    miscMessage, numericConstants, stringConstants
} from '../constants/Constants';
import { useForm } from 'react-hook-form';
import { RVUserDashBoardHeaderView } from '../components/view/RVUserDashBoardHeaderView';
import { RVUserDashboardDetailsText } from '../components/texts/RVUserDashboardDetailsText';
import { RVUserDashBoardAgeText } from '../components/texts/RVUserDashBoardAgeText';
import { RVUserDashBoardPincodeText } from '../components/texts/RVUserDashBoardPincodeText';
import { FeedbackModal } from '../components/modals/FeedbackModal';
import { RVUserDashBoardFooterTopView } from '../components/view/RVUserDashBoardFooterTopView';
import { RVUserDashBoardFooterButtons } from '../components/view/RVUserDashBoardFooterButtons';
export const RVUserDashboard = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { control, formState } = useForm();

    const [userDashboard, setUserDashboard] = useState({
        name: stringConstants.EMPTY,
        age: stringConstants.EMPTY,
        pincode: stringConstants.EMPTY,
        blood_group: numericConstants.ZERO,
        benefiters_count: numericConstants.ZERO,
        donor_count: numericConstants.ZERO,
        phone: stringConstants.EMPTY,
        availability_status: stringConstants.EMPTY,
        showFeedbackModal: false,
        editText: stringConstants.EMPTY,
        isAgeEdit: false,
        isPincodeEdit: false
    });
    const phoneNumber = route?.params?.phoneNumber || stringConstants.EMPTY;

    useEffect(async () => {
        await fetchUserDashboardDetails(userDashboard, setUserDashboard, phoneNumber);
        debugger
    }, []);

    return (
        <View style={RVStyles.headerContainer}>
            <RVUserDashBoardHeaderView {...userDashboard} />

            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.dashBoardFooter}>

                <RVUserDashBoardFooterTopView name={userDashboard.name} blood_group={userDashboard.blood_group} />
                <Animated.ScrollView contentContainerStyle={RVGenericStyles.justifyContentCenter}>
                    <RVUserDashboardDetailsText text={fieldTextName.MOBILE_NUMBER_TEXT} value={userDashboard.phone} />

                    <RVUserDashBoardAgeText text={fieldTextName.AGE} userDashboard={userDashboard} editText={userDashboard.editText}
                        setUserDashboard={setUserDashboard} control={control} formState={formState} value={userDashboard.age} />

                    <RVUserDashBoardPincodeText text={fieldTextName.PINCODE} userDashboard={userDashboard} editText={userDashboard.editText}
                        setUserDashboard={setUserDashboard} control={control} formState={formState} value={userDashboard.pincode} />

                    <RVUserDashboardDetailsText text={fieldTextName.BLOOD_GROUP} value={bloodGroupsList.find(bloodGroup => bloodGroup.value == userDashboard.blood_group).label} />

                    <RVUserDashboardDetailsText text={fieldTextName.AVAILABILITY_STATUS} value={availablilityStatusOptions.find(status => status.value == miscMessage.NO).value}
                        formState={formState} control={control} userDashboard={userDashboard} setUserDashboard={setUserDashboard} />
                </Animated.ScrollView>
                <RVUserDashBoardFooterButtons navigation={navigation} userDashboard={userDashboard} setUserDashboard={setUserDashboard} />
                <FeedbackModal userDashboard={userDashboard} setUserDashboard={setUserDashboard} phoneNumber={phoneNumber} />
            </Animatable.View>
        </View>

    )
}