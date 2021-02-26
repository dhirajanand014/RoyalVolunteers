import React from 'react';
import Animated from 'react-native-reanimated';
import { HeaderForm } from './HeaderForm';

export const FormLayout = (props) => {

    const { headerComponents } = props;

    return (
        <Animated.View style={RVStyles.signUpContainer}>
            <HeaderForm {...headerComponents} />
        </Animated.View>
    )
}