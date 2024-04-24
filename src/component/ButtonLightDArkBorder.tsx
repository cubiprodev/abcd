import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ImageComponent from './custom/ImageComponent';
import { commonCSS, hp, wp } from '../commonCSS/GlobalCss';
import Font from '../commonCSS/Font';
import FontSize from '../commonCSS/FontSize';
import { Colors } from '../commonCSS/Colors';

export default function ButtonLightDArkBorder({ image, label, onPressButton, width }: { image: any, label: string, onPressButton: any, width: num }) {
    return (
        <TouchableOpacity
            onPress={onPressButton}
            style={[s.btn, { width: width ? wp(width) : wp(35) }]}>
            <ImageComponent source={image} height={2} width={hp(2)} mode={'contain'} />
            <Text style={{
                fontFamily: Font.InterBlack,
                fontSize: FontSize.fs12,
                fontWeight: '400',
                color: Colors.mainText,
                paddingLeft: wp(2)
            }}>{label}</Text>
        </TouchableOpacity>
    );
}

const s = StyleSheet.create({
    btn: {
        ...commonCSS.fdralic,
        backgroundColor: Colors.lightBrandColor,
        borderWidth: hp(0.1),
        borderColor: Colors.ThemeColorDark,
        paddingVertical: hp(0.6),
        paddingHorizontal: wp(2),
        borderRadius: hp(0.7),
        justifyContent: 'center'
    }
})