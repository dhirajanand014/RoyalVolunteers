import React from 'react';
import { View } from 'react-native';
import { fieldTextName, miscMessage, numericConstants } from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVUserDashboardDetailsText } from '../../components/texts/RVUserDashboardDetailsText';
import { RVUserDashBoardPincodeText } from '../../components/texts/RVUserDashBoardPincodeText';
import { FeedbackModal } from '../../components/modals/FeedbackModal';
import { RVUserDashBoardFooterTopView } from '../../components/view/RVUserDashBoardFooterTopView';
import { RVUserDashBoardFooterButtons } from '../../components/view/RVUserDashBoardFooterButtons';
import * as Animatable from 'react-native-animatable';
import { RVUserDashBoardHeaderView } from './RVUserDashBoardHeaderView';
import moment from 'moment';
import { RateUsModal } from '../modals/RateUsModal';

export const RVDashBoardDetails = (props) => {
    const { userDashboard, handleSubmit, setUserDashboard, control, formState, setLoader, navigation, phoneNumber } = props;

    const dobYears = userDashboard.dob && moment().diff(userDashboard.dob, miscMessage.YEARS_MOMENT) || numericConstants.ZERO;

    return (
        <React.Fragment>
            <RVUserDashBoardHeaderView userDashboard={userDashboard} setUserDashboard={setUserDashboard} navigation={navigation} />
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.dashBoardFooter}>
                <RVUserDashBoardFooterTopView name={userDashboard.name} blood_group={userDashboard.blood_group} />
                <View style={RVGenericStyles.justifyContentSpaceBetween}>
                    <RVUserDashboardDetailsText text={fieldTextName.MOBILE_NUMBER_TEXT} value={userDashboard.phoneNumber} />

                    <RVUserDashboardDetailsText text={fieldTextName.AGE} value={`${dobYears} ${miscMessage.YEARS}`} />

                    <RVUserDashBoardPincodeText text={fieldTextName.PINCODE} userDashboard={userDashboard} editText={userDashboard.editText} handleSubmit={handleSubmit}
                        setUserDashboard={setUserDashboard} control={control} formState={formState} value={userDashboard.pincode} setLoader={setLoader} />

                    <RVUserDashboardDetailsText text={fieldTextName.AVAILABILITY_STATUS} value={userDashboard.availability_status} setLoader={setLoader}
                        formState={formState} control={control} userDashboard={userDashboard} setUserDashboard={setUserDashboard} />
                </View>
                <RVUserDashBoardFooterButtons navigation={navigation} userDashboard={userDashboard} setUserDashboard={setUserDashboard} phoneNumber={phoneNumber} />
                <FeedbackModal userDashboard={userDashboard} setUserDashboard={setUserDashboard} phoneNumber={phoneNumber} />
                <RateUsModal userDashboard={userDashboard} setUserDashboard={setUserDashboard} />
            </Animatable.View>
        </React.Fragment>
    )
}