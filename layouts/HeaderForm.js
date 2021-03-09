import React from 'react';
import { Image, View } from 'react-native';
import { numericConstants } from '../constants/Constants';

export const HeaderForm = (props) => {
    const { style, imagePath } = props
    return (
        <View style={style}>
            <Image source={imagePath} style={{
                height: props.height || numericConstants.ONE_HUNDRED_THIRTY, width: props.width || numericConstants.ONE_HUNDRED_THIRTY
            }} />
        </View>
    )
}