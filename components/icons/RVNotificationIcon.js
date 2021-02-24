
import React from 'react';
import Svg, { Path } from "react-native-svg";
import { miscMessage, numericConstants } from '../../constants/Constants';
export const RVNotificationIcon = () => {
    return (<Svg width={numericConstants.TWENTY} height={numericConstants.TWENTY} viewBox="0 0 24 24" fill={miscMessage.NONE} stroke="#000000" strokeWidth={numericConstants.TWO}
        strokeLinecap="round" strokeLinejoin="round" className="prefix__feather prefix__feather-bell">
        <Path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
    </Svg>)
}   