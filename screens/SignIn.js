import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, Dimensions, Animated, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { RVPhoneIcon } from '../components/icons/RVPhoneIcon';
import { RVStyles } from '../styles/Styles';
import { fieldControllerName, formRequiredRules, keyBoardTypeConst, numericConstants, placeHolderText, stringConstants, valueTypeConstants } from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import * as Animatable from 'react-native-animatable';
import CheckBox from '@react-native-community/checkbox';
import { RVLoginSecretIcon } from '../components/icons/RVLoginSecretIcon';
import { SignUpContext } from '../App';
import { handleUserLogin } from '../helper/Helper';
import { ImageFormTextInput } from '../components/input/ImageFormTextInput';
export const SignIn = () => {

    const navigation = useNavigation();
    const { handleSubmit, control, formState } = useForm();

    const { width } = Dimensions.get(`window`);

    const { error, setError } = useContext(SignUpContext);

    return (
        <View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>SIGN IN</Text>
                <Animated.ScrollView>
                    <View style={RVStyles.signInUserInputView}>
                        <Text style={RVStyles.userInputTextView}>Mobile Number</Text>
                        <View style={RVStyles.userInput}>
                            <RVPhoneIcon />
                            <ImageFormTextInput inputName={fieldControllerName.PHONE_NUMBER} control={control} rules={formRequiredRules.mobileInputFormRule}
                                defaultValue={stringConstants.EMPTY} isPhoneNumberEntry={true} maxLength={numericConstants.TEN} placeHolderText={placeHolderText.PHONE_NUMBER}
                                keyboardType={keyBoardTypeConst.NUMBER_PAD} valueType={valueTypeConstants.REPLACE} />
                        </View>
                        <Text style={{ color: 'red' }}>{formState.errors.phoneNumber?.message}</Text>
                    </View>
                    <View style={RVStyles.signInUserInputView}>
                        <Text style={RVStyles.userInputTextView}>Password</Text>
                        <View style={RVStyles.userInput}>
                            <RVLoginSecretIcon />
                            <ImageFormTextInput inputName={fieldControllerName.SECRET} control={control} rules={formRequiredRules.passwordFormRule}
                                defaultValue={stringConstants.EMPTY} maxLength={numericConstants.THOUSAND} placeHolderText={placeHolderText.SECRET}
                                keyboardType={keyBoardTypeConst.DEFAULT} isSecureTextEntry={true} />
                        </View>
                        <Text style={{ color: 'red' }}>{formState.errors.secret?.message}</Text>
                    </View>
                    <View style={RVStyles.signInLinks} >
                        <View style={RVStyles.signInRememberPassword}>
                            <CheckBox style={RVStyles.signInRememberPasswordLink} />
                            <Text style={RVStyles.signInRememberPasswordText}>Remember Password</Text>
                        </View>
                        <View style={RVStyles.signInForgotPassword}>
                            <TouchableOpacity style={RVStyles.signInForgotPasswordLink}>
                                <Text style={RVStyles.signInForgotPasswordText}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.ScrollView>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: `column`, alignItems: 'center', elevation: 8 }} onPress={handleSubmit(async data => {
                    const responseNavigation = await handleUserLogin(data);
                    if (responseNavigation === `RVUserRegistration` || responseNavigation === `RVUserDashboard`)
                        navigation.navigate(responseNavigation, {
                            phoneNumber: data.phoneNumber
                        })
                    else if (responseNavigation === `invalidUser`)
                        return (
                            Alert.alert(
                                'Login failed',
                                'Invald credentials',
                                [
                                    {
                                        text: 'Cancel',
                                        style: 'cancel'
                                    },
                                    { text: 'OK' }
                                ],
                                { cancelable: false }
                            ));
                })} >
                    <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center' }} colors={[`#FF00CC`, `red`]}>
                        <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: `column`, alignItems: 'center', marginBottom: 30, elevation: 8 }} onPress={() => navigation.navigate(`SignUp`)} >
                    <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center', marginTop: 20 }} colors={[`#FF00CC`, `red`]}>
                        <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Sign Up</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animatable.View>
        </View >
    )
}