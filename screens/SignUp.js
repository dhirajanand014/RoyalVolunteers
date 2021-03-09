import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as Animatable from 'react-native-animatable';
import { Text, View, Animated, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { RVPhoneIcon } from '../components/icons/RVPhoneIcon';
import { SignUpContext } from '../App';
import { RVStyles, colors } from '../styles/Styles';
import {
    actionButtonTextConstants, fieldControllerName, fieldTextName,
    formRequiredRules, keyBoardTypeConst, numericConstants,
    placeHolderText, stringConstants, screenTitle, isAndroid, miscMessage
} from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import { handleUserSignUpOtp } from '../helper/Helper';
import { FormInput } from '../components/input/FormInput';
export const SignUp = () => {

    const navigation = useNavigation();

    const route = useRoute();

    const { handleSubmit, control, formState } = useForm();

    const isFrom = route?.params?.isFrom;

    const { signUpDetails, setSignUpDetails, setLoader } = useContext(SignUpContext);
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Animated.View style={RVStyles.headerContainer}>
                <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
                <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                    <Text style={RVStyles.signUpTextHeader}>   {
                        isFrom == miscMessage.BLOOD_REQUEST && screenTitle.ENTER_MOBILE_NUMBER || screenTitle.SIGN_UP}
                    </Text>
                    <FormInput inputTextName={fieldTextName.MOBILE_NUMBER} inputName={fieldControllerName.PHONE_NUMBER} control={control} rules={formRequiredRules.mobileInputFormRule}
                        defaultValue={stringConstants.EMPTY} isPhoneNumberEntry={true} maxLength={numericConstants.TEN} placeHolderText={placeHolderText.PHONE_NUMBER} isSignUp={true}
                        keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} icon={<RVPhoneIcon stroke={colors.BLACK} />} textContentType={keyBoardTypeConst.TELPHONETYPE} formState={formState}
                        setSignUpDetails={setSignUpDetails} signUpDetails={signUpDetails} autofocus={true} />
                    <View style={RVStyles.signUpPrimaryButtonView}>
                        <Text style={RVStyles.signUpDescription}>{placeHolderText.SIGN_UP_DESCRIPTION}</Text>
                        <TouchableOpacity activeOpacity={.7} style={RVStyles.signUpActionButton} onPress={handleSubmit(() =>
                            handleUserSignUpOtp(signUpDetails, isFrom, navigation, false, setLoader))}>
                            <LinearGradient style={RVStyles.signUpActionButtonGradient} colors={[colors.ORANGE, colors.RED]}>
                                <Text style={RVStyles.primaryActionButtonButtonText}>{actionButtonTextConstants.PROCEED}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}