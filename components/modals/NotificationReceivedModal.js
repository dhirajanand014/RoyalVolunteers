import React, { useContext } from "react";
import { Linking, Modal, Text, TouchableOpacity, View } from "react-native";
import {
    actionButtonTextConstants, countryCodesConstants, errorModalTitleConstants,
    miscMessage, routeConsts, stringConstants
} from "../../constants/Constants";
import { colors, RVGenericStyles, RVStyles } from "../../styles/Styles";
import LinearGradient from "react-native-linear-gradient";
import { SignUpContext } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { RVPhoneIcon } from "../icons/RVPhoneIcon";
import { updateNotificationsStatus } from "../../helper/Helper";

export const NotificationReceivedModal = () => {

    const { notificationDetails, setNotificationDetails } = useContext(SignUpContext);
    const { message } = notificationDetails;
    const { notification, data } = message;
    const navigation = useNavigation();

    return (
        <Modal animationType={`slide`} transparent visible={notificationDetails.showNotificationModal}
            onRequestClose={() => setNotificationDetails({ ...notificationDetails, showNotificationModal: false })} >
            <View style={RVStyles.alignItemsCenter}>
                <LinearGradient style={RVStyles.modalViewStyle} colors={[colors.WHITE, colors.WHITE]}>
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
                            <TouchableOpacity activeOpacity={.7} style={RVStyles.viewRequestButton}
                                onPress={async () => {
                                    navigation.push(routeConsts.BLOOD_REQUEST_NOTIFICATION);
                                    setNotificationDetails({ ...notificationDetails, showNotificationModal: false, message: stringConstants.EMPTY });
                                }}>
                                <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText]}>{actionButtonTextConstants.VIEW_REQUESTS}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.justifyContentCenter, RVGenericStyles.backGroundColorGreen,
                    RVGenericStyles.alignItemsCenter, RVStyles.foregroundNotificationCallStyle, RVGenericStyles.elevation3]}
                        onPress={async () => {
                            Linking.openURL(`tel:${countryCodesConstants.INDIA}${data.phone_number}`);
                            await updateNotificationsStatus();
                        }}>
                        <RVPhoneIcon stroke={colors.WHITE_GREY} />
                        <Text style={[RVGenericStyles.bold, RVGenericStyles.ml_8, RVGenericStyles.colorWhite, RVGenericStyles.ft16, RVGenericStyles.fontFamilyNormal]}>
                            {miscMessage.CALL}{stringConstants.SPACE}{miscMessage.NOW}
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </Modal>
    );
};