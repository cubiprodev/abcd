import React from 'react';
import { View, Text } from 'react-native';
import { commonCSS, hp, wp } from '../../commonCSS/GlobalCss';
import { Colors } from '../../commonCSS/Colors';
import ImageComponent from './ImageComponent';
import { Images } from '../../assets';

export default function Filter() {
    return (
        <View style={{ marginTop: hp(1), backgroundColor: Colors.white }}>
            <View style={{
                ...commonCSS.fdralic,
                paddingVertical: hp(1),
                backgroundColor: Colors.white,
                paddingHorizontal: wp(4)
            }}>
                <ImageComponent source={Images.filter} height={3} width={hp(3)} mode={'contain'} />
                <Text style={{
                    ...commonCSS.subTextIB40012secText,
                    color: Colors.ThemeColorDark,
                    paddingHorizontal: wp(2),
                    top: hp(-0.2)
                }}>{`Filter (${2})`}</Text>
                <ImageComponent source={Images.forwardArrow} height={2.4} width={hp(2)} mode={'contain'} />
            </View>

            <View>
                {/* <FlatList
                        data={undefined}
                        renderItem={undefined} /> */}
            </View>
        </View>
    );
}
