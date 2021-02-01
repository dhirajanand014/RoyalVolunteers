import { Dimensions, Platform, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get(`window`);

/**
 * mr - margin right
 * ml - margin left
 * mt - margin top
 * p  - padding
 * px - padding horizontal
 */
export const RVGenericStyles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    bold: {
        fontWeight: 'bold',
    },
    mr12: {
        marginRight: 12,
    },
    mt12: {
        marginTop: 12,
    },
    mt24: {
        marginTop: 24,
    },
    negativeText: {
        color: '#f06159',
    },
    centerAlignedText: {
        textAlign: 'center',
    },
    textBlackColor: {
        color: '#0b0b0b'
    }
});

export const RVStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    headerContainer: {
        flex: 1,
        backgroundColor: '#fcc200'
    },
    headerImage: {
        marginTop: 40,
        alignItems: 'center',
        paddingVertical: 20
    },
    signUpCenterAlign: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpTextHeader: {
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        fontSize: 20,
        paddingVertical: 25,
    },
    signUpFooter: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    signUpTextInput: {
        flex: 1,
        marginTop: 2,
        paddingLeft: 3,
        marginLeft: 3,
        fontSize: 18,
        textAlign: 'left',
        color: '#05375a'
    },
    underlineTextInput: {
        flex: 1,
        paddingLeft: 3,
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontSize: 16,
        color: '#05375a'
    },
    userInputView: {
        paddingVertical: 5
    },
    signInUserInputView: {
        paddingVertical: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userPasswordInputView: {
        paddingVertical: 10,
        paddingBottom: 10
    },
    userInputTextView: {
        color: '#05375a',
        fontSize: 16,
        paddingLeft: 18
    },
    userInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        paddingStart: 15,
        borderRadius: 35,
        width: width / 1.15,
        marginVertical: 4
    },
    errorInputBorder: {
        borderColor: 'red',
    },
    normalInputBorder: {
        borderColor: '#999999',
    },
    mobileCountryCode: {
        marginHorizontal: 3,
        paddingHorizontal: 5,
        color: '#05375a',
        fontSize: 18,
        paddingLeft: 5
    },
    signUpDescription: {
        color: '#989898',
        textAlign: 'center',
        fontSize: 16,
        marginTop: 40,
        fontWeight: '500'
    },
    otpFieldRows: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    otpContainerStyle: {
        flexDirection: 'row',
        borderColor: '#d4d4d4',
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 6,
        padding: 8,
    },
    otpInputStyle: {
        padding: 0,
    },
    otpText: {
        color: '#3543bf',
        fontSize: 18,
        width: '100%',
        alignItems: 'center',
    },
    otpResendTimerText: {
        fontSize: 12,
    },
    otpResendLinkStyle: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderRadius: 3,
        alignSelf: 'flex-start',
    },
    otpResendTextStyle: {
        textTransform: 'uppercase',
        fontSize: 12,
        color: '#3543bf',
    },
    otpResendButton: {
        alignItems: 'center',
        width: '100%',
        marginTop: 16,
    },
    otpResendButtonText: {
        color: '#fe7d32',
        textTransform: 'none',
        textDecorationLine: 'underline',
    },
    otpResendDisabled: {
        opacity: 0.5,
    },
    neededRadioCircle: {
        height: 20,
        width: 20,
        padding: 8,
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    neededSelectedRb: {
        width: 10,
        height: 10,
        borderRadius: 40,
        backgroundColor: 'black',
    },
    signInLinks: {
        flexDirection: 'row',
        marginTop: 8
    },
    signInRememberPasswordText: {
        marginHorizontal: 19,
        marginLeft: 10
    },
    signInForgotPassword: {
        flex: 1,
        alignItems: 'flex-end'
    },
    signInForgotPasswordLink: {
        flex: 0.5
    },
    signInForgotPasswordText: {
        color: `#c08`
    },
    actionButtonStyle: {
        flexDirection: `column`,
        alignItems: 'center',
        elevation: 8
    },
    primaryActionButtonLinearGradient: {
        width: width / 1.35,
        height: 50,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center'
    },
    secondaryActionButtonLinearGradient: {
        width: width / 1.35,
        height: 50,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
    },
    primaryActionButtonButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },
    secondaryActionButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fe7d32'
    },
    formInputError: {
        color: 'red'
    },
    secondaryActionButtonStyle: {
        flexDirection: `column`,
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 20,
        borderColor: `#fe7d32`,
        borderWidth: 1,
        width: width / 1.35,
        height: 50,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        margin: 45
    },
    modalViewStyle: {
        margin: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        width: 300,
        height: 160,
        alignItems: "center",
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalTitleTextView: {
        alignItems: 'center'
    },
    modalTitleTextStyle: {
        fontSize: 20,
        padding: 10
    },
    modalTitleDivider: {
        width: 230,
        height: 1,
        backgroundColor: "lightgray"
    },
    modalMessageViewStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalMessageTextStyle: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10
    },
    modalOKButtonStyle: {
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginVertical: 15,
        width: 150,
        elevation: 3,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#fec72e'
    },
    modalButtonTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
});

export const colors = {
    BLUE: '#3543bf',
    ORANGE: '#fe7d32',
    GREEN: '#30a960',
    RED: '#f06159',
    BLACK: '#0b0b0b',
    SILVER: '#efefef',
    WHITE: '#fff',
    GREY: '#7e7e7e',
    WHITE_GREY: '#d4d4d4',
    DARK_GREY: '#555555',
    LIGHT_BLACK: '#212121',
    DARK_RED: '#c04d47',
    SEMI_TRANSPARENT: 'rgba(0,0,0,0.5)',
    LIGHT_RED: '#fef3ec',
    YELLOW: '#fec72e',
    LIGHT_GREY: '#a9a9a9',
    PALE_YELLOW: '#fff6ef',
    DARK_BLUE: '#2e68b2',
    LIGHT_BLUE: '#EEEFF9',
};