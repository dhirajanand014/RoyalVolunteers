import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, View, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import { RVPhoneIcon } from '../components/icons/RVPhoneIcon';
import { RVStyles } from '../styles/Styles';
import { availablilityStatusOptions, bloodGroupsList, formRequiredRules } from '../constants/Constants';
import { HeaderForm } from '../layouts/HeaderForm';
import * as Animatable from 'react-native-animatable';
import { Picker } from '@react-native-picker/picker'
import SwitchSelector from 'react-native-switch-selector';
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
            <Animatable.View animation={`fadeInUpBig`} style={RVStyles.signUpFooter}>
                <Text style={RVStyles.signUpTextHeader}>USER REGISTRATION</Text>
                <Animated.ScrollView>
                    <View style={RVStyles.signInUserInputView}>
                        <Text style={RVStyles.userInputTextView}>Name</Text>
                        <View style={RVStyles.userInput}>
                            <Controller name={"name"} control={control} defaultValue={``} rules={formRequiredRules.nameFormRule}
                                render={(props) => {
                                    return (
                                        <TextInput {...props} value={props.value} autoCapitalize="none"
                                            placeholder="Enter Your Name" style={RVStyles.signUpTextInput} placeholderTextColor="#999999"
                                            onChangeText={(value) => props.onChange(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''))} />
                                    )
                                }} />
                        </View>
                        <Text style={{ color: 'red' }}>{formState.errors.name?.message}</Text>
                    </View>
                    <View style={RVStyles.signInUserInputView}>
                        <Text style={RVStyles.userInputTextView}>Blood Group</Text>
                        <View style={RVStyles.userInput}>
                            <Controller name={"bloodGroup"} control={control} defaultValue={``} rules={formRequiredRules.nameFormRule}
                                render={(props) => {
                                    return (
                                        <Picker selectedValue={props.value} style={{ height: 50, width: 100 }}
                                            onValueChange={(itemValue) => props.onChange(itemValue)}>
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
                    </View>
                    <View style={RVStyles.signInUserInputView}>
                        <Text style={RVStyles.userInputTextView}>Pincode</Text>
                        <View style={RVStyles.userInput}>
                            <Controller name={"pinCode"} control={control} defaultValue={``} rules={formRequiredRules.pinCodeRule}
                                render={(props) => {
                                    return (
                                        <TextInput {...props} value={props.value} autoCapitalize="none"
                                            placeholder="Enter your area pincode" keyboardType={"number-pad"}
                                            style={RVStyles.signUpTextInput} placeholderTextColor="#999999"
                                            onChangeText={(value) => props.onChange(value.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, ''))} />
                                    )
                                }} />
                        </View>
                        <Text style={{ color: 'red' }}>{formState.errors.pinCode?.message}</Text>
                    </View>
                    <View style={RVStyles.signInUserInputView}>
                        <Text style={RVStyles.userInputTextView}>Status of availability</Text>
                        <View style={RVStyles.userInput}>
                            <Controller name={"availabilityStatus"} control={control} defaultValue={``} rules={formRequiredRules.pinCodeRule}
                                render={(props) => {
                                    return (
                                        <SwitchSelector initial={0} onPress={value => props.onChange(value)}
                                            hasPadding options={availablilityStatusOptions}
                                        />
                                    )
                                }} />
                        </View>
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