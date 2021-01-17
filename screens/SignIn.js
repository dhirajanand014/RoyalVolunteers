import React from 'react';
import { TextInput, Text, View } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { RVStyles } from '../styles/Styles';
export const SignIn = () => {
    return (
        <View style={RVStyles.container}>
            <View style={{
                marginHorizontal: 50
            }}>
                <Text style={{ fontSize: 28, lineHeight: 30, textAlign: 'center', color: `#0C0D34` }}>Welcome</Text>
                <Text style={{ marginTop: 15, fontSize: 16, lineHeight: 24, textAlign: 'center', color: `#0C0D34` }}>Use your credentials below to login to your account</Text>

                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginHorizontal: 55, borderWidth: 2, marginTop: 50,
                    paddingHorizontal: 10, borderRadius: 23, borderColor: '#999999', paddingVertical: 2
                }}>
                    <TextInput placeholder={"Enter Mobile Number"} style={{ paddingHorizontal: 10, width: 200, textAlign: 'center' }} />
                </View>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginHorizontal: 55, borderWidth: 2, marginTop: 50,
                    paddingHorizontal: 10, borderRadius: 23, borderColor: '#999999', paddingVertical: 2
                }}>
                    <TextInput placeholder={"Enter Mobile Number"} style={{ paddingHorizontal: 10, width: 200, textAlign: 'center' }} />
                </View>
            </View>

        </View>
    )
}