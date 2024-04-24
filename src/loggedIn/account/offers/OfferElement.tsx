import React from 'react';
import { View, Text } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import { Colors } from '../../../commonCSS/Colors';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import ImageComponent from '../../../component/custom/ImageComponent';
import { Images } from '../../../assets';

export default function OfferElement({ imageHidden }: { imageHidden: boolean }) {
    return (
        <View style={{ marginVertical: hp(1), backgroundColor: Colors.white, ...commonCSS.pvh }}>
            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between', }}>
                <Text style={{
                    ...commonCSS.titleMB70016,
                    color: Colors.mainText
                }}>Offer 1</Text>
                <Text style={{
                    ...commonCSS.titleMB70016,
                    color: Colors.mainText
                }}>Valid till: 12/10/23</Text>
            </View>

            <Text style={{
                fontFamily: Font.InterBlack,
                fontWeight: '400',
                fontSize: FontSize.fs11,
                color: Colors.secondaryText94,
                marginTop: hp(1.5),
                width: wp(75),
            }}>Lorem ipsum dolor sit amet consectetur. Commodo in bibendum ligula enim</Text>

            {imageHidden === true ? null :
                <View style={{
                    marginTop: hp(1.5),
                    backgroundColor: 'red',
                    height: hp(20),
                    width: wp(92),
                    borderRadius: hp(1.5),
                    overflow: 'hidden'
                }}>
                    <ImageComponent source={Images.offers} height={20} width={wp(92)} mode={'cover'} />
                </View>
            }
        </View>
    );
}
