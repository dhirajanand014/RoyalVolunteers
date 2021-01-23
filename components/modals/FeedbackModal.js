import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Snackbar from "react-native-snackbar";
import { formRequiredRules, stringConstants } from "../../constants/Constants";
import { saveFeedbackText } from "../../helper/Helper";
import { colors } from "../../styles/Styles";

export const FeedbackModal = props => {

    const { handleSubmit, control } = useForm();
    const { userDashboardState, setUserDashboadState, phoneNumber } = props;

    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22
        }} >
            <Modal animationType="fade" transparent visible={userDashboardState.showFeedbackModal} onRequestClose={() => {
                setUserDashboadState({ ...userDashboardState, showFeedbackModal: false })
            }} >
                <View style={{
                    flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop: 22
                }}>
                    <View style={{
                        margin: 200,
                        backgroundColor: "white",
                        borderRadius: 20,
                        padding: 35,
                        width: 300,
                        height: 300,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5
                    }}>
                        <Controller name={"feedback"} control={control} defaultValue={``} rules={formRequiredRules.feedBackInputRule}
                            render={(props) => {
                                return (
                                    <TextInput {...props} value={props.value} placeholder={`Enter Feedback`} maxLength={1000}
                                        style={{ borderWidth: 1, borderRadius: 5, width: '100%', height: '80%', justifyContent: 'center' }} placeholderTextColor="#999999" numberOfLines={4}
                                        onChangeText={(value) => {
                                            props.onChange(value);
                                            console.log(props.value)
                                        }} />
                                )
                            }} />
                        <TouchableOpacity activeOpacity={.7} style={{
                            borderRadius: 25,
                            paddingHorizontal: 20,
                            paddingVertical: 15,
                            marginVertical: 15,
                            width: 150,
                            elevation: 3,
                            backgroundColor: colors.YELLOW
                        }} onPress={handleSubmit(async data => {
                            const feedbackResponse = await saveFeedbackText(data.feedback, phoneNumber);
                            if (feedbackResponse)
                                Snackbar.show(`Feedback submitted successfully`, Snackbar.LENGTH_SHORT);
                        })}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View >
    );
};