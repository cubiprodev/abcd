import React from 'react';
import { View, Text } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import { Colors } from '../../../commonCSS/Colors';
import ImageComponent from '../../../component/custom/ImageComponent';
import { Images } from '../../../assets';

export default function LeadElementText({ label, labelDesc }: { label: string, labelDesc: string }) {
    return (
        <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>
            <View style={{ ...commonCSS.fdralic, }}>
                <Text style={{
                    fontFamily: Font.InterBlack,
                    fontWeight: '400',
                    fontSize: FontSize.fs12,
                    color: Colors.primartText
                }}>{label}:</Text>

                <Text style={{
                    fontFamily: Font.InterBlack,
                    fontWeight: '700',
                    fontSize: FontSize.fs12,
                    color: Colors.primartText
                }}>{` `}{labelDesc}</Text>
            </View>
            {label.toLowerCase() === 'status' &&
                <ImageComponent source={Images.rightFullArrow} height={2} width={wp(4)} mode={'cover'} />
            }
        </View>
    );
}
