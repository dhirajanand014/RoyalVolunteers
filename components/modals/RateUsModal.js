import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { actionButtonTextConstants, miscMessage, successFulMessages } from "../../constants/Constants";
import { openAppLinkInStore } from "../../helper/Helper";
import { colors, RVGenericStyles, RVStyles } from "../../styles/Styles";
import { RVLoaderView } from "../view/RVLoaderView";
import LinearGradient from "react-native-linear-gradient";

export const RateUsModal = props => {

    const [loader, setLoader] = useState(false);
    const { userDashboard, setUserDashboard } = props;

    return (
        <Modal animationType={`slide`} transparent visible={userDashboard.showRateUsModal}
            onRequestClose={() => setUserDashboard({ ...userDashboard, showRateUsModal: false })}>
            <View style={RVGenericStyles.alignItemsCenter}>
                <LinearGradient style={RVStyles.rateUsModalViewStyle} colors={[colors.WHITE, colors.WHITE]}>
                    <View style={RVStyles.modalTitleTextView}>
                        <Text style={RVStyles.modalTitleTextStyle}>{miscMessage.RATE_US}</Text>
                        <View style={RVStyles.modalTitleDivider}></View>
                    </View>
                    <View style={RVStyles.modalMessageViewStyle}>
                        <Text style={RVStyles.modalMessageTextStyle}>{successFulMessages.RATE_US_MESSAGE}</Text>
                    </View>
                    <View style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.justifyContentSpaceBetween]}>
                        <View>
                            <TouchableOpacity activeOpacity={.2} style={[RVGenericStyles.width120, RVGenericStyles.mv15]}
                                onPress={() => setUserDashboard({ ...userDashboard, showRateUsModal: false })}>
                                <Text style={RVStyles.feedBackCancelText}>{actionButtonTextConstants.NOT_NOW}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity activeOpacity={.7} style={RVStyles.feedBackSubmitButton}
                                onPress={() => {
                                    setLoader(true);
                                    openAppLinkInStore();
                                    setUserDashboard({ ...userDashboard, showRateUsModal: false });
                                    setLoader(false);
                                }}>
                                <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText]}>{actionButtonTextConstants.SURE}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
                {
                    loader && <RVLoaderView />
                }
            </View>
        </Modal>
    );
};