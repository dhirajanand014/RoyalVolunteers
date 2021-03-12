
import React, { useContext, useRef } from 'react';
import { SafeAreaView, Share, Text, View } from 'react-native';
import { fieldTextName, miscMessage, numericConstants } from '../../constants/Constants';
import { HeaderForm } from '../../layouts/HeaderForm';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVLoginUserIcon } from '../icons/RVLoginUserIcon';
import * as Animatable from 'react-native-animatable';
import { RVNotificationIcon } from '../icons/RVNotificationIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { SignUpContext } from '../../App';
import { logoutUser, navigateToNotificationRequests, shareApp } from '../../helper/Helper';
import { RVShareIcon } from '../icons/RVShareIcon';

export const RVUserDashBoardHeaderView = props => {

    const menuRef = useRef();

    const { userDashboard, setUserDashboard, navigation } = props;

    const { error, setError, setLoader, notificationDetails, setNotificationDetails } = useContext(SignUpContext);

    return (
        <SafeAreaView>
            <View style={[RVStyles.dashBoardMenuStyle, RVGenericStyles.alignSelfEnd]}>
                <View style={RVGenericStyles.rowFlexDirection}>
                    <TouchableOpacity style={[RVGenericStyles.paddingHorizontal5, RVGenericStyles.paddingVertical2]}
                        onPress={async () => { await shareApp() }}>
                        <RVShareIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={[RVGenericStyles.paddingHorizontal15, RVGenericStyles.paddingVertical2]}
                        onPress={async () => navigateToNotificationRequests(notificationDetails, setNotificationDetails, navigation, setLoader)}>
                        {
                            (userDashboard.isNewNotification || notificationDetails.isNewNotification)
                            && <Animatable.View animation={`swing`} iterationCount={miscMessage.INFINITE}>
                                <RVNotificationIcon />
                                <View style={RVStyles.notificationBadge} />
                            </Animatable.View> || <RVNotificationIcon />
                        }
                    </TouchableOpacity>
                    <Menu>
                        <MenuTrigger children={<TouchableOpacity hitSlop={RVStyles.neededRadioSlop} style={RVGenericStyles.paddingVertical2}>
                            <RVLoginUserIcon />
                        </TouchableOpacity>} />
                        <MenuOptions customStyles={{ optionsContainer: RVGenericStyles.width130 }} >
                            <MenuOption onSelect={() => setUserDashboard({ ...userDashboard, showRateUsModal: true })}
                                customStyles={{ optionWrapper: [RVGenericStyles.paddingVertical10, RVGenericStyles.paddingHorizontal20] }}
                                children={<TouchableOpacity>
                                    <Text>{miscMessage.RATE_US}</Text>
                                </TouchableOpacity>}>
                            </MenuOption>
                            <View style={RVStyles.menuOptionsDivider} />
                            <MenuOption onSelect={async () => await logoutUser(error, setError, setLoader, menuRef, navigation)}
                                customStyles={{ optionWrapper: [RVGenericStyles.paddingVertical10, RVGenericStyles.paddingHorizontal20] }}
                                children={<TouchableOpacity>
                                    <Text>{miscMessage.LOGOUT}</Text>
                                </TouchableOpacity>}>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </View>
            </View>
            <View style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.alignItemsStart]}>
                <HeaderForm style={RVStyles.dashBoardHeaderStyle} imagePath={require(`../../assets/rv_home_logo.png`)} height={numericConstants.ONE_HUNDRED}
                    width={numericConstants.ONE_HUNDRED} isFromDashBoard={true} />
                <View style={[RVStyles.headerRequests, RVGenericStyles.justifyContentCenter, RVGenericStyles.paddingHorizontal12]}>
                    <Text style={[RVGenericStyles.textRightAlign, RVGenericStyles.ft16, RVGenericStyles.colorBlack]}>{fieldTextName.REQUESTS}</Text>
                    <TouchableOpacity onPress={() => navigateToNotificationRequests(notificationDetails, setNotificationDetails, navigation, setLoader)}>
                        <Text style={[RVGenericStyles.textRightAlign, RVGenericStyles.colorRed, RVGenericStyles.bold, RVGenericStyles.ft42, RVGenericStyles.marginHorizontal4]}>{notificationDetails.requestCount}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Animatable.View animation={`fadeInUp`} style={[RVStyles.dashBoardCountsViewStyle, RVGenericStyles.justifyContentCenter]}>
                <View style={[RVStyles.dashBoardCountsView, RVGenericStyles.justifyContentSpaceBetween]}>
                    <View style={[RVGenericStyles.fill_half, RVGenericStyles.justifyContentCenter]}>
                        <Text style={[RVGenericStyles.textLeftAlign, RVGenericStyles.ft20, RVGenericStyles.colorBlack]}>{fieldTextName.BENIFITERS}</Text>
                        <Text style={[RVGenericStyles.textLeftAlign, RVGenericStyles.colorBlack, RVGenericStyles.bold, RVGenericStyles.ft30, RVGenericStyles.marginHorizontal4]}>{userDashboard.benefiters_count}</Text>
                    </View>
                    <View style={[RVGenericStyles.fill_half, RVGenericStyles.justifyContentCenter]}>
                        <Text style={[RVGenericStyles.textRightAlign, RVGenericStyles.ft20, RVGenericStyles.colorBlack]}>{fieldTextName.VOLUNTEERS}</Text>
                        <Text style={[RVGenericStyles.textRightAlign, RVGenericStyles.colorGreen, RVGenericStyles.bold, RVGenericStyles.ft30, RVGenericStyles.marginHorizontal4]}>{userDashboard.donor_count}</Text>
                    </View>
                </View>
            </Animatable.View>
        </SafeAreaView>
    )
}
