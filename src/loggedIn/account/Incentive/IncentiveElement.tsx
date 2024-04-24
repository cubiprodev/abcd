import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import { Images } from '../../../assets';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import { Colors } from '../../../commonCSS/Colors';
import ImageComponent from '../../../component/custom/ImageComponent';

export default function IncentiveElement({ label }: { label: string, }) {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <View style={s.m}>
            <TouchableOpacity
                style={s.r1}
                onPress={() => { setIsExpanded(!isExpanded) }}
            >
                <View style={{ ...commonCSS.fdralic, }}>
                    <Text style={s.t1}>Kalpavriksha - </Text>
                    <Text style={s.t1a}>{label}</Text>
                </View>

                <ImageComponent
                    source={isExpanded ? Images.upArrowBlack : Images.downArrowBlack}
                    height={1.5} width={hp(1.5)}
                    mode={'cover'}
                />

            </TouchableOpacity>

            {isExpanded &&
                <View style={{ marginTop: hp(1.5) }}>
                    <Text style={{
                        fontFamily: Font.InterBlack,
                        fontSize: FontSize.fs14,
                        fontWeight: '700',
                        color: Colors.secondaryText94
                    }}>Rules:</Text>
                    <Text style={s.t2}>{'● Lorem ipsum dolor sit amet consectetur.'}</Text>
                    <Text style={s.t2}>{'● Lorem ipsum dolor sit amet consectetur.'}</Text>
                    <Text style={s.t2}>{'● Lorem ipsum dolor sit amet consectetur.'}</Text>
                    <Text style={s.t2}>{'● Lorem ipsum dolor sit amet consectetur.'}</Text>
                    <Text style={s.t2}>{'● Lorem ipsum dolor sit amet consectetur.'}</Text>
                    <Text style={s.t2}>{'● Lorem ipsum dolor sit amet consectetur.'}</Text>
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
        color: Colors.black
    },

    t1a: {
        fontFamily: Font.InterBlack,
        fontWeight: '500',
        fontSize: FontSize.fs14,
        color: Colors.mainText
    },
    t2: {
        fontFamily: Font.InterBlack,
        fontWeight: '400',
        fontSize: FontSize.fs14,
        color: Colors.primartText,
        marginTop: hp(1.5),
        // textDecorationStyle: 'dashed'
    },
})
