
import React from 'react';
import { Text, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { errorModalTitleConstants, miscMessage, numericConstants } from '../../constants/Constants';
import { colors, RVGenericStyles, RVStyles } from '../../styles/Styles';
import Stars from 'react-native-stars';
import { RVStarIcon } from '../icons/RVStarIcon';

export const RVDashBoardTestimonialSwiper = props => {
    const { userDashboard } = props;
    return (
        <SwiperFlatList autoplay autoplayLoop index={numericConstants.ZERO} disableGesture
            style={[RVStyles.testimonialSwiperList, RVGenericStyles.width1pt08]}>
            {
                userDashboard.testimonials.map((item, index) => {
                    return (
                        <View key={index} style={[RVGenericStyles.justifyContentCenter, RVStyles.testimonialsStyle, RVGenericStyles.width1pt08]}>
                            <Text style={[RVGenericStyles.textCenterAlign, RVGenericStyles.bold, RVGenericStyles.fontFamilyNormal]}>
                                {item.name || errorModalTitleConstants.NOT_AVAILABLE}
                            </Text>
                            <View style={[RVGenericStyles.alignItemsCenter, RVGenericStyles.justifyContentCenter, RVGenericStyles.padding10]}>
                                <Text numberOfLines={numericConstants.THREE} ellipsizeMode={miscMessage.TAIL} style={[RVGenericStyles.textLeftAlign, RVGenericStyles.textItalic]}>
                                    {item.testimonial_description}
                                </Text>
                            </View>
                            <View style={[RVGenericStyles.alignItemsCenter, RVGenericStyles.justifyContentCenter, RVGenericStyles.paddingHorizontal10]}>
                                <Stars default={parseInt(item.testimonial_rating) || numericConstants.ZERO} spacing={numericConstants.FOUR} count={numericConstants.FIVE} disabled
                                    fullStar={<RVStarIcon fill={colors.GREEN} strokeColor={colors.BLACK} height={numericConstants.TWENTY} width={numericConstants.TWENTY} />}
                                    emptyStar={<RVStarIcon fill={miscMessage.NONE} strokeColor={colors.BLACK} height={numericConstants.TWENTY} width={numericConstants.TWENTY} />} />
                            </View>
                        </View>
                    )
                })
            }
        </SwiperFlatList>
    )
}
