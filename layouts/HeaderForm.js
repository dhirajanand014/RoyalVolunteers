import React from 'react';
import { Image, View, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { RVArrowLeftIcon } from '../components/icons/RVArrowLeftIcon';
import { isAndroid, isIOS, numericConstants } from '../constants/Constants';
import { colors, RVStyles } from '../styles/Styles';
import { navigateToPreviousScreen } from '../helper/Helper';

export const HeaderForm = (props) => {
    const navigation = useNavigation()
    const { style, imagePath } = props
    return (
        <View>
            {!props.isFromDashBoard && (isAndroid &&
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.WHITE, true, numericConstants.TWENTY)}
                    onPress={() => navigateToPreviousScreen(props.isFromDashBoard, navigation)}>
                    <View style={RVStyles.headerBackButton}>
                        <RVArrowLeftIcon />
                    </View>
                </TouchableNativeFeedback> ||
                isIOS && <TouchableOpacity onPress={() => navigateToPreviousScreen(props.isFromDashBoard, navigation)}
                    style={RVStyles.headerBackButton}>
                    <RVArrowLeftIcon />
                </TouchableOpacity>)
            }
            <View style={style}>
                <Image source={imagePath} style={{
                    height: props.height || numericConstants.ONE_HUNDRED_THIRTY, width: props.width ||
                        numericConstants.ONE_HUNDRED_THIRTY
                }} />
            </View>
        </View>
    )
}