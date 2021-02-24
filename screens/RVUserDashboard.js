import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { RVStyles } from '../styles/Styles';
import { fetchUserDashboardDetails, updateSetNotifications } from '../helper/Helper';
import { miscMessage, numericConstants, stringConstants } from '../constants/Constants';
import { useForm } from 'react-hook-form';
import messaging from '@react-native-firebase/messaging';
import { SignUpContext } from '../App';
import { NotificationReceivedModal } from '../components/modals/NotificationReceivedModal';
import { RVDashBoardDetails } from '../components/view/RVDashBoardDetails';
import { RVBloodRequestsNotifications } from './RVBloodRequestsNotifications';

export const RVUserDashboard = () => {

    const navigation = useNavigation();
    const route = useRoute();
    const { control, formState, handleSubmit } = useForm({ mode: miscMessage.ON_CHANGE });

    const { setLoader, notificationDetails, setNotificationDetails } = useContext(SignUpContext);

    const [userDashboard, setUserDashboard] = useState({
        name: stringConstants.EMPTY,
        age: stringConstants.EMPTY,
        pincode: stringConstants.EMPTY,
        blood_group: numericConstants.MINUS_ONE,
        benefiters_count: numericConstants.ZERO,
        donor_count: numericConstants.ZERO,
        phone: stringConstants.EMPTY,
        availability_status: stringConstants.EMPTY,
        showFeedbackModal: false,
        editText: stringConstants.EMPTY,
        isAgeEdit: false,
        isPincodeEdit: false,
        notificationRequests: false,
        isNewNotification: false
    });
    const phoneNumber = route?.params?.phoneNumber || stringConstants.EMPTY;

    useEffect(() => {
        fetchUserDashboardDetails(userDashboard, setUserDashboard, phoneNumber, setLoader);
    }, []);

    useEffect(() => {
        messaging().onMessage(async remoteMessage => {
            updateSetNotifications(remoteMessage);
            setNotificationDetails({ ...notificationDetails, showNotificationModal: true, message: remoteMessage, isNewNotification: true })
        }
        );
    }, []);

    return (
        <View style={RVStyles.headerContainer}>
            {
                userDashboard.notificationRequests && <RVBloodRequestsNotifications userDashboard={userDashboard} phoneNumber={phoneNumber} />
                || <RVDashBoardDetails userDashboard={userDashboard} handleSubmit={handleSubmit} setUserDashboard={setUserDashboard}
                    control={control} formState={formState} setLoader={setLoader} navigation={navigation} phoneNumber={phoneNumber} />
            }
            <NotificationReceivedModal />
        </View>
    )
}
