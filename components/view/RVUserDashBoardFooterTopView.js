
import React from 'react';
import { Text, View } from 'react-native';
import { fieldTextName, screenTitle } from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';

export const RVUserDashBoardFooterTopView = props => {
    return (
        <View style={RVGenericStyles.borderBottomWidth1}>
            <View style={[RVStyles.dashBoardFooterTopView, RVGenericStyles.justifyContentSpaceBetween]}>
                <View style={RVGenericStyles.fill_75}>
                    <Text style={[RVGenericStyles.textLeftAlign, RVGenericStyles.ft18, RVGenericStyles.textBlackColor]}>
                        {screenTitle.WELCOME}
                    </Text>
                    <Text style={[RVGenericStyles.textLeftAlign, RVGenericStyles.ft25, RVGenericStyles.textBlackColor, RVGenericStyles.marginVertical5]}>
                        {props.name}
                    </Text>
                </View>
                <View style={RVStyles.dasBoardFooterViewBloodTypeView}>
                    <Text style={[RVGenericStyles.centerAlignedText, RVStyles.dashBoardFooterBloodTypeText]}>{fieldTextName.BLOOD_TYPE}</Text>
                    <Text style={[RVGenericStyles.centerAlignedText, RVStyles.dashBoardFooterBloodTypeValue]}>{props.blood_group}</Text>
                </View>
            </View>
        </View>
    )
}