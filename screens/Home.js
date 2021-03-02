import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { routeConsts, screenTitle } from '../constants/Constants'
import { RVGenericStyles, RVStyles } from '../styles/Styles'

export const Home = () => {

    const navigation = useNavigation();
    return (
        <View style={RVStyles.container}>
            <Image source={require(`../assets/rv_home_logo.png`)} />

            <View style={RVStyles.homeViewContainer}>
                <TouchableOpacity activeOpacity={.7} style={RVStyles.homeSignInButton} onPress={() => navigation.navigate(routeConsts.SIGN_IN)}>
                    <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText]}>{screenTitle.SIGN_IN}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={RVStyles.homeSignUpButton} onPress={() => navigation.navigate(routeConsts.SIGN_UP)}>
                    <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText]}>{screenTitle.REGISTER}</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} style={RVStyles.homeRequestBloodBlood} onPress={() => navigation.navigate(routeConsts.BLOOD_REQUEST,
                    { isFrom: routeConsts.HOME })}>
                    <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText]}>{screenTitle.REQUEST_FOR_BLOOD}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}