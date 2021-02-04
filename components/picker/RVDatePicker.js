import React from 'react';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { onChangeByValueType } from '../../helper/Helper';
export const RVDatePicker = props => {

    return (
        <React.Fragment>
            <Controller name={props.inputName} control={props.control} defaultValue={props.defaultValue} rules={props.rules} render={(datePickerProps) => (
                <DateTimePicker minimumDate={props.minimumDate} display={props.display} mode={props.mode} value={props.requestForm.needed_request_date}
                    onChange={(event, date) => {

                        console.log(date == undefined)
                        if (event.type == `set`) {
                            debugger
                            onChangeByValueType(datePickerProps, date, props)
                        }
                    }} is24Hour={false} />
            )} />
        </React.Fragment>
    );
}