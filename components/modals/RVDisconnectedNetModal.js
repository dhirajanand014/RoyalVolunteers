
import React from 'react';
import { Modal, Text, View } from 'react-native';
import { errorBoundaryStyles, RVGenericStyles } from '../../styles/Styles';
import { RVCloseIcon } from '../icons/RVCloseIcon';
import * as Animatable from 'react-native-animatable';
import { miscMessage, numericConstants } from '../../constants/Constants';

export const RVDisconnectedNetModal = (props) => {
    return (
        <Modal animationType={`slide`} visible={!props.isConnected}>
            <View style={[errorBoundaryStyles.container, RVGenericStyles.justifyContentCenter]}>
                <View style={[RVGenericStyles.alignItemsCenter, RVGenericStyles.paddingHorizontal10]}>
                    <Animatable.View animation={`fadeIn`} iterationCount={miscMessage.INFINITE}
                        style={[RVGenericStyles.alignItemsCenter, RVGenericStyles.mv15]}>
                        <RVCloseIcon width={numericConstants.ONE_HUNDRED} height={numericConstants.ONE_HUNDRED} />
                    </Animatable.View>
                    <Text style={[RVGenericStyles.ft24, RVGenericStyles.textCenterAlign, RVGenericStyles.mv15]}>
                        {miscMessage.CHECK_CONNECTION_DETAILS}
                    </Text>
                </View>
            </View>
        </Modal>);
}