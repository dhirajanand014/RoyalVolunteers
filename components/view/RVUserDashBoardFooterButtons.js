
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { actionButtonTextConstants } from '../../constants/Constants';
import { shareApp } from '../../helper/Helper';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';

export const RVUserDashBoardFooterButtons = props => {

    const { userDashboard, setUserDashboard } = props;

    return (
        <React.Fragment>
            <View style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.justifyContentSpaceBetween, RVGenericStyles.mb20]}>
                <View style={RVGenericStyles.alignItemsCenter}>
                    <TouchableOpacity activeOpacity={.7} style={RVStyles.sendFeedBackButtonStyle}
                        onPress={() => setUserDashboard({ ...userDashboard, showFeedbackModal: true })}>
                        <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText, RVGenericStyles.bold]}>{actionButtonTextConstants.FEEDBACK}</Text>
                    </TouchableOpacity>
                </View>
                <View style={RVGenericStyles.alignItemsCenter}>
                    <TouchableOpacity activeOpacity={.7} style={RVStyles.shareButtonStyle}
                        onPress={async () => await shareApp()}>
                        <Text style={[RVGenericStyles.colorWhite, RVGenericStyles.centerAlignedText, RVGenericStyles.bold]}>{actionButtonTextConstants.SHARE}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </React.Fragment >
    )
}
