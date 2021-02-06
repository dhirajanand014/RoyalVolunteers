
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

export const RVUserDashBoardAgeText = props => {
    const { userDashboard, setUserDashboard } = props;
    return (
        <View style={RVStyles.dashBoardUserDetailsTextView}>
            <View style={RVStyles.dashBoardUserTextStyle}>
                <Text style={RVGenericStyles.ft18}>{props.text}</Text>
            </View>
            {
                userDashboard.isAgeEdit &&
                <RVUserDashboardTextInput inputTextName={props.text} inputName={fieldControllerName.AGE} control={props.control} rules={formRequiredRules.ageRule}
                    defaultValue={stringConstants.EMPTY} maxLength={numericConstants.THREE} placeHolderText={placeHolderText.AGE} userDashboard={userDashboard} value={userDashboard.age}
                    keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} formState={props.formState} setUserDashboard={setUserDashboard}
                    style={RVStyles.dashBoardEdit} />
                ||
                <View style={[RVGenericStyles.ml_24, RVStyles.dashBoardUserValueStyle]}>
                    <Text style={[RVGenericStyles.ft18, RVGenericStyles.bold]}>{props.value}</Text>
                </View>
            }
            {
                userDashboard && (!userDashboard.isAgeEdit &&
                    <TouchableOpacity onPress={() => setUserDashboard({ ...userDashboard, isAgeEdit: true, editText: props.text })}>
                        <RVEditIcon />
                    </TouchableOpacity> || userDashboard.isAgeEdit &&
                    <TouchableOpacity onPress={() => setUserDashboard({ ...userDashboard, isAgeEdit: false, editText: stringConstants.EMPTY })}>
                        <RVSaveIcon />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}
