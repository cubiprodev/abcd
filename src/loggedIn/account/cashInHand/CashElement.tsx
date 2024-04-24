import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import { Colors } from '../../../commonCSS/Colors';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';

export default function CashElement() {
    return (
        <View style={{ paddingVertical: hp(1), ...commonCSS.line }}>
            <View style={{
                ...commonCSS.fdralic,
            }}>
                <View style={s.lightBlueZone}>
                    <Text style={s.lightBLueZoneText}>#1122</Text>
                </View>
                <View style={s.lightBlueZone}>
                    <Text style={s.lightBLueZoneText}>₹ 250</Text>
                </View>
                <View style={s.lightBlueZone}>
                    <Text style={[s.lightBLueZoneText, {
                        backgroundColor: Colors.ThemeColorDark,
                        paddingVertical: hp(0.5),
                        paddingHorizontal: wp(3),
                        borderRadius: hp(1),
                        color: Colors.whiteText
                    }]}>Cash</Text>
                </View>
            </View>

        </View>
    );
}

const s = StyleSheet.create({
    lightBlueZone: {
        width: wp(33.33),
        ...commonCSS.alicjc
    },
    lightBLueZoneText: {
        color: Colors.mainText,
        fontWeight: "400",
        fontSize: FontSize.fs13,
        fontFamily: Font.InterBlack
    },
});
