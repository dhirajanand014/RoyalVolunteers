import React, { useState, useEffect, useRef } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { onChangeInputDirect } from '../helper/Helper';
import { RVStyles } from '../styles/Styles';
export const RegistrationOTPInput = () => {

    let inputOTPRef = useRef(null);

    const lengthInput = 6;

    useEffect(() => {
        inputOTPRef.focus();
    }, []);

    const [intervalOTP, setIntervalOTP] = useState(``);

    return (
        <View style={RVStyles.container}>
            <KeyboardAvoidingView keyboardVerticalOffset={50} behavior={"padding"} style={{ alignItems: 'center' }}>
                <Text style={{ marginTop: 50, marginBottom: 50, fontSize: 16 }}>Input your OTP code sent via SMS</Text>
                <View>
                    <TextInput ref={(input) => inputOTPRef = input} style={{ height: 0, width: 0 }} value={intervalOTP}
                        returnKeyType={"done"} keyboardType={"numeric"}
                        onChangeText={(value) => onChangeInputDirect(value, setIntervalOTP)} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    {
                        Array(lengthInput).fill().map((data, index) => {
                            return (<View key={index} style={[{
                                paddingVertical: 11, width: 40, margin: 5, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 1.5
                            }, { borderBottomColor: intervalOTP && index === intervalOTP.length && `#FB6C6A` || `#234DB7` }]}>
                                <TextInput ref={(input) => inputOTPRef = input} value={intervalOTP}
                                    returnKeyType={"done"} keyboardType={"numeric"}
                                    onChangeText={(value) => onChangeInputDirect(value, setIntervalOTP)} />
                            </View>)
                        })
                    }
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>

                </View>
            </KeyboardAvoidingView>
        </View>
    )
}