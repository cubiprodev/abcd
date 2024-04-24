import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonCSS } from '../commonCSS/GlobalCss';
import { Colors } from '../commonCSS/Colors';
import Font from '../commonCSS/Font';
import ImageComponent from './custom/ImageComponent';
import { Images } from '../assets';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TextComponent from './custom/TextComponent';
import FontSize from '../commonCSS/FontSize';

export default function TargetElement({ productName, revenue, achivedRevenue, daysLeft }:
    { productName: string, revenue: number | string, achivedRevenue: number | string, daysLeft: number }) {
    return (
        <View>
            <View style={styles.main}>
                <Text style={styles.product}>{productName}</Text>
                <View style={styles.chartZone}>
                    <ImageComponent source={Images.chart} height={3} width={hp(3)} mode={'contain'} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    <TextComponent txtLabel={`₹ ${revenue}`} fontColor={Colors.white} fontFamily={Font.poppinsBlack}
                        fWeight={'500'} fSize={FontSize.fs24} textAlign={''} marginTop={1.5} fontLineHeight={''} />
                    <TextComponent txtLabel={`    Weekly Revenue`} fontColor={Colors.white} fontFamily={Font.InterBlack}
                        fWeight={'400'} fSize={FontSize.fs10} textAlign={''} marginTop={1.5} fontLineHeight={''} />
                </View>
            </View>
            <View style={styles.secondHalf}>
                <View style={{ ...commonCSS.fdralic }}>
                    <Text style={styles.achieved}>Achieved</Text>
                    <Text style={styles.achivedRevenue}>{`₹${achivedRevenue}`}</Text>
                </View>
                <Text style={styles.daysLeft}>{daysLeft} Days Left!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    product: { ...commonCSS.smallfw500fs10, fontFamily: Font.InterBlack, color: Colors.white },
    main: {
        ...commonCSS.box,
        backgroundColor: Colors.targetBackgroundColor,
        borderBottomEndRadius: 0,
        borderBottomStartRadius: 0,
        paddingHorizontal: wp(6)
    },
    chartZone: {
        position: 'absolute',
        top: hp(1),
        right: hp(1),
    },
    secondHalf: {
        backgroundColor: Colors.cF1F1F1,
        flex: 1,
        paddingVertical: hp(1),
        paddingLeft: wp(4),
        ...commonCSS.fdralic,
        justifyContent: 'space-between',
        borderBottomEndRadius: hp(1),
        borderBottomStartRadius: hp(1),
    },
    daysLeft: { ...commonCSS.smallfw600fs10, color: Colors.error, paddingRight: wp(3) },
    achivedRevenue: { ...commonCSS.smallfw700fs10, fontFamily: Font.MontserratBlack, color: Colors.brandGreen, paddingLeft: wp(4) },
    achieved: { ...commonCSS.smallfw400fs10, fontFamily: Font.InterBlack, color: Colors.targetBackgroundColor },
})
