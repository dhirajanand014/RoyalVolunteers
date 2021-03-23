
import React from 'react';
import Svg, { Circle, Path } from "react-native-svg";
import { numericConstants } from '../../constants/Constants';
import { colors } from '../../styles/Styles';
export const RVCloseIcon = (props) => {
    return (<Svg width={props.width} height={props.height} viewBox="0 0 24 24" fill={colors.WHITE} stroke={colors.RED}
        strokeWidth={numericConstants.TWO} strokeLinecap="round" strokeLinejoin="round" className="prefix__feather prefix__feather-x-circle">
        <Circle cx={numericConstants.TWELVE} cy={numericConstants.TWELVE} r={numericConstants.TEN} />
        <Path d="M15 9l-6 6M9 9l6 6" />
    </Svg>)
}