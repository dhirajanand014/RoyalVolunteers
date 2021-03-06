import { StyleSheet } from 'react-native'
import { isAndroid, isIOS, width, height } from '../constants/Constants';

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
    elevation3: {
        elevation: 3
    },
    bold: {
        fontWeight: 'bold',
    },
    fontFamilyNormal: {
        fontFamily: isAndroid && `normal` || `System`,
    },
    mr12: {
        marginRight: 12,
    },
    mt12: {
        marginTop: 12,
    },
    mt20: {
        marginTop: 20,
    },
    mt24: {
        marginTop: 24,
    },
    mt36: {
        marginTop: 36,
    },
    ht36: {
        height: 36,
    },
    mv30: {
        marginVertical: 30,
    },
    mb15: {
        marginBottom: 15,
    },
    mb5: {
        marginBottom: 5,
    },
    mb20: {
        marginBottom: 20,
    },
    mb30: {
        marginBottom: 30,
    },
    width100: {
        width: 100
    },
    width120: {
        width: 120
    },
    width130: {
        width: 130
    },
    ft14: {
        fontSize: 14
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
    ft24: {
        fontSize: 24
    },
    ft25: {
        fontSize: 25
    },
    ft30: {
        fontSize: 30
    },
    ft42: {
        fontSize: 42
    },
    ftWeight700: {
        fontWeight: '700'
    },
    ftWeight100: {
        fontWeight: '100'
    },
    marginBottom4: {
        marginBottom: 4
    },
    marginBottom10: {
        marginBottom: 10
    },
    marginVertical2: {
        marginVertical: 2
    },
    marginVertical5: {
        marginVertical: 5
    },
    mv5: {
        marginVertical: 5
    },
    mv10: {
        marginVertical: 10
    },
    mv15: {
        marginVertical: 15
    },
    mv20: {
        marginVertical: 20
    },
    borderBottomWidth1: {
        borderBottomWidth: 1
    },
    borderBottomWidthpt5: {
        borderBottomWidth: 0.5
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
    inputTextColor: {
        color: '#05375a'
    },
    textItalic: {
        fontStyle: 'italic'
    },
    leftAlignedText: {
        textAlign: 'left',
    },
    alignItemsEnd: {
        alignItems: 'flex-end'
    },
    alignSelfEnd: {
        alignSelf: 'flex-end'
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
    padding5: {
        padding: 5
    },
    marginHorizontal10: {
        marginHorizontal: 10
    },
    padding10: {
        padding: 10
    },
    paddingHorizontal5: {
        paddingHorizontal: 5
    },
    paddingHorizontal10: {
        paddingHorizontal: 10
    },
    paddingHorizontal15: {
        paddingHorizontal: 15
    },
    paddingHorizontal20: {
        paddingHorizontal: 20
    },
    paddingVertical2: {
        paddingVertical: 2
    },
    paddingVertical10: {
        paddingVertical: 10
    },
    textLeftAlign: {
        textAlign: 'left'
    },
    ml_95: {
        marginLeft: 95
    },
    textCenterAlign: {
        textAlign: 'center'
    },
    textRightAlign: {
        textAlign: 'right'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    colorBlue: {
        color: '#3543bf'
    },
    colorGrey: {
        color: '#555555'
    },
    colorBlack: {
        color: `black`
    },
    backGroundColorGreen: {
        backgroundColor: `green`
    },
    colorWhite: {
        color: `white`
    },
    colorRed: {
        color: `red`
    },
    paddingHorizontal12: {
        paddingHorizontal: 12
    },
    alignItemsStart: {
        alignItems: 'flex-start'
    },
    justifyItemsStart: {
        justifyContent: 'flex-start'
    },
    colorGreen: {
        color: 'green'
    },
    dropDownBackGround: {
        backgroundColor: '#fafafa',
        zIndex: 10
    },
    selectedDropDownColor: {
        color: '#39739d',
    },
    ml_8: {
        marginLeft: 8
    },
    ml_24: {
        marginLeft: 24
    },
    ml_40: {
        marginLeft: 40
    },
    marginHorizontal4: {
        marginHorizontal: 4
    },
    opacitypt7: {
        opacity: .7
    },
    opacitypt2: {
        opacity: .2
    },
    width1pt08: {
        width: width / 1.08
    },
    zIndex10: {
        zIndex: 10
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
        marginTop: 25,
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
        marginVertical: 15,
        fontFamily: isAndroid && `normal` || `System`,
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
    dashBoardUnderlineTextInput: {
        flex: 1,
        marginLeft: 8,
        paddingLeft: 2,
        paddingVertical: 1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        color: '#05375a',
    },
    underlineTextInput: {
        flex: 1,
        paddingLeft: 3,
        justifyContent: 'center',
        marginTop: isIOS && 0 || -25,
        paddingVertical: isIOS && 1 || 1,
        borderBottomWidth: 1,
        position: 'absolute', //Here is the trick
        bottom: 0,
        right: 0,
        left: 0,
        top: 0,
        fontSize: 16,
        color: '#05375a'
    },
    modalUnderlineTextInput: {
        flex: 1,
        paddingLeft: 3,
        justifyContent: 'center',
        marginTop: isIOS && 0 || -25,
        paddingVertical: isIOS && 1 || 1,
        borderBottomWidth: 1,
        fontSize: 16,
        color: '#05375a'
    },
    underlineTextInputBloodRequest: {
        flex: 1,
        paddingLeft: 3,
        justifyContent: 'center',
        marginTop: isIOS && 0 || -28,
        paddingVertical: isIOS && 3 || 1,
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
        marginTop: isIOS && 8 || 0,
        paddingTop: isIOS && 8 || 0,
        paddingBottom: -12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    userDashBoardPickerView: {
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
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
        marginBottom: 12,
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
    neededRadioSlop: {
        top: 20,
        bottom: 20,
        left: 0,
        right: 50
    },
    neededSelectedRb: {
        width: 10,
        height: 10,
        borderRadius: 40,
        backgroundColor: 'black',
    },
    signInLinks: {
        marginTop: 8
    },
    signInRememberPasswordText: {
        marginHorizontal: 19,
        marginLeft: 10
    },
    actionButtonStyle: {
        flexDirection: `column`,
        alignItems: 'center',
        elevation: 3
    },
    colorPink: {
        color: `#c08`
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
        fontWeight: 'bold',
        fontFamily: isAndroid && `normal` || `System`
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
        justifyContent: 'space-between',
        position: 'absolute', //Here is the trick
        bottom: 0,
        marginBottom: isIOS && 100 || 50,
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
        padding: 25,
        width: 300,
        height: 300,
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
    rateUsModalViewStyle: {
        margin: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        width: 300,
        height: 255,
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
    disclaimerModalTitleTextView: {
        alignItems: 'center',
        paddingTop: isIOS && 20 || 0,
        marginTop: 20
    },
    modalTitleTextStyle: {
        fontSize: 20,
        padding: 4
    },
    disclaimerTitleTextStyle: {
        fontSize: 20
    },
    modalTitleDivider: {
        width: 230,
        height: 1,
        backgroundColor: "lightgray"
    },
    disclaimerModalTitleDivider: {
        width: width / 1.05,
        marginTop: 5,
        height: 1,
        backgroundColor: "lightgray"
    },
    menuOptionsDivider: {
        width: 125,
        marginLeft: 1,
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
    modalErrorImage: {
        width: 35,
        height: 35,
        tintColor: 'red'
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
        justifyContent: 'space-between',
        position: 'absolute', //Here is the trick
        bottom: 0,
        marginBottom: isIOS && 100 || 50,
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
        marginTop: 16
    },
    bloodGroupPickerStyle: {
        justifyContent: 'center',
        width: width / 1.8,
        height: 35
    },
    availabilityStatusStyle: {
        width: 100,
        marginHorizontal: 3
    },
    userRegistrationSubmitButton: {
        marginBottom: height == 736 && 1 || isIOS && 80 || 40,
        alignItems: 'center',
        justifyContent: 'flex-end',
        elevation: 8,
        position: 'absolute', //Here is the trick
        bottom: 0,
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
        marginRight: 10,
        marginTop: isIOS && -12 || 10
    },
    RVDatePickerViewBloodRequest: {
        paddingVertical: 6,
        marginRight: 10
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
    androidRegistrationDatePickerViewStyle: {
        flex: 1,
        paddingLeft: 3,
        borderBottomWidth: 1,
        marginTop: -3,
        position: 'absolute', //Here is the trick
        bottom: 1,
        justifyContent: 'center',
        width: width / 1.10,
        borderBottomColor: '#999999'
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
    hospitalTextHeight: {
        justifyContent: 'center',
        maxHeight: 50
    },
    requestBloodButtonStyle: {
        marginBottom: height == 736 && 40 || 80,
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0,
        elevation: 8
    },
    dashBoardUserDetailsTextView: {
        flexDirection: 'row',
        width: width / 1.1,
        paddingVertical: 12,
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
        paddingHorizontal: 10,
        alignItems: 'flex-start'
    },
    dashBoardCountsViewStyle: {
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 20,
        marginHorizontal: 3,
        backgroundColor: 'white',
        width: width / 3,
        marginTop: 5,
        marginBottom: 10
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
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 7,
        width: width / 1.03,
        elevation: 8
    },
    bloodNotificationsFlatListRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        width: width / 1.03
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
        paddingVertical: 12,
        width: 100,
        elevation: 3,
        backgroundColor: 'red'
    },
    shareButtonStyle: {
        borderRadius: 25,
        paddingVertical: 12,
        width: 90,
        marginHorizontal: 10,
        elevation: 3,
        backgroundColor: 'green'
    },
    dashBoardRequestBlood: {
        borderRadius: 25,
        borderWidth: 2,
        borderColor: `black`,
        paddingVertical: 25,
        marginHorizontal: 6,
        width: width / 1.61,
        elevation: 3,
        backgroundColor: "#DE1F25"
    },
    feedBackModalView: {
        margin: 250,
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 45,
        paddingRight: 45,
        paddingBottom: 15,
        paddingLeft: 45,
        width: 370,
        height: 285,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    feedBackModalTextInput: {
        borderWidth: 2,
        borderRadius: 8,
        width: 310,
        paddingLeft: 3,
        paddingVertical: 2,
        borderBottomWidth: 1,
        height: 150,
        fontSize: 16,
        color: '#05375a'
    },
    feedBackCancelText: {
        color: 'grey',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    feedBackSubmitButton: {
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginVertical: 6,
        width: 120,
        elevation: 3,
        backgroundColor: '#fec72e'
    },
    splashScreenAnimatedImage: {
        width: 200,
        height: 200
    },
    splashScreenLoadingText: {
        color: `#fe7d32`,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: isAndroid && `normal` || `System`,
        marginTop: 30
    },
    notificationsFlatListRow: {
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        borderRadius: 12,
        backgroundColor: '#fff',
        elevation: 8
    },
    notificationsFlatListRowView: {
        borderWidth: 1,
        borderRadius: 12,
        overflow: 'hidden',
        height: 80,
        alignSelf: 'flex-start'
    },
    notificationBloodTypeText: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'red',
        padding: 4
    },
    notificationsCallStyle: {
        paddingVertical: 8,
        borderRadius: 12
    },
    homeViewContainer: {
        alignItems: 'center',
        marginTop: 67,
        flexDirection: 'column',
        marginHorizontal: 10,
        paddingVertical: 15
    },
    homeSignInButton: {
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginVertical: 15,
        width: width / 1.35,
        elevation: 3,
        backgroundColor: "#DE1F25"
    },
    homeSignUpButton: {
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: width / 1.35,
        marginVertical: 15,
        elevation: 3,
        backgroundColor: "#DE1F25"
    },
    homeRequestBloodBlood: {
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginVertical: 15,
        width: width / 1.35,
        elevation: 3,
        backgroundColor: "#DE1F25"
    },
    loader: {
        position: 'absolute',
        elevation: 5,
        backgroundColor: '#fff',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    loaderImageStyle: {
        width: 50,
        height: 50,
        backgroundColor: 'transparent'
    },
    notificationBadge: {
        height: 7,
        width: 7,
        backgroundColor: 'red',
        position: 'absolute',
        left: 18,
        borderRadius: 50
    },
    headerBackButton: {
        position: 'absolute',
        top: isIOS && 55 || 18,
        left: isIOS && 25 || 18,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        zIndex: 1,
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#fcc200',
        borderRadius: 50,
        elevation: 3
    },
    headerRequests: {
        position: 'absolute',
        right: 0
    },
    tncContainer: {
        height: height / 1.26,
        marginTop: 10,
        marginBottom: 15
    },
    tncButton: {
        backgroundColor: '#136AC7',
        borderRadius: 28,
        alignItems: 'center',
        padding: 15,
        width: width / 1.2,
        elevation: 3
    },
    tncButtonDisabled: {
        backgroundColor: '#999',
        alignItems: 'center',
        borderRadius: 28,
        padding: 15,
        width: width / 1.2,
        elevation: 3
    }
});

export const errorBoundaryStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `#fec72e`
    },
    content: {
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 15
    },
    infoIconStyle: {
        alignSelf: 'center',
        width: 60,
        height: 60
    },
    textMessage1Style: {
        fontSize: 32,
        textAlign: 'center',
    },
    textMessage2Style: {
        marginVertical: 10,
        lineHeight: 23,
        textAlign: 'center',
        fontWeight: '500',
    },
    resetButton: {
        borderRadius: 25,
        marginTop: 25,
        padding: 15,
        elevation: 3,
        backgroundColor: "#3d3d3d"
    },
    redirectButtonText: {
        color: "white",
        textAlign: "center",
        fontSize: 20
    },
    bloodGroupDropDownStyle: {
        backgroundColor: '#fafafa',
        elevation: 4
    }
})

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
    PINK: `#c08`,
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