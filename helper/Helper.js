import axios from "axios";
import Snackbar from "react-native-snackbar";
import {
    fieldControllerName, fieldTextName, height, miscMessage, OTP_INPUTS,
    RESEND_OTP_TIME_LIMIT, routeConsts, stringConstants, urlConstants, width,
    errorModalMessageConstants
} from "../constants/Constants";
import { colors } from "../styles/Styles";

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const onChangeInput = (inKey, inValue, stateVariable, setState) => {
    setState({ ...stateVariable, [inKey]: inValue });
}
export const onChangeInputDirect = (inValue, setState) => {
    setState(inValue);
}

export const logErrorWithMessage = (message, errorSource) => {
    if (DEV__) {
        console.log(message, errorSource);
    }
};

export const saveBloodRequest = async (signUpDetails, requestForm) => {
    try {
        const bloodRequstData = {
            phone: signUpDetails.phoneNumber,
            ...requestForm
        };

        const requestBloodJSON = JSON.stringify(bloodRequstData);

        const saveResponse = await axios.post(urlConstants.SAVE_BLOOD_REQUEST, requestBloodJSON);
        return saveResponse && saveResponse.data === `Success`;
    } catch (error) {
        console.log(error)
    }
    return false
}

export const notifyBloodDoners = async (signUpDetails, requestForm) => {
    try {
        return true;
    } catch (error) {

    }
    return false
}

export const saveFeedbackText = async (feedBackTextValue, phoneNumber) => {
    try {
        const feedbackRequest = {
            phone: phoneNumber,
            feedback: feedBackTextValue
        }

        const feedbackJSON = JSON.stringify(feedbackRequest);
        const feedbackResponse = await axios.post(urlConstants.SAVE_FEEDBACK, feedbackJSON);
        return feedbackResponse && feedbackResponse.data == `Success`;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const fetchUserDashboardDetails = async (userDashboard, setUserDashboard, phoneNumber) => {
    try {
        const url = `${urlConstants.GET_USER_DASHBOARD_DETAILS}?ph=${phoneNumber}`;
        let userDashboardDetails = await axios.get(url);
        if (userDashboardDetails.data) {
            userDashboardDetails = userDashboardDetails.data;
            setUserDashboard({ ...userDashboard, ...userDashboardDetails.user });
        }
    } catch (error) {
        console.log(error);
    }
}
const loginUser = async (phoneNumber, secret) => {
    try {
        const loginInfo = { phone: phoneNumber, secret: secret };
        const loginUserJSON = JSON.stringify(loginInfo);
        const loginResponse = await axios.post(urlConstants.LOGIN_USER, loginUserJSON);
        if (loginResponse && loginResponse.data) {
            const response = loginResponse.data;
            if (response.message == `Successful` || response.message == `Unsuccessful` &&
                response.account_status == `invalidUser`)
                return response.account_status;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const handleUserLogin = async (data) => {
    try {
        const { phoneNumber, secret } = data;
        const isSuccessLogin = await loginUser(phoneNumber, secret);
        if (isSuccessLogin) {
            if (isSuccessLogin == `Verified` || isSuccessLogin == `Registered`) {
                return isSuccessLogin == `Verified` && `RVUserRegistration` || `RVUserDashboard`;
            } else if (isSuccessLogin == `invalidUser`) {
                return isSuccessLogin;
            }
        }
    } catch (error) {
        console.log(error)
    }
    return false;
};

export const handleUserSignUpOtp = async (signUpDetails, isFromBloodRequestForm, navigation, isResendOtp) => {
    try {
        const { phoneNumber } = signUpDetails;

        // Math.random() returns float between 0 and 1, 
        // so minimum number will be 100000, max - 999999. 
        // Exactly 6 digits, as you wanted:)
        const random6Digit = Math.floor(Math.random() * 899999 + 100000);

        const otpRequestData = {
            phone: phoneNumber,
            rand_number: random6Digit
        }

        const otpRequestDataJSON = JSON.stringify(otpRequestData);

        const response = await axios.post(urlConstants.TRIGGER_SMS_OTP, otpRequestDataJSON);

        if (response && response.data && !isResendOtp) {
            const params = getSignUpParams(signUpDetails, random6Digit, isFromBloodRequestForm);
            navigation.navigate(`SignUpOTPVerication`, params)
            return true;
        }
        showSnackBar(`Successfully sent message!`);
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const handleUserSignUpRegistration = async (phoneNumber, data, isFromBloodRegistration) => {
    try {
        debugger
        let userRegistrationPayload;
        let signUpPayloadString;
        if (isFromBloodRegistration) {
            userRegistrationPayload = {
                phone: phoneNumber,
                name: data.name,
                blood_group: data.bloodGroup,
                age: data.age,
                pincode: data.pinCode,
                availability_status: data.availabilityStatus
            }
            signUpPayloadString = JSON.stringify(userRegistrationPayload);
        } else {
            userRegistrationPayload = {
                phone: phoneNumber,
                secret: data.secret
            }
            signUpPayloadString = JSON.stringify(userRegistrationPayload);
        }
        return signUpPayloadString && await saveUserDetails(signUpPayloadString) || false;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const saveUserDetails = async (signUpPayloadString) => {
    try {
        debugger
        const saveResponse = await axios.post(urlConstants.SAVE_SIGNUP_DETAILS, signUpPayloadString);
        const saveResponseData = saveResponse.data;
        if (!saveResponseData.includes(miscMessage.ERROR)) {
            return saveResponseData && saveResponseData.message == miscMessage.SUCCESS && (saveResponseData.account_status == miscMessage.VERIFIED ||
                saveResponseData.account_status == miscMessage.REGISTERED);
        }
        if (saveResponseData.includes(miscMessage.ERROR) && saveResponseData.includes(miscMessage.DUPLICATE)) {
            showSnackBar(errorModalMessageConstants.USER_ALREADY_REGISTERED, false);
            console.log(saveResponseData);
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const getSignUpParams = (signUpDetails, random6Digit, isFromBloodRequestForm) => {
    if (isFromBloodRequestForm)
        return {
            isFromBloodRequestForm: isFromBloodRequestForm
        }
    else
        return {
            phoneNumber: signUpDetails.phoneNumber,
            rand_number: random6Digit
        }
}

export const onChangeByValueType = (inputProps, value, props) => {
    switch (props.inputName) {
        case fieldControllerName.PHONE_NUMBER:
            const newValue = value.replace(stringConstants.REPLACE_REGEX, stringConstants.EMPTY);
            inputProps.onChange(newValue);
            props.isSignUp && props.setSignUpDetails({ ...props.signUpDetails, phoneNumber: newValue });
            break;
        case fieldControllerName.PINCODE:
            inputProps.onChange(stringConstants.REPLACE_REGEX, stringConstants.EMPTY);
        default:
            console.log(value)
            inputProps.onChange(value);
            break;
    }
}

export const setErrorModal = (error, setError, title, message, showModal) => {
    setError({ ...error, title: title, message: message, showModal: showModal });
}

export const onResendOtpButtonPress = async (firstTextInputRef, setOtpArray, setResendButtonDisabledTime, setAttemptsRemaining,
    attemptsRemaining, startResendOtpTimer, signUpDetails, isFromBloodRequestForm, navigation, clearErrors) => {
    // clear last OTP
    if (firstTextInputRef) {
        setOtpArray(Array(OTP_INPUTS).fill(stringConstants.EMPTY));
        firstTextInputRef.current.focus();
    }
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    setAttemptsRemaining(--attemptsRemaining);
    startResendOtpTimer();
    await handleUserSignUpOtp(signUpDetails, isFromBloodRequestForm, navigation, true);
    clearErrors(fieldControllerName.OTP_INPUT);
};

// only backspace key press event is fired on Android
// to have consistency, using this event just to detect backspace key press and
// onOtpChange for other digits press
export const onOtpKeyPress = (index, otpArray, firstTextInputRef, secondTextInputRef, thirdTextInputRef, fourthTextInputRef,
    fifthTextInputRef, setOtpArray, setError, clearErrors) => {
    return ({ nativeEvent: { key: value } }) => {
        // auto focus to previous InputText if value is blank and existing value is also blank
        if (value === 'Backspace' && otpArray[index] === stringConstants.EMPTY) {
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
            if (index > 0) {
                const otpArrayCopy = otpArray.concat();
                otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
                setOtpArray(otpArrayCopy);
            }
        }
        const otpString = otpArray.reduce((result, item) => { return `${result}${item}` }, stringConstants.EMPTY);
        identifyOtpError(otpString, otpArray, setError, clearErrors);
    };
};

// this event won't be fired when text changes from '' to '' i.e. backspace is pressed
// using onOtpKeyPress for this purpose
export const onOtpChange = (index, otpArray, setOtpArray, secondTextInputRef, thirdTextInputRef, fourthTextInputRef,
    fifthTextInputRef, sixththTextInputRef) => {
    return value => {
        if (isNaN(Number(value))) {
            // do nothing when a non digit is pressed
            return;
        }
        const otpArrayCopy = otpArray.concat();
        otpArrayCopy[index] = value;
        setOtpArray(otpArrayCopy);

        // auto focus to next InputText if value is not blank
        if (value !== stringConstants.EMPTY) {
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

export const identifyOtpError = (otpString, otpArray, setError, clearErrors) => {
    if (otpString === `` || otpString.length < OTP_INPUTS) {
        setError(fieldControllerName.OTP_INPUT, {
            type: `length`,
            message: `Please enter 6 digit OTP`
        })
        return false;
    }
    if (otpArray && otpArray.length === OTP_INPUTS) {
        clearErrors(fieldControllerName.OTP_INPUT);
        return true;
    }
    return false;
}

export const verifyOtpRequest = async (otpString, isFromBloodRequestForm, signUpDetails, requestForm, randomNumber) => {
    if (isFromBloodRequestForm) {
        const isNotified = await notifyBloodDoners(signUpDetails, requestForm);
        if (isNotified) {
            await saveBloodRequest(signUpDetails, requestForm);
            showSnackBar(miscMessage.NOTIFICATION_SENT_DONERS, true);
        } else {
            showSnackBar(errorModalMessageConstants.NOTIFICATION_FAIL_DONERS, false);
        }
        return miscMessage.RESET_NAVIGATION;
    } else if (randomNumber) {
        if (parseInt(otpString) === randomNumber) {
            return miscMessage.CONFIRM_SECRET;
        }
        showSnackBar(miscMessage.INCORRECT_OTP_ENTERED, false);
        return miscMessage.INCORRECT_OTP;
    }
}

export const focusOnSecretIfFormInvalid = (formState, secretRef) => {
    if (!formState.isValid)
        secretRef?.current?.focus();
}

export const showSnackBar = (message, success) => {
    Snackbar.show({
        text: message,
        textColor: colors.WHITE,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: success && colors.GREEN || colors.RED
    })
}