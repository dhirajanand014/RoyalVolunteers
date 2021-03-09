
import React, { useContext, useRef } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { fieldTextName, miscMessage, numericConstants } from '../../constants/Constants';
import { HeaderForm } from '../../layouts/HeaderForm';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVLoginUserIcon } from '../icons/RVLoginUserIcon';
import * as Animatable from 'react-native-animatable';
import { RVNotificationIcon } from '../icons/RVNotificationIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Menu, { MenuItem } from 'react-native-material-menu';
import { SignUpContext } from '../../App';
import { logoutUser, navigateToNotificationRequests } from '../../helper/Helper';

export const RVUserDashBoardHeaderView = props => {

    const menuRef = useRef();

    const { error, setError, setLoader, notificationDetails, setNotificationDetails } = useContext(SignUpContext);

    return (
        <SafeAreaView>
            <View style={[RVStyles.dashBoardMenuStyle, RVGenericStyles.alignSelfEnd]}>
                <View style={RVGenericStyles.rowFlexDirection}>
                    <TouchableOpacity style={RVGenericStyles.paddingHorizontal15} onPress={async () =>
                        navigateToNotificationRequests(notificationDetails, setNotificationDetails, props.navigation, setLoader)}>
                        {
                            (props.isNewNotification || notificationDetails.isNewNotification)
                            && <Animatable.View animation={`swing`} iterationCount={miscMessage.INFINITE}>
                                <RVNotificationIcon />
                                <View style={RVStyles.notificationBadge} />
                            </Animatable.View> || <RVNotificationIcon />
                        }
                    </TouchableOpacity>
                    <Menu ref={menuRef} button={
                        <TouchableOpacity onPress={() => menuRef.current?.show()}>
                            <RVLoginUserIcon />
                        </TouchableOpacity>}>
                        <MenuItem onPress={async () => await logoutUser(error, setError, setLoader, menuRef, props.navigation)}>
                            {miscMessage.LOGOUT}</MenuItem>
                    </Menu>
                </View>
            </View>
            <View style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.alignItemsStart]}>
                <HeaderForm style={RVStyles.dashBoardHeaderStyle} imagePath={require(`../../assets/rv_home_logo.png`)} height={numericConstants.ONE_HUNDRED}
                    width={numericConstants.ONE_HUNDRED} />
                <View style={[RVGenericStyles.fill, RVGenericStyles.justifyContentCenter, RVGenericStyles.paddingHorizontal12]}>
                    <Text style={[RVGenericStyles.textRightAlign, RVGenericStyles.ft16, RVGenericStyles.colorBlack]}>{fieldTextName.REQUESTS}</Text>
                    <TouchableOpacity onPress={() => navigateToNotificationRequests(notificationDetails, setNotificationDetails, props.navigation, setLoader)}>
                        <Text style={[RVGenericStyles.textRightAlign, RVGenericStyles.colorRed, RVGenericStyles.bold, RVGenericStyles.ft42, RVGenericStyles.marginHorizontal4]}>{notificationDetails.requestCount}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Animatable.View animation={`fadeInUp`} style={[RVStyles.dashBoardCountsViewStyle, RVGenericStyles.justifyContentCenter]}>
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
