import { StyleSheet } from 'react-native'
import { isAndroid, isIOS, width } from '../constants/Constants';

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
    fill_half: {
        flex: 0.5,
    },
    fill_75: {
        flex: 0.75
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
    mt36: {
        marginTop: 36,
    },
    ft16: {
        fontSize: 16
    },
    ft18: {
        fontSize: 18
    },
    ft20: {
        fontSize: 20
    },
    ft25: {
        fontSize: 25
    },
    ft30: {
        fontSize: 30
    },
    marginVertical5: {
        marginVertical: 6
    },
    borderBottomWidth1: {
        borderBottomWidth: 1
    },
    justifyContentSpaceBetween: {
        justifyContent: 'space-between'
    },
    negativeText: {
        color: '#f06159',
    },
    centerAlignedText: {
        textAlign: 'center',
    },
    textBlackColor: {
        color: '#0b0b0b'
    },
    rowFlexDirection: {
        flexDirection: `row`
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    paddingHorizontal10: {
        paddingHorizontal: 10
    },
    textLeftAlign: {
        textAlign: 'left'
    },
    textRightAlign: {
        textAlign: 'right'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    colorBlack: {
        color: `black`
    },
    colorGreen: {
        color: `green`
    },
    colorWhite: {
        color: `white`
    },
    ml_24: {
        marginLeft: 24
    },
    marginHorizontal4: {
        marginHorizontal: 4
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
        marginVertical: 10,
        paddingVertical: 10,
    },
    signUpFooter: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    dashBoardFooter: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    signUpTextInput: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 10,
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
        marginTop: isIOS && 0 || -12,
        paddingVertical: 5,
        borderBottomWidth: 1,
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
    registrationUserInputView: {
        paddingVertical: isIOS && 5 || 2,
        justifyContent: 'center',
        width: width / 1.10
    },
    registrationUserInputPickerView: {
        marginTop: isIOS && 25 || 0,
        paddingVertical: isIOS && 10 || 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    pickerItemStyleIOS: {
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Times New Roman'
    },
    registrationUserInputPickerText: {
        color: 'black',
        fontSize: 15
    },
    userInputTextView: {
        color: '#05375a',
        fontSize: 16,
        paddingLeft: 18
    },
    registrationUserInputTextView: {
        color: 'black',
        fontSize: 15,
        paddingLeft: 3
    },
    userInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        paddingStart: 15,
        borderRadius: 35,
        width: width / 1.15,
        marginVertical: 2
    },
    errorInputBorder: {
        borderColor: 'red',
    },
    authenticatedErrorInputBorder: {
        borderBottomColor: 'red',
    },
    normalInputBorder: {
        borderColor: '#999999',
    },
    authenticatedNormalInputBorder: {
        borderBottomColor: '#999999',
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
        width: width / 1.15,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    otpFieldRows: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    otpContainerStyle: {
        flexDirection: 'row',
        borderWidth: 1.5,
        borderRadius: 5,
        marginHorizontal: 6,
        padding: 8,
    },
    otpInputStyle: {
        padding: 0,
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
    otpVerifyButton: {
        alignItems: 'center',
        elevation: 8,
        marginTop: 20,
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
        marginBottom: 15,
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
        color: 'white',
        fontWeight: 'bold'
    },
    secondaryActionButtonText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#fe7d32'
    },
    formInputError: {
        color: 'red',
        marginBottom: 6,
        marginHorizontal: 15
    },
    registrationFormInputError: {
        color: 'red',
        marginVertical: isIOS && 5 || 2,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    signInSecondaryButtonView: {
        marginBottom: isIOS && 180 || 60,
        marginTop: 20,
    },
    secondaryActionButtonStyle: {
        flexDirection: `column`,
        alignItems: 'center',
        borderColor: `#fe7d32`,
        borderWidth: 1,
        justifyContent: 'center',
        width: width / 1.35,
        height: 50,
        borderRadius: 20,
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
        height: 250,
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
    },
    signUpPrimaryButtonView: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 2,
        marginBottom: isIOS && 370 || 220,
    },
    signUpActionButton: {
        alignItems: 'center',
        elevation: 8,
        marginTop: 40
    },
    signUpActionButtonGradient: {
        width: width / 1.35,
        height: 50,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center'
    },
    otpVerifyActionButtonGradient: {
        width: width / 1.35,
        height: 50,
        justifyContent: 'center',
        borderRadius: 20,
        alignItems: 'center'
    },
    otpErrorMessageStyle: {
        marginVertical: 20,
        color: 'red',
        marginBottom: 6,
        marginHorizontal: 15
    },
    signUpConfirmSecretGradient: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 80,
        elevation: 8
    },
    authenticatedUserInputViewStyle: {
        marginTop: 10,
    },
    bloodGroupPickerStyle: {
        borderWidth: isAndroid && 1 || 0,
        justifyContent: 'center',
        width: 215,
        height: 20
    },
    availabilityStatusStyle: {
        width: 150
    },
    userRegistrationSubmitButton: {
        marginBottom: isIOS && 90 || 20,
        alignItems: 'center',
        elevation: 8
    },
    neededOptionsView: {
        flexDirection: 'row',
        paddingVertical: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    neededOptionsLabel: {
        marginRight: 35,
        fontSize: 14
    },
    RVDatePickerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 10
    },
    androidDatePickerViewStyle: {
        flexDirection: `row`,
        width: 120,
        marginVertical: 2,
        backgroundColor: `white`,
        borderBottomWidth: 1,
        paddingBottom: 5,
        alignItems: 'center',
        marginHorizontal: 25,
        justifyContent: 'flex-end',
    },
    androidDatePickerCalenderIcon: {
        width: 25,
        height: 25,
        marginLeft: 10,
        alignItems: 'center'
    },
    iosDatePickerStyle: {
        width: 180,
        marginVertical: 4
    },
    hospiatalTextHeight: {
        justifyContent: 'center',
        maxHeight: 50
    },
    requestBloodButtonStyle: {
        marginBottom: isIOS && 180 || 70,
        alignItems: 'center',
        elevation: 8
    },
    dashBoardUserDetailsTextView: {
        flexDirection: 'row',
        width: width / 1.1,
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        paddingLeft: 8
    },
    dashBoardUserTextStyle: {
        flex: 0.5,
        alignItems: 'flex-start'
    },
    dashBoardUserValueStyle: {
        flex: 0.5,
        alignItems: 'flex-start',
    },
    dashBoardMenuStyle: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dashBoardHeaderStyle: {
        paddingVertical: 2,
        alignItems: 'center'
    },
    dashBoardCountsViewStyle: {
        alignSelf: 'center',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'white',
        width: width / 1.05,
        marginVertical: 10
    },
    dashBoardCountsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        overflow: 'hidden'
    },
    dashBoardFooterTopView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 18,
        width: width / 1.03,
        elevation: 8
    },
    dasBoardFooterViewBloodTypeView: {
        flex: 0.25,
        borderWidth: 1,
        borderRadius: 12,
        overflow: 'hidden'
    },
    dashBoardFooterBloodTypeText: {
        borderBottomWidth: 1,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'red',
        paddingVertical: 1
    },
    dashBoardFooterBloodTypeValue: {
        textTransform: 'uppercase',
        fontSize: 35,
        height: 50,
        paddingVertical: 1,
        backgroundColor: 'white'
    },
    sendFeedBackButtonStyle: {
        borderRadius: 25,
        paddingVertical: 15,
        marginHorizontal: 20,
        width: 140,
        elevation: 3,
        backgroundColor: '#fec72e'
    },
    dashBoardRequestBlood: {
        borderRadius: 25,
        paddingVertical: 15,
        width: 150,
        elevation: 3,
        backgroundColor: "#DE1F25"
    },
    dashBoardEdit: {
        fontSize: 18,
        marginLeft: 95
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