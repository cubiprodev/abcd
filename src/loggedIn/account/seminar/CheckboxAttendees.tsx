import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ImageComponent from '../../../component/custom/ImageComponent';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import { Colors } from '../../../commonCSS/Colors';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';

export default function CheckBoxAttendees({ images, name, number, onSelect }: { images: any, name: string, number: string, onSelect: any }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        onSelect(name, !isChecked);
    };


    return (
        <TouchableOpacity
            onPress={handleCheckboxChange}
            style={{
                ...commonCSS.fdralic,
                ...commonCSS.boxShadowx,
                ...commonCSS.shadowBox,
                justifyContent: 'space-between',
                // paddingVertical: hp(1)
            }}>
            <View style={{
                ...commonCSS.fdralic,
            }}>
                <View style={{
                    height: hp(4),
                    width: hp(4),
                    borderRadius: hp(2),
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'red',
                    overflow: 'hidden'
                }}>
                    <ImageComponent source={images} height={4} width={hp(4)} mode={'cover'} />
                </View>

                <View style={{
                    paddingLeft: wp(5)
                }}>
                    <Text style={{
                        fontFamily: Font.InterBold,
                        fontWeight: '700',
                        fontSize: FontSize.fs16,
                        color: Colors.mainText
                    }}>{name}</Text>
                    <Text style={{
                        fontFamily: Font.InterBold,
                        fontWeight: '500',
                        fontSize: FontSize.fs14,
                        color: Colors.secondaryText94
                    }}>{number}</Text>
                </View>
            </View>



            {isChecked === false ?
                <View style={{
                    height: hp(2),
                    width: hp(2),
                    borderRadius: hp(1),
                    borderWidth: hp(0.1),
                    borderColor: Colors.grey969696
                }}>
                </View>
                :
                <View style={{
                    height: hp(2),
                    width: hp(2),
                    borderRadius: hp(1),
                    backgroundColor: Colors.ThemeColorDark
                }}>

                </View>
            }

        </TouchableOpacity>
    );
}
