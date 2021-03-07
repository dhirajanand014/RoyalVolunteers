
import React from 'react';
import Svg, { Path } from "react-native-svg";
import { numericConstants } from '../../constants/Constants';
export const RVStarIcon = props => {
    return (<Svg width={props.width} height={props.height} fill={props.fill} stroke={props.strokeColor}
        strokeLinecap="round" strokeLinejoin="round" strokeWidth={numericConstants.TWO} className="feather feather-star"
        viewBox="0 0 24 24" >
        <Path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
    </Svg>)
}