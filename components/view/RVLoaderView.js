
import React from 'react';
import { View } from 'react-native';
import { miscMessage } from '../../constants/Constants';
import LottieView from 'lottie-react-native';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';

export const RVLoaderView = props => {
    return (
        <View style={[RVGenericStyles.fill, RVGenericStyles.alignItemsCenter, RVGenericStyles.justifyContentCenter,
        RVGenericStyles.opacitypt7, RVStyles.loader]} pointerEvents={miscMessage.NONE}>
            <LottieView source={require('../../assets/rv_action_loader.json')} autoPlay loop
                hardwareAccelerationAndroid style={RVStyles.loaderImageStyle} />
        </View>
    )
}