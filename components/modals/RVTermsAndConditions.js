
import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { actionButtonTextConstants, miscMessage, TnCTexts } from '../../constants/Constants';
import { isCloseToBottom, saveUserAcceptedTerms } from '../../helper/Helper';
import { RVGenericStyles, RVStyles } from '../../styles/Styles';

export const RVTermsAndConditions = (props) => {
    const { acceptedTnC, setAcceptedTnC } = props
    return (
        <Modal animationType={`slide`} visible={acceptedTnC.showAcceptanceModal}>
            <View style={RVGenericStyles.alignItemsCenter}>
                <View style={RVStyles.disclaimerModalTitleTextView}>
                    <Text style={RVStyles.disclaimerTitleTextStyle}>{miscMessage.DISCLAIMER_PRIVACY_POLICY}</Text>
                    <View style={RVStyles.disclaimerModalTitleDivider} />
                </View>
                <ScrollView style={[RVStyles.tncContainer, RVGenericStyles.marginHorizontal10]} bounces
                    onScroll={({ nativeEvent }) => isCloseToBottom(nativeEvent) && setAcceptedTnC({ ...acceptedTnC, userAccepted: true })}>
                    <Text style={[RVGenericStyles.mv10, RVGenericStyles.ft14]}>{TnCTexts.LN1}</Text>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal]}>{TnCTexts.H1}</Text>
                    <Text style={RVGenericStyles.ft14}>{TnCTexts.LN2}</Text>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.marginBottom10]}>{TnCTexts.LN3}</Text>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal]}>{TnCTexts.H2}</Text>
                    <Text style={RVGenericStyles.ft14}>{TnCTexts.LN4}</Text>
                    <Text style={[RVGenericStyles.ml_8, RVGenericStyles.mv5]}>{miscMessage.BULLET} {TnCTexts.PT1}</Text>
                    <Text style={[RVGenericStyles.ml_8, RVGenericStyles.marginVertical2]}>{miscMessage.BULLET} {TnCTexts.PT2}</Text>
                    <Text style={[RVGenericStyles.ml_8, RVGenericStyles.marginVertical2]}>{miscMessage.BULLET} {TnCTexts.PT3}</Text>
                    <Text style={[RVGenericStyles.ml_8, RVGenericStyles.marginVertical2]}>{miscMessage.BULLET} {TnCTexts.PT4}</Text>
                    <Text style={[RVGenericStyles.ml_8, RVGenericStyles.marginBottom10]}>{miscMessage.BULLET} {TnCTexts.PT5}</Text>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal]}>{TnCTexts.H3}</Text>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.marginBottom10]}>{TnCTexts.LN5}</Text>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal]}>{TnCTexts.H4}</Text>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.marginBottom10]}>{TnCTexts.LN6}</Text>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal]}>{TnCTexts.H5}</Text>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.marginBottom10]}>{TnCTexts.LN7}</Text>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal]}>{TnCTexts.H6}</Text>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.marginBottom10]}>{TnCTexts.LN8}</Text>
                    <Text style={[RVGenericStyles.mv10, RVGenericStyles.ft14, RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal]}>{TnCTexts.FOOTER}</Text>
                </ScrollView>
                <TouchableOpacity disabled={!acceptedTnC.userAccepted} onPress={async () => await saveUserAcceptedTerms(acceptedTnC, setAcceptedTnC)}
                    style={acceptedTnC.userAccepted ? RVStyles.tncButton : RVStyles.tncButtonDisabled}>
                    <Text style={[RVGenericStyles.ft14, RVGenericStyles.colorWhite]}>{actionButtonTextConstants.PROCEED}</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}