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

export const saveUserDetails = async (phoneNumber, secret) => {
    try {
        if (phoneNumber && secret) {
            const signUpPayload = {
                phone: phoneNumber,
                secret: encodeURIComponent(secret)
            }
            const signUpPayloadString = JSON.stringify(signUpPayload);
            const saveResponse = await axios.post(urlConstants.SAVE_SIGNUP_DETAILS, signUpPayloadString);
            return saveResponse && saveResponse.data == `Success`;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}