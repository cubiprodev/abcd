import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import { Colors } from '../../../commonCSS/Colors';
import ImageComponent from '../../../component/custom/ImageComponent';
import { Images } from '../../../assets';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';

export default function AccordionLead({ label, labelCount, navigation }: { label: string, labelCount: string, navigation: any }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <View style={s.m}>
            <TouchableOpacity
                style={s.r1}
                onPress={() => { setIsExpanded(!isExpanded) }}
            >
                <Text style={s.t1}>{label} {`(${labelCount})`}</Text>

                <ImageComponent
                    source={isExpanded ? Images.upArrowBlack : Images.downArrowBlack}
                    height={1.5} width={hp(1.5)} mode={'cover'} />
            </TouchableOpacity>

            {isExpanded &&
                <View>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('AllLead', { key: label }) }}
                        style={s.r2}>
                        <Text style={s.lt1}>{label}</Text>
                        <View style={s.z1}>
                            <Text style={s.lt2}>{labelCount}</Text>
                            <ImageComponent source={Images.rightFullArrow} height={2} width={hp(2)} mode={'cover'} />
                        </View>
                    </TouchableOpacity>

                    
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
    r2: {
        height: hp(10),
        width: wp(35),
        backgroundColor: Colors.backgroundColorf8,
        paddingLeft: wp(4),
        paddingTop: hp(1.5),
        marginTop: hp(1.5),
        borderRadius: hp(1)
    },
    lt1: {
        fontFamily: Font.InterBlack,
        fontWeight: '400',
        fontSize: FontSize.fs12,
        color: Colors.secondaryText94
    },
    z1: {
        ...commonCSS.fdralic,
        justifyContent: 'space-between',
        marginTop: hp(1.5),
        paddingRight: wp(4)
    },
    lt2: {
        fontFamily: Font.InterBlack,
        fontWeight: '700',
        fontSize: FontSize.fs18,
        color: Colors.mainText
    },

})