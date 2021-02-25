
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { miscMessage } from '../../constants/Constants';
import { colors, RVGenericStyles, RVStyles } from '../../styles/Styles';

export const RVLoaderView = () => {
    return (
        <View style={[RVGenericStyles.fill, RVGenericStyles.alignItemsCenter, RVGenericStyles.justifyContentCenter,
        RVGenericStyles.opacitypt7, RVStyles.loader]} pointerEvents={miscMessage.NONE}>
            <ActivityIndicator color={colors.RED} shouldRasterizeIOS hidesWhenStopped style={RVGenericStyles.mt20} />
        </View>
    )
}