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
        paddingLeft: 3,
        fontSize: 18,
        color: '#05375a'
    },
    userInputView: {
        paddingVertical: 5
    },
    signInUserInputView: {
        paddingVertical: 1
    },
    userPasswordInputView: {
        paddingVertical: 10,
        paddingBottom: 10
    },
    userInputTextView: {
        color: '#05375a',
        fontSize: 18,
        paddingLeft: 18
    },
    userInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        paddingTop: 5,
        paddingBottom: 5,
        paddingStart: 15,
        borderColor: '#999999',
        borderRadius: 35,
        width: width / 1.15,
        marginVertical: 10
    },
    mobileCountryCode: {
        marginHorizontal: 5,
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