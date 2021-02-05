import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { RVStyles } from '../styles/Styles';
import {
    bloodGroupsList, fieldControllerName, fieldTextName,
    formRequiredRules, isAndroid, isIOS, keyBoardTypeConst,
    miscMessage,
    neededOptions, numericConstants, placeHolderText,
    screenTitle, stringConstants, width
} from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import * as Animatable from 'react-native-animatable';
import { SignUpContext } from '../App';
import { AuthenticatedInputPicker } from '../components/picker/AuthenticatedInputPicker';
import { AuthenticatedInputText } from '../components/input/AuthenticatedInputText';
import { NeededRadioOptions } from '../components/view/NeededRadioOptions';
import { RVDatePickerView } from '../components/view/RVDatePickerView';
export const RVBloodRequest = () => {

    const navigation = useNavigation();
    const { handleSubmit, control, formState } = useForm();

    const { requestForm, setRequestForm } = useContext(SignUpContext);

    const onSubmit = async (data) => {
        if (formState.isValid) {
            navigation.navigate('SignUp', {
                isFromRequestForm: true
            })
        }
    };

    return (
        <View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>{screenTitle.REQUEST_FOR_BLOOD}</Text>
                <Animated.ScrollView>
                    <AuthenticatedInputPicker inputTextName={fieldTextName.BLOOD_GROUP} inputName={fieldControllerName.BLOOD_GROUP} control={control} rules={formRequiredRules.bloodGroupRule}
                        defaultValue={stringConstants.EMPTY} formState={formState} list={bloodGroupsList} requestForm={requestForm} setRequestForm={setRequestForm} isFromBloodRequestForm={true} />

                    <AuthenticatedInputText inputTextName={fieldTextName.PINCODE} inputName={fieldControllerName.PINCODE} control={control} rules={formRequiredRules.pinCodeRule}
                        defaultValue={stringConstants.EMPTY} maxLength={numericConstants.SIX} placeHolderText={placeHolderText.PINCODE} requestForm={requestForm} setRequestForm={setRequestForm}
                        isFromBloodRequestForm={true} keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} formState={formState} />

                    <NeededRadioOptions inputTextName={fieldTextName.NEEDED_OPTIONS} defaultValue={stringConstants.EMPTY} maxLength={numericConstants.SIX} requestForm={requestForm}
                        setRequestForm={setRequestForm} formState={formState} neededOptions={neededOptions} />

                    <RVDatePickerView inputName={fieldControllerName.DATE_PICKER} control={control} rules={formRequiredRules.datePickerFormRule} minimumDate={Date.now()}
                        defaultValue={stringConstants.EMPTY} requestForm={requestForm} setRequestForm={setRequestForm}
                        isFromBloodRequestForm={true} formState={formState} mode={miscMessage.DATE} dateFormat={miscMessage.DATE_PICKER_FORMAT} display={`default`} />

                    <AuthenticatedInputText inputTextName={fieldTextName.HOSPITAL_NAME} inputName={fieldControllerName.HOSPITAL_NAME} control={control} rules={formRequiredRules.hospitalNameFormRule}
                        defaultValue={stringConstants.EMPTY} placeHolderText={placeHolderText.HOSPITAL_NAME} requestForm={requestForm} setRequestForm={setRequestForm}
                        isFromBloodRequestForm={true} formState={formState} multiline={true} underlineColorAndroid={miscMessage.TRANSPARENT} numberOfLines={numericConstants.TWO} />
                </Animated.ScrollView>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: `column`, alignItems: 'center', marginBottom: 50, elevation: 8 }} onPress={handleSubmit(onSubmit)} >
                    <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center' }} colors={[`#FF00CC`, `red`]}>
                        <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Request</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animatable.View>
        </View >
    )
}