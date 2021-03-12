import React from "react";
import { Modal, Text, TouchableOpacity, View, Image } from "react-native";
import { stringConstants, actionButtonTextConstants } from "../../constants/Constants";
import { setErrorModal } from "../../helper/Helper";
import { RVGenericStyles, RVStyles } from "../../styles/Styles";
import * as Animatable from 'react-native-animatable';
import LinearGradient from "react-native-linear-gradient";

export const ErrorModal = props => {

    const { error, setError } = props;

    return (
        <Modal animationType="slide" transparent visible={error.showModal} onRequestClose={() => setErrorModal(error, setError, stringConstants.EMPTY, stringConstants.EMPTY, false)} >
            <View style={RVStyles.modalContainer}>
                <LinearGradient style={RVStyles.modalViewStyle} colors={['white', 'white']}>
                    <View style={RVStyles.modalTitleTextView}>
                        <Text style={RVStyles.modalTitleTextStyle}>{error.title}</Text>
                        <View style={RVStyles.modalTitleDivider}></View>
                    </View>
                    <View style={RVStyles.modalMessageViewStyle}>
                        <Text style={RVStyles.modalMessageTextStyle}>{error.message}</Text>
                        <Animatable.View animation={`shake`}>
                            <Image source={require(`../../assets/rv_login_error_icon.png`)} style={RVStyles.modalErrorImage} />
                        </Animatable.View>
                    </View>
                    <TouchableOpacity activeOpacity={.3} style={RVStyles.modalOKButtonStyle} onPress={() =>
                        setErrorModal(error, setError, stringConstants.EMPTY, stringConstants.EMPTY, false)}>
                        <Text style={RVStyles.modalButtonTextStyle}>{actionButtonTextConstants.OK}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </Modal>
    );
};