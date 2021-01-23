import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RVStyles } from '../styles/Styles';
import { HeaderForm } from '../layouts/HeaderForm';
import * as Animatable from 'react-native-animatable';
import { RVMenuIcon } from '../components/icons/RVMenuIcon';
import { RVNotificationIcon } from '../components/icons/RVNotificationIcon';
import { RVLoginUserIcon } from '../components/icons/RVLoginUserIcon';
import { FeedbackModal } from '../components/modals/FeedbackModal';
import { fetchUserDashboardDetails } from '../helper/Helper';
export const RVUserDashboard = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [userDashboard, setUserDashboard] = useState({
        name: ``,
        pincode: ``,
        blood_group: 0,
        beneficiary_count: 0,
        donor_count: 0,
        showFeedbackModal: false
    });

    const phoneNumber = route?.params?.phoneNumber || stringConstants.EMPTY;

    useEffect(() => {
        fetchUserDashboardDetails(userDashboard, setUserDashboard, phoneNumber);
    }, []);

    return (
        <View style={RVStyles.headerContainer}>
            <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <RVMenuIcon />
                <View style={{ flexDirection: `row` }}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <RVNotificationIcon />
                    </View>
                    <View>
                        <RVLoginUserIcon />
                    </View>
                </View>
            </View>
            <HeaderForm style={{
                alignItems: 'center',
                paddingBottom: 20
            }} imagePath={require(`../assets/rv_home_logo.png`)} />
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>{`WELCOME ${userDashboard.name}`}</Text>
                <Animated.ScrollView>
                    <View style={[RVStyles.signInUserInputView, { flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={RVStyles.userInputTextView}>Benificiaries: </Text>
                        <Text>{userDashboard.beneficiary_count}</Text>
                    </View>
                    <View style={[RVStyles.signInUserInputView, { flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={RVStyles.userInputTextView}>Our Volunteers: </Text>
                        <Text>{userDashboard.donor_count}</Text>
                    </View>
                    <View style={[RVStyles.signInUserInputView, { flexDirection: 'row', alignItems: 'center' }]}>
                        <TouchableOpacity activeOpacity={.7} style={{
                            borderRadius: 25,
                            paddingHorizontal: 20,
                            paddingVertical: 15,
                            marginVertical: 15,
                            width: 300,
                            elevation: 3,
                            backgroundColor: "#DE1F25"
                        }} onPress={() => navigation.navigate('RVBloodRequest')}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Request for blood</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[RVStyles.signInUserInputView, { flexDirection: 'row', alignItems: 'center' }]}>
                        <TouchableOpacity activeOpacity={.7} style={{
                            borderRadius: 25,
                            paddingHorizontal: 20,
                            paddingVertical: 15,
                            marginVertical: 15,
                            width: 300,
                            elevation: 3,
                            backgroundColor: "#DE1F25"
                        }} onPress={() => setUserDashboard({ ...userDashboard, showFeedbackModal: true })}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Feedback</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.ScrollView>
            </Animatable.View>
            <FeedbackModal userDashboardState={userDashboard} setUserDashboardState={setUserDashboard} route={route} />
        </View>
    )
}