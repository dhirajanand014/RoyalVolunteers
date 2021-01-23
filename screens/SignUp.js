import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Animatable from 'react-native-animatable';
import { Text, View, Dimensions, Animated } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { RVPhoneIcon } from '../components/icons/RVPhoneIcon';
import { SignUpContext } from '../App';
import { RVStyles } from '../styles/Styles';
import { formRequiredRules } from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import { getSignUpParams, handleUserSignUpOtp } from '../helper/Helper';
export const SignUp = () => {

    const navigation = useNavigation();

    const route = useRoute();

    const { handleSubmit, control, formState } = useForm();

    const { width } = Dimensions.get(`window`);

    const isFromBloodRequestForm = route?.params?.isFromRequestForm;

    const { signUpDetails, setSignUpDetails } = useContext(SignUpContext);
    return (
        <Animated.View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>   {
                    isFromBloodRequestForm && `ENTER MOBILE NUMBER` || `SIGN UP`}
                </Text>
                <Animated.ScrollView>
                    <View style={RVStyles.userInputView}>
                        <Text style={RVStyles.userInputTextView}>Mobile Number</Text>
                        <View style={RVStyles.userInput}>
                            <RVPhoneIcon />
                            <Controller name={"phoneNumber"} control={control} defaultValue={``} rules={formRequiredRules.mobileInputFormRule}
                                render={(props) => {
                                    return (
                                        <React.Fragment>
                                            <Text style={RVStyles.mobileCountryCode}>+91</Text>
                                            <TextInput {...props} maxLength={10} value={signUpDetails.phoneNumber} autoCapitalize="none"
                                                placeholder="Enter 10 digit Mobile Number"
                                                keyboardType={"number-pad"} style={RVStyles.signUpTextInput} placeholderTextColor="#999999"
                                                onChangeText={(value) => {
                                                    props.onChange(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''));
                                                    setSignUpDetails({ ...signUpDetails, phoneNumber: value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
                                                }} />
                                        </React.Fragment>
                                    )
                                }} />
                        </View>
                        <Text style={{ color: 'red' }}>{formState.errors.phoneNumber?.message}</Text>
                    </View>
                </Animated.ScrollView>
                <View>
                    <Text style={RVStyles.signUpDescription}>We will send you a verification code to your phone</Text>
                </View>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 120, elevation: 8 }} onPress={handleSubmit(data => {
                    handleUserSignUpOtp(signUpDetails, setSignUpDetails, isFromBloodRequestForm, navigation);
                })} >
                    <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center', marginTop: 50 }} colors={[`#FF00CC`, `red`]}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Proceed</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animatable.View >
        </Animated.View>
    )
}