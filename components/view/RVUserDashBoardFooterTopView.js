
import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { bloodGroupsList, fieldTextName, isIOS, screenTitle } from '../../constants/Constants';
import { RVGenericStyles, colors, RVStyles } from '../../styles/Styles';

export const RVUserDashBoardFooterTopView = props => {
    const bloodLabel = bloodGroupsList.find(bloodGroup => bloodGroup.value == props.blood_group).label;
    return (
        <View style={RVGenericStyles.borderBottomWidth1}>
            <View style={[RVStyles.dashBoardFooterTopView, RVGenericStyles.justifyContentSpaceBetween]}>
                <View style={RVGenericStyles.fill_75}>
                    <Text style={[RVGenericStyles.textLeftAlign, RVGenericStyles.ft16, RVGenericStyles.textBlackColor]}>
                        {screenTitle.WELCOME}
                    </Text>
                    <Text style={[RVGenericStyles.textLeftAlign, RVGenericStyles.ft20, RVGenericStyles.textBlackColor, RVGenericStyles.marginVertical5]}>
                        {props.name}
                    </Text>
                </View>
                <View style={RVStyles.dasBoardFooterViewBloodTypeView}>
                    <Text style={[RVGenericStyles.centerAlignedText, RVStyles.dashBoardFooterBloodTypeText]}>{fieldTextName.BLOOD_TYPE}</Text>
                    {
                        bloodLabel &&
                        <Text style={[RVGenericStyles.centerAlignedText, RVStyles.dashBoardFooterBloodTypeValue]}>{bloodLabel}</Text> ||
                        <View style={[RVGenericStyles.mt36, RVGenericStyles.ht36]}>
                            <ActivityIndicator color={colors.RED} shouldRasterizeIOS hidesWhenStopped style={[RVGenericStyles.justifyContentCenter, RVGenericStyles.alignItemsCenter]} />
                        </View>
                    }
                </View>
            </View>
        </View>
    )
}