import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text } from 'react-native';
import { RVGenericStyles, RVStyles } from '../styles/Styles';
import { RVBloodRequestsFlatList } from '../components/view/RVBloodRequestsFlatList';
import { HeaderForm } from '../layouts/HeaderForm';
import { screenTitle, stringConstants } from '../constants/Constants';
import { getSavedNotificationRequests, updateNotificationsStatus } from '../helper/Helper';

export const RVBloodRequestsNotifications = props => {

    const [requests, setRequests] = useState({
        notifications: stringConstants.ARRAY
    });

    useEffect(() => {
        (async () => {
            const jsonRequests = await getSavedNotificationRequests();
            !requests.notifications.length && setRequests({ ...requests, notifications: jsonRequests.length && jsonRequests || stringConstants.ARRAY });
            await updateNotificationsStatus();
        })();
    }, []);

    return (
        <View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <SafeAreaView style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>{screenTitle.BLOOD_REQUESTS}</Text>
                <View style={[RVGenericStyles.fill, RVGenericStyles.justifyContentCenter, RVGenericStyles.alignItemsCenter]}>
                    <RVBloodRequestsFlatList data={requests.notifications} />
                </View>
            </SafeAreaView>
        </View>
    )
}