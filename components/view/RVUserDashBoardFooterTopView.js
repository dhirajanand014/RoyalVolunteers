
import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { bloodGroupsList, fieldTextName, screenTitle } from '../../constants/Constants';
import { RVGenericStyles, colors, RVStyles } from '../../styles/Styles';

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
                    <Text style={[RVGenericStyles.centerAlignedText, RVStyles.dashBoardFooterBloodTypeValue]}>{bloodGroupsList.find(bloodGroup => bloodGroup.value == props.blood_group).label ||
                        <ActivityIndicator color={colors.RED} shouldRasterizeIOS hidesWhenStopped style={RVGenericStyles.mt36} />}
                    </Text>
                </View>
            </View>
        </View>
    )
}