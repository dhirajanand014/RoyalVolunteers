
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    fieldControllerName, formRequiredRules, stringConstants,
    isAndroid, keyBoardTypeConst, numericConstants, placeHolderText
} from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { updateDataFromDashBoard } from '../../helper/Helper';
import { RVEditIcon } from '../icons/RVEditIcon';
import { RVSaveIcon } from '../icons/RVSaveIcon';
import { RVUserDashboardTextInput } from '../input/RVUserDashboardTextInput';

export const RVUserDashBoardAgeText = props => {
    const { userDashboard, setUserDashboard, setLoader } = props;

    return (
        <View style={[RVStyles.dashBoardUserDetailsTextView, RVGenericStyles.borderBottomWidthpt5]}>
            <View style={RVStyles.dashBoardUserTextStyle}>
                <Text style={RVGenericStyles.ft18}>{props.text}</Text>
            </View>
            {
                userDashboard.isAgeEdit &&
                <RVUserDashboardTextInput inputName={fieldControllerName.AGE} control={props.control} rules={formRequiredRules.ageRule}
                    defaultValue={props.value} maxLength={numericConstants.THREE} placeHolderText={placeHolderText.AGE} userDashboard={userDashboard} value={userDashboard.age}
                    keyboardType={isAndroid && keyBoardTypeConst.ANDROID_NUMERIC || keyBoardTypeConst.IOS_NUMERIC} formState={props.formState} setUserDashboard={setUserDashboard}
                    extraStyles={RVStyles.dashBoardEdit} autofocus={true} isFromDashBoard={true} />
                ||
                <View style={[RVGenericStyles.ml_24, RVStyles.dashBoardUserValueStyle]}>
                    <Text style={[RVGenericStyles.ft18, RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal]}>{props.value}</Text>
                </View>
            }
            {
                userDashboard && (!userDashboard.isAgeEdit &&
                    <TouchableOpacity onPress={() => setUserDashboard({ ...userDashboard, isAgeEdit: true, editText: props.text })}>
                        <RVEditIcon />
                    </TouchableOpacity> || userDashboard.isAgeEdit &&
                    <TouchableOpacity onPress={props.handleSubmit(async data => {
                        await updateDataFromDashBoard(userDashboard, setUserDashboard, fieldControllerName.AGE, userDashboard.age, setLoader);
                        setUserDashboard({ ...userDashboard, isAgeEdit: false, editText: stringConstants.EMPTY });
                        setLoader(false);
                    })}>
                        <RVSaveIcon />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}
