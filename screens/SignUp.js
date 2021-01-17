import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import SvgUri from 'react-native-svg-uri';
import { onChangeInput } from '../helper/Helper';
import { RVStyles } from '../styles/Styles';
export const SignUp = () => {

    const navigation = useNavigation();

    const [signUpDetails, setSignUpDetails] = useState({
        phoneNumber: 0
    });
    console.log(signUpDetails.phoneNumber.toString.length)
    return (
        <View style={RVStyles.container}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behavior={'padding'}
                style={{
                    alignItems: 'center'
                }}>
                <Text style={{ fontSize: 28, lineHeight: 30, textAlign: 'center', color: `#0C0D34` }}>Welcome</Text>
                <Text style={{ marginBottom: 50, marginTop: 20, fontSize: 15, color: `#0C0D34` }}>Please enter the below details</Text>

                <View style={{
                    flexDirection: 'row', alignSelf: 'center', marginHorizontal: 55, borderWidth: 2, marginVertical: 20,
                    paddingHorizontal: 10, borderRadius: 23, borderColor: '#999999', paddingVertical: 2
                }}>
                    <TextInput placeholder={"Enter Mobile Number"} value={signUpDetails.phoneNumber}
                        maxLength={10} onChangeText={(value) =>
                            onChangeInput('phoneNumber', value, signUpDetails, setSignUpDetails)}
                        keyboardType={"numeric"} style={{ paddingHorizontal: 10, width: 200, textAlign: 'center' }} />
                </View>
                {

                    signUpDetails.phoneNumber.toString().length == 10 &&
                    navigation.navigate(`RegistrationOTPInput`)
                }
            </KeyboardAvoidingView>

        </View >
    )
}