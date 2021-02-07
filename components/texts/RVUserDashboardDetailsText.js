
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
        <View style={RVStyles.dashBoardUserDetailsTextView}>
            <View style={RVStyles.dashBoardUserTextStyle}>
                <Text style={RVGenericStyles.ft18}>{props.text}</Text>
            </View>
            <View style={RVStyles.dashBoardUserValueStyle}>
                {
                    props.text == fieldTextName.AVAILABILITY_STATUS &&
                    <AuthenticatedSelectorInput inputName={fieldControllerName.AVAILABILITY_STATUS} control={props.control}
                        defaultValue={stringConstants.EMPTY} formState={props.formState} hasPadding={true} options={availablilityStatusOptions} fontSize={numericConstants.TWELVE}
                        initial={numericConstants.ZERO} value={props.value} isFromDashBoard={true} userDashboard={props.userDashboard} setUserDashboard={props.setUserDashboard} /> ||
                    <Text style={[RVGenericStyles.ft18, RVGenericStyles.bold]}>{props.value}</Text>
                }
            </View>
        </View>
    )
}
