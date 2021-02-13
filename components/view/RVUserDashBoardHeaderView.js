
import React, { useContext, useRef } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {
    fieldTextName, miscMessage, numericConstants,
    routeConsts, successFulMessages
} from '../../constants/Constants';
import { HeaderForm } from '../../layouts/HeaderForm';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVLoginUserIcon } from '../icons/RVLoginUserIcon';
import { RVMenuIcon } from '../icons/RVMenuIcon';
import * as Animatable from 'react-native-animatable';
import { RVNotificationIcon } from '../icons/RVNotificationIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Menu, { MenuItem } from 'react-native-material-menu';
import { SignUpContext } from '../../App';
import { resetTokens, showSnackBar } from '../../helper/Helper';

export const RVUserDashBoardHeaderView = props => {

    const menuRef = useRef();

    const { error, setError } = useContext(SignUpContext);

    return (
        <SafeAreaView>
            <View style={[RVStyles.dashBoardMenuStyle, RVGenericStyles.alignSelfEnd]}>
                {/* <RVMenuIcon /> */}
                <View style={RVGenericStyles.rowFlexDirection}>
                    <TouchableOpacity style={RVGenericStyles.paddingHorizontal15}>
                        <RVNotificationIcon />
                    </TouchableOpacity>
                    <Menu ref={menuRef} button={
                        <TouchableOpacity onPress={() => menuRef.current?.show()}>
                            <RVLoginUserIcon />
                        </TouchableOpacity>}>
                        <MenuItem onPress={async () => {
                            const response = await resetTokens(error, setError);
                            menuRef.current?.hide();
                            response && props.navigation.reset({
                                index: numericConstants.ZERO, routes: [{ name: routeConsts.HOME }]
                            });
                            setTimeout(() => showSnackBar(successFulMessages.SUCCESSFUL_LOG_OUT, true),
                                numericConstants.THREE_HUNDRED);
                        }}>{miscMessage.LOGOUT}</MenuItem>
                    </Menu>
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
