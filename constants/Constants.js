import { CardStyleInterpolators } from "@react-navigation/stack";

export const stringConstants = {
    EMPTY: ``,
    NODE: {}
}

export const screenOptions = {
    gestureEnabled: true, gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};

export const stackOptions = {
    headerShown: false
}

export const formRequiredRules = {
    mobileInputFormRule: {
        required: {
            value: true,
            message: `Please enter mobile number`
        },
        minLength: {
            value: 10,
            message: `Number not 10 digits`
        },
        maxLength: {
            value: 10,
            message: `Please enter only 10 digits`
        }
    },
    passwordFormRule: {
        required: {
            value: true,
            message: `Please enter the password`
        }
    },
}
export const formLengthRules = {
    mobileInputLengthRule: {
        maxLength: {
            value: true,
            message: `Please enter mobile number`
        }
    },
    passwordFormRule: {
        required: {
            value: true,
            message: `Please enter the password`
        }
    },
}