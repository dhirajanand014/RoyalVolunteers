import axios from "axios";
import { Dimensions } from "react-native";
import { urlConstants } from "../constants/Constants";

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

export const saveUserDetails = async (phoneNumber, password, signUpDetails, setSignUpDetails) => {
    try {
        if (phoneNumber && secret) {
            const signUpPayload = {
                phone: phoneNumber,
                secret: secret
            }
            const signUpPayloadString = JSON.stringify(signUpPayload);
            const saveResponse = await axios.post(urlConstants.SAVE_SIGNUP_DETAILS, signUpPayloadString);
            debugger
            if (saveResponse && saveResponse.data == `Success`) {
                signUpDetails.secret = password;
                signUpDetails.registrationSuccessful = true;
                const isSaved = setSignUpDetails({ ...signUpDetails });
                if (isSaved) {
                    Snackbar.show({ text: 'Registration successful', duration: Snackbar.LENGTH_SHORT });
                    navigation.navigate(`RVUserRegistration`)
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
    return false;
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
            const userDetails = {
                name: userDashboardDetails.user.name,
                pincode: userDashboardDetails.user.pincode,
                blood_group: userDashboardDetails.user.blood_group,
                beneficiary_count: userDashboardDetails.user.beneficiary_count,
                donor_count: userDashboardDetails.user.donor_count
            }
            setUserDashboard({ ...userDashboard, ...userDetails });
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
    const { phoneNumber, password } = data;
    const isSuccessLogin = await loginUser(phoneNumber, password);
    if (isSuccessLogin) {
        if (isSuccessLogin == `Verified` || isSuccessLogin == `Registered`) {
            return isSuccessLogin == `Verified` && `RVUserRegistration` || `RVUserDashboard`;
        } else if (isSuccessLogin == `invalidUser`) {
            return isSuccessLogin;
        }
    }
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