import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ImageComponent from './custom/ImageComponent';
import { commonCSS, hp, wp } from '../commonCSS/GlobalCss';
import { Colors } from '../commonCSS/Colors';

export default function ButtonWithImage({ image, label, onPress }: { image: any, label: string, onPress: any }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ ...commonCSS.fdralic, marginVertical: hp(1) }}>
            <ImageComponent source={image} height={2.5} width={hp(2.5)} mode={'contain'} />
            <Text style={{ ...commonCSS.titleMB70016, color: Colors.mainText, paddingLeft: wp(4) }}>{label}</Text>
        </TouchableOpacity>
    );
}
