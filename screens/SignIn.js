import React from 'react';
import { TextInput, Text, View, Image, Dimensions, KeyboardAvoidingView } from 'react-native';
import Animated from 'react-native-reanimated';
import { RVLoginUserIcon } from '../components/icons/RVLoginUserIcon';
import { RVLoginSecretIcon } from '../components/icons/RVLoginSecretIcon';
import { RVStyles } from '../styles/Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
export const SignIn = () => {
    const navigation = useNavigation();

    const { width } = Dimensions.get(`window`);
    return (
        <Animated.View style={RVStyles.signUpContainer} >
            <View style={RVStyles.signUpHeaderImage}>
                <Image source={require(`../assets/rv_home_logo.png`)} />
            </View>
            <KeyboardAvoidingView style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>SIGN IN</Text>
                <Animated.ScrollView>
                    <View style={RVStyles.userInputView}>
                        <Text style={RVStyles.userInputTextView}>Mobile Number</Text>
                        <View style={RVStyles.userInput}>
                            <RVLoginUserIcon />
                            <TextInput autoCapitalize="none" placeholder="Enter 10 digit Mobile Number"
                                keyboardType={"numeric"} style={RVStyles.signUpTextInput} placeholderTextColor="#999999" />
                        </View>
                    </View>
                    <View style={RVStyles.userPasswordInputView}>
                        <Text style={RVStyles.userInputTextView}>Password</Text>
                        <View style={RVStyles.userInput}>
                            <RVLoginSecretIcon />
                            <TextInput autoCapitalize="none" placeholder="Enter Password"
                                secureTextEntry={true} style={RVStyles.signUpTextInput} placeholderTextColor="#999999" />
                        </View>
                    </View>
                </Animated.ScrollView>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 90 }}>
                    <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center', marginTop: 50 }} colors={[`#FF00CC`, `red`]}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </Animated.View>
    )
}