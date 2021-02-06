
import React from 'react';
import Svg, { Path } from "react-native-svg";
import { colors } from '../../styles/Styles';
export const RVSaveIcon = () => {
    return (<Svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke={colors.GREEN} strokeWidth={2}
        strokeLinecap="round" strokeLinejoin="round" className="prefix__feather prefix__feather-check-circle" >
        <Path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <Path d="M22 4L12 14.01l-3-3" />
    </Svg>)
}