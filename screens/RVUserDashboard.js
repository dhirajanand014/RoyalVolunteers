import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, Dimensions, Animated } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { RVStyles } from '../styles/Styles';
import { availablilityStatusOptions, bloodGroupsList, formRequiredRules } from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import * as Animatable from 'react-native-animatable';
import { Picker } from '@react-native-picker/picker'
import SwitchSelector from 'react-native-switch-selector';
import { RVMenuIcon } from '../components/icons/RVMenuIcon';
import { RVNotificationIcon } from '../components/icons/RVNotificationIcon';
export const RVUserRegistration = () => {

    const navigation = useNavigation();
    const { handleSubmit, control, formState } = useForm();

    const { width } = Dimensions.get(`window`);

    const onSubmit = (data) => {
        console.log(data, 'data');
    };
    return (
        <View style={RVStyles.headerContainer}>
            <HeaderForm style={RVStyles.headerImage} imagePath={require(`../assets/rv_home_logo.png`)} />
            <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <RVMenuIcon />
                <View style={{ flexDirection: `row` }}>
                    <RVNotificationIcon />
                </View>
            </View>
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>DASHBOARD</Text>
                <Animated.ScrollView>
                    <View style={[RVStyles.signInUserInputView, { flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={RVStyles.userInputTextView}>Name: </Text>
                        <Controller name={"name"} control={control} defaultValue={``} rules={formRequiredRules.nameFormRule}
                            render={(props) => {
                                return (
                                    <TextInput {...props} value={props.value} placeholder={`Enter Name`}
                                        style={RVStyles.underlineTextInput} placeholderTextColor="#999999"
                                        onChangeText={(value) => {
                                            props.onChange(value);
                                        }} />
                                )
                            }} />
                    </View>
                    <Text style={{ color: 'red' }}>{formState.errors.name?.message}</Text>
                    <View style={[RVStyles.signInUserInputView, { flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={RVStyles.userInputTextView}>Blood Group: </Text>
                        <Controller name={"bloodGroup"} control={control} defaultValue={``} rules={formRequiredRules.bloodGroupRule}
                            render={(props) => {
                                return (
                                    <Picker selectedValue={props.value} style={{ width: 220, height: 50 }}
                                        onValueChange={(itemValue) => {
                                            props.onChange(itemValue);
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
                    <Text style={{ color: 'red' }}>{formState.errors.bloodGroup?.message}</Text>
                    <View style={[RVStyles.signInUserInputView, { flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={RVStyles.userInputTextView}>Pincode: </Text>
                        <Controller name={"pinCode"} control={control} defaultValue={``} rules={formRequiredRules.pinCodeRule}
                            render={(props) => {
                                return (
                                    <TextInput maxLength={6} {...props} value={props.value} autoCapitalize="none"
                                        placeholder="Enter your area pincode" keyboardType={"number-pad"}
                                        style={RVStyles.signUpTextInput} placeholderTextColor="#999999"
                                        onChangeText={(value) => {
                                            props.onChange(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''));
                                        }} />
                                )
                            }} />
                    </View>
                    <Text style={{ color: 'red' }}>{formState.errors.pinCode?.message}</Text>
                    <View style={[RVStyles.signInUserInputView, { flexDirection: 'row', alignItems: 'center' }]}>
                        <Text style={RVStyles.userInputTextView}>Status of availability :</Text>
                        <Controller name={"availabilityStatus"} control={control} defaultValue={``}
                            render={(props) => {
                                return (
                                    <SwitchSelector initial={0} onPress={value => props.onChange(value)} initial={1}
                                        hasPadding options={availablilityStatusOptions} fontSize={12} style={{ width: 150 }}
                                    />
                                )
                            }} />
                        <Text style={{ color: 'red' }}>{formState.errors.availabilityStatus?.message}</Text>
                    </View>
                </Animated.ScrollView>
                <TouchableOpacity activeOpacity={.7} style={{ flexDirection: `column`, alignItems: 'center', elevation: 8 }} onPress={handleSubmit(onSubmit)} >
                    <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center' }} colors={[`#FF00CC`, `red`]}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Submit</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}