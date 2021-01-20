import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RVStyles } from '../styles/Styles'
export const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={RVStyles.container}>
            <Image source={require(`../assets/rv_home_logo.png`)} />

            <View style={{
                alignItems: 'center',
                marginTop: 67,
                flexDirection: 'column',
                marginHorizontal: 10,
                paddingVertical: 15
            }}>
                <TouchableOpacity activeOpacity={.7} style={{
                    borderRadius: 25,
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    marginVertical: 15,
                    width: 300,
                    elevation: 3,
                    backgroundColor: "#DE1F25"
                }} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={{
                    borderRadius: 25,
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    width: 300,
                    marginVertical: 15,
                    elevation: 3,
                    backgroundColor: "#DE1F25"
                }} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={{
                    borderRadius: 25,
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    marginVertical: 15,
                    width: 300,
                    elevation: 3,
                    backgroundColor: "#DE1F25"
                }} onPress={() => navigation.navigate('RVBloodRequest')}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Request form</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}