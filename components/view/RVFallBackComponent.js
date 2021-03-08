import React from 'react';
import { Image, View, Text, TouchableOpacity } from "react-native";
import { errorBoundaryStyles, RVGenericStyles, RVStyles } from "../../styles/Styles";
import RNRestart from 'react-native-restart';
import * as Animatable from 'react-native-animatable';
import { errorModalMessageConstants, miscMessage, height, width } from '../../constants/Constants';

export const RVFallBackComponent = () => {

    return (
        <View style={errorBoundaryStyles.container}>
            <View style={[{ width: width, height: height }, errorBoundaryStyles.content]}>
                <View>
                    <Animatable.View animation={`shake`} style={RVGenericStyles.alignItemsCenter} iterationCount={miscMessage.INFINITE}>
                        <Image source={require(`../../assets/rv_login_error_icon.png`)} style={RVStyles.modalErrorImage} />
                    </Animatable.View>
                    <Text style={errorBoundaryStyles.textMessage1Style}>{errorModalMessageConstants.SOMETHING_WENT_WRONG}</Text>
                    <Text style={errorBoundaryStyles.textMessage2Style}>{errorModalMessageConstants.ERROR_BOUNDARY}</Text>
                </View>
                <TouchableOpacity activeOpacity={.7} style={errorBoundaryStyles.resetButton} onPress={() => RNRestart.Restart()}>
                    <Text style={errorBoundaryStyles.redirectButtonText}>{miscMessage.RELOAD_APPLICATION}</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}