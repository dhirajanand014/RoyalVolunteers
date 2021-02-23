import React from 'react';
import { Linking, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { countryCodesConstants, fieldTextName, miscMessage } from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVPhoneIcon } from '../icons/RVPhoneIcon';

export const RVBloodRequestsFlatList = props => {
    const { data } = props;
    return (
        <View style={[RVGenericStyles.colorWhite]}>
            <FlatList data={data} contentContainerStyle={RVGenericStyles.padding5}
                keyExtractor={item => item.phone_number} renderItem={({ item, index }) => {
                    return (<View key={`${item.phone_number}_${index}`} style={[RVGenericStyles.marginVertical10, RVStyles.notificationsFlatListRow]}>
                        <View style={[RVStyles.bloodNotificationsFlatListRow, RVGenericStyles.justifyContentSpaceBetween]}>
                            <View style={RVStyles.notificationsFlatListRowView}>
                                <Text style={[RVGenericStyles.centerAlignedText, RVStyles.notificationBloodTypeText]}>{fieldTextName.BLOOD_TYPE}</Text>
                                <Text style={[RVGenericStyles.centerAlignedText, RVStyles.dashBoardFooterBloodTypeValue, RVGenericStyles.fontFamilyNormal]}>{item.blood_group}</Text>
                            </View>
                            <View style={[RVGenericStyles.fill_75, RVGenericStyles.alignItemsEnd]}>
                                <Text style={[RVGenericStyles.ft24, RVGenericStyles.ftWeight700, RVGenericStyles.marginBottom4, RVGenericStyles.fontFamilyNormal]}>{item.phone_number}</Text>
                                <Text style={[RVGenericStyles.ft20, RVGenericStyles.opacitypt7, RVGenericStyles.marginBottom10]}>{item.pincode}</Text>
                                <TouchableOpacity style={[RVGenericStyles.rowFlexDirection, RVGenericStyles.justifyContentCenter, RVGenericStyles.backGroundColorGreen,
                                RVGenericStyles.alignItemsCenter, RVGenericStyles.paddingHorizontal15, RVStyles.notificationsCallStyle]}
                                    onPress={() => Linking.openURL(`tel:${countryCodesConstants.INDIA}${item.phone_number}`)}>
                                    <RVPhoneIcon />
                                    <Text style={[RVGenericStyles.bold, RVGenericStyles.ml_8, RVGenericStyles.colorWhite, RVGenericStyles.ft18, RVGenericStyles.fontFamilyNormal]}>
                                        {miscMessage.CALL}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>)
                }} />
        </View>
    )
}