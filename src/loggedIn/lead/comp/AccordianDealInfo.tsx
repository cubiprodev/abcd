import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import { Colors } from '../../../commonCSS/Colors';
import ImageComponent from '../../../component/custom/ImageComponent';
import { Images } from '../../../assets';

export default function AccordianDealInfo({ label, labelImage }: { label: string, labelImage: any }) {
    const [isExpanded, setIsExpanded] = useState(false);


    return (
        <View style={s.m}>
            <TouchableOpacity
                style={s.r1}
                onPress={() => { setIsExpanded(!isExpanded) }}
            >
                <View style={{ ...commonCSS.fdralic, }}>
                    <View style={{ paddingRight: wp(3) }}>
                        <ImageComponent source={labelImage} height={3} width={hp(3)} mode={'contain'} />
                    </View>
                    <Text style={s.t1}>{label}</Text>
                </View>

                <ImageComponent
                    source={isExpanded ? Images.upArrowBlack : Images.downArrowBlack}
                    height={1.5} width={hp(1.5)} mode={'cover'} />
            </TouchableOpacity>

            {isExpanded &&
                <View style={{ marginTop: hp(1.5) }}>

                    <View style={{ ...commonCSS.dottedLine }}></View>
                    <Text style={s.t2}>{`No ${label} Added`}</Text>
                </View>
            }
        </View>
    );
}



const s = StyleSheet.create({
    m: {
        ...commonCSS.shadowBox,
        ...commonCSS.boxShadowx,
    },
    r1: {
        ...commonCSS.fdralic,
        justifyContent: 'space-between'
    },
    t1: {
        fontFamily: Font.InterBlack,
        fontWeight: '700',
        fontSize: FontSize.fs14,
        color: Colors.mainText
    },
    t2: {
        fontFamily: Font.InterBlack,
        fontWeight: '400',
        fontSize: FontSize.fs14,
        color: Colors.mainText,
        marginTop: hp(1.5)
    },
})