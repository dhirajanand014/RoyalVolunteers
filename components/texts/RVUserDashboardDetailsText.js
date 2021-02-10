
import React from 'react';
import { Text, View } from 'react-native';
import {
    availablilityStatusOptions, fieldControllerName, fieldTextName,
    numericConstants, stringConstants
} from '../../constants/Constants';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import { AuthenticatedSelectorInput } from '../picker/AuthenticatedSelectorInput';

export const RVUserDashboardDetailsText = props => {
    return (
        <View style={[RVStyles.dashBoardUserDetailsTextView, props.text != fieldTextName.AVAILABILITY_STATUS &&
            RVGenericStyles.borderBottomWidthpt5]}>
            <View style={RVStyles.dashBoardUserTextStyle}>
                <Text style={[props.text == fieldTextName.AVAILABILITY_STATUS && RVGenericStyles.marginVertical2,
                RVGenericStyles.ft18]}>{props.text}</Text>
            </View>
            <View style={RVStyles.dashBoardUserValueStyle}>
                {
                    props.text == fieldTextName.AVAILABILITY_STATUS && props.value &&
                    <AuthenticatedSelectorInput inputName={fieldControllerName.AVAILABILITY_STATUS} control={props.control}
                        defaultValue={props.value} userDashboard={props.userDashboard} setUserDashboard={props.setUserDashboard}
                        formState={props.formState} hasPadding={true} options={availablilityStatusOptions} fontSize={numericConstants.TWELVE}
                        initial={availablilityStatusOptions.findIndex(option => option.value == props.value)} isFromDashBoard={true}
                        value={numericConstants.ZERO} /> ||
                    <Text style={[RVGenericStyles.ft18, RVGenericStyles.bold]}>{props.value}</Text>
                }
            </View>
        </View>
    )
}
