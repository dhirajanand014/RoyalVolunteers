import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { RVGenericStyles, RVStyles, colors } from '../styles/Styles';
import { OTPInputText } from '../components/input/OTPInputText';
import { OTPTextView } from '../components/texts/OTPTextView';
import { OTPTimeText } from '../components/texts/OTPTimeText';
import { OTPResendButton } from '../components/button/OTPResendButton';
import {
    onOtpKeyPress, onResendOtpButtonPress,
    identifyOtpError, verifyOtpRequest, onOtpChange, verifyOtpReceived
} from '../helper/Helper';
import { HeaderForm } from '../layouts/HeaderForm';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useForm } from 'react-hook-form';
import {
    AUTO_SUBMIT_OTP_TIME_LIMIT, keyBoardTypeConst, isAndroid, screenTitle,
    RESEND_OTP_TIME_LIMIT, stringConstants, OTP_INPUTS,
    numericConstants, actionButtonTextConstants, miscMessage, routeConsts
} from '../constants/Constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SignUpContext } from '../App';

let resendOtpTimerInterval;
let autoSubmitOtpTimerInterval;

let otpInputs = Array(OTP_INPUTS).fill(stringConstants.EMPTY);

export const SignUpOTPVerification = props => {
    const { otpRequestData, attempts } = props;
    let [attemptsRemaining, setAttemptsRemaining] = useState(attempts);
    const [otpArray, setOtpArray] = useState(otpInputs);
    const [autoSubmittingOtp, setAutoSubmittingOtp] = useState(false);

    const route = useRoute();

    const isFrom = route?.params?.isFrom;

    const { requestForm, signUpDetails, setLoader } = useContext(SignUpContext);

    const phoneNumber = signUpDetails.phoneNumber || route?.params?.phoneNumber;

    const navigation = useNavigation();
    const { handleSubmit, control, setError, formState, clearErrors } = useForm();

    // in secs, if value is greater than 0 then button will be disabled
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(RESEND_OTP_TIME_LIMIT);
    const [autoSubmitOtpTime, setAutoSubmitOtpTime] = useState(AUTO_SUBMIT_OTP_TIME_LIMIT);
    // TextInput refs to focus programmatically while entering OTP
    const firstTextInputRef = useRef(null);
    const secondTextInputRef = useRef(null);
    const thirdTextInputRef = useRef(null);
    const fourthTextInputRef = useRef(null);
    const fifthTextInputRef = useRef(null);
    const sixththTextInputRef = useRef(null);

    const verifyButtonRef = useRef(null);

    const autoSubmitOtpTimerIntervalCallbackReference = useRef();

    useEffect(() => {
        // autoSubmitOtpTime value will be set after otp is detected,
        // in that case we have to start auto submit timer
        autoSubmitOtpTimerIntervalCallbackReference.current = autoSubmitOtpTimerIntervalCallback;
    });
    useEffect(() => {
        startResendOtpTimer()
        return () => resendOtpTimerInterval && clearInterval(resendOtpTimerInterval);
    }, [resendButtonDisabledTime]);

    useEffect(() => {
        (async () => {
            await verifyOtpReceived(setOtpArray, setAutoSubmitOtpTime, startAutoSubmitOtpTimer, setAutoSubmittingOtp);
        })();
    }, []);

    const startResendOtpTimer = () => {
        resendOtpTimerInterval && clearInterval(resendOtpTimerInterval);
        resendOtpTimerInterval = setInterval(() => {
            if (resendButtonDisabledTime <= numericConstants.ZERO) {
                clearInterval(resendOtpTimerInterval);
            } else {
                setResendButtonDisabledTime(resendButtonDisabledTime - numericConstants.ONE);
            }
        }, numericConstants.THOUSAND);
    };

    // this callback is being invoked from startAutoSubmitOtpTimer which itself is being invoked from useEffect
    // since useEffect use closure to cache variables data, we will not be able to get updated autoSubmitOtpTime value
    // as a solution we are using useRef by keeping its value always updated inside useEffect(componentDidUpdate)
    const autoSubmitOtpTimerIntervalCallback = async () => {
        setLoader(true);
        if (autoSubmitOtpTime <= numericConstants.ZERO) {
            clearInterval(autoSubmitOtpTimerInterval);
            await onSubmit();
            setLoader(false);
            setAutoSubmittingOtp(false);
        }
        setAutoSubmitOtpTime(autoSubmitOtpTime - numericConstants.ONE);
    };

    const startAutoSubmitOtpTimer = () => {
        autoSubmitOtpTimerInterval && clearInterval(autoSubmitOtpTimerInterval);
        autoSubmitOtpTimerInterval = setInterval(() => {
            autoSubmitOtpTimerIntervalCallbackReference.current();
        }, numericConstants.THOUSAND);
    };

    const refCallback = textInputRef => node => {
        textInputRef.current = node;
    };

    const onSubmit = async () => {
        setLoader(true);
        const otpString = otpArray.reduce((result, item) => { return `${result}${item}` }, stringConstants.EMPTY);
        const isValid = identifyOtpError(otpString, otpArray, setError, clearErrors);
        if (isValid) {
            const randomNumber = route.params?.rand_number || false;
            const navigationResponse = await verifyOtpRequest(otpString, isFrom, phoneNumber, requestForm, randomNumber);
            if (miscMessage.RESET_NAVIGATION == navigationResponse || miscMessage.CONFIRM_SECRET == navigationResponse) {
                clearInterval(resendOtpTimerInterval);
                if (miscMessage.RESET_NAVIGATION == navigationResponse)
                    navigation.reset({ index: numericConstants.ZERO, routes: [{ name: routeConsts.HOME }] });
                else if (miscMessage.CONFIRM_SECRET == navigationResponse)
                    navigation.navigate(routeConsts.SIGN_UP_SECRET, { isFrom: isFrom, phoneNumber: phoneNumber });
            }
        }
        setLoader(false);
    };

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                                                fifthTextInputRef, sixththTextInputRef)} textContentType={keyBoardTypeConst.ONETIMECODE} maxLength={numericConstants.ONE}
                                        keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} refCallback={refCallback(textInputRef)}
                                        key={index} autoFocus={index === numericConstants.ZERO && true || false} />
                                ))}
                    </View>
                    <Text style={RVStyles.otpErrorMessageStyle}>{formState.errors.otpInput?.message}</Text>
                    {
                        resendButtonDisabledTime > numericConstants.ZERO && <OTPTimeText text={miscMessage.RESEND_OTP_IN} time={resendButtonDisabledTime} />
                        || <OTPResendButton text={miscMessage.RESEND_OTP} buttonStyle={RVStyles.otpResendButton} textStyle={[RVGenericStyles.colorBlue, RVGenericStyles.bold,
                        RVGenericStyles.fontFamilyNormal, RVGenericStyles.ft16]}
                            onPress={async () => await onResendOtpButtonPress(firstTextInputRef, setOtpArray, setResendButtonDisabledTime, setAttemptsRemaining,
                                attemptsRemaining, startResendOtpTimer, phoneNumber, isFrom, navigation, clearErrors, setLoader)} />
                    }
                    <View style={RVStyles.signUpPrimaryButtonView}>
                        <OTPTextView style={[RVGenericStyles.centerAlignedText, RVGenericStyles.mt36]}>
                            {attemptsRemaining || numericConstants.ZERO} {miscMessage.ATTEMPT_REMAINING}
                        </OTPTextView>
                        {
                            !autoSubmittingOtp &&
                            <TouchableOpacity ref={verifyButtonRef} activeOpacity={.7} style={RVStyles.otpVerifyButton} onPress={handleSubmit(onSubmit)} >
                                <LinearGradient style={RVStyles.signUpActionButtonGradient} colors={[colors.ORANGE, colors.RED]}>
                                    <Text style={RVStyles.primaryActionButtonButtonText}>{actionButtonTextConstants.VERIFY}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

SignUpOTPVerification.defaultProps = {
    attempts: numericConstants.THREE
};

SignUpOTPVerification.propTypes = {
    attempts: PropTypes.number.isRequired,
};
