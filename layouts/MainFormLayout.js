import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import { FooterForm } from './FooterForm';
import { HeaderForm } from './HeaderForm';

export const FormLayout = (props) => {

    const { headerComponents, footerComponents } = props;

    return (
        <Animated.View style={RVStyles.signUpContainer}>
            <HeaderForm {...headerComponents} />
            <FooterForm {...footerComponents} />
        </Animated.View>
    )
}