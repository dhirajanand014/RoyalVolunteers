import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, Dimensions, Animated, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { RVPhoneIcon } from '../components/icons/RVPhoneIcon';
import { RVStyles } from '../styles/Styles';
import { formRequiredRules } from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import * as Animatable from 'react-native-animatable';
import CheckBox from '@react-native-community/checkbox';
import { RVLoginSecretIcon } from '../components/icons/RVLoginSecretIcon';
import { SignUpContext } from '../App';
import { handleUserLogin } from '../helper/Helper';
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
                            <Controller name={"phoneNumber"} control={control} defaultValue={``} rules={formRequiredRules.mobileInputFormRule}
                                render={(props) => {
                                    return (
                                        <React.Fragment>
                                            <Text style={RVStyles.mobileCountryCode}>+91</Text>
                                            <TextInput {...props} maxLength={10} value={props.value} autoCapitalize="none"
                                                placeholder="Enter 10 digit Mobile Number"
                                                keyboardType={"number-pad"} style={RVStyles.signUpTextInput} placeholderTextColor="#999999"
                                                onChangeText={(value) => props.onChange(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''))} />
                                        </React.Fragment>
                                    )
                                }} />
                        </View>
                        <Text style={{ color: 'red' }}>{formState.errors.phoneNumber?.message}</Text>
                    </View>
                    <View style={RVStyles.signInUserInputView}>
                        <Text style={RVStyles.userInputTextView}>Password</Text>
                        <View style={RVStyles.userInput}>
                            <RVLoginSecretIcon />
                            <Controller name={"password"} control={control} defaultValue={``} rules={formRequiredRules.passwordFormRule}
                                render={(props) => {
                                    return (
                                        <React.Fragment>
                                            <TextInput {...props} maxLength={1000} value={props.value} autoCapitalize="none" secureTextEntry rules={formRequiredRules.passwordFormRule}
                                                placeholder="Enter Password" keyboardType={"default"} style={RVStyles.signUpTextInput} placeholderTextColor="#999999"
                                                onChangeText={(value) => props.onChange(value)} />
                                        </React.Fragment>
                                    )
                                }} />
                        </View>
                        <Text style={{ color: 'red' }}>{formState.errors.password?.message}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 8 }} >
                        <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'flex-start' }}>
                            <CheckBox style={{ width: 20, height: 20, borderColor: `#aaaaa` }} />
                            <Text style={{ marginHorizontal: 19, marginLeft: 10 }}>Remember Password</Text>
                        </View>
                        <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                            <TouchableOpacity style={{ flex: 0.5 }}>
                                <Text style={{ color: `#c08` }}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.ScrollView>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: `column`, alignItems: 'center', elevation: 8 }} onPress={handleSubmit(async data => {
                    const responseNavigation = await handleUserLogin(data);
                    debugger
                    if (responseNavigation === `RVUserRegistration` || responseNavigation === `RVUserDashboard`)
                        navigation.navigate(responseNavigation, {
                            phoneNumber: phoneNumber
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
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: `column`, alignItems: 'center', marginBottom: 30, elevation: 8 }} onPress={() => navigation.navigate(`SignUp`)} >
                    <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center', marginTop: 20 }} colors={[`#FF00CC`, `red`]}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Sign Up</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animatable.View>
        </View >
    )
}