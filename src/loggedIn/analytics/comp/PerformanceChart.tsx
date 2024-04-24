import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import ImageComponent from '../../../component/custom/ImageComponent';
import { Colors } from '../../../commonCSS/Colors';
import { Images } from '../../../assets';
import FontSize from '../../../commonCSS/FontSize';
import { routeDaySelection } from '../../../data/Data';
import Font from '../../../commonCSS/Font';

export default function PerformanceChart({ data }: { data: any }) {
    console.log('data::::::::::::', data);
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <View style={{
            ...commonCSS.shadowBox,
            borderWidth: hp(0.15),
            borderColor: Colors.borderColorECECEC,
            marginTop: hp(1),//
            alignItems: 'center',
            paddingHorizontal: wp(3.5),//
            borderRadius: hp(1),
            backgroundColor: Colors.white,
            width: wp(30),
            paddingVertical: hp(2),
            marginLeft: wp(4)
        }}>
            <View style={{
                height: hp(3),
                width: hp(3),
                borderRadius: hp(1.5),
                backgroundColor: Colors.inactivegreyE9E9E9,
                ...commonCSS.alicjc
            }}>
                <ImageComponent
                    source={data.trend.toLowerCase() === 'bullish' ? Images.bullish : Images.bearish}
                    height={1.5} width={hp(1.5)} mode={'contain'} />
            </View>

            <Text style={{
                ...commonCSS.titleMB70016,
                fontSize: FontSize.fs18,
                color: Colors.mainText,
                marginTop: hp(1)
            }}>{data.price}</Text>

            <Text style={{
                ...commonCSS.subTextIB40012secText,
                color: Colors.mainText,
                marginTop: hp(1),
                width: wp(13)
            }}>{data.label}</Text>
        </View>
    );
}
