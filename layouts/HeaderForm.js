import React from 'react';
import { Image, View } from 'react-native';

export const HeaderForm = (props) => {
    const { style, imagePath } = props
    return (
        <View style={style}>
            <Image source={imagePath} />
        </View>
    )
}