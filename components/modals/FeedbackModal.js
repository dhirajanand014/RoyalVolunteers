import React from "react";
import { useForm } from "react-hook-form";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import {
    fieldControllerName, formRequiredRules, miscMessage,
    stringConstants, placeHolderText, numericConstants, actionButtonTextConstants
} from "../../constants/Constants";
import { saveFeedbackText, showSnackBar } from "../../helper/Helper";
import { RVGenericStyles, RVStyles } from "../../styles/Styles";
import { RegistrationInput } from "../input/RegistrationInput";

export const FeedbackModal = props => {

    const { handleSubmit, control, formState } = useForm();
    const { userDashboard, setUserDashboard, phoneNumber } = props;

    return (
        <View style={[RVGenericStyles.fill, RVGenericStyles.justifyContentCenter]} >
            <Modal animationType="fade" transparent visible={userDashboard.showFeedbackModal}
                onRequestClose={() => setUserDashboard({ ...userDashboard, showFeedbackModal: false })} >
                <View style={RVGenericStyles.alignItemsCenter}>
                    <View style={[RVStyles.feedBackModalView, RVGenericStyles.alignItemsCenter]}>
                        <RegistrationInput inputName={fieldControllerName.FEEDBACK} control={control} rules={formRequiredRules.feedBackInputRule}
                            defaultValue={stringConstants.EMPTY} placeHolderText={placeHolderText.FEEDBACK} extraStyles={RVStyles.hospiatalTextHeight}
                            formState={formState} multiline={true} underlineColorAndroid={miscMessage.TRANSPARENT} numberOfLines={numericConstants.TWO}
                            extraStyles={[RVStyles.feedBackModalTextInput, RVGenericStyles.justifyContentCenter]} isFeedbackInput={true} />

                        <View style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.justifyContentSpaceBetween]}>
                            <View>
                                <TouchableOpacity activeOpacity={.2} style={[RVGenericStyles.width120, RVGenericStyles.mv30]}
                                    onPress={() => setUserDashboard({ ...userDashboard, showFeedbackModal: false })}>
                                    <Text style={RVStyles.feedBackCancelText}>{actionButtonTextConstants.CANCEL}</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity activeOpacity={.7} style={RVStyles.feedBackSubmitButton}
                                    onPress={handleSubmit(async data => {
                                        const feedbackResponse = await saveFeedbackText(data.feedback, phoneNumber);
                                        feedbackResponse == miscMessage.SUCCESS &&
                                            setTimeout(() => showSnackBar(miscMessage.FEEDBACK_SUBMITTED_SUCCESSFULLY, true), numericConstants.THREE_HUNDRED);
                                        feedbackResponse == miscMessage.ERROR &&
                                            setTimeout(() => showSnackBar(errorModalMessageConstants.FEEDBACK_SUBMITTED_UNSUCCESSFULLY, false), numericConstants.THREE_HUNDRED);
                                        setUserDashboard({ ...userDashboard, showFeedbackModal: false })
                                    })}>
                                    <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText]}>{actionButtonTextConstants.SUBMIT}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View >
    );
};