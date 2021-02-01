import axios from "axios";
import { Dimensions } from "react-native";
import { stringConstants, urlConstants, valueTypeConstants } from "../constants/Constants";

const Screen = Dimensions.get('window');
export const SCREEN_WIDTH = Screen.width;
export const SCREEN_HEIGHT = Screen.height;
export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

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

export const saveUserRegistration = async (signUpDetails, setSignUpDetails, secret) => {
    const { phoneNumber } = signUpDetails
    const isSaved = await saveUserDetails(phoneNumber, secret, signUpDetails, setSignUpDetails);
    if (isSaved) {
        Snackbar.show({ text: 'Registration successful', duration: Snackbar.LENGTH_SHORT });
        navigation.navigate(`RVUserRegistration`);
    } else {
        Snackbar.show({ text: 'User already registerd. Please sign in', duration: Snackbar.LENGTH_SHORT });
    }
    return;
}

export const saveRegistrationDetails = async (bloodGroup, pinCode, hospitalName, neededValue) => {
    const regDetails = {

    }
}

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

export const handleUserSignUpOtp = async (signUpDetails, setSignUpDetails, isFromBloodRequestForm, navigation) => {
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

        if (response && response.data) {
            const params = getSignUpParams(signUpDetails, random6Digit, isFromBloodRequestForm);
            navigation.navigate(`SignUpOTPVerication`, params)
            return true;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const handleUserSignUpRegistration = async (phoneNumber, data, formState, isFromBloodRegistration) => {
    try {
        let userRegistrationPayload;
        let signUpPayloadString;
        if (isFromBloodRegistration) {
            userRegistrationPayload = {
                phone: phoneNumber,
                secret: null,
                name: data.name,
                blood_group: data.bloodGroup,
                age: data.age,
                pincode: data.pinCode,
                availability_status: data.availabilityStatus
            }
            signUpPayloadString = JSON.stringify(userRegistrationPayload);
        } else {
            const password = data.password;
            const confirmedPassword = data.confirmPassword;
            if (formState.isValid || password === confirmedPassword) {
                userRegistrationPayload = {
                    phone: phoneNumber,
                    secret: password
                }
                signUpPayloadString = JSON.stringify(userRegistrationPayload);
            }
        }
        return signUpPayloadString && await saveUserDetails(signUpPayloadString) || false;
    } catch (error) {
        console.log(error);
    }
    return false;
}

export const saveUserDetails = async (signUpPayloadString) => {
    try {
        const saveResponse = await axios.post(urlConstants.SAVE_SIGNUP_DETAILS, signUpPayloadString);
        const saveResponseData = saveResponse.data;
        if (saveResponseData && saveResponseData.message == `Success` && (saveResponseData.account_status == `Verified` ||
            saveResponseData.account_status == `Registered`)) {
            return true;
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

export const onChangeByValueType = (inputProps, value, valueType) => {
    switch (valueType) {
        case valueTypeConstants.REPLACE:
            inputProps.onChange(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, stringConstants.EMPTY));
            break;
        default: inputProps.onChange(value);
            break;
    }
}

export const setErrorModal = (error, setError, title, message, showModal) => {
    setError({ ...error, title: title, message: message, showModal: showModal });
}