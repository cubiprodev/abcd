import React from 'react';
import { View, Text } from 'react-native';
import ImageComponent from '../../../component/custom/ImageComponent';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import { Images } from '../../../assets';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import { Colors } from '../../../commonCSS/Colors';
import LeadElementText from './LeadElementText';

export default function LeadElement({ heading, status, product }: { heading: string, status: string, product: string }) {
    return (
        <View style={{
            ...commonCSS.shadowBox,
            ...commonCSS.boxShadowx,
        }}>
            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>

                <View style={{ ...commonCSS.fdralic }}>
                    <View style={{
                        height: hp(3.5),
                        width: hp(3.5),
                        borderRadius: hp(1.75),
                    }}>
                        <ImageComponent source={Images.profile} height={3.5} width={hp(3.5)} mode={'cover'} />
                    </View>
                    <Text style={{
                        fontFamily: Font.InterBlack,
                        fontSize: FontSize.fs14,
                        fontWeight: '700',
                        color: Colors.mainText,
                        paddingLeft: wp(4)
                    }}>{heading}</Text>
                </View>

                <View style={{
                    height: hp(3),
                    width: wp(10),
                    backgroundColor: status.toLowerCase() === 'junk' ? Colors.error : Colors.success,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        ...commonCSS.smallfw400fs10,
                        fontFamily: Font.InterBlack,
                        color: Colors.white,
                        textAlign: 'center'
                    }}>{status}</Text>
                </View>
            </View>

            <View style={{ ...commonCSS.line, paddingTop: hp(1.5) }}></View>

            <View style={{ paddingTop: hp(1) }}>
                <LeadElementText label={'Product'} labelDesc={product} />
            </View>
            <View style={{ paddingTop: hp(0.5) }}>
                <LeadElementText label={'Status'} labelDesc={status} />
            </View>
        </View>
    );
}

