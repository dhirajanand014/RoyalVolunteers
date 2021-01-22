import { CardStyleInterpolators } from "@react-navigation/stack";
import { colors } from "../styles/Styles";

export const RESEND_OTP_TIME_LIMIT = 30; // 30 secs
export const AUTO_SUBMIT_OTP_TIME_LIMIT = 3; // 4 secs

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
    otpFormRule: {
        required: {
            value: true,
            message: `Please enter 6 digit OTP received`
        }
    },
    nameFormRule: {
        required: {
            value: true,
            message: `Please enter a name`
        }
    },
    bloodGroupRule: {
        required: {
            value: true,
            message: `Please select a blood group`
        },
        validate: value => value === 0 && `Please select a value` || true
    },
    ageRule: {
        required: {
            value: true,
            message: `Please enter age`
        }
    },
    pinCodeRule: {
        required: {
            value: true,
            message: `Please enter 6 digit Pin code`
        },
        pattern: {
            value: /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/,
            message: `Please enter valid 6 digit pin code`
        },
        maxLength: {
            value: 6,
            message: `Please enter atleast 6 digit pin code`
        }
    },
    datePickerFormRule: {
        required: {
            value: true,
            message: `Please select a date`
        }
    },
    hospitalNameFormRule: {
        required: {
            value: true,
            message: `Please enter a hospital`
        }
    }

};

export const urlConstants = {
    SAVE_SIGNUP_DETAILS: `https://royalvolunteers.in/rv1sknSQW9Xxb8f_sn_up.php`,
    SAVE_BLOOD_REQUEST: `https://royalvolunteers.in/rv1sknSQW9Xxb8f_rq_bld.php`
}

export const bloodGroupsList = [
    {
        label: `Select a blood group`,
        value: 0
    }, {
        label: `A−`,
        value: 1
    }, {
        label: `A+`,
        value: 2
    }, {
        label: `B−`,
        value: 3
    }, {
        label: `B+`,
        value: 4
    }, {
        label: 'AB−',
        value: 5
    }, {
        label: `AB+`,
        value: 6
    }, {
        label: `O-`,
        value: 7
    }, {
        label: `O+`,
        value: 8
    }
];

export const availablilityStatusOptions = [
    {
        label: `YES`,
        value: 'Y',
        activeColor: colors.GREEN
    }, {
        label: `NO`,
        value: 'N',
        activeColor: colors.RED
    }
]

export const neededOptions = [
    {
        label: `Immediate`,
        value: `Immediate`
    }, {
        label: `Date`,
        value: `Date`
    }
]