import React from 'react';
import { View } from 'react-native';
export const FooterForm = () => {
    return (
        <View style={RVStyles.signUpFooter}>
            <Text style={RVStyles.signUpTextHeader}>SIGN UP</Text>
            <Animated.ScrollView>
                <View style={RVStyles.userInputView}>
                    <Text style={RVStyles.userInputTextView}>Mobile Number</Text>
                    <View style={RVStyles.userInput}>
                        <RVPhoneIcon />
                        <Controller name={"phoneNumber"} control={control} defaultValue={``} rules={formRequiredRules.mobileInputFormRule}
                            render={(props) => {
                                return (
                                    <TextInput {...props} maxLength={10} value={signUpDetails.phoneNumber} autoCapitalize="none"
                                        placeholder="Enter 10 digit Mobile Number" onBlur={(value) => props.onBlur(value)}
                                        keyboardType={"numeric"} style={RVStyles.signUpTextInput} placeholderTextColor="#999999"
                                        onChangeText={(value) => {
                                            props.onChange(value);
                                            setSignUpDetails({ ...signUpDetails, phoneNumber: value });
                                        }} />
                                )
                            }} />
                        <Text>{errors.phoneNumber?.message}</Text>
                    </View>
                </View>
            </Animated.ScrollView>
            <TouchableOpacity activeOpacity={.7} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 150, elevation: 8 }} onPress={handleSubmit(onSubmit)} >
                <LinearGradient style={{ width: width / 1.35, height: 50, justifyContent: 'center', borderRadius: 20, alignItems: 'center', marginTop: 50 }} colors={[`#FF00CC`, `red`]}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Proceed</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}