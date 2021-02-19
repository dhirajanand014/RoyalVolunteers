import React, { useContext } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import {
    actionButtonTextConstants, errorModalTitleConstants,
    numericConstants, routeConsts
} from "../../constants/Constants";
import { RVGenericStyles, RVStyles } from "../../styles/Styles";
import LinearGradient from "react-native-linear-gradient";
import { SignUpContext } from "../../App";
import { useNavigation } from "@react-navigation/native";

export const NotificationReceivedModal = props => {

    const { notificationDetails, setNotificationDetails } = useContext(SignUpContext);
    const { message } = notificationDetails;
    const { notification } = message;

    const navigation = useNavigation();

    return (
        <Modal animationType="slide" transparent visible={notificationDetails.showNotificationModal}
            onRequestClose={() => setNotificationDetails({ ...notificationDetails, showNotificationModal: false })} >
            <View style={RVStyles.modalContainer}>
                <LinearGradient style={RVStyles.modalViewStyle} colors={['white', 'white']}>
                    <View style={RVStyles.modalTitleTextView}>
                        <Text style={RVStyles.modalTitleTextStyle}>{notification && notification.title ||
                            errorModalTitleConstants.NOT_AVAILABLE}</Text>
                        <View style={RVStyles.modalTitleDivider}></View>
                    </View>
                    <View style={RVStyles.modalMessageViewStyle}>
                        <Text style={RVStyles.modalMessageTextStyle}>{notification && notification.body ||
                            errorModalTitleConstants.NOT_AVAILABLE}</Text>
                    </View>
                    <View style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.justifyContentSpaceBetween]}>
                        <View>
                            <TouchableOpacity activeOpacity={.2} style={[RVGenericStyles.width120, RVGenericStyles.mv30]}
                                onPress={() => setNotificationDetails({ ...notificationDetails, showNotificationModal: false })}>
                                <Text style={RVStyles.feedBackCancelText}>{actionButtonTextConstants.CANCEL}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity activeOpacity={.7} style={RVStyles.feedBackSubmitButton}
                                onPress={() => {
                                    navigation.reset({
                                        index: numericConstants.ZERO, routes: [{
                                            name: routeConsts.BLOOD_REQUEST_NOTIFICATION, params: {
                                                requests: message.data.requests
                                            }
                                        }]
                                    });
                                    setNotificationDetails({ ...notificationDetails, showNotificationModal: false });
                                }}>
                                <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText]}>{actionButtonTextConstants.SUBMIT}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </Modal>
    );
};