import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { RVPhoneIcon } from '../components/icons/RVPhoneIcon';
import { colors, RVStyles } from '../styles/Styles';
import {
    actionButtonTextConstants, errorModalMessageConstants, errorModalTitleConstants,
    fieldControllerName, fieldTextName, formRequiredRules, keyBoardTypeConst,
    numericConstants, placeHolderText, stringConstants, isAndroid, screenTitle, routeConsts
} from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import * as Animatable from 'react-native-animatable';
import { RVLoginSecretIcon } from '../components/icons/RVLoginSecretIcon';
import { SignUpContext } from '../App';
import { focusOnSecretIfFormInvalid, handleUserLogin, setErrorModal, showSnackBar } from '../helper/Helper';
import { FormInput } from '../components/input/FormInput';
import { LoginUnsuccessful } from '../components/modals/LoginUnsuccessful';

export const SignIn = props => {
    const navigation = useNavigation();
    const { handleSubmit, control, formState } = useForm();

    let secretRef = useRef(null);

    const refCallback = node => {
        secretRef.current = node;
    };


    const { error, setError } = useContext(SignUpContext);

    const submitDetails = async data => {
        const responseNavigation = await handleUserLogin(data);
        if (responseNavigation === `RVUserRegistration` || responseNavigation === `RVUserDashboard`) {
            navigation.navigate(responseNavigation, {
                phoneNumber: data.phoneNumber
            })
        } else if (responseNavigation === `invalidUser`) {
            setErrorModal(error, setError, errorModalTitleConstants.LOGIN_FAILED, errorModalMessageConstants.USER_LOGIN_FAILED, true);
            showSnackBar(errorModalTitleConstants.LOGIN_FAILED, false);
        }
    }

    return (
        <View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>{screenTitle.SIGN_IN}</Text>
                <Animated.ScrollView>
                    <FormInput inputTextName={fieldTextName.MOBILE_NUMBER} inputName={fieldControllerName.PHONE_NUMBER} control={control} rules={formRequiredRules.mobileInputFormRule}
                        defaultValue={stringConstants.EMPTY} isPhoneNumberEntry={true} maxLength={numericConstants.TEN} placeHolderText={placeHolderText.PHONE_NUMBER}
                        keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} icon={<RVPhoneIcon />}
                        textContentType={keyBoardTypeConst.TELPHONETYPE} formState={formState} autofocus={true} onSubmitEditing={(event) => focusOnSecretIfFormInvalid(formState, secretRef)} />

                    <FormInput inputTextName={fieldTextName.PASSWORD} inputName={fieldControllerName.SECRET} control={control} rules={formRequiredRules.passwordFormRule}
                        defaultValue={stringConstants.EMPTY} maxLength={numericConstants.THOUSAND} placeHolderText={placeHolderText.SECRET} refCallback={refCallback}
                        keyboardType={keyBoardTypeConst.DEFAULT} isSecureTextEntry={true} icon={<RVLoginSecretIcon />} textContentType={keyBoardTypeConst.PASSWORD} formState={formState} />
                    <View style={RVStyles.signInLinks}>
                        <View style={RVStyles.signInForgotPassword}>
                            <TouchableOpacity style={RVStyles.signInForgotPasswordLink}>
                                <Text style={RVStyles.signInForgotPasswordText}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.ScrollView>
                <View style={RVStyles.signInSecondaryButtonView}>
                    <TouchableOpacity activeOpacity={.7} style={RVStyles.actionButtonStyle} onPress={handleSubmit(submitDetails)} >
                        <LinearGradient style={RVStyles.primaryActionButtonLinearGradient} colors={[colors.ORANGE, colors.RED]}>
                            <Text style={RVStyles.primaryActionButtonButtonText}>{actionButtonTextConstants.SIGN_IN}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.2} style={RVStyles.secondaryActionButtonStyle} onPress={() => navigation.navigate(routeConsts.SIGN_UP)} >
                        <Text style={RVStyles.secondaryActionButtonText}>{actionButtonTextConstants.SIGN_UP}</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            <LoginUnsuccessful error={error} setError={setError} />
        </View >
    )
}