import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { convertDate } from '../../helper/Helper';
import { miscMessage } from '../../constants/Constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image, Text, View } from 'react-native';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';
import moment from 'moment';
import { Controller } from 'react-hook-form';
export const RVAndroidDatePicker = props => {

    const [show, setShow] = useState(false);

    const image = require("../../assets/rv_calender_icon.png");

    return (
        <React.Fragment>
            <Controller name={props.inputName} control={props.control} defaultValue={props.defaultValue} rules={props.rules} render={(datePickerProps) => (
                <View style={props.isFromBloodRequestForm && RVStyles.androidDatePickerViewStyle || RVStyles.androidRegistrationDatePickerViewStyle}>
                    <TouchableOpacity activeOpacity={.4} onPress={() => setShow(true)}>
                        {props.isFromBloodRequestForm &&
                            <Text style={RVGenericStyles.centerAlignedText}>{props.requestForm.needed_request_date
                                && moment(props.requestForm.needed_request_date).format(miscMessage.DATE_PICKER_FORMAT) || miscMessage.SELECT_DATE}</Text>
                            || props.isFromRegistration &&
                            <Text style={[RVGenericStyles.leftAlignedText, datePickerProps.value && RVGenericStyles.inputTextColor || RVGenericStyles.colorGrey, RVGenericStyles.ft16]}>
                                {datePickerProps.value && moment(datePickerProps.value).format(miscMessage.DATE_PICKER_FORMAT) || miscMessage.SELECT_DATE}</Text>
                        }
                    </TouchableOpacity>
                    {
                        props.isFromBloodRequestForm &&
                        <TouchableOpacity onPress={() => setShow(true)}>
                            <Image source={image} style={RVStyles.androidDatePickerCalenderIcon} />
                        </TouchableOpacity>
                    }
                    {show &&
                        <DateTimePicker minimumDate={props.minimumDate} display={props.display} mode={props.mode} value={props.isFromBloodRequestForm && props.requestForm.needed_request_date ||
                            datePickerProps.value || new Date()} is24Hour={false} onChange={(event, date) => {
                                setShow(false);
                                convertDate(event, datePickerProps, props, date);
                            }} maximumDate={props.maximumDate} ref={props.refCallback} />
                    }
                </View>
            )} />
        </React.Fragment >
    );
}