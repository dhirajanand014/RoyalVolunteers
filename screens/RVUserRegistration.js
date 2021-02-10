import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { colors, RVStyles } from '../styles/Styles';
import {
    availablilityStatusOptions, bloodGroupsList, fieldControllerName,
    fieldTextName, formRequiredRules, screenTitle, stringConstants,
    keyBoardTypeConst, numericConstants, isAndroid, placeHolderText,
    actionButtonTextConstants, routeConsts, miscMessage
} from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import * as Animatable from 'react-native-animatable';
import { getRegistrationStatus, handleUserSignUpRegistration, saveRegistrationStatus } from '../helper/Helper';
import { AuthenticatedInputText } from '../components/input/AuthenticatedInputText';
import { AuthenticatedInputPicker } from '../components/picker/AuthenticatedInputPicker';
import { AuthenticatedSelectorInput } from '../components/picker/AuthenticatedSelectorInput';
export const RVUserRegistration = () => {

    const navigation = useNavigation();
    const { handleSubmit, control, formState } = useForm();

    const route = useRoute();

    const phoneNumber = route?.params?.phoneNumber || stringConstants.EMPTY;

    const onSubmit = async (data) => {
        const isUserRegistrationComplete = await handleUserSignUpRegistration(phoneNumber, data, true);
        if (isUserRegistrationComplete) {
            const status = await getRegistrationStatus();
            status && saveRegistrationStatus(phoneNumber, miscMessage.REGISTERED);
            navigation.navigate(routeConsts.USER_DASHBOARD, {
                phoneNumber: phoneNumber
            });
        }
    }

    return (
        <View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>{screenTitle.USER_REGISTRATION}</Text>
                <Animated.ScrollView>
                    <AuthenticatedInputText inputTextName={fieldTextName.NAME} inputName={fieldControllerName.NAME} control={control} rules={formRequiredRules.nameFormRule}
                        defaultValue={stringConstants.EMPTY} autofocus={true} placHol keyboardType={keyBoardTypeConst.DEFAULT} textContentType={keyBoardTypeConst.NAME}
                        formState={formState} placeHolderText={placeHolderText.NAME} />

                    <AuthenticatedInputText inputTextName={fieldTextName.AGE} inputName={fieldControllerName.AGE} control={control} rules={formRequiredRules.ageRule}
                        defaultValue={stringConstants.EMPTY} maxLength={numericConstants.THREE} placeHolderText={placeHolderText.AGE}
                        keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} formState={formState} />

                    <AuthenticatedInputText inputTextName={fieldTextName.PINCODE} inputName={fieldControllerName.PINCODE} control={control} rules={formRequiredRules.pinCodeRule}
                        defaultValue={stringConstants.EMPTY} maxLength={numericConstants.SIX} placeHolderText={placeHolderText.PINCODE}
                        keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} formState={formState} />

                    <AuthenticatedInputPicker inputTextName={fieldTextName.BLOOD_GROUP} inputName={fieldControllerName.BLOOD_GROUP} control={control} rules={formRequiredRules.bloodGroupRule}
                        defaultValue={stringConstants.EMPTY} formState={formState} list={bloodGroupsList} />

                    <AuthenticatedSelectorInput inputTextName={fieldTextName.AVAILABILITY_STATUS} inputName={fieldControllerName.AVAILABILITY_STATUS} control={control}
                        defaultValue={availablilityStatusOptions.findIndex(options => options.value == miscMessage.YES)} formState={formState} hasPadding={true} options={availablilityStatusOptions}
                        fontSize={numericConstants.TWELVE} initial={numericConstants.ZERO} isFromDashBoard={false} />

                </Animated.ScrollView>
                <View style={RVStyles.userRegistrationSubmitButton}>
                    <TouchableOpacity activeOpacity={.7} style={RVStyles.actionButtonStyle} onPress={handleSubmit(onSubmit)} >
                        <LinearGradient style={RVStyles.primaryActionButtonLinearGradient} colors={[colors.ORANGE, colors.RED]}>
                            <Text style={RVStyles.primaryActionButtonButtonText}>{actionButtonTextConstants.SUBMIT}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}