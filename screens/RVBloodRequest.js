import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, Dimensions, Animated } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { RVStyles } from '../styles/Styles';
import { bloodGroupsList, formRequiredRules, neededOptions } from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import * as Animatable from 'react-native-animatable';
import { Picker } from '@react-native-picker/picker'
import DatePicker from 'react-native-datepicker';
import { SignUpContext } from '../App';
export const RVBloodRequest = () => {

    const navigation = useNavigation();
    const { handleSubmit, control, formState } = useForm();

    const { requestForm, setRequestForm } = useContext(SignUpContext);

    const { width } = Dimensions.get(`window`);

    const onSubmit = async (data) => {
        if (formState.isValid) {
            navigation.navigate('SignUp', {
                isFromRequestForm: true
            })
        }
    };

    return (
        <View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>USER REGISTRATION</Text>
                <Animated.ScrollView>
                    <View style={[RVStyles.signInUserInputView, { flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={RVStyles.userInputTextView}>Blood Group: </Text>
                        <Controller name={"bloodGroup"} control={control} defaultValue={``} rules={formRequiredRules.bloodGroupRule}
                            render={(props) => {
                                return (
                                    <Picker selectedValue={requestForm.blood_group} style={{ width: 220, height: 50 }}
                                        onValueChange={(itemValue) => {
                                            props.onChange(itemValue);
                                            setRequestForm({ ...requestForm, blood_group: itemValue })
                                        }}>
                                        {
                                            bloodGroupsList.map((bloodGroup) => {
                                                return (
                                                    <Picker.Item label={bloodGroup.label} value={bloodGroup.value} />
                                                )
                                            })
                                        }
                                    </Picker>
                                )
                            }} />
                    </View>
                    <Text style={{ color: 'red', alignItems: 'flex-start' }}>{formState.errors.bloodGroup?.message}</Text>
                    <View style={[RVStyles.signInUserInputView, { flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={RVStyles.userInputTextView}>Pincode: </Text>
                        <Controller name={"pinCode"} control={control} defaultValue={``} rules={formRequiredRules.pinCodeRule}
                            render={(props) => {
                                return (
                                    <TextInput maxLength={6} {...props} value={requestForm.pincode} autoCapitalize="none"
                                        placeholder="Enter your area pincode" keyboardType={"number-pad"}
                                        style={RVStyles.signUpTextInput} placeholderTextColor="#999999"
                                        onChangeText={(value) => {
                                            props.onChange(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''));
                                            setRequestForm({ ...requestForm, pincode: value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '') });
                                        }} />
                                )
                            }} />
                    </View>
                    <Text style={{ color: 'red', alignItems: 'flex-start' }}>{formState.errors.pinCode?.message}</Text>
                    <View style={RVStyles.signInUserInputView, { flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[RVStyles.userInputTextView, { paddingHorizontal: 10 }]}>Needed :</Text>
                        {
                            neededOptions.map((item) => {
                                return (<React.Fragment>
                                    <TouchableOpacity style={RVStyles.neededRadioCircle} onPress={() => setRequestForm({ ...requestForm, needed_request: item.value })}>
                                        {item.value == requestForm.needed_request &&
                                            <View style={RVStyles.neededSelectedRb} />}
                                    </TouchableOpacity>
                                    <Text style={{ marginRight: 35, fontSize: 14 }}>{item.label}</Text>
                                </React.Fragment>
                                )
                            })
                        }
                    </View>
                    <View style={{ alignItems: 'flex-end', marginRight: 10, marginTop: 10 }}>
                        {
                            requestForm.needed_request == 'Date' &&
                            <Controller name={`datePicker`} defaultValue={``} control={control} rules={formRequiredRules.datePickerFormRule} render={(props) => (
                                <DatePicker minDate={new Date()} mode={`date`} date={requestForm.needed_request_date} onDateChange={(value) => {
                                    props.onChange(value);
                                    setRequestForm({ ...requestForm, needed_request_date: value });
                                }} placeholder={`Select Date`} format={`DD/MM/YYYY`} />
                            )} />
                        }
                        <Text style={{ color: 'red' }}>{formState.errors.datePicker?.message}</Text>
                    </View>
                    <View style={RVStyles.signInUserInputView}>
                        <Text style={RVStyles.userInputTextView}>HospitalName :</Text>
                        <View>
                            <Controller name={"hospitalName"} control={control} defaultValue={``} rules={formRequiredRules.hospitalNameFormRule}
                                render={(props) => {
                                    return (
                                        <TextInput {...props} value={requestForm.hospital} autoCapitalize="none" placeholder="Enter hospital name"
                                            style={[RVStyles.signUpTextInput, { marginLeft: 15 }]} placeholderTextColor="#999999"
                                            onChangeText={(value) => {
                                                props.onChange(value);
                                                setRequestForm({ ...requestForm, hospital: value });
                                            }} multiline={true} underlineColorAndroid='transparent' numberOfLines={2} />
                                    )
                                }} />
                        </View>
                        <Text style={{ color: 'red' }}>{formState.errors.hospitalName?.message}</Text>
                    </View>
                </Animated.ScrollView>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: `column`, alignItems: 'center', marginBottom: 50, elevation: 8 }} onPress={handleSubmit(onSubmit)} >
                    <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center' }} colors={[`#FF00CC`, `red`]}>
                        <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>Request</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animatable.View>
        </View >
    )
}