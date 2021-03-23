import { CardStyleInterpolators } from "@react-navigation/stack";
import { Dimensions } from "react-native";

export const isIOS = Platform.OS === `ios`;
export const isAndroid = Platform.OS === `android`;

export const { width, height } = Dimensions.get(`window`);

export const RESEND_OTP_TIME_LIMIT = 20; // 30 secs
export const AUTO_SUBMIT_OTP_TIME_LIMIT = 1;
export const OTP_INPUTS = 6;

export const GOOGLE_PLAY_PACKAGE_NAME = `com.royalvolunteers`;
export const APPLE_STORE_ID = `id1556278478`;

export const stringConstants = {
    EMPTY: ``,
    NODE: {},
    ARRAY: [],
    REPLACE_REGEX: /[- #*;,.<>\{\}\[\]\\\/]/gi,
    REPLACE_CRLF: /(\r\n|\n|\r)/gm,
    STRING: `string`,
    OBJECT: `object`,
    NEW_LINE: `\n`,
    SPACE: ` `
}

export const routeConsts = {
    HOME: `Home`,
    SIGN_IN: `SignIn`,
    SIGN_UP: `SignUp`,
    SIGN_UP_OTP_VERIFICATION: `SignUpOTPVerification`,
    SIGN_UP_SECRET: `SignUpSecret`,
    USER_REGISTRATION: `RVUserRegistration`,
    OTP_VERIFICATION: `SignUpOTPVerification`,
    USER_DASHBOARD: `RVUserDashboard`,
    USER_REGISTRATION: `RVUserRegistration`,
    BLOOD_REQUEST: `RVBloodRequest`,
    SPLASH_SCREEN: `SplashScreen`,
    BLOOD_REQUEST_NOTIFICATION: `RVBloodRequestNotification`
}

export const screenOptions = {
    gestureEnabled: true, gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};

export const screenTitle = {
    SIGN_IN: `SIGN IN`,
    SIGN_UP: `SIGN UP`,
    REGISTER: `REGISTER`,
    ENTER_MOBILE_NUMBER: `ENTER MOBILE NUMBER`,
    USER_REGISTRATION: `USER REGISTRATION`,
    ENTER_PASSWORD: `ENTER PASSWORD`,
    ENTER_OTP: `ENTER OTP`,
    USER_REGISTRATION: `USER REGISTRATION`,
    REQUEST_DONERS: `REQUEST DONERS`,
    WELCOME: `Welcome`,
    BLOOD_REQUESTS: `BLOOD REQUESTS`
}

export const actionButtonTextConstants = {
    SIGN_IN: `Sign in`,
    SIGN_UP: `Sign up`,
    REGISTER: `Register`,
    SUBMIT: `Submit`,
    SURE: `Sure`,
    CANCEL: `Cancel`,
    NOT_NOW: `Not now`,
    PROCEED: `Proceed`,
    VERIFY: `Verify`,
    FORGOT_PASSWORD: `Forgot Password`,
    RESET_PASSWORD: `Reset Password`,
    OK: `OK`,
    DATE: `Date`,
    FEEDBACK: `Feedback`,
    SHARE: `Share`,
    REQUEST_DONERS: `Request Doners`
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
        },
        minLength: {
            value: 4,
            message: `Please enter only 4 digit password`
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
    dobRule: {
        required: {
            value: true,
            message: `Please select a date of birth`
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
        },
        required: {
            value: true,
            message: `Please enter a value`
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
    AUTHORIZE_ACCESS_TOKEN: `https://royalvolunteers.in/token.php`,
    VALIDATE_TOKEN: `https://royalvolunteers.in/resource_validate.php`,
    FORGOT_PASSWORD: `https://royalvolunteers.in/rv1sknSQW9Xxb8f_urs_pass_update.php`,
    NOTIFY_BLOOD_REQUEST: `https://royalvolunteers.in/rv1sknSQW9Xxb8f_notify_blood_request.php`,
    UPDATE_DEVICE_TOKEN: `https://royalvolunteers.in/rv1sknSQW9Xxb8f_up_device_token.php`,
    SHARE_APP_LINK: `https://www.royalvolunteers.in/share.html`
}

export const countryCodesConstants = {
    INDIA: `+91`
}

export const bloodGroupsList = [
    {
        label: stringConstants.EMPTY,
        value: -1,
        untouchable: true
    }, {
        label: `Select a blood group`,
        value: 0,
        untouchable: true,
        textStyle: {
            fontWeight: `bold`,
            fontFamily: isAndroid && `normal` || `System`,
        }
    }, {
        label: `A−`,
        value: 1,
        textStyle: {
            color: 'red'
        }
    }, {
        label: `A+`,
        value: 2,
        textStyle: {
            color: 'red'
        }
    }, {
        label: `B−`,
        value: 3,
        textStyle: {
            color: 'red'
        }
    }, {
        label: `B+`,
        value: 4,
        textStyle: {
            color: 'red'
        }
    }, {
        label: `AB−`,
        value: 5,
        textStyle: {
            color: 'red'
        }
    }, {
        label: `AB+`,
        value: 6,
        textStyle: {
            color: 'red'
        }
    }, {
        label: `O-`,
        value: 7,
        textStyle: {
            color: 'red'
        }
    }, {
        label: `O+`,
        value: 8,
        textStyle: {
            color: 'red'
        }
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
    MINUS_ONE: -1,
    ZERO: 0,
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    EIGHT: 8,
    TEN: 10,
    ELEVEN: 11,
    TWELVE: 12,
    SIXTEEN: 16,
    EIGHTEEN: 18,
    NINETEEN: 19,
    TWENTY: 20,
    TWENTY_TWO: 22,
    TWENTY_FOUR: 24,
    THIRTY: 30,
    ONE_HUNDRED: 100,
    ONE_HUNDRED_THIRTY: 130,
    ONE_HUNDRED_FIFTY: 150,
    TWO_HUNDRED: 200,
    THREE_HUNDRED: 300,
    FOUR_HUNDRED_ONE: 401,
    FIVE_HUNDRED: 500,
    THOUSAND: 1000
}

export const fieldControllerName = {
    PHONE_NUMBER: `phoneNumber`,
    SECRET: `secret`,
    CONFIRM_SECRET: `confirmSecret`,
    OTP_INPUT: `otpInput`,
    NAME: `name`,
    DOB: `dob`,
    PINCODE: `pincode`,
    BLOOD_GROUP: `blood_group`,
    AVAILABILITY_STATUS: `availability_status`,
    DATE_PICKER: `datePicker`,
    HOSPITAL_NAME: `hospitalName`,
    FEEDBACK: `feedback`
}

export const fieldTextName = {
    MOBILE_NUMBER: `Mobile Number`,
    MOBILE_NUMBER_TEXT: `Mobile Number : `,
    PASSWORD: `Password`,
    CONFIRM_PASSWORD: `Confirm Password`,
    NAME: `Name : `,
    AGE: `Age : `,
    DOB: `Date of birth : `,
    PINCODE: `Pincode : `,
    BLOOD_GROUP: `Blood Group : `,
    AVAILABILITY_STATUS: `Status of availability : `,
    NEEDED_OPTIONS: ` Needed : `,
    HOSPITAL_NAME: `Hospital : `,
    BENIFITERS: `Benifiters`,
    VOLUNTEERS: `Volunteers`,
    REQUESTS: `Requests`,
    BLOOD_TYPE: `Blood Type`,
    RECEIVED_TIME: `Received : `
}

export const placeHolderText = {
    PHONE_NUMBER: `Enter 10 digit Number`,
    NAME: `Enter Name`,
    AGE: `Enter Age`,
    DOB: `Enter date of birth`,
    SECRET: `Enter 4 digit Password`,
    PINCODE: `Enter 6 digit pincode`,
    CONFIRM_PASSWORD: `Confirm 4 digit Password`,
    SIGN_UP_DESCRIPTION: `We will send you a verification code to your phone`,
    HOSPITAL_NAME: `Enter Hospital name`,
    FEEDBACK: `Enter Feedback`,
    SELECT_A_BLOOD_GROUP: `Select a blood group`
}

export const keyBoardTypeConst = {
    DEFAULT: `default`,
    ANDROID_NUMERIC: `numeric`,
    IOS_NUMERIC: `number-pad`,
    TELPHONETYPE: `telephoneNumber`,
    USERNAME: `username`,
    NEW_PASSWORD: `newPassword`,
    ONETIMECODE: `oneTimeCode`,
    NAME: `name`,
    PINCODE: `postalCode`,
    ADDRESS_CITY_STATE: `addressCityAndState`,
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
    NO: `N`,
    NOW: `Now`,
    YES: `Y`,
    CALL: `Call`,
    LOADING: `Loading`,
    RATE_US: `Rate Us`,
    DISCLAIMER_PRIVACY_POLICY: `Disclaimer and Privacy policy`,
    LOGOUT: `Logout`,
    PH_QUERY_PARAM: `?ph=`,
    ON_CHANGE: `onChange`,
    RESET: `Reset`,
    BLOOD_REQUEST: `bloodRequest`,
    FORGOT_PASSWORD: `forgotSecret`,
    SUCCESSFUL: `Successful`,
    UNSUCCESSFUL: `Unsuccessful`,
    INVALID_USER: `invalidUser`,
    TRANSPARENT: `transparent`,
    DATE_PICKER_FORMAT: `DD/MM/YYYY`,
    DOB_DATE_FORMAT: `YYYY-MM-DD`,
    HARDWARE_BACK_PRESS: `hardwareBackPress`,
    SELECT_DATE: `Select a Date`,
    TOKEN_VALID: `TokenValid`,
    TOKEN_INVALID: `TokenInvalid`,
    TOKEN_EXPIRED: `TokenExpired`,
    INVALID_REQUEST: `InvalidRequest`,
    USER_SERVICE_TOKEN_KEY: `user`,
    DEVICE_TOKEN: `device_token`,
    CANCEL_TYPE: `cancel`,
    DASHBOARD: `Dashboard`,
    NOTIFICATION_REQUESTS: `notificationRequests`,
    ACCEPTED_TERMS: `acceptedTerms`,
    REQUESTS: `requests`,
    INFINITE: `infinite`,
    NEEDED_REQUEST: `needed_request`,
    IMMEDIATE: `Immediate`,
    ATTEMPT_REMAINING: `Attempts remaining`,
    BACKSPACE: `Backspace`,
    YEARS: `Years`,
    YEARS_MOMENT: `years`,
    APP_SETTINGS: 'app-settings:',
    SAVE: `Save`,
    EDIT: `Edit`,
    TAIL: `tail`,
    TIME_FORMAT: `hh:mm A`,
    NOTIFICATION: `notification`,
    RELOAD_APPLICATION: `Reload Application`,
    EXCLUDE_TYPE: `com.apple.reminders.sharingextension`,
    ACCEPTED: `accepted`,
    BULLET: `\u2022`,
    CONNECTED: `Connected`,
    DISCONNECTED: `Disconnected`,
    CHECK_CONNECTION_DETAILS: `Please check you internet connection and try again.`
}

export const successFulMessages = {
    FEEDBACK_SUBMITTED_SUCCESSFULLY: `Feedback submitted successfully`,
    SENT_SMS_SUCCESSFULLY: `Successfully sent message!`,
    NOTIFICATION_SENT_DONERS: `Notification sent to doners. Someone will call you!`,
    SUCCESSFULLY_REGISTERED: `Successfully registered your details`,
    SUCCESSFULLY_RESET_PASSWORD: `Password reset sucessful. Please sign in`,
    ACCESS_TOKEN_RETRIEVED_SUCCESSFULLY: `Access Token retrieved successfully!`,
    VALIDATING_ACCESS_TOKEN: `Validating Access Token!`,
    TOKEN_IS_VALID: `Token is valid!`,
    SUCCESSFULLY_SAVED_TOKEN: `Successfully saved token`,
    TOKEN_FETCHED_SUCESSFULLY: `Fetched the token successfully!`,
    SUCCESSFUL_LOG_OUT: `SuccessFully logged out`,
    DASHBOARD_DETAILS_UPDATE: `Updated your availability successfully!`,
    DASHBOARD_PINCODE_DETAILS_UPDATE: `Updated your pincode successfully!`,
    USER_LOGIN_TOKEN_STATUS: `User login token status`,
    USER_ACCOUNT_STATUS: `User account status`,
    RATE_US_MESSAGE: `Would you like to share your review with us?\n\nThis will help and motivate us a lot.`,
    SHARED_DETAILS_SUCCESSFULLY: `Shared details successfully`,
    SHARE_TITLE: `Royal Volunteers - Donate or Request for Blood`,
    SHARE_DIALOG_TITLE: `Share Royal Volunteers`,
    SHARE_MESSAGE: `Please register to Royal Volunteers app and Donate or Request for Blood when in need, AppLink :`
}

export const errorModalTitleConstants = {
    LOGIN_FAILED: `Login Failed`,
    ERROR: `Error : `,
    INVALID_TOKEN: `invalid_token`,
    EXPIRED: `expired`,
    ENABLE_NOTIFICATIONS: `Enable Notifications`,
    NOT_AVAILABLE: `Not Available`
}

export const notificationConsts = {
    CHANNEL_ID: `com.royalvolunteer`,
    HIGH_PRIORITY: `high`,
    CALL_NOW_ACTION: `Call now`,
    VIEW_REQUESTS_ACTION: `View requests`,
    SMALL_ICON: `ic_stat_name`,
    GROUP: `RVNotificationGroup`,
    CREATE_CHANNEL_CREATE: `createChannel returned`,
    NOTIFICATION_CANCELLED: `Notification Cancelled`,
    USER_ACTION_ID: `userAction`,
    CALL_NOW_ID: `callNow`,
    VIEW_REQUESTS_ID: `viewRequests`
}

export const errorModalMessageConstants = {
    USER_LOGIN_FAILED: `Username and Password does not match`,
    NOTIFICATION_FAIL_DONERS: `Could not notify doners`,
    FEEDBACK_SUBMITTED_UNSUCCESSFULLY: `Could not submit feedback`,
    USER_NOT_REGISTERED: `Could not register user.`,
    USER_ALREADY_REGISTERED: `User already registerd. Please sign in`,
    INCORRECT_OTP_ENTERED: `Incorrect OTP entered`,
    ERROR_FETCHING_TOKEN: `Error fetching token response!`,
    UNEXPECTED_ERROR: `Unexpected Error`,
    SOMETHING_WENT_WRONG: `Oops.. something went wrong`,
    ACCESS_TOKEN_COULD_NOT_BE_RETRIEVED: `Access Token could not be retrieved!`,
    TOKEN_EXPIRED: `Token is Expired!`,
    TOKEN_VALIDATION_FAILED: `Could not validate and save token`,
    TOKEN_HEADER_VALIDATION_FAILED: `Could not validate token with header :`,
    TOKEN_REQUEST_SAVE_FAILED: `Could not save the request_token for number : `,
    TOKEN_FETCH_FAILED: `Could not fetch the token!`,
    SAVED_TOKEN_FETCH_FAILED: `Could not fetch the request token saved! : `,
    FETCH_ACCOUNT_STATUS_FAILED: `Could not fetch user resgistration status for phone number: `,
    CANNOT_SAVE_ACCOUNT_STATUS: `Cannot not save user registration status`,
    CANNOT_PROCESS_TO_SAVE_UPDATE_NOTIFICATIONS: `Cannot save or update notifications in device`,
    CANNOT_FETCH_SAVED_NOTIFICATIONS: `Cannot fetch saved notifications`,
    CANNOT_FETCH_SAVED_ACCOUNT_STATUS: `Cannot not fetch user registration status`,
    ENABLE_NOTIFICATIONS_SETTINGS: `To receive notifications about blood requests, you need to enable receiving notifications.\n
        Clicking on OK will navigate you to settings dialog to allow notifications.Click Cancel to close.`,
    CANNOT_UPDATE_NOTIFICATION_STATUS: `Cannot update notification status`,
    REQUEST_IS_INVALID: `Request is invalid`,
    REQUEST_OTP_FAILED: `Cannot request OTP for number`,
    CANNOT_REQUEST_PERMISSION_TO_USER: `Could not request permission to the user`,
    USER_DENIED_NOTIFICATION: `User denied the notification!`,
    CANNOT_OPEN_SETTINGS_SCREEN: `Cannot open settings screen`,
    CANNOT_CALCULATE_DURATION: `Could not calculate duration`,
    CANNOT_LOGOUT_USER: `Cannot logout user`,
    CANNOT_NAVIGATE_TO_NOTIFICATION_REQUEST: `Cannot navigate to notification requests`,
    ERROR_REQUESTING_TOKEN: `Error requsting for token`,
    CANNOT_VALIDATE_SAVED_TOKEN: `Cannot validate saved token`,
    CANNOT_OPEN_STORE: `Cannot open Store`,
    ANDROID_URL_OPEN_ERROR: `Please check for Google Play Store`,
    IOS_URL_OPEN_ERROR: `Please check for the App Store`,
    CANCELLED_SHARING: `You have cancelled sharing`,
    CANNOT_SHARE: `Could not share!`,
    CLIPBOARD_CONTENT_IS_EMPTY: `Clipboard content is empty`,
    CLIPBOARD_CANNOT_CHECK_OTP_IOS: `Could not check code from message IOS`,
    CANNOT_SAVE_TNC: `Cannot save accepted terms`,
    CANNOT_FETCH_SAVED_TNC: `Cannot fetch saved accepted terms`,
    ERROR_BOUNDARY: `The app ran into a problem and could not continue. We apologise for any inconvenience this has caused! Press the button below to restart the app and sign back in. Please contact us if this issue persists.`,
}

export const tokenRequestResponseConst = {
    GRANT_TYPE: `grant_type`,
    ACCESS_TOKEN_GRANT_TYPE_VALUE: `password`,
    CLIENT_ID: `client_id`,
    CLIENT_ID_VALUE: `RV_`,
    CLIENT_SECRET: `client_secret`,
    CLIENT_SECRET_VALUE: `royalvolunteer`,
    USERNAME: `username`,
    PASSWORD: `password`,
    ACCESS_TOKEN: `access_token`,
    REFRESH_TOKEN: `refresh_token`,
    EXPIRES_IN: `expires_in`,
    AUTHORIZATION_BEARER: `Authorization`,
    BEARER: `Bearer `,
    REFRESH_TOKEN_GRANT_TYPE_VALUE: `refresh_token`,
    TYPE_NEW: `NEW`,
    TYPE_REFRESH: `REFRESH`,
    SAVED_DATE: `saved_date`,
    ACCOUNT_STATUS: `account_status`
}

export const TnCTexts = {
    LN1: `Royal Volunteer is an organisation which functions with the sole aim to promote and spread the awareness among the people to donate blood which is helpful for the poor and needy.`,
    LN2: `The users need to utilise the information provided in the site and approach the list of donors.`,
    LN3: `The details of the donors are displayed only to facilitate the users for contacting them when in need of blood in case of any emergency. Royal Volunteer organisation is not responsible for willingness/unwillingness to donate blood expressed by the donor listed in the site.`,
    LN4: `Content provided in or through the site:`,
    LN5: `Royal Volunteer may employ cookie technology to allow subscribers and users to move more quickly through our site. Cookies are small text files a website can use to recognise repeat users and facilitate the user's ongoing access to and use of the site. Generally, cookies do not pose a threat to a user's files. Royal Volunteer cannot control the use of cookies by advertisers or third parties hosting data for Royal Volunteer, In case a member/user does not want the use of cookies, most browsers allow the user to deny or accept the cookie feature.`,
    LN6: `Royal Volunteer may contain links to other web sites or resources only for the convenience of the users. Royal Volunteer is not responsible for the content of these external sites, nor does friends2support endorse, warrant or guarantee the products, services or information described or offered in those sites. It is the responsibility of the user to examine the copyright and licensing restrictions of linked pages and to secure all necessary permission.`,
    LN7: `Royal Volunteer reserves the right to change, modify or discontinue any aspect of the Website at any time, including any information or its contents or features. Royal Volunteer reserves the right to collect, analyze and disseminate the patterns of usage of the Website by all its Users.`,
    LN8: `All information or content on the Website is the exclusive property of Royal Volunteer support. No information or content on the Website may be copied, modified, reproduced, republished, uploaded, transmitted, posted or distributed in any form without the prior written consent of Royal Volunteer support. Royal Volunteer support trademark shall not be used in any manner without the prior written consent of Royal Volunteer support.`,
    H1: `Contacting Blood Donors`,
    H2: `Content`,
    H3: `Cookies`,
    H4: `External Links`,
    H5: `Royal Volunteer Rights`,
    H6: `Copyrights & Trademarks`,
    FOOTER: `Unauthorized use of any information or content appearing on the Website shall violate copyright, trademark and other applicable laws and could result in criminal or civil penalties.`,
    PT1: `Is provided for information purposes only.`,
    PT2: `Is not shared with third parties.`,
    PT3: `The donor information available in this website is made available to us by the donors and its purely the donor's right to continue or to withdraw any information available at any point of time.`,
    PT4: `We are not responsible for any inaccuracy in the information available on the website.`,
    PT5: `We are not responsible for any misuse of contact information displayed in the website. If you feel that your contact details are being misused then contact us on support@royalvolunteer.in`
}