import { Dimensions } from "react-native";

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