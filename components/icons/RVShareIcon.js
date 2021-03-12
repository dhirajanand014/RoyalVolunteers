
import React from 'react';
import Svg, { Circle, Path } from "react-native-svg";
import { miscMessage, numericConstants } from '../../constants/Constants';
export const RVShareIcon = () => {
    return (<Svg width={numericConstants.TWENTY} height={numericConstants.TWENTY} viewBox="0 0 24 24" fill={miscMessage.NONE}
        stroke="#000000" strokeWidth={numericConstants.TWO} strokeLinecap="round" strokeLinejoin="round" className="prefix__feather prefix__feather-share-2">
        <Circle cx={numericConstants.EIGHTEEN} cy={numericConstants.FIVE} r={numericConstants.THREE} />
        <Circle cx={numericConstants.SIX} cy={numericConstants.TWELVE} r={numericConstants.THREE} />
        <Circle cx={numericConstants.EIGHTEEN} cy={numericConstants.NINETEEN} r={numericConstants.THREE} />
        <Path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </Svg>)
}