import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, BackHandler, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { SignUpContext } from '../App';
import { RVStyles, colors } from '../styles/Styles';
import {
    fieldControllerName, fieldTextName, formRequiredRules,
    keyBoardTypeConst, miscMessage, numericConstants, placeHolderText,
    routeConsts, screenTitle, stringConstants, successFulMessages,
    actionButtonTextConstants, errorModalMessageConstants
} from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import { RVLoginSecretIcon } from '../components/icons/RVLoginSecretIcon';
import {
    access_token_request_response, focusOnSecretIfFormInvalid,
    handleUserSignUpRegistration, resetTokens, saveRegistrationStatus, setErrorModal,
    showSnackBar
} from '../helper/Helper';
import { FormInput } from '../components/input/FormInput';
export const SignUpConfirmSecret = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const isFrom = route?.params?.isFrom;

    const { handleSubmit, control, setError, formState } = useForm();

    const { signUpDetails, setSignUpDetails, error, setLoader, setError: setErrorMod } = useContext(SignUpContext);

    useEffect(() => {
        BackHandler.addEventListener(miscMessage.HARDWARE_BACK_PRESS, signUpSecretBackAction);

        return () =>
            BackHandler.removeEventListener(miscMessage.HARDWARE_BACK_PRESS, signUpSecretBackAction);
    }, []);

    let confirmSecretRef = useRef(null);

    const refCallback = node => {
        confirmSecretRef.current = node;
    };

    const signUpSecretBackAction = () => {
        navigation.navigate(routeConsts.HOME);
        setSignUpDetails({
            ...signUpDetails,
            phoneNumber: stringConstants.EMPTY,
            secret: stringConstants.EMPTY,
            registrationSuccessful: false
        });
        return true;
    }

    const navigateUser = async (data, isFromForgotPassword) => {
        if (!isFromForgotPassword) {
            setSignUpDetails({ ...signUpDetails, secret: data.password, registrationSuccessful: true });
            showSnackBar(successFulMessages.SUCCESSFULLY_REGISTERED, true);
            await saveRegistrationStatus(signUpDetails.phoneNumber, miscMessage.VERIFIED);
            navigation.reset({
                index: numericConstants.ZERO, routes: [{
                    name: routeConsts.USER_REGISTRATION, params: {
                        phoneNumber: signUpDetails.phoneNumber
                    }
                }]
            });
        } else {
            showSnackBar(successFulMessages.SUCCESSFULLY_RESET_PASSWORD, true);
            navigation.reset({
                index: numericConstants.ZERO, routes: [{ name: routeConsts.HOME }]
            });
        }
    }

    const onSubmit = async (data) => {
        setLoader(true);
        if (data.confirmSecret !== data.secret) {
            setError(fieldControllerName.CONFIRM_SECRET, formRequiredRules.confirmPasswordRule)
        } else if (data.confirmSecret === data.secret) {
            const phoneNumber = isFrom == miscMessage.FORGOT_PASSWORD && route?.params?.phoneNumber || signUpDetails.phoneNumber;
            const registrationResponse = await handleUserSignUpRegistration(phoneNumber, data, false, isFrom);
            if (registrationResponse) {
                let isSuccess;
                let isFromForgotPassword = false;
                if (registrationResponse == `${miscMessage.RESET}_${miscMessage.SUCCESSFUL}`) {
                    isSuccess = await resetTokens(error, setErrorMod);
                    isFromForgotPassword = true;
                } else {
                    isSuccess = await access_token_request_response(phoneNumber, data, error, setErrorMod, true);
                    isFromForgotPassword = false;
                }
                isSuccess && await navigateUser(data, isFromForgotPassword) || setErrorModal(error, setErrorMod, errorModalMessageConstants.UNEXPECTED_ERROR,
                    errorModalMessageConstants.SOMETHING_WENT_WRONG, true);
            }
        }
        setLoader(false);
    };

    return (
        <Animated.View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <View style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>{screenTitle.ENTER_PASSWORD}</Text>
                <Animated.ScrollView>
                    <FormInput inputTextName={fieldTextName.PASSWORD} inputName={fieldControllerName.SECRET} control={control} rules={formRequiredRules.passwordFormRule}
                        defaultValue={stringConstants.EMPTY} placeHolderText={placeHolderText.SECRET} textContentType={keyBoardTypeConst.PASSWORD}
                        keyboardType={keyBoardTypeConst.DEFAULT} icon={<RVLoginSecretIcon />} formState={formState} maxLength={numericConstants.THOUSAND}
                        autofocus={true} isSecureTextEntry={true} onSubmitEditing={(event) => focusOnSecretIfFormInvalid(formState, confirmSecretRef)} />

                    <FormInput inputTextName={fieldTextName.CONFIRM_PASSWORD} inputName={fieldControllerName.CONFIRM_SECRET} control={control} rules={formRequiredRules.passwordFormRule}
                        defaultValue={stringConstants.EMPTY} placeHolderText={placeHolderText.CONFIRM_PASSWORD} textContentType={keyBoardTypeConst.PASSWORD} isSecureTextEntry={true}
                        keyboardType={keyBoardTypeConst.DEFAULT} icon={<RVLoginSecretIcon />} formState={formState} maxLength={numericConstants.THOUSAND} refCallback={refCallback} />
                </Animated.ScrollView>
                <TouchableOpacity activeOpacity={.7} style={RVStyles.signUpConfirmSecretGradient} onPress={handleSubmit(onSubmit)} >
                    <LinearGradient style={RVStyles.signUpActionButtonGradient} colors={[colors.ORANGE, colors.RED]}>
                        <Text style={RVStyles.primaryActionButtonButtonText}>{isFrom == miscMessage.FORGOT_PASSWORD &&
                            actionButtonTextConstants.RESET_PASSWORD || actionButtonTextConstants.PROCEED}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}