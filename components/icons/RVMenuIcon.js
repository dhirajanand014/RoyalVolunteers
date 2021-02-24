
import React from 'react';
import Svg, { Path } from "react-native-svg";
import { miscMessage, numericConstants } from '../../constants/Constants';
export const RVMenuIcon = () => {
    return (<Svg width={numericConstants.TWENTY} height={numericConstants.TWENTY} viewBox="0 0 24 24" fill={miscMessage.NONE} stroke="#000000" strokeWidth={numericConstants.TWO}
        strokeLinecap="round" strokeLinejoin="round" className="prefix__feather prefix__feather-menu">
        <Path d="M3 12h18M3 6h18M3 18h18" />
    </Svg>)
}