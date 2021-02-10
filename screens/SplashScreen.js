import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { colors, RVGenericStyles } from '../styles/Styles';
import LottieView from 'lottie-react-native';
import { SignUpContext } from '../App';
import { validateSavedToken, getSavedToken, fetchSplashScreenRoute } from '../helper/Helper';
import { numericConstants, stringConstants } from '../constants/Constants';
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
                hardwareAccelerationAndroid style={{ width: 100, height: 100 }} />
            <Text style={{ color: colors.ORANGE, fontSize: 14, fontWeight: 'bold', marginTop: 30 }}>Loading</Text>
            <ActivityIndicator color="red" shouldRasterizeIOS hidesWhenStopped animating style={{ marginTop: 20 }} />
        </SafeAreaView>
    )
}