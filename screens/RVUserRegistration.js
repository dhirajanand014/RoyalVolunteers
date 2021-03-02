import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useRef } from 'react';
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
import {
    displayNotificationPermissionWarning, focusOnInputIfFormInvalid,
    getRegistrationStatus, handleUserSignUpRegistration, requestNotificationPermission,
    saveRegistrationStatus
} from '../helper/Helper';
import { AuthenticatedInputText } from '../components/input/AuthenticatedInputText';
import { AuthenticatedInputPicker } from '../components/picker/AuthenticatedInputPicker';
import { AuthenticatedSelectorInput } from '../components/picker/AuthenticatedSelectorInput';
import messaging from '@react-native-firebase/messaging';
import { SignUpContext } from '../App';
import { AuthenticatedDatePicker } from '../components/input/AuthenticatedDatePicker';
export const RVUserRegistration = () => {

    const navigation = useNavigation();
    const { handleSubmit, control, formState } = useForm();
    const { setLoader } = useContext(SignUpContext);

    const route = useRoute();

    const phoneNumber = route?.params?.phoneNumber || stringConstants.EMPTY;

    const dobRef = useRef(null);
    const pincodeRef = useRef(null);

    const dobRefCallback = node => {
        dobRef.current = node;
    };
    const pincodeRefCallback = node => {
        pincodeRef.current = node;
    };

    const onSubmit = async (data) => {
        setLoader(true);
        const isEnabled = await requestNotificationPermission(messaging);
        if (!isEnabled) {
            displayNotificationPermissionWarning();
        }

        const device_token = await messaging().getToken();
        const requestData = {
            ...data,
            [miscMessage.DEVICE_TOKEN]: device_token
        }

        const isUserRegistrationComplete = await handleUserSignUpRegistration(phoneNumber, requestData, true);
        if (isUserRegistrationComplete) {
            const status = await getRegistrationStatus();
            status && saveRegistrationStatus(phoneNumber, miscMessage.REGISTERED);
            navigation.navigate(routeConsts.USER_DASHBOARD, {
                phoneNumber: phoneNumber
            });
        }
        setLoader(false);
    }

    return (
        <View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>{screenTitle.USER_REGISTRATION}</Text>
                <Animated.ScrollView>
                    <AuthenticatedInputText inputTextName={fieldTextName.NAME} inputName={fieldControllerName.NAME} control={control} rules={formRequiredRules.nameFormRule}
                        defaultValue={stringConstants.EMPTY} autofocus={true} placHol keyboardType={keyBoardTypeConst.DEFAULT} textContentType={keyBoardTypeConst.NAME}
                        formState={formState} placeHolderText={placeHolderText.NAME} onSubmitEditing={() => focusOnInputIfFormInvalid(formState, dobRef)} />

                    <AuthenticatedDatePicker inputTextName={fieldTextName.DOB} inputName={fieldControllerName.DOB} control={control} rules={formRequiredRules.dobRule} refCallback={dobRefCallback}
                        defaultValue={stringConstants.EMPTY} placeHolderText={placeHolderText.DOB} onSubmitEditing={() => focusOnInputIfFormInvalid(formState, pincodeRef)}
                        keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} formState={formState} defaultValue={stringConstants.EMPTY}
                        mode={miscMessage.DATE} dateFormat={miscMessage.DATE_PICKER_FORMAT} display={keyBoardTypeConst.DEFAULT} isFromRegistration={true} maximumDate={new Date()} />

                    <AuthenticatedInputText inputTextName={fieldTextName.PINCODE} inputName={fieldControllerName.PINCODE} control={control} rules={formRequiredRules.pinCodeRule} refCallback={pincodeRefCallback}
                        defaultValue={stringConstants.EMPTY} maxLength={numericConstants.SIX} placeHolderText={placeHolderText.PINCODE} textContentType={keyBoardTypeConst.PINCODE}
                        keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} formState={formState} />

                    <AuthenticatedInputPicker inputTextName={fieldTextName.BLOOD_GROUP} inputName={fieldControllerName.BLOOD_GROUP} control={control} rules={formRequiredRules.bloodGroupRule}
                        defaultValue={stringConstants.EMPTY} formState={formState} list={bloodGroupsList.filter(bloodGroup => bloodGroup.value != numericConstants.MINUS_ONE)} />

                    <AuthenticatedSelectorInput inputTextName={fieldTextName.AVAILABILITY_STATUS} inputName={fieldControllerName.AVAILABILITY_STATUS} control={control}
                        initial={availablilityStatusOptions.findIndex(options => options.value == miscMessage.YES)} formState={formState} hasPadding={true} options={availablilityStatusOptions}
                        fontSize={numericConstants.TWELVE} initial={numericConstants.ZERO} isFromDashBoard={false} defaultValue={miscMessage.YES} />

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