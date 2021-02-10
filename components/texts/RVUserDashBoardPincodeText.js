
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    fieldControllerName, formRequiredRules, stringConstants,
    isAndroid, keyBoardTypeConst, numericConstants, placeHolderText
} from '../../constants/Constants';
import { updateDataFromDashBoard } from '../../helper/Helper';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { RVEditIcon } from '../icons/RVEditIcon';
import { RVSaveIcon } from '../icons/RVSaveIcon';
import { RVUserDashboardTextInput } from '../input/RVUserDashboardTextInput';

export const RVUserDashBoardPincodeText = props => {
    const { userDashboard, setUserDashboard } = props;
    return (
        <View style={[RVStyles.dashBoardUserDetailsTextView, RVGenericStyles.borderBottomWidthpt5]}>
            <View style={RVStyles.dashBoardUserTextStyle}>
                <Text style={RVGenericStyles.ft18}>{props.text}</Text>
            </View>
            {
                userDashboard.isPincodeEdit &&
                <RVUserDashboardTextInput inputName={fieldControllerName.PINCODE} control={props.control} rules={formRequiredRules.pinCodeRule}
                    defaultValue={props.value} maxLength={numericConstants.SIX} placeHolderText={placeHolderText.PINCODE} formState={props.formState}
                    isFromBloodRequestForm={false} keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} userDashboard={userDashboard}
                    setUserDashboard={setUserDashboard} value={userDashboard.pincode} extraStyles={RVStyles.dashBoardEdit} autofocus={true} isFromDashBoard={true} />
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
                    <TouchableOpacity onPress={props.handleSubmit(async data => {
                        await updateDataFromDashBoard(userDashboard, setUserDashboard, fieldControllerName.PINCODE, userDashboard.pincode);
                        setUserDashboard({ ...userDashboard, isPincodeEdit: false, editText: stringConstants.EMPTY })
                    })}>
                        <RVSaveIcon />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}
