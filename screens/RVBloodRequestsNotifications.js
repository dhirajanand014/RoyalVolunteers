import React from 'react'
import { SafeAreaView, View, Text } from 'react-native';
import { RVGenericStyles, RVStyles } from '../styles/Styles';
import { RVBloodRequestsFlatList } from '../components/view/RVBloodRequestsFlatList';
import { HeaderForm } from '../layouts/HeaderForm';
import { screenTitle } from '../constants/Constants';

export const RVBloodRequestsNotifications = props => {
    return (
        <View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <SafeAreaView animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>{screenTitle.BLOOD_REQUESTS}</Text>
                <View style={[RVGenericStyles.fill, RVGenericStyles.justifyContentCenter, RVGenericStyles.alignItemsCenter]}>
                    <RVBloodRequestsFlatList data={[{
                        'phone_number': 7483813543,
                        'pincode': 570020,
                        'blood_group': 'B+',
                    }, {
                        'phone_number': 7483813543,
                        'pincode': 570020,
                        'blood_group': 'B+',
                    }, {
                        'phone_number': 7483813543,
                        'pincode': 570020,
                        'blood_group': 'B+',
                    }, {
                        'phone_number': 7483813543,
                        'pincode': 570020,
                        'blood_group': 'B+',
                    }, {
                        'phone_number': 7483813543,
                        'pincode': 570020,
                        'blood_group': 'B+',
                    }, {
                        'phone_number': 7483813543,
                        'pincode': 570020,
                        'blood_group': 'B+',
                    }, {
                        'phone_number': 7483813543,
                        'pincode': 570020,
                        'blood_group': 'B+',
                    }, {
                        'phone_number': 7483813543,
                        'pincode': 570020,
                        'blood_group': 'B+',
                    }]} />
                </View>
            </SafeAreaView>
        </View>
    )
}