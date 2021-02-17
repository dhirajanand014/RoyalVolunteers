import axios from "axios";
import moment from 'moment';
import Snackbar from "react-native-snackbar";
import {
    fieldControllerName, height, miscMessage, OTP_INPUTS,
    RESEND_OTP_TIME_LIMIT, stringConstants, urlConstants, width,
    errorModalMessageConstants, isIOS, routeConsts, bloodGroupsList,
    tokenRequestResponseConst, numericConstants, successFulMessages,
    errorModalTitleConstants
} from "../constants/Constants";
import { colors } from "../styles/Styles";
import * as Keychain from 'react-native-keychain';

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
        return saveResponse && saveResponse.data === miscMessage.SUCCESS;
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
        return feedbackResponse && feedbackResponse.data == miscMessage.SUCCESS &&
            miscMessage.SUCCESS || miscMessage.ERROR;
    } catch (error) {
        console.log(error);
    }
    return miscMessage.ERROR;
}

export const fetchUserDashboardDetails = async (userDashboard, setUserDashboard, phoneNumber) => {
    try {
        const url = `${urlConstants.GET_USER_DASHBOARD_DETAILS}${miscMessage.PH_QUERY_PARAM}${phoneNumber}`;
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
            if (response.message == miscMessage.SUCCESSFUL || response.message == miscMessage.UNSUCCESSFUL &&
                response.account_status == miscMessage.INVALID_USER)
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
            if (isSuccessLogin == miscMessage.VERIFIED || isSuccessLogin == miscMessage.REGISTERED) {
                return isSuccessLogin == miscMessage.VERIFIED && routeConsts.USER_REGISTRATION || routeConsts.USER_DASHBOARD;
            } else if (isSuccessLogin == miscMessage.INVALID_USER) {
                return isSuccessLogin;
            }
        }
    } catch (error) {
        console.log(error)
    }
    return false;
};

export const handleUserSignUpOtp = async (signUpDetails, isFrom, navigation, isResendOtp) => {
    try {
        const { phoneNumber } = signUpDetails;

        // Math.random() returns float between 0 and 1, 
        // so minimum number will be 100000, max - 999999. 
        const random6Digit = Math.floor(Math.random() * 899999 + 100000);

        const otpRequestData = {
            phone: phoneNumber,
            rand_number: random6Digit
        }

        const otpRequestDataJSON = JSON.stringify(otpRequestData);

        const response = await axios.post(urlConstants.TRIGGER_SMS_OTP, otpRequestDataJSON);

        if (response && response.data && !isResendOtp) {
            const params = getSignUpParams(signUpDetails, random6Digit, isFrom);
            navigation.navigate(routeConsts.OTP_VERIFICATION, params)
            return true;
        }
        showSnackBar(successFulMessages.SENT_SMS_SUCCESSFULLY, true);
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const handleUserSignUpRegistration = async (phoneNumber, data, isFromBloodRegistration, isFrom) => {
    try {
        let userRegistrationPayload;
        let signUpPayloadString;
        if (isFromBloodRegistration) {
            userRegistrationPayload = {
                ...data,
                phone: phoneNumber,
                blood_group: bloodGroupsList.find(bloodGroup =>
                    bloodGroup.value == data.blood_group).label
            }
            signUpPayloadString = JSON.stringify(userRegistrationPayload);
        } else {
            userRegistrationPayload = {
                phone: phoneNumber,
                secret: data.secret
            }
            signUpPayloadString = JSON.stringify(userRegistrationPayload);
        }
        return signUpPayloadString && await saveUserDetails(signUpPayloadString, isFrom) || false;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const saveUserDetails = async (signUpPayloadString, isFrom) => {
    try {
        const url = isFrom == miscMessage.FORGOT_PASSWORD && urlConstants.FORGOT_PASSWORD || urlConstants.SAVE_SIGNUP_DETAILS;
        const saveResponse = await axios.post(url, signUpPayloadString);
        const saveResponseData = saveResponse.data;
        if (isFrom == miscMessage.FORGOT_PASSWORD && saveResponseData.message == miscMessage.SUCCESS) {
            return `${miscMessage.RESET}_${miscMessage.SUCCESSFUL}`;
        } else if (saveResponseData && saveResponseData.message && saveResponseData.message == miscMessage.SUCCESS) {
            return (saveResponseData.account_status == miscMessage.VERIFIED || saveResponseData.account_status == miscMessage.REGISTERED);
        } else if (saveResponseData && typeof (saveResponseData) === stringConstants.STRING && saveResponseData.includes(miscMessage.ERROR) &&
            saveResponseData.includes(miscMessage.DUPLICATE)) {
            showSnackBar(errorModalMessageConstants.USER_ALREADY_REGISTERED, false);
            console.log(saveResponseData);
        } else {
            showSnackBar(errorModalMessageConstants.USER_NOT_REGISTERED, false);
            console.log(saveResponseData);
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const getSignUpParams = (signUpDetails, random6Digit, isFrom) => {
    let returnValue = {};
    if (isFrom) {
        returnValue.isFrom = isFrom
    }
    returnValue.phoneNumber = signUpDetails.phoneNumber;
    returnValue.rand_number = random6Digit;
    return returnValue;
}

export const onChangeByValueType = async (inputProps, value, props) => {
    switch (props.inputName) {
        case fieldControllerName.PHONE_NUMBER:
            const phoneValue = value.replace(stringConstants.REPLACE_REGEX, stringConstants.EMPTY);
            inputProps.onChange(phoneValue);
            props.isSignUp && props.setSignUpDetails({ ...props.signUpDetails, phoneNumber: phoneValue });
            break;
        case fieldControllerName.BLOOD_GROUP:
            inputProps.onChange(value);
            props.isFromBloodRequestForm && props.setRequestForm({ ...props.requestForm, blood_group: value });
            break;
        case fieldControllerName.AGE:
            inputProps.onChange(value);
            props.isFromDashBoard && props.setUserDashboard({ ...props.userDashboard, age: value });
            break;
        case fieldControllerName.PINCODE:
            const pinCodeValue = value.replace(stringConstants.REPLACE_REGEX, stringConstants.EMPTY);
            inputProps.onChange(pinCodeValue);
            props.isFromDashBoard && props.setUserDashboard({ ...props.userDashboard, pincode: pinCodeValue });
            props.isFromBloodRequestForm && props.setRequestForm({ ...props.requestForm, pincode: pinCodeValue });
            break;
        case fieldControllerName.DATE_PICKER:
            inputProps.onChange(value);
            props.isFromBloodRequestForm && props.setRequestForm({ ...props.requestForm, needed_request_date: value });
            break;
        case fieldControllerName.HOSPITAL_NAME:
            inputProps.onChange(value);
            props.setRequestForm({ ...props.requestForm, hospital: value });
            break;
        case fieldControllerName.AVAILABILITY_STATUS:
            inputProps.onChange(value);
            props.isFromDashBoard && await updateDataFromDashBoard(props.userDashboard, props.setUserDashboard,
                fieldControllerName.AVAILABILITY_STATUS, value);
        default:
            inputProps.onChange(value);
            break;
    }
}

export const updateDataFromDashBoard = async (userDashboard, setUserDashboard, property, value) => {
    userDashboard[property] = value;
    const dashboardData = {
        ...userDashboard,
        blood_group: bloodGroupsList.find(blood_group =>
            blood_group.label == userDashboard.blood_group).value
    }
    await handleUserSignUpRegistration(userDashboard.phone, dashboardData, true);
    setUserDashboard({ ...userDashboard });
    showSnackBar(`Updated your availability successfully!`, true);
}

export const setErrorModal = (error, setError, title, message, showModal) => {
    setError({ ...error, title: title, message: message, showModal: showModal });
}

export const onResendOtpButtonPress = async (firstTextInputRef, setOtpArray, setResendButtonDisabledTime, setAttemptsRemaining,
    attemptsRemaining, startResendOtpTimer, signUpDetails, isFrom, navigation, clearErrors) => {
    // clear last OTP
    if (firstTextInputRef) {
        setOtpArray(Array(OTP_INPUTS).fill(stringConstants.EMPTY));
        firstTextInputRef.current.focus();
    }
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    setAttemptsRemaining(--attemptsRemaining);
    startResendOtpTimer();
    await handleUserSignUpOtp(signUpDetails, isFrom, navigation, true);
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
                case numericConstants.ONE:
                    firstTextInputRef.current.focus();
                    break;
                case numericConstants.TWO:
                    secondTextInputRef.current.focus();
                    break;
                case numericConstants.THREE:
                    thirdTextInputRef.current.focus();
                    break;
                case numericConstants.FOUR:
                    fourthTextInputRef.current.focus();
                    break;
                case numericConstants.FIVE:
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
            if (index > numericConstants.ZERO) {
                const otpArrayCopy = otpArray.concat();
                otpArrayCopy[index - numericConstants.ONE] = stringConstants.EMPTY; // clear the previous box which will be in focus
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
                case numericConstants.ZERO:
                    secondTextInputRef.current.focus();
                    break;
                case numericConstants.ONE:
                    thirdTextInputRef.current.focus();
                    break;
                case numericConstants.TWO:
                    fourthTextInputRef.current.focus();
                    break;
                case numericConstants.THREE:
                    fifthTextInputRef.current.focus();
                    break;
                case numericConstants.FOUR:
                    sixththTextInputRef.current.focus();
                    break;
                default:
                    break;
            }
        }
    };
};

export const identifyOtpError = (otpString, otpArray, setError, clearErrors) => {
    if (otpString === stringConstants.EMPTY || otpString.length < OTP_INPUTS) {
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

export const verifyOtpRequest = async (otpString, isFrom, signUpDetails, requestForm, randomNumber) => {
    if (isFrom === miscMessage.BLOOD_REQUEST) {
        const isNotified = await notifyBloodDoners(signUpDetails, requestForm);
        if (isNotified) {
            await saveBloodRequest(signUpDetails, requestForm);
            showSnackBar(successFulMessages.NOTIFICATION_SENT_DONERS, true);
        } else {
            showSnackBar(errorModalMessageConstants.NOTIFICATION_FAIL_DONERS, false);
        }
        return miscMessage.RESET_NAVIGATION;
    } else if (randomNumber) {
        if (parseInt(otpString) === randomNumber) {
            return miscMessage.CONFIRM_SECRET;
        }
        showSnackBar(errorModalMessageConstants.INCORRECT_OTP_ENTERED, false);
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

export const convertDate = (event, datePickerProps, props, date) => {
    const formatedDate = datePickerConvert(event, date);
    formatedDate && onChangeByValueType(datePickerProps, formatedDate, props);
}

const datePickerConvert = (event, date) => {
    try {
        if (!event.type && isIOS) {
            return date;
        } else if (miscMessage.SET == event.type) {
            return isIOS && date || moment(event.nativeEvent.timestamp).toDate();
        }
    } catch (error) {
        console.log(error);
    }

    return false;
}

export const access_token_request_response = async (phoneNumber, data, error, setErrorMod, isValidateNewToken) => {
    try {
        const token_request = prepareTokenRequest(phoneNumber, data, tokenRequestResponseConst.TYPE_NEW);
        const token_response = await requestForToken(token_request, error, setErrorMod);
        if (token_response) {
            return await validateAndSaveToken(phoneNumber, token_response, error, setErrorMod, isValidateNewToken);
        } else {
            console.error(errorModalMessageConstants.ERROR_FETCHING_TOKEN);
            setErrorModal(error, setErrorMod, errorModalMessageConstants.UNEXPECTED_ERROR,
                errorModalMessageConstants.SOMETHING_WENT_WRONG, true);
        }
    } catch (error) {
        console.error(error);
        setErrorModal(error, setErrorMod, errorModalMessageConstants.UNEXPECTED_ERROR,
            errorModalMessageConstants.SOMETHING_WENT_WRONG, true);
    }
}

export const prepareTokenRequest = (phoneNumber, data, type) => {
    try {
        let tokenRequest = {};
        switch (type) {
            case tokenRequestResponseConst.TYPE_NEW:
                const secret = data.secret;
                tokenRequest[tokenRequestResponseConst.GRANT_TYPE] = tokenRequestResponseConst.ACCESS_TOKEN_GRANT_TYPE_VALUE;
                tokenRequest[tokenRequestResponseConst.USERNAME] = phoneNumber;
                tokenRequest[tokenRequestResponseConst.PASSWORD] = secret;
                break;
            case tokenRequestResponseConst.TYPE_REFRESH:
                const refresh_token = data.refresh_token
                tokenRequest[tokenRequestResponseConst.GRANT_TYPE] = tokenRequestResponseConst.REFRESH_TOKEN_GRANT_TYPE_VALUE;
                tokenRequest[tokenRequestResponseConst.REFRESH_TOKEN_GRANT_TYPE_VALUE] = refresh_token
                break;
            default:
                break;
        }
        tokenRequest[tokenRequestResponseConst.CLIENT_ID] = `${tokenRequestResponseConst.CLIENT_ID_VALUE}${phoneNumber}`;
        tokenRequest[tokenRequestResponseConst.CLIENT_SECRET] = tokenRequestResponseConst.CLIENT_SECRET_VALUE;
        return tokenRequest;
    } catch (error) {
        console.error(error);
    }
    return false;
}

export const requestForToken = async (request_token, error, setErrorMod) => {
    try {
        const response_token = await axios.post(urlConstants.AUTHORIZE_ACCESS_TOKEN, request_token);
        if (response_token && numericConstants.TWO_HUNDRED == response_token.status) {
            console.log(successFulMessages.ACCESS_TOKEN_RETRIEVED_SUCCESSFULLY, response_token.status);
            return response_token.data;
        } else {
            console.log(`Error fetching response token`);
            setErrorModal(error, setErrorMod, errorModalMessageConstants.UNEXPECTED_ERROR,
                errorModalMessageConstants.SOMETHING_WENT_WRONG, true);
        }
    } catch (error_response) {
        if (numericConstants.FOUR_HUNDRED_ONE == error_response.status) {
            console.error(errorModalMessageConstants.ACCESS_TOKEN_COULD_NOT_BE_RETRIEVED, error_response.status);
            console.error(errorModalTitleConstants.ERROR, error_response.data.error_description);
        }
    }
    return false;
}

export const validateAndSaveToken = async (phoneNumber, response_token, error, setErrorMod, isValidateNewToken) => {
    try {
        const request_token = response_token.access_token;
        console.log(successFulMessages.VALIDATING_ACCESS_TOKEN);
        const token_validate_response = await validateToken(request_token, error, setErrorMod);
        if (miscMessage.TOKEN_VALID == token_validate_response) {
            console.log(successFulMessages.TOKEN_IS_VALID);
            if (isValidateNewToken) {
                return await saveTokenData(phoneNumber, response_token, error, setErrorMod);
            }
            return miscMessage.TOKEN_VALID;
        } else if (miscMessage.TOKEN_EXPIRED == token_validate_response) {
            console.log(errorModalMessageConstants.TOKEN_EXPIRED);
            const token_request = prepareTokenRequest(phoneNumber, response_token,
                tokenRequestResponseConst.TYPE_REFRESH);
            const response_refresh_token = await requestForToken(token_request, error, setErrorMod);
            await validateAndSaveToken(phoneNumber, response_refresh_token, error, setErrorMod, true);
        }
    } catch (error_response) {
        console.error(errorModalMessageConstants.TOKEN_VALIDATION_FAILED, error_response);
        setErrorModal(error, setErrorMod, errorModalMessageConstants.UNEXPECTED_ERROR,
            errorModalMessageConstants.SOMETHING_WENT_WRONG, true);
    }
    return false;
}

export const validateToken = async (token) => {
    let tokenResponseData;
    try {
        const headerParam = { headers: { [tokenRequestResponseConst.AUTHORIZATION_BEARER]: tokenRequestResponseConst.BEARER + token } };
        const token_validation = await axios.options(urlConstants.VALIDATE_TOKEN, headerParam);
        if (token_validation && token_validation.status == numericConstants.TWO_HUNDRED) {
            tokenResponseData = token_validation.data;
            return tokenResponseData.success && miscMessage.TOKEN_VALID || miscMessage.TOKEN_INVALID;
        } else {
            console.log(errorModalMessageConstants.TOKEN_HEADER_VALIDATION_FAILED, headerParam);
            setErrorModal(error, setErrorMod, errorModalMessageConstants.UNEXPECTED_ERROR,
                errorModalMessageConstants.SOMETHING_WENT_WRONG, true);
        }
    } catch (error) {
        console.error(error);
        if (error.response.status == numericConstants.FOUR_HUNDRED_ONE) {
            tokenResponseData = error.response.data;
            tokenResponseData.error_description && console.warn(errorModalTitleConstants.ERROR, tokenResponseData.error_description);
            return tokenResponseData.error == errorModalTitleConstants.INVALID_TOKEN &&
                tokenResponseData.error_description.includes(errorModalTitleConstants.EXPIRED) && miscMessage.TOKEN_EXPIRED;
        }
    }
    return miscMessage.INVALID_REQUEST;
}

export const saveTokenData = async (phoneNumber, response_token, error, setError) => {
    try {
        const token_data = {
            [tokenRequestResponseConst.ACCESS_TOKEN]: response_token.access_token,
            [tokenRequestResponseConst.REFRESH_TOKEN]: response_token.refresh_token,
            [tokenRequestResponseConst.EXPIRES_IN]: response_token.expires_in,
            [tokenRequestResponseConst.SAVED_DATE]: Date.now()
        }
        const token_JSONString = JSON.stringify(token_data);

        const savedResult = await Keychain.setGenericPassword(`${tokenRequestResponseConst.CLIENT_ID_VALUE}${phoneNumber}`,
            token_JSONString, { service: miscMessage.USER_SERVICE_TOKEN_KEY });
        if (savedResult && savedResult.service) {
            console.log(successFulMessages.SUCCESSFULLY_SAVED_TOKEN);
            return miscMessage.TOKEN_VALID;
        }
    } catch (error_response) {
        console.error(errorModalMessageConstants.TOKEN_REQUEST_SAVE_FAILED, phoneNumber, error_response);
        setErrorModal(error, setError, errorModalMessageConstants.UNEXPECTED_ERROR,
            errorModalMessageConstants.SOMETHING_WENT_WRONG, true);
    }
    return miscMessage.TOKEN_INVALID;
}

export const getSavedToken = async (error, setError) => {
    try {
        const tokenSaved = await Keychain.getGenericPassword({ service: miscMessage.USER_SERVICE_TOKEN_KEY });
        if (tokenSaved) {
            console.log(successFulMessages.TOKEN_FETCHED_SUCESSFULLY);
            return response = {
                [tokenRequestResponseConst.USERNAME]: tokenSaved.username,
                ...JSON.parse(tokenSaved.password)
            }
        }
        console.warn(errorModalMessageConstants.TOKEN_FETCH_FAILED);
    } catch (error_response) {
        console.error(errorModalMessageConstants.SAVED_TOKEN_FETCH_FAILED, error_response);
        setErrorModal(error, setError, errorModalMessageConstants.UNEXPECTED_ERROR,
            errorModalMessageConstants.SOMETHING_WENT_WRONG, true);
    }
    return false;
}

export const validateSavedToken = async (savedToken, data, error, setError, isFromSplashScreen) => {
    try {
        if (savedToken) {
            const phoneNumber = !isFromSplashScreen && data.phoneNumber || savedToken.username.
                split(tokenRequestResponseConst.CLIENT_ID_VALUE)[numericConstants.ONE];
            return await validateAndSaveToken(phoneNumber, savedToken, error, setError, false);
        } else {
            return !isFromSplashScreen && await access_token_request_response(data.phoneNumber, data, error, setError, true) ||
                false;
        }
    } catch (error_response) {
        console.error(error_response)
    }
    return false;
}

export const fetchUserRegistrationStatus = async (phoneNumber) => {
    try {
        const url = `${urlConstants.FETCH_REGISTRATION_STATUS}${miscMessage.PH_QUERY_PARAM}${phoneNumber}`;
        const registrationStatus = await axios.get(url);
        return registrationStatus && registrationStatus.data.status || false;
    } catch (error) {
        console.error(errorModalMessageConstants.FETCH_ACCOUNT_STATUS_FAILED, phoneNumber, error);
    }
    return false;
}

export const saveRegistrationStatus = async (phoneNumber, status) => {
    try {
        const status_value = {
            [tokenRequestResponseConst.ACCOUNT_STATUS]: status
        }
        await Keychain.setGenericPassword(`${phoneNumber}_${status}`, JSON.stringify(status_value),
            { service: tokenRequestResponseConst.ACCOUNT_STATUS });
    } catch (error) {
        console.error(errorModalMessageConstants.CANNOT_SAVE_ACCOUNT_STATUS, error);
    }
}

export const getRegistrationStatus = async () => {
    try {
        const account_status = await Keychain.getGenericPassword({ service: tokenRequestResponseConst.ACCOUNT_STATUS });
        return account_status && JSON.parse(account_status.password) || false;
    } catch (error) {
        console.error(errorModalMessageConstants.CANNOT_FETCH_SAVED_ACCOUNT_STATUS, error);
    }
    return false;
}

export const fetchSplashScreenRoute = async (savedToken, isValidRequest) => {
    if (isValidRequest && isValidRequest == miscMessage.TOKEN_VALID) {
        const account_status = await getRegistrationStatus();
        const navigationRoute = account_status.account_status == miscMessage.VERIFIED && routeConsts.USER_REGISTRATION ||
            account_status.account_status == miscMessage.REGISTERED && routeConsts.USER_DASHBOARD || false;
        const phone = savedToken.username.split(tokenRequestResponseConst.CLIENT_ID_VALUE)[numericConstants.ONE];
        return route = {
            name: navigationRoute && navigationRoute || routeConsts.HOME, params: {
                phoneNumber: phone
            }
        }
    } else {
        return route = {
            name: routeConsts.HOME
        }
    }
}

export const handleForgotPassword = async (watchMobileNumber, navigation, trigger, error, setError, clearErrors) => {
    try {
        if (watchMobileNumber && watchMobileNumber.length >= numericConstants.TEN) {
            clearErrors(fieldControllerName.PHONE_NUMBER);
            const phone = { phoneNumber: watchMobileNumber };
            await handleUserSignUpOtp(phone, miscMessage.FORGOT_PASSWORD, navigation, false);
        } else {
            trigger(fieldControllerName.PHONE_NUMBER);
        }
    } catch (error_response) {
        console.error(error_response);
        setErrorModal(error, setError, errorModalMessageConstants.UNEXPECTED_ERROR,
            errorModalMessageConstants.SOMETHING_WENT_WRONG, true);
    }
}

export const resetTokens = async (error, setError) => {
    try {
        await Keychain.resetGenericPassword({ service: miscMessage.USER_SERVICE_TOKEN_KEY });
        await Keychain.resetGenericPassword({ service: tokenRequestResponseConst.ACCOUNT_STATUS });
        return true;
    } catch (error_response) {
        console.error(error_response);
        setErrorModal(error, setError, errorModalMessageConstants.UNEXPECTED_ERROR,
            errorModalMessageConstants.SOMETHING_WENT_WRONG, true);
    }
    return false;
}

export const setupCloudMessaging = async (messaging) => {
    try {
        const authStatus = await messaging().requestPermission();
        const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        if (enabled) {
            console.log('Authorization status:', authStatus);
            console.log(await messaging().getToken());
        }
    } catch (error) {
        console.error(`Cloud messaging setup failed`, error);
    }
}