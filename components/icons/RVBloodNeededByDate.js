
import React from 'react';
import Svg, { Circle, Path } from "react-native-svg";
import { numericConstants } from '../../constants/Constants';
import { colors } from '../../styles/Styles';
export const RVBloodNeededByDate = props => {
    return (<Svg width={props.width} height={props.height} fill={colors.YELLOW} stroke={colors.WHITE} strokeLinecap="round" strokeLinejoin="round"
        strokeWidth={numericConstants.TWO} className="feather feather-clock" viewBox="0 0 24 24">
        <Circle cx={numericConstants.TWELVE} cy={numericConstants.TWELVE} r={numericConstants.TEN} />
        <Path d="M12 6L12 12 16 14" />
    </Svg>)
}