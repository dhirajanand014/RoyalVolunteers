import React from 'react';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { convertDate } from '../../helper/Helper';
import { SafeAreaView } from 'react-native';
import { RVStyles } from '../../styles/Styles';
export const RVDatePickerIOS = props => {
    return (
        <SafeAreaView>
            <Controller name={props.inputName} control={props.control} defaultValue={props.defaultValue} rules={props.rules} render={(datePickerProps) => (
                <DateTimePicker minimumDate={props.minimumDate} display={props.display} mode={props.mode} value={props.requestForm.needed_request_date}
                    onChange={(event, date) => convertDate(event, datePickerProps, props, date)} is24Hour={false} style={RVStyles.iosDatePickerStyle} />
            )} />
        </SafeAreaView>
    );
}