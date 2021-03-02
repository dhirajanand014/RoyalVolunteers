
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    fieldControllerName, formRequiredRules, stringConstants,
    isAndroid, keyBoardTypeConst, numericConstants, placeHolderText,
    miscMessage
} from '../../constants/Constants';
import { updateDataFromDashBoard } from '../../helper/Helper';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVUserDashboardTextInput } from '../input/RVUserDashboardTextInput';

export const RVUserDashBoardPincodeText = props => {
    const { userDashboard, setUserDashboard, setLoader } = props;
    return (
        <View style={[RVStyles.dashBoardUserDetailsTextView, RVGenericStyles.borderBottomWidthpt5]}>
            <View style={RVStyles.dashBoardUserTextStyle}>
                <Text style={[RVGenericStyles.ft18]}>{props.text}</Text>
            </View>
            {
                userDashboard.isPincodeEdit &&
                <RVUserDashboardTextInput inputName={fieldControllerName.PINCODE} control={props.control} rules={formRequiredRules.pinCodeRule} textContentType={keyBoardTypeConst.PINCODE}
                    defaultValue={props.value} maxLength={numericConstants.SIX} placeHolderText={placeHolderText.PINCODE} formState={props.formState}
                    isFromBloodRequestForm={false} keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} userDashboard={userDashboard}
                    setUserDashboard={setUserDashboard} value={userDashboard.pincode} extraStyles={[RVGenericStyles.ft18, RVGenericStyles.ml_95, RVGenericStyles.textLeftAlign]}
                    autofocus={true} isFromDashBoard={true} />
                ||
                <View style={[RVGenericStyles.ml_40, RVStyles.dashBoardUserValueStyle]}>
                    <Text style={[RVGenericStyles.ft18, RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal]}>{props.value}</Text>
                </View>
            }
            {
                userDashboard && (!userDashboard.isPincodeEdit &&
                    <TouchableOpacity onPress={() => setUserDashboard({ ...userDashboard, isPincodeEdit: true, editText: props.text })}>
                        <Text style={[RVGenericStyles.alignItemsCenter, RVGenericStyles.colorBlue, RVGenericStyles.ft16, RVGenericStyles.bold,
                        RVGenericStyles.fontFamilyNormal, RVGenericStyles.marginHorizontal4]}>{miscMessage.EDIT}</Text>
                    </TouchableOpacity> || userDashboard.isPincodeEdit &&
                    <TouchableOpacity onPress={props.handleSubmit(async data => {
                        await updateDataFromDashBoard(userDashboard, setUserDashboard, fieldControllerName.PINCODE, userDashboard.pincode, setLoader);
                        setUserDashboard({ ...userDashboard, isPincodeEdit: false, editText: stringConstants.EMPTY });
                        setLoader(false);
                    })}>
                        <Text style={[RVGenericStyles.alignItemsCenter, RVGenericStyles.justifyContentCenter, RVGenericStyles.colorGreen, RVGenericStyles.ft16, RVGenericStyles.bold,
                        RVGenericStyles.fontFamilyNormal, RVGenericStyles.marginHorizontal4]}>{miscMessage.SAVE}</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}
