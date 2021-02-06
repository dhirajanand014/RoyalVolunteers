import { CardStyleInterpolators } from "@react-navigation/stack";
import { Dimensions } from "react-native";

export const isIOS = Platform.OS === `ios`;
export const isAndroid = Platform.OS === `android`;

export const { width, height } = Dimensions.get(`window`);

export const RESEND_OTP_TIME_LIMIT = 20; // 30 secs
export const AUTO_SUBMIT_OTP_TIME_LIMIT = 3; // 4 secs
export const OTP_INPUTS = 6;

export const stringConstants = {
    EMPTY: ``,
    NODE: {},
    REPLACE_REGEX: /[- #*;,.<>\{\}\[\]\\\/]/gi,
    STRING: `string`,
    OBJECT: `object`
}

export const routeConsts = {
    HOME: `Home`,
    SIGN_UP: `SignUp`,
    SIGN_UP_SECRET: `SignUpSecret`,
    USER_REGISTRATION: `RVUserRegistration`,
    BLOOD_REQUEST: `RVBloodRequest`
}

export const screenOptions = {
    gestureEnabled: true, gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};


export const screenTitle = {
    SIGN_IN: `SIGN IN`,
    SIGN_UP: `SIGN UP`,
    ENTER_MOBILE_NUMBER: `ENTER MOBILE NUMBER`,
    USER_REGISTRATION: `USER REGISTRATION`,
    ENTER_PASSWORD: `ENTER PASSWORD`,
    ENTER_OTP: `ENTER OTP`,
    USER_REGISTRATION: `USER REGISTRATION`,
    REQUEST_FOR_BLOOD: `REQUEST FOR BLOOD`,
    WELCOME: `Welcome`
}

export const actionButtonTextConstants = {
    SIGN_IN: `Sign in`,
    SIGN_UP: `Sign up`,
    SUBMIT: `Submit`,
    PROCEED: `Proceed`,
    VERIFY: `Verify`,
    OK: `OK`,
    DATE: `Date`,
    SEND_FEEDBACK: `Send Feedback`,
    REQUEST_FOR_BLOOD: `Request for blood`
}

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
        },
        pattern: {
            value: `/^([0-9]{1,100})+$/`,
            message: `Please enter only digits`
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
    confirmPasswordRule: {
        type: `mismatch`,
        message: `Passwords do not match`
    },
    nameFormRule: {
        required: {
            value: true,
            message: `Please enter a name`
        }
    },
    ageRule: {
        required: {
            value: true,
            message: `Please enter a name`
        },
        maxLength: {
            value: 3,
            message: `Please enter a valid age`
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
    },
    feedBackInputRule: {
        maxLength: {
            value: 1000,
            message: `Please enter only 1000 characters`
        }
    }
};

export const urlConstants = {
    SAVE_SIGNUP_DETAILS: `https://royalvolunteers.in/rv1sknSQW9Xxb8f_sn_up.php`,
    SAVE_BLOOD_REQUEST: `https://royalvolunteers.in/rv1sknSQW9Xxb8f_rq_bld.php`,
    SAVE_FEEDBACK: `https://royalvolunteers.in/rv1sknSQW9Xxb8f_feed_form.php`,
    GET_USER_DASHBOARD_DETAILS: `https://royalvolunteers.in/rv1sknSQW9Xxb8f_urs_dash.php`,
    LOGIN_USER: `https://royalvolunteers.in/rv1sknSQW9Xxb8f_usr_snin.php`,
    TRIGGER_SMS_OTP: `https://royalvolunteers.in/rv1sknSQW9Xxb8f_rv_otp_generator.php`,
    AUTHORIZE_ACCESS_TOKEN: `https://royalvolunteers.in/token.php`
}

export const countryCodesConstants = {
    INDIA: `+91`
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
        activeColor: `#30a960`
    }, {
        label: `NO`,
        value: 'N',
        activeColor: `#f06159`
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
];

export const numericConstants = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    TEN: 10,
    TWELVE: 12,
    THOUSAND: 1000
}

export const fieldControllerName = {
    PHONE_NUMBER: `phoneNumber`,
    SECRET: `secret`,
    CONFIRM_SECRET: `confirmSecret`,
    OTP_INPUT: `otpInput`,
    NAME: `name`,
    AGE: `age`,
    PINCODE: `pinCode`,
    BLOOD_GROUP: `bloodGroup`,
    AVAILABILITY_STATUS: `availabilityStatus`,
    DATE_PICKER: `datePicker`,
    HOSPITAL_NAME: `hospitalName`
}

export const fieldTextName = {
    MOBILE_NUMBER: `Mobile Number`,
    MOBILE_NUMBER_TEXT: `Mobile Number : `,
    PASSWORD: `Password`,
    CONFIRM_PASSWORD: `Confirm Password`,
    NAME: `Name : `,
    AGE: `Age : `,
    PINCODE: `Pincode : `,
    BLOOD_GROUP: `Blood Group : `,
    AVAILABILITY_STATUS: `Status of availability : `,
    NEEDED_OPTIONS: ` Needed : `,
    HOSPITAL_NAME: `Hospital : `,
    BENIFITERS: `Benifiters`,
    VOLUNTEERS: `Volunteers`,
    BLOOD_TYPE: `Blood Type`
}

export const placeHolderText = {
    PHONE_NUMBER: `Enter 10 digit Mobile Number`,
    NAME: `Enter Name`,
    AGE: `Enter Age`,
    SECRET: `Enter Password`,
    PINCODE: `Enter 6 digit pincode`,
    CONFIRM_PASSWORD: `Confirm Password`,
    SIGN_UP_DESCRIPTION: `We will send you a verification code to your phone`,
    HOSPITAL_NAME: `Enter Hospital name`
}

export const keyBoardTypeConst = {
    DEFAULT: `default`,
    ANDROID_NUMERIC: `numeric`,
    IOS_NUMERIC: `name-phone-pad`,
    TELPHONETYPE: `telephoneNumber`,
    ONETIMECODE: `oneTimeCode`,
    NAME: `name`,
    PASSWORD: `password`
}

export const miscMessage = {
    RESEND_OTP_IN: `Resend OTP in`,
    RESEND_OTP: `Resend OTP`,
    SUBMITTING_IN: `Submitting OTP in`,
    RESET_NAVIGATION: `ResetNavigation`,
    CONFIRM_SECRET: `SecretConfirm`,
    INCORRECT_OTP: `IncorrectOTP`,
    SUCCESS: `Success`,
    VERIFIED: `Verified`,
    REGISTERED: `Registered`,
    ERROR: `ERROR`,
    DUPLICATE: `Duplicate`,
    NONE: `none`,
    WORDS: `words`,
    DATE: `date`,
    SET: `set`,
    TRANSPARENT: `transparent`,
    DATE_PICKER_FORMAT: `DD/MM/YYYY`,
    HARDWARE_BACK_PRESS: `hardwareBackPress`,
    FEEDBACK_SUBMITTED_SUCCESSFULLY: `Feedback submitted successfully`,
    REGISTRATION_SUCCESSFUL: `Registration successful`,
    NOTIFICATION_SENT_DONERS: `Notification sent to doners`,
    SELECT_DATE: `Select a Date`,
    INCORRECT_OTP_ENTERED: `Incorrect OTP entered`,
    SUCCESSFULLY_REGISTERED: `Successfully registered your details`
}

export const errorModalTitleConstants = {
    LOGIN_FAILED: `Login Failed`,
}

export const errorModalMessageConstants = {
    USER_LOGIN_FAILED: `Username and Password does not match`,
    NOTIFICATION_FAIL_DONERS: `Could not notify doners`,
    USER_ALREADY_REGISTERED: `User already registerd. Please sign in`,
}