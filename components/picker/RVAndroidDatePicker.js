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
            <View style={RVStyles.androidDatePickerViewStyle}>
                <TouchableOpacity onPress={() => setShow(true)}>
                    <Text style={RVGenericStyles.centerAlignedText}>{props.requestForm.needed_request_date
                        && moment(props.requestForm.needed_request_date).format(miscMessage.DATE_PICKER_FORMAT) || miscMessage.SELECT_DATE}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setShow(true)}>
                    <Image source={image} style={[RVStyles.androidDatePickerCalenderIcon, RVGenericStyles.centerAlignedText]} />
                </TouchableOpacity>
                {
                    show &&
                    <Controller name={props.inputName} control={props.control} defaultValue={props.defaultValue} rules={props.rules} render={(datePickerProps) => (
                        <DateTimePicker minimumDate={props.minimumDate} display={props.display} mode={props.mode} value={props.requestForm.needed_request_date}
                            onChange={(event, date) => {
                                setShow(false);
                                convertDate(event, datePickerProps, props, date);
                            }} is24Hour={false} />
                    )} />
                }
            </View>
        </React.Fragment>
    );
}