import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, Text } from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';
import { RVGenericStyles, RVStyles, colors } from '../styles/Styles';
import { OTPInputText } from '../components/input/OTPInputText';
import { OTPTextView } from '../components/texts/OTPTextView';
import { OTPTimeText } from '../components/texts/OTPTimeText';
import { OTPResendButton } from '../components/button/OTPResendButton';
import {
    logErrorWithMessageonOtpChange, onOtpKeyPress, onResendOtpButtonPress,
    identifyOtpError, verifyOtpRequest, onOtpChange
} from '../helper/Helper';
import { HeaderForm } from '../layouts/HeaderForm';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useForm } from 'react-hook-form';
import {
    AUTO_SUBMIT_OTP_TIME_LIMIT, keyBoardTypeConst, isAndroid,
    RESEND_OTP_TIME_LIMIT, screenTitle, stringConstants, OTP_INPUTS,
    numericConstants, actionButtonTextConstants, miscMessage, routeConsts
} from '../constants/Constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SignUpContext } from '../App';

let resendOtpTimerInterval;
let autoSubmitOtpTimerInterval;

let otpInputs = Array(OTP_INPUTS).fill(stringConstants.EMPTY);

export const SignUpOTPVerication = props => {
    const { otpRequestData, attempts } = props;
    let [attemptsRemaining, setAttemptsRemaining] = useState(attempts);
    const [otpArray, setOtpArray] = useState(otpInputs);
    const [submittingOtp, setSubmittingOtp] = useState(false);

    const route = useRoute();

    const isFromBloodRequestForm = route.params?.isFromBloodRequestForm;

    const { requestForm, signUpDetails } = useContext(SignUpContext);

    const navigation = useNavigation();
    const { handleSubmit, control, setError, formState, clearErrors } = useForm();

    // in secs, if value is greater than 0 then button will be disabled
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
        RESEND_OTP_TIME_LIMIT,
    );

    // 0 < autoSubmitOtpTime < 3 to show auto submitting OTP text
    const [autoSubmitOtpTime, setAutoSubmitOtpTime] = useState(
        AUTO_SUBMIT_OTP_TIME_LIMIT,
    );

    // TextInput refs to focus programmatically while entering OTP
    const firstTextInputRef = useRef(null);
    const secondTextInputRef = useRef(null);
    const thirdTextInputRef = useRef(null);
    const fourthTextInputRef = useRef(null);
    const fifthTextInputRef = useRef(null);
    const sixththTextInputRef = useRef(null);

    const textInputs = { firstTextInputRef, secondTextInputRef, thirdTextInputRef, fourthTextInputRef, fifthTextInputRef }

    useEffect(() => {
        startResendOtpTimer()
        return () => {
            if (resendOtpTimerInterval) {
                clearInterval(resendOtpTimerInterval);
            }
        };
    }, [resendButtonDisabledTime]);

    useEffect(() => {
        // docs: https://github.com/faizalshap/react-native-otp-verify
        isAndroid &&
            RNOtpVerify.getOtp()
                .then(() =>
                    RNOtpVerify.addListener(() => {
                        try {
                            // if (message) {
                            //     const messageArray = message.split('\n');
                            //     if (messageArray[2]) {
                            //         const otp = messageArray[2].split(' ')[0];
                            //         if (otp.length === 6) {
                            //             setOtpArray(otp.split(''));

                            //             // to auto submit otp in 4 secs
                            //             setAutoSubmitOtpTime(AUTO_SUBMIT_OTP_TIME_LIMIT);
                            //             startAutoSubmitOtpTimer();
                            //         }
                            //     }
                            // }
                        } catch (error) {
                            logErrorWithMessage(error.message, 'RNOtpVerify.getOtp - read message, OtpVerification',);
                        }
                    }),
                )
                .catch(error => {
                    logErrorWithMessage(error.message, 'RNOtpVerify.getOtp, OtpVerification',);
                });

        // remove listener on unmount
        return () => {
            isAndroid && RNOtpVerify.removeListener();
        };
    }, []);

    const startResendOtpTimer = () => {
        if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
        }
        resendOtpTimerInterval = setInterval(() => {
            if (resendButtonDisabledTime <= numericConstants.ZERO) {
                clearInterval(resendOtpTimerInterval);
            } else {
                setResendButtonDisabledTime(resendButtonDisabledTime - numericConstants.ONE);
            }
        }, numericConstants.THOUSAND);
    };

    const refCallback = textInputRef => node => {
        textInputRef.current = node;
    };

    const onSubmit = async () => {
        const otpString = otpArray.reduce((result, item) => { return `${result}${item}` }, stringConstants.EMPTY);
        const isValid = identifyOtpError(otpString, otpArray, setError, clearErrors);
        if (isValid) {
            const randomNumber = route.params?.rand_number || false;
            const navigationResponse = await verifyOtpRequest(otpString, isFromBloodRequestForm, signUpDetails, requestForm, randomNumber);
            if (miscMessage.RESET_NAVIGATION == navigationResponse || miscMessage.CONFIRM_SECRET == navigationResponse) {
                clearInterval(resendOtpTimerInterval);
                if (miscMessage.RESET_NAVIGATION == navigationResponse)
                    navigation.reset({ index: numericConstants.ZERO, routes: [{ name: routeConsts.HOME }], });
                else if (miscMessage.CONFIRM_SECRET == navigationResponse)
                    navigation.navigate(routeConsts.SIGN_UP_SECRET);
            }
        }
    };

    console.log(firstTextInputRef?.current?.value);

    return (
        <View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <View style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>{screenTitle.ENTER_OTP}</Text>
                <View style={[RVStyles.otpFieldRows, RVGenericStyles.mt12]}>
                    {
                        [firstTextInputRef, secondTextInputRef, thirdTextInputRef, fourthTextInputRef, fifthTextInputRef,
                            sixththTextInputRef].map((textInputRef, index) => (
                                <OTPInputText control={control} containerStyle={[RVGenericStyles.fill, RVGenericStyles.mr12,
                                { borderColor: otpArray[index] && colors.GREEN || textInputRef?.current?.isFocused() && !otpArray[index] && colors.BLUE || colors.ORANGE }]} value={otpArray[index].toString()}
                                    onKeyPress={onOtpKeyPress(index, otpArray, firstTextInputRef, secondTextInputRef, thirdTextInputRef, fourthTextInputRef,
                                        fifthTextInputRef, setOtpArray, setError, clearErrors)} onChangeText={onOtpChange(index, otpArray, setOtpArray, secondTextInputRef, thirdTextInputRef, fourthTextInputRef,
                                            fifthTextInputRef, sixththTextInputRef)} keyboardType={keyBoardTypeConst.NUMERIC} textContentType={keyBoardTypeConst.ONETIMECODE}
                                    keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} refCallback={refCallback(textInputRef)}
                                    maxLength={numericConstants.ONE} key={index} autoFocus={index === numericConstants.ZERO && true || false} />
                            ))}
                </View>
                <Text style={RVStyles.otpErrorMessageStyle}>{formState.errors.otpInput?.message}</Text>
                {
                    resendButtonDisabledTime > numericConstants.ZERO && <OTPTimeText text={miscMessage.RESEND_OTP_IN} time={resendButtonDisabledTime} />
                    || <OTPResendButton text={miscMessage.RESEND_OTP} buttonStyle={RVStyles.otpResendButton} textStyle={RVStyles.otpResendButtonText}
                        onPress={async () => await onResendOtpButtonPress(firstTextInputRef, setOtpArray, setResendButtonDisabledTime, setAttemptsRemaining,
                            attemptsRemaining, startResendOtpTimer, signUpDetails, isFromBloodRequestForm, navigation, clearErrors)} />
                }
                <View style={RVGenericStyles.fill} />
                {
                    submittingOtp && <ActivityIndicator />
                }
                {
                    autoSubmitOtpTime > numericConstants.ZERO && autoSubmitOtpTime < AUTO_SUBMIT_OTP_TIME_LIMIT &&
                    <OTPTimeText text={miscMessage.SUBMITTING_IN} time={autoSubmitOtpTime} />
                }
                <View style={RVStyles.signUpPrimaryButtonView}>
                    <OTPTextView style={[RVGenericStyles.centerAlignedText, RVGenericStyles.mt36]}>
                        {attemptsRemaining || numericConstants.ZERO} Attempts remaining
                    </OTPTextView>
                    <TouchableOpacity activeOpacity={.7} style={RVStyles.otpVerifyButton} onPress={handleSubmit(onSubmit)} >
                        <LinearGradient style={RVStyles.signUpActionButtonGradient} colors={[colors.ORANGE, colors.RED]}>
                            <Text style={RVStyles.primaryActionButtonButtonText}>{actionButtonTextConstants.VERIFY}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

SignUpOTPVerication.defaultProps = {
    attempts: numericConstants.THREE
};

SignUpOTPVerication.propTypes = {
    otpRequestData: isAndroid && PropTypes.object.isRequired || null,
    attempts: PropTypes.number.isRequired,
};
