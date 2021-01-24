import React, { useState, useRef, useEffect, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, Text, Dimensions, Platform, Animated } from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';
import { RVGenericStyles, RVStyles } from '../styles/Styles';
import { OTPInputText } from '../components/input/OTPInputText';
import { OTPTextView } from '../components/texts/OTPTextView';
import { OTPTimeText } from '../components/texts/OTPTimeText';
import { OTPResendButton } from '../components/button/OTPResendButton';
import { isAndroid, logErrorWithMessage, notifyBloodDoners, saveBloodRequest, saveBloodRequestAndNotify } from '../helper/Helper';
import { HeaderForm } from '../layouts/HeaderForm';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useForm } from 'react-hook-form';
import { stringConstants } from '../constants/Constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SignUpContext } from '../App';
import Snackbar from 'react-native-snackbar';

const RESEND_OTP_TIME_LIMIT = 30; // 30 secs
const AUTO_SUBMIT_OTP_TIME_LIMIT = 3; // 4 secs
const OTP_INPUTS = 6
let resendOtpTimerInterval;
let autoSubmitOtpTimerInterval;

const { width } = Dimensions.get(`window`);

let otpInputs = Array(OTP_INPUTS).fill(``);

export const SignUpOTPVerication = props => {
    const { otpRequestData, attempts } = props;
    let [attemptsRemaining, setAttemptsRemaining] = useState(attempts);
    const [otpArray, setOtpArray] = useState(otpInputs);
    const [submittingOtp, setSubmittingOtp] = useState(false);

    const route = useRoute();

    const { requestForm, signUpDetails } = useContext(SignUpContext);

    const navigation = useNavigation();
    const { handleSubmit, control, setError, formState, clearErrors } = useForm({ mode: `onChange` });

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

    useEffect(() => {
        startResendOtpTimer();
        return () => {
            if (resendOtpTimerInterval) {
                clearInterval(resendOtpTimerInterval);
            }
        };
    }, [resendButtonDisabledTime]);

    useEffect(() => {
        // docs: https://github.com/faizalshap/react-native-otp-verify
        Platform.OS === 'android' &&
            RNOtpVerify.getOtp()
                .then(p =>
                    RNOtpVerify.addListener(message => {
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
            RNOtpVerify.removeListener();
        };
    }, []);

    const startResendOtpTimer = () => {
        if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
        }
        resendOtpTimerInterval = setInterval(() => {
            if (resendButtonDisabledTime <= 0) {
                clearInterval(resendOtpTimerInterval);
            } else {
                setResendButtonDisabledTime(resendButtonDisabledTime - 1);
            }
        }, 1000);
    };

    const refCallback = textInputRef => node => {
        textInputRef.current = node;
    };
    const onSubmit = async () => {
        const otpString = otpArray.reduce((result, item) => {
            return `${result}${item}`
        }, stringConstants.EMPTY)

        if (otpString === `` || otpString.length < OTP_INPUTS) {
            setError(`otpInput`, {
                type: `length`,
                message: `Please enter 6 digit OTP`
            })
            return;
        } else if (otpArray && otpArray.length === OTP_INPUTS) {
            clearErrors(`otpInput`);
        }
        if (formState.isValid) {
            if (route.params?.isFromBloodRequestForm) {
                const isNotified = notifyBloodDoners(signUpDetails, requestForm);
                if (isNotified) {
                    await saveBloodRequest(signUpDetails, requestForm);
                    Snackbar.show({ text: 'Notification sent to doners', duration: Snackbar.LENGTH_SHORT });
                } else {
                    Snackbar.show({ text: 'Could not notify doners', duration: Snackbar.LENGTH_SHORT });
                }
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                });
            } else if (route.params?.rand_number) {
                const number = route?.params?.rand_number;
                if (parseInt(otpString) === number) {
                    navigation.navigate('SignUpSecret');
                }
                else {
                    Snackbar.show({ text: 'Incorrect OTP entered', duration: Snackbar.LENGTH_SHORT });
                }
            }
        }
        clearInterval(resendOtpTimerInterval);
    };

    console.log(firstTextInputRef?.current?.value);

    const onResendOtpButtonPress = () => {
        // clear last OTP
        if (firstTextInputRef) {
            setOtpArray(Array(OTP_INPUTS).fill(` `));
            firstTextInputRef.current.focus();
        }

        setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
        setAttemptsRemaining(--attemptsRemaining);
        startResendOtpTimer();

        // resend OTP Api call
        // todo
        console.log('todo: Resend OTP');
    };

    // this event won't be fired when text changes from '' to '' i.e. backspace is pressed
    // using onOtpKeyPress for this purpose
    const onOtpChange = index => {
        return value => {
            if (isNaN(Number(value))) {
                // do nothing when a non digit is pressed
                return;
            }
            const otpArrayCopy = otpArray.concat();
            otpArrayCopy[index] = value;
            setOtpArray(otpArrayCopy);

            // auto focus to next InputText if value is not blank
            if (value !== '') {
                switch (index) {
                    case 0:
                        secondTextInputRef.current.focus();
                        break;
                    case 1:
                        thirdTextInputRef.current.focus();
                        break;
                    case 2:
                        fourthTextInputRef.current.focus();
                        break;
                    case 3:
                        fifthTextInputRef.current.focus();
                        break;
                    case 4:
                        sixththTextInputRef.current.focus();
                        break;
                    default:
                        break;
                }
            }
        };
    };

    // only backspace key press event is fired on Android
    // to have consistency, using this event just to detect backspace key press and
    // onOtpChange for other digits press
    const onOtpKeyPress = index => {
        return ({ nativeEvent: { key: value } }) => {
            // auto focus to previous InputText if value is blank and existing value is also blank
            if (value === 'Backspace' && otpArray[index] === '') {
                switch (index) {
                    case 1:
                        firstTextInputRef.current.focus();
                        break;
                    case 2:
                        secondTextInputRef.current.focus();
                        break;
                    case 3:
                        thirdTextInputRef.current.focus();
                        break;
                    case 4:
                        fourthTextInputRef.current.focus();
                        break;
                    case 5:
                        fifthTextInputRef.current.focus();
                        break;
                    default:
                        break;
                }
                /**
                 * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
                 * doing this thing for us
                 * todo check this behaviour on ios
                 */
                if (isAndroid && index > 0) {
                    const otpArrayCopy = otpArray.concat();
                    otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
                    setOtpArray(otpArrayCopy);
                }
            }
            const otpString = otpArray.reduce((result, item) => {
                return `${result}${item}`
            }, stringConstants.EMPTY)

            if (otpString === `` || otpString.length < OTP_INPUTS) {
                setError(`otpInput`, {
                    type: `length`,
                    message: `Please enter 6 digit OTP`
                })
                return;
            } else if (otpArray && otpArray.length === OTP_INPUTS) {
                clearErrors(`otpInput`);
            }
        };
    };
    return (
        <Animated.View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.signUpHeaderImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <View style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>Enter OTP</Text>
                <View style={[RVStyles.otpFieldRows, RVGenericStyles.mt12]}>
                    {
                        [firstTextInputRef, secondTextInputRef, thirdTextInputRef, fourthTextInputRef, fifthTextInputRef,
                            sixththTextInputRef].map((textInputRef, index) => (
                                <OTPInputText control={control} containerStyle={[RVGenericStyles.fill, RVGenericStyles.mr12]} value={otpArray[index]}
                                    onKeyPress={onOtpKeyPress(index)} onChangeText={onOtpChange(index)} keyboardType={'number-pad'} textContentType={`oneTimeCode`}
                                    maxLength={1} style={RVStyles.otpText} key={index} autoFocus={index === 0 && true || false}
                                    refCallback={refCallback(textInputRef)} />
                            ))}
                </View>
                <Text style={{ color: 'red' }}>{formState.errors.otpInput?.message}</Text>
                {
                    resendButtonDisabledTime > 0 && <OTPTimeText text={'Resend OTP in'} time={resendButtonDisabledTime} />
                    || <OTPResendButton text={'Resend OTP'} buttonStyle={RVStyles.otpResendButton} textStyle={RVStyles.otpResendButtonText}
                        onPress={onResendOtpButtonPress} />
                }
                <View style={RVGenericStyles.fill} />
                {submittingOtp && <ActivityIndicator />}
                {autoSubmitOtpTime > 0 &&
                    autoSubmitOtpTime < AUTO_SUBMIT_OTP_TIME_LIMIT && <OTPTimeText text={'Submitting OTP in'}
                        time={autoSubmitOtpTime} />}
                <OTPTextView style={[RVGenericStyles.centerAlignedText, RVGenericStyles.mt12]}>
                    {attemptsRemaining || 0} Attempts remaining
                </OTPTextView>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 120, elevation: 8 }} onPress={handleSubmit(onSubmit)} >
                    <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center', marginTop: 50 }} colors={[`#FF00CC`, `red`]}>
                        <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Proceed</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

SignUpOTPVerication.defaultProps = {
    attempts: 3
};

SignUpOTPVerication.propTypes = {
    otpRequestData: Platform.OS == `android` && PropTypes.object.isRequired || null,
    attempts: PropTypes.number.isRequired,
};
