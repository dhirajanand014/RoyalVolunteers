
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { fieldTextName } from '../../constants/Constants';
import { HeaderForm } from '../../layouts/HeaderForm';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVLoginUserIcon } from '../icons/RVLoginUserIcon';
import { RVMenuIcon } from '../icons/RVMenuIcon';
import * as Animatable from 'react-native-animatable';
import { RVNotificationIcon } from '../icons/RVNotificationIcon';

export const RVUserDashBoardHeaderView = props => {
    return (
        <SafeAreaView>
            <View style={RVStyles.dashBoardMenuStyle}>
                <RVMenuIcon />
                <View style={RVGenericStyles.rowFlexDirection}>
                    <View style={RVGenericStyles.paddingHorizontal10}>
                        <RVNotificationIcon />
                    </View>
                    <View>
                        <RVLoginUserIcon />
                    </View>
                </View>
            </View>
            <HeaderForm style={RVStyles.dashBoardHeaderStyle} imagePath={require(`../../assets/rv_home_logo.png`)} />
            <Animatable.View animation={'fadeInUp'} style={[RVStyles.dashBoardCountsViewStyle, RVGenericStyles.justifyContentCenter]}>
                <View style={[RVStyles.dashBoardCountsView, RVGenericStyles.justifyContentSpaceBetween]}>
                    <View style={[RVGenericStyles.fill_half, RVGenericStyles.justifyContentCenter]}>
                        <Text style={[RVGenericStyles.textLeftAlign, RVGenericStyles.ft20, RVGenericStyles.colorBlack]}>{fieldTextName.BENIFITERS}</Text>
                        <Text style={[RVGenericStyles.textLeftAlign, RVGenericStyles.colorBlack, RVGenericStyles.bold, RVGenericStyles.ft30, RVGenericStyles.marginHorizontal4]}>{props.benefiters_count}</Text>
                    </View>
                    <View style={[RVGenericStyles.fill_half, RVGenericStyles.justifyContentCenter]}>
                        <Text style={[RVGenericStyles.textRightAlign, RVGenericStyles.ft20, RVGenericStyles.colorBlack]}>{fieldTextName.VOLUNTEERS}</Text>
                        <Text style={[RVGenericStyles.textRightAlign, RVGenericStyles.colorGreen, RVGenericStyles.bold, RVGenericStyles.ft30, RVGenericStyles.marginHorizontal4]}>{props.donor_count}</Text>
                    </View>
                </View>
            </Animatable.View>
        </SafeAreaView>
    )
}
