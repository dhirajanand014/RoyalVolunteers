
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    fieldControllerName, fieldTextName, formRequiredRules,
    isAndroid, keyBoardTypeConst, numericConstants, placeHolderText,
    stringConstants
} from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVEditIcon } from '../icons/RVEditIcon';
import { RVSaveIcon } from '../icons/RVSaveIcon';
import { RVUserDashboardTextInput } from '../input/RVUserDashboardTextInput';

export const RVUserDashBoardPincodeText = props => {
    const { userDashboard, setUserDashboard } = props;
    return (
        <View style={RVStyles.dashBoardUserDetailsTextView}>
            <View style={RVStyles.dashBoardUserTextStyle}>
                <Text style={RVGenericStyles.ft18}>{props.text}</Text>
            </View>
            {
                userDashboard.isPincodeEdit &&
                <RVUserDashboardTextInput inputTextName={props.text} inputName={fieldControllerName.PINCODE} control={props.control} rules={formRequiredRules.pinCodeRule}
                    defaultValue={stringConstants.EMPTY} maxLength={numericConstants.SIX} placeHolderText={placeHolderText.PINCODE} formState={props.formState}
                    isFromBloodRequestForm={true} keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} userDashboard={userDashboard}
                    setUserDashboard={setUserDashboard} value={userDashboard.pincode} style={RVStyles.dashBoardEdit} />
                ||
                <View style={[RVGenericStyles.ml_24, RVStyles.dashBoardUserValueStyle]}>
                    <Text style={[RVGenericStyles.ft18, RVGenericStyles.bold]}>{props.value}</Text>
                </View>
            }
            {
                userDashboard && (!userDashboard.isPincodeEdit &&
                    <TouchableOpacity onPress={() => setUserDashboard({ ...userDashboard, isPincodeEdit: true, editText: props.text })}>
                        <RVEditIcon />
                    </TouchableOpacity> || userDashboard.isPincodeEdit &&
                    <TouchableOpacity onPress={() => setUserDashboard({ ...userDashboard, isPincodeEdit: false, editText: stringConstants.EMPTY })}>
                        <RVSaveIcon />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}
