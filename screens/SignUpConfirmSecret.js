import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, Dimensions, BackHandler, Animated } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { SignUpContext } from '../App';
import { RVStyles } from '../styles/Styles';
import { formRequiredRules, stringConstants } from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import { RVLoginSecretIcon } from '../components/icons/RVLoginSecretIcon';
import { saveUserDetails } from '../helper/Helper';
import Snackbar from 'react-native-snackbar';
export const SignUpConfirmSecret = () => {

    const navigation = useNavigation();
    const { handleSubmit, control, watch, setError, formState } = useForm();

    const { width } = Dimensions.get(`window`);

    const { signUpDetails, setSignUpDetails } = useContext(SignUpContext);

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backAction);

        return () =>
            BackHandler.removeEventListener("hardwareBackPress", backAction);
    }, []);

    const backAction = () => {
        navigation.navigate(`Home`);
        setSignUpDetails({ ...signUpDetails, phoneNumber: ``, secret: ``, registrationSuccessful: false });
        return true;
    }

    const onSubmit = async (data) => {
        const password = data.password;
        const confirmedPassword = data.confirmPassword;
        debugger
        if (formState.isValid || password === confirmedPassword) {
            const { phoneNumber } = signUpDetails
            const response = await saveUserDetails(phoneNumber, password);
            if (response) {
                signUpDetails.secret = password;
                signUpDetails.registrationSuccessful = true;
                const isSaved = await setSignUpDetails({ ...signUpDetails });
                if (isSaved) {
                    Snackbar.show({ text: 'Registration successful', duration: Snackbar.LENGTH_SHORT });
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                    });
                }
            }
            return;
        }

        confirmedPassword && confirmedPassword !== password && setError('confirmPassword', {
            type: `mismatch`,
            message: `Passwords do not match`
        })
    };

    return (
        <Animated.View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <View style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>ENTER PASSWORD</Text>
                <Animated.ScrollView>
                    <View style={RVStyles.userInputView}>
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
                    <View style={RVStyles.userInputView}>
                        <Text style={RVStyles.userInputTextView}>Confirm Password</Text>
                        <View style={RVStyles.userInput}>
                            <RVLoginSecretIcon />
                            <Controller name={"confirmPassword"} control={control} defaultValue={``} rules={formRequiredRules.passwordFormRule}
                                render={(props) => {
                                    return (
                                        <React.Fragment>
                                            <TextInput {...props} maxLength={1000} value={props.value} autoCapitalize="none" secureTextEntry
                                                placeholder="Confirm Password" keyboardType={"default"} style={RVStyles.signUpTextInput} placeholderTextColor="#999999"
                                                onChangeText={(value) => props.onChange(value)} />
                                        </React.Fragment>
                                    )
                                }} />
                        </View>
                        <Text style={{ color: 'red' }}>{formState.errors.confirmPassword?.message}</Text>
                    </View>
                </Animated.ScrollView>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 60, elevation: 8 }} onPress={handleSubmit(onSubmit)} >
                    <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center', marginTop: 50 }} colors={[`#FF00CC`, `red`]}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Proceed</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}