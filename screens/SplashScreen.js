import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { RVGenericStyles, RVStyles } from '../styles/Styles';
import LottieView from 'lottie-react-native';
import { SignUpContext } from '../App';
import { validateSavedToken, getSavedToken, fetchSplashScreenRoute } from '../helper/Helper';
import { miscMessage, numericConstants, stringConstants } from '../constants/Constants';
import { useNavigation } from '@react-navigation/native';

export const SplashScreen = props => {

    const navigation = useNavigation();
    const { error, setError } = useContext(SignUpContext);

    const navigateUser = async (savedToken, isValidRequest) => {
        const route = await fetchSplashScreenRoute(savedToken, isValidRequest);
        navigation.reset({ index: numericConstants.ZERO, routes: [route] });
    }

    const fetchTokenDetails = async () => {
        const savedToken = await getSavedToken(error, setError);
        const isValidRequest = await validateSavedToken(savedToken, stringConstants.EMPTY, error, setError, true);
        await navigateUser(savedToken, isValidRequest);
    }

    useEffect(() => {
        fetchTokenDetails();
    }, []);

    return (
        <SafeAreaView style={[RVGenericStyles.fill, RVGenericStyles.justifyContentCenter, RVGenericStyles.alignItemsCenter]}>
            <LottieView source={require('../assets/rv_splash_screen_image.json')} autoPlay loop
                hardwareAccelerationAndroid style={RVStyles.splashScreenAnimatedImage} />
            <Text style={RVStyles.splashScreenLoadingText}>{miscMessage.LOADING}</Text>
            <ActivityIndicator color="red" shouldRasterizeIOS hidesWhenStopped animating style={RVGenericStyles.mt20} />
        </SafeAreaView>
    )
}