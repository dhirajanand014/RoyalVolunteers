import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import { RVPhoneIcon } from '../components/icons/RVPhoneIcon';
import { onChangeInput } from '../helper/Helper';
import { RVStyles } from '../styles/Styles';
export const SignUp = () => {

    const navigation = useNavigation();

    const { width, height } = Dimensions.get(`window`);

    const [signUpDetails, setSignUpDetails] = useState({
    });

    return (
        <Animated.View style={RVStyles.signUpContainer}>
            <View style={RVStyles.signUpHeaderImage}>
                <Image source={require(`../assets/rv_home_logo.png`)} />
            </View>
            <View style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>SIGN UP</Text>
                <Animated.ScrollView>
                    <View style={RVStyles.userInputView}>
                        <Text style={RVStyles.userInputTextView}>Mobile Number</Text>
                        <View style={RVStyles.userInput}>
                            <RVPhoneIcon />
                            <TextInput autoCapitalize="none" placeholder="Enter 10 digit Mobile Number"
                                keyboardType={"numeric"} style={RVStyles.signUpTextInput} placeholderTextColor="#999999" />
                        </View>
                    </View>
                </Animated.ScrollView>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 150 }}>
                    <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center', marginTop: 50 }} colors={[`#FF00CC`, `red`]}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Proceed</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}