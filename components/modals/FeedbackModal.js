import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Keyboard, Modal, Text,
    TouchableOpacity, TouchableWithoutFeedback, View
} from "react-native";
import {
    fieldControllerName, formRequiredRules, miscMessage,
    stringConstants, placeHolderText, numericConstants,
    actionButtonTextConstants, successFulMessages, errorModalMessageConstants
} from "../../constants/Constants";
import { saveFeedbackText, showSnackBar } from "../../helper/Helper";
import { RVGenericStyles, RVStyles } from "../../styles/Styles";
import { RegistrationInput } from "../input/RegistrationInput";
import { RVLoaderView } from "../view/RVLoaderView";

export const FeedbackModal = props => {

    const { handleSubmit, control, formState } = useForm();
    const [loader, setLoader] = useState(false);
    const { userDashboard, setUserDashboard, phoneNumber } = props;

    return (
        <Modal animationType={`fade`} transparent visible={userDashboard.showFeedbackModal}
            onRequestClose={() => setUserDashboard({ ...userDashboard, showFeedbackModal: false })}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={RVGenericStyles.alignItemsCenter}>
                    <View style={[RVStyles.feedBackModalView, RVGenericStyles.alignItemsCenter]}>
                        <RegistrationInput inputName={fieldControllerName.FEEDBACK} control={control} rules={formRequiredRules.feedBackInputRule}
                            defaultValue={stringConstants.EMPTY} placeHolderText={placeHolderText.FEEDBACK} extraStyles={RVStyles.hospitalTextHeight}
                            formState={formState} multiline={true} autofocus={true} underlineColorAndroid={miscMessage.TRANSPARENT} numberOfLines={numericConstants.TWO}
                            extraStyles={[RVStyles.feedBackModalTextInput, RVGenericStyles.justifyContentCenter]} isFeedbackInput={true} />
                        <Text style={RVStyles.registrationFormInputError}>{formState.errors[fieldControllerName.FEEDBACK]?.message}</Text>
                        <View style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.justifyContentSpaceBetween]}>
                            <View>
                                <TouchableOpacity activeOpacity={.2} style={[RVGenericStyles.width120, RVGenericStyles.mv15]}
                                    onPress={() => setUserDashboard({ ...userDashboard, showFeedbackModal: false })}>
                                    <Text style={RVStyles.feedBackCancelText}>{actionButtonTextConstants.CANCEL}</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity activeOpacity={.7} style={RVStyles.feedBackSubmitButton}
                                    onPress={handleSubmit(async data => {
                                        setLoader(true);
                                        const feedbackResponse = await saveFeedbackText(data.feedback, phoneNumber);
                                        feedbackResponse == miscMessage.SUCCESS &&
                                            setTimeout(() => showSnackBar(successFulMessages.FEEDBACK_SUBMITTED_SUCCESSFULLY, true), numericConstants.THREE_HUNDRED);
                                        feedbackResponse == miscMessage.ERROR &&
                                            setTimeout(() => showSnackBar(errorModalMessageConstants.FEEDBACK_SUBMITTED_UNSUCCESSFULLY, false), numericConstants.THREE_HUNDRED);
                                        setUserDashboard({ ...userDashboard, showFeedbackModal: false });
                                        setLoader(false);
                                    })}>
                                    <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText]}>{actionButtonTextConstants.SUBMIT}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {
                        loader && <RVLoaderView />
                    }
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};