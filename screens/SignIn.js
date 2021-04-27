import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { RVPhoneIcon } from '../components/icons/RVPhoneIcon';
import messaging from '@react-native-firebase/messaging';
import { colors, RVGenericStyles, RVStyles } from '../styles/Styles';
import {
    actionButtonTextConstants, errorModalMessageConstants, errorModalTitleConstants,
    fieldControllerName, fieldTextName, formRequiredRules, keyBoardTypeConst,
    numericConstants, placeHolderText, stringConstants, isAndroid, screenTitle,
    routeConsts, miscMessage
} from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import * as Animatable from 'react-native-animatable';
import { RVLoginSecretIcon } from '../components/icons/RVLoginSecretIcon';
import { SignUpContext } from '../App';
import {
    focusOnInputIfFormInvalid, getRegistrationStatus, getSavedToken,
    saveRegistrationStatus, handleUserLogin, handleForgotPassword,
    setErrorModal, showSnackBar, validateSavedToken,
} from '../helper/Helper';
import { FormInput } from '../components/input/FormInput';
import { ErrorModal } from '../components/modals/ErrorModal';

export const SignIn = () => {
    const navigation = useNavigation();
    const { handleSubmit, control, formState, watch, trigger, clearErrors } = useForm();

    const watchMobileNumber = watch(fieldControllerName.PHONE_NUMBER);

    let secretRef = useRef(null);

    const refCallback = node => {
        secretRef.current = node;
    };

    const { error, setError, signUpDetails, setSignUpDetails, setLoader } = useContext(SignUpContext);

    const navigateUser = async (responseNavigation, data) => {
        const status = await getRegistrationStatus();
        if (!status) {
            const status = responseNavigation === routeConsts.USER_REGISTRATION && miscMessage.VERIFIED ||
                responseNavigation === routeConsts.USER_DASHBOARD && miscMessage.REGISTERED;
            saveRegistrationStatus(data.phoneNumber, status);
        }
        navigation.reset({
            index: numericConstants.ZERO, routes: [{
                name: responseNavigation, params: {
                    phoneNumber: data.phoneNumber
                }
            }]
        });
    }

    const submitDetails = async data => {
        setLoader(true);
        const responseNavigation = await handleUserLogin(data, messaging);
        if (responseNavigation === routeConsts.USER_REGISTRATION || responseNavigation === routeConsts.USER_DASHBOARD) {
            const savedToken = await getSavedToken(error, setError);
            await validateSavedToken(savedToken, data, error, setError, signUpDetails,
                setSignUpDetails, false);
            if (signUpDetails.tokenValidation == miscMessage.TOKEN_VALID) {
                navigateUser(responseNavigation, data);
                setLoader(false);
            } else {
                console.error(errorModalMessageConstants.REQUEST_IS_INVALID, signUpDetails.tokenValidation);
                setErrorModal(error, setError, errorModalMessageConstants.UNEXPECTED_ERROR,
                    errorModalMessageConstants.SOMETHING_WENT_WRONG, true);
                setLoader(false);
            }
        } else if (responseNavigation === miscMessage.INVALID_USER) {
            setErrorModal(error, setError, errorModalTitleConstants.LOGIN_FAILED,
                errorModalMessageConstants.USER_LOGIN_FAILED, true);
            showSnackBar(errorModalTitleConstants.LOGIN_FAILED, false);
            setLoader(false);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={RVStyles.headerContainer}>
                <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
                <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                    <Text style={RVStyles.signUpTextHeader}>{screenTitle.SIGN_IN}</Text>
                    <View>
                        <FormInput inputTextName={fieldTextName.MOBILE_NUMBER} inputName={fieldControllerName.PHONE_NUMBER} control={control} rules={formRequiredRules.mobileInputFormRule}
                            defaultValue={stringConstants.EMPTY} isPhoneNumberEntry={true} maxLength={numericConstants.TEN} placeHolderText={placeHolderText.PHONE_NUMBER}
                            keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} icon={<RVPhoneIcon stroke={colors.BLACK} />}
                            textContentType={keyBoardTypeConst.TELPHONETYPE} formState={formState} autofocus={true} onSubmitEditing={() => focusOnInputIfFormInvalid(formState, secretRef)} />

                        <FormInput inputTextName={fieldTextName.PASSWORD} inputName={fieldControllerName.SECRET} control={control} rules={formRequiredRules.passwordFormRule}
                            defaultValue={stringConstants.EMPTY} maxLength={numericConstants.FOUR} placeHolderText={placeHolderText.SECRET} refCallback={refCallback}
                            keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} isSecureTextEntry={true} icon={<RVLoginSecretIcon />}
                            textContentType={keyBoardTypeConst.PASSWORD} formState={formState} />
                        <View style={RVStyles.signInLinks}>
                            <View style={RVGenericStyles.fill, RVGenericStyles.alignItemsEnd}>
                                <TouchableOpacity onPress={async () => await handleForgotPassword(watchMobileNumber, navigation, trigger, error, setError, clearErrors, setLoader)}>
                                    <Text style={RVStyles.colorPink}>{actionButtonTextConstants.FORGOT_PASSWORD}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={RVStyles.signInSecondaryButtonView}>
                        <TouchableOpacity activeOpacity={.7} style={RVStyles.actionButtonStyle} onPress={handleSubmit(submitDetails)} >
                            <LinearGradient style={RVStyles.primaryActionButtonLinearGradient} colors={[colors.ORANGE, colors.RED]}>
                                <Text style={RVStyles.primaryActionButtonButtonText}>{actionButtonTextConstants.SIGN_IN}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.2} style={RVStyles.secondaryActionButtonStyle} onPress={() => navigation.navigate(routeConsts.SIGN_UP)} >
                            <Text style={RVStyles.secondaryActionButtonText}>{actionButtonTextConstants.REGISTER}</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
                <ErrorModal error={error} setError={setError} />
            </View>
        </TouchableWithoutFeedback>
    )
}