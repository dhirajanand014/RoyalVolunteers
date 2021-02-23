import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { colors, RVGenericStyles, RVStyles } from '../styles/Styles';
import LottieView from 'lottie-react-native';
import { SignUpContext } from '../App';
import { validateSavedToken, getSavedToken, fetchSplashScreenRoute } from '../helper/Helper';
import { miscMessage, numericConstants, stringConstants } from '../constants/Constants';
import { useNavigation } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

export const SplashScreen = props => {

    const navigation = useNavigation();
    const { error, setError, notificationDetails, setNotificationDetails } = useContext(SignUpContext);

    const navigateUser = async (savedToken, isValidRequest) => {
        const route = await fetchSplashScreenRoute(savedToken, isValidRequest);
        navigation.reset({ index: numericConstants.ZERO, routes: [route] });
    }

    const fetchNavigationDetails = async () => {
        const savedToken = await getSavedToken(error, setError);
        const isValidRequest = await validateSavedToken(savedToken, stringConstants.EMPTY, error, setError, true);
        await navigateUser(savedToken, isValidRequest);
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
        <SafeAreaView style={[RVGenericStyles.fill, RVGenericStyles.justifyContentCenter, RVGenericStyles.alignItemsCenter]}>
            <LottieView source={require('../assets/rv_splash_screen_image.json')} autoPlay loop
                hardwareAccelerationAndroid style={RVStyles.splashScreenAnimatedImage} />
            <Text style={RVStyles.splashScreenLoadingText}>{miscMessage.LOADING}</Text>
            <LottieView source={require('../assets/rv_action_loader.json')} autoPlay loop
                hardwareAccelerationAndroid style={RVStyles.loaderImageStyle} />
        </SafeAreaView>
    )
}