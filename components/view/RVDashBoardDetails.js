import React from 'react';
import { fieldTextName } from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVUserDashboardDetailsText } from '../../components/texts/RVUserDashboardDetailsText';
import { RVUserDashBoardAgeText } from '../../components/texts/RVUserDashBoardAgeText';
import { RVUserDashBoardPincodeText } from '../../components/texts/RVUserDashBoardPincodeText';
import { FeedbackModal } from '../../components/modals/FeedbackModal';
import { RVUserDashBoardFooterTopView } from '../../components/view/RVUserDashBoardFooterTopView';
import { RVUserDashBoardFooterButtons } from '../../components/view/RVUserDashBoardFooterButtons';
import * as Animatable from 'react-native-animatable';
import { RVUserDashBoardHeaderView } from './RVUserDashBoardHeaderView';
import { Animated } from 'react-native';
import { TestimonialModal } from '../modals/TestimonalModal';

export const RVDashBoardDetails = (props) => {
    const { userDashboard, handleSubmit, setUserDashboard, control, formState, setLoader, navigation, phoneNumber } = props;
    return (
        <React.Fragment>
            <RVUserDashBoardHeaderView {...userDashboard} navigation={navigation} />
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.dashBoardFooter}>
                <RVUserDashBoardFooterTopView name={userDashboard.name} blood_group={userDashboard.blood_group} />
                <Animated.ScrollView contentContainerStyle={RVGenericStyles.justifyContentCenter}>
                    <RVUserDashboardDetailsText text={fieldTextName.MOBILE_NUMBER_TEXT} value={userDashboard.phoneNumber} />

                    <RVUserDashBoardAgeText text={fieldTextName.AGE} userDashboard={userDashboard} editText={userDashboard.editText} handleSubmit={handleSubmit}
                        setUserDashboard={setUserDashboard} control={control} formState={formState} value={userDashboard.age} setLoader={setLoader} />

                    <RVUserDashBoardPincodeText text={fieldTextName.PINCODE} userDashboard={userDashboard} editText={userDashboard.editText} handleSubmit={handleSubmit}
                        setUserDashboard={setUserDashboard} control={control} formState={formState} value={userDashboard.pincode} setLoader={setLoader} />

                    <RVUserDashboardDetailsText text={fieldTextName.AVAILABILITY_STATUS} value={userDashboard.availability_status} setLoader={setLoader}
                        formState={formState} control={control} userDashboard={userDashboard} setUserDashboard={setUserDashboard} />
                </Animated.ScrollView>
                <RVUserDashBoardFooterButtons navigation={navigation} userDashboard={userDashboard} setUserDashboard={setUserDashboard} phoneNumber={phoneNumber} />
                <FeedbackModal userDashboard={userDashboard} setUserDashboard={setUserDashboard} phoneNumber={phoneNumber} />
                <TestimonialModal userDashboard={userDashboard} setUserDashboard={setUserDashboard} phoneNumber={phoneNumber} />
            </Animatable.View>
        </React.Fragment>
    )
}