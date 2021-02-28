import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Text, Image } from 'react-native';
import { colors, RVGenericStyles, RVStyles } from '../styles/Styles';
import { SignUpContext } from '../App';
import { validateSavedToken, getSavedToken, fetchSplashScreenRoute } from '../helper/Helper';
import { miscMessage, numericConstants, stringConstants } from '../constants/Constants';
import { useNavigation } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

export const SplashScreen = () => {

    const navigation = useNavigation();
    const { error, setError, notificationDetails, setNotificationDetails, signUpDetails, setSignUpDetails } = useContext(SignUpContext);

    const navigateUser = async (username) => {
        const route = await fetchSplashScreenRoute(username, signUpDetails);
        navigation.reset({ index: numericConstants.ZERO, routes: [route] });
    }

    const fetchNavigationDetails = async () => {
        const savedToken = await getSavedToken(error, setError);
        await validateSavedToken(savedToken, stringConstants.EMPTY, error, setError, signUpDetails, setSignUpDetails, true);
        await navigateUser(savedToken.username);
    }

    useEffect(() => {
        fetchNavigationDetails();
    }, []);

    useEffect(() => {
        messaging().onTokenRefresh(async tokenRefresh =>
            console.log('Token refresh!', tokenRefresh)
        );
        messaging().onNotificationOpenedApp(async message =>
            setNotificationDetails({ ...notificationDetails, showNotificationModal: true, message: message })
        )
        messaging().getInitialNotification(async message =>
            setNotificationDetails({ ...notificationDetails, showNotificationModal: true, message: message })
        )
    }, [])
    return (
        <SafeAreaView style={[RVGenericStyles.fill, RVGenericStyles.justifyContentCenter, RVGenericStyles.alignItemsCenter, { backgroundColor: 'white' }]}>
            <Image source={require('../assets/rv_splash_screen_image.gif')} autoPlay loop
                hardwareAccelerationAndroid style={RVStyles.splashScreenAnimatedImage} />
            <Text style={RVStyles.splashScreenLoadingText}>{miscMessage.LOADING}</Text>
            <ActivityIndicator color={colors.RED} shouldRasterizeIOS hidesWhenStopped style={RVGenericStyles.mt20} />
        </SafeAreaView>
    )
}