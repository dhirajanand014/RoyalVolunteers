
import React from 'react';
import Svg, { Path } from "react-native-svg";
import { miscMessage, numericConstants } from '../../constants/Constants';
import { colors } from '../../styles/Styles';
export const RVEditIcon = () => {
    return (<Svg width={numericConstants.TWENTY_FOUR} height={numericConstants.TWENTY_FOUR} viewBox="0 0 24 24" fill={miscMessage.NONE} stroke={colors.ORANGE} strokeWidth={numericConstants.TWO}
        strokeLinecap="round" strokeLinejoin="round" className="prefix__feather prefix__feather-edit-3">
        <Path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </Svg>)
}