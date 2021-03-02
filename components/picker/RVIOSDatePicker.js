import React from 'react';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { convertDate } from '../../helper/Helper';
import { RVStyles } from '../../styles/Styles';
export const RVIOSDatePicker = props => {
    return (
        <Controller name={props.inputName} control={props.control} defaultValue={props.isFromRegistration && new Date() || props.defaultValue} rules={props.rules}
            render={(datePickerProps) => (
                <DateTimePicker minimumDate={props.minimumDate} display={props.display} mode={props.mode} value={props.isFromBloodRequestForm &&
                    props.requestForm.needed_request_date || datePickerProps.value || new Date()} maximumDate={props.maximumDate} ref={props.refCallback}
                    onChange={(event, date) => convertDate(event, datePickerProps, props, date)} is24Hour={false} style={RVStyles.iosDatePickerStyle} />
            )} />
    );
}