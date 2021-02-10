import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, BackHandler, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { SignUpContext } from '../App';
import { RVStyles, colors } from '../styles/Styles';
import {
    actionButtonTextConstants,
    fieldControllerName, fieldTextName, formRequiredRules,
    keyBoardTypeConst, miscMessage, numericConstants, placeHolderText,
    routeConsts, screenTitle, stringConstants
} from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import { RVLoginSecretIcon } from '../components/icons/RVLoginSecretIcon';
import {
    access_token_request_response, focusOnSecretIfFormInvalid,
    handleUserSignUpRegistration, saveRegistrationStatus, setErrorModal,
    showSnackBar
} from '../helper/Helper';
import { FormInput } from '../components/input/FormInput';
export const SignUpConfirmSecret = () => {

    const navigation = useNavigation();
    const { handleSubmit, control, setError, formState } = useForm();

    const { signUpDetails, setSignUpDetails, error, setError: setErrorMod } = useContext(SignUpContext);

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

    const navigateUser = async (data) => {
        setSignUpDetails({ ...signUpDetails, secret: data.password, registrationSuccessful: true });
        showSnackBar(miscMessage.SUCCESSFULLY_REGISTERED, true);
        await saveRegistrationStatus(signUpDetails.phoneNumber, miscMessage.VERIFIED);
        console.log(`Navigating user to registration!`);
        navigation.reset({
            index: numericConstants.ZERO, routes: [{
                name: routeConsts.USER_REGISTRATION, params: {
                    phoneNumber: signUpDetails.phoneNumber
                }
            }]
        });
    }

    const onSubmit = async (data) => {
        if (data.confirmSecret !== data.secret) {
            setError(fieldControllerName.CONFIRM_SECRET, formRequiredRules.confirmPasswordRule)
        } else if (data.confirmSecret === data.secret) {
            const phoneNumber = signUpDetails.phoneNumber;
            const isUserRegistered = await handleUserSignUpRegistration(phoneNumber, data, false);
            if (isUserRegistered) {
                const isValidRequest = await access_token_request_response(phoneNumber, data, error, setErrorMod, true);
                isValidRequest && await navigateUser(data) || setErrorModal(error, setErrorMod, `Unexpected Error`,
                    `Oops.. something went wrong`, true);
            }
        }
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
                        <Text style={RVStyles.primaryActionButtonButtonText}>{actionButtonTextConstants.PROCEED}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}