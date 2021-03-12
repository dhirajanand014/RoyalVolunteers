import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import Stars from 'react-native-stars';
import {
    fieldControllerName, formRequiredRules, miscMessage,
    stringConstants, placeHolderText, numericConstants,
    actionButtonTextConstants, successFulMessages, errorModalMessageConstants
} from "../../constants/Constants";
import { saveTestimonialData, showSnackBar } from "../../helper/Helper";
import { colors, RVGenericStyles, RVStyles } from "../../styles/Styles";
import { RVStarIcon } from "../icons/RVStarIcon";
import { RegistrationInput } from "../input/RegistrationInput";
import { RVLoaderView } from "../view/RVLoaderView";

export const TestimonialModal = props => {

    const { handleSubmit, control, formState } = useForm();
    const [loader, setLoader] = useState(false);
    const { userDashboard, setUserDashboard, phoneNumber } = props;

    return (
        <Modal animationType={`fade`} transparent visible={userDashboard.showTestimonialModal}
            onRequestClose={() => setUserDashboard({ ...userDashboard, showTestimonialModal: false })} >
            <View style={RVGenericStyles.alignItemsCenter}>
                <View style={[RVStyles.feedBackModalView, RVGenericStyles.alignItemsCenter]}>
                    <RegistrationInput inputName={fieldControllerName.TESTIMONIAL} control={control} rules={formRequiredRules.testimnialRule}
                        defaultValue={stringConstants.EMPTY} placeHolderText={placeHolderText.TESTIMONIAL} extraStyles={RVStyles.hospitalTextHeight}
                        formState={formState} multiline={true} underlineColorAndroid={miscMessage.TRANSPARENT} numberOfLines={numericConstants.TWO}
                        extraStyles={[RVStyles.testimonialModalTextInput, RVGenericStyles.justifyContentCenter]} isTestimonialInput={true} />
                    <Text style={RVStyles.registrationFormInputError}>{formState.errors[fieldControllerName.TESTIMONIAL]?.message}</Text>
                    <View style={[RVGenericStyles.mv20]}>
                        <Stars default={numericConstants.ZERO} update={(val) => setUserDashboard({ ...userDashboard, testimonialStars: val })}
                            spacing={numericConstants.FOUR} count={numericConstants.FIVE} fullStar={<RVStarIcon fill={colors.GREEN} strokeColor={colors.BLACK} height={numericConstants.THIRTY}
                                width={numericConstants.THIRTY} />} emptyStar={<RVStarIcon fill={miscMessage.NONE} strokeColor={colors.BLACK} height={numericConstants.THIRTY}
                                    width={numericConstants.THIRTY} />} />
                    </View>
                    <View style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.justifyContentSpaceBetween]}>
                        <View>
                            <TouchableOpacity activeOpacity={.2} style={[RVGenericStyles.width120, RVGenericStyles.mv15]}
                                onPress={() => setUserDashboard({ ...userDashboard, showTestimonialModal: false })}>
                                <Text style={RVStyles.feedBackCancelText}>{actionButtonTextConstants.CANCEL}</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity activeOpacity={.7} style={RVStyles.testimonialSubmitButton}
                                onPress={handleSubmit(async data => {
                                    setLoader(true);
                                    const testimonialResponse = await saveTestimonialData(data.testimonial, userDashboard.testimonialStars, phoneNumber,
                                        userDashboard, setUserDashboard);
                                    testimonialResponse == miscMessage.SUCCESS &&
                                        setTimeout(() => showSnackBar(successFulMessages.TESTIMONIAL_SUBMITTED_SUCCESSFULLY, true), numericConstants.THREE_HUNDRED);
                                    testimonialResponse == miscMessage.ERROR &&
                                        setTimeout(() => showSnackBar(errorModalMessageConstants.TESTIMONIAL_SUBMITTED_UNSUCCESSFULLY, false), numericConstants.THREE_HUNDRED);
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
        </Modal>
    );
};