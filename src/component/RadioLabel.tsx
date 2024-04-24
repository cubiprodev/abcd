import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { commonCSS, hp, wp } from '../commonCSS/GlobalCss';
import { Colors } from '../commonCSS/Colors';
import Font from '../commonCSS/Font';
import ImageComponent from './custom/ImageComponent';
import { Images } from '../assets';

export default function RadioLabel({ labelData }: { labelData: any }) {

    const [islabelAlreadySelected, setIsLabelAlreadySelected] = useState(false);
    const [selectedLabelIndex, setSelectedLabelIndex] = useState(null);

    const handleItemPress = (labelData: any) => {
        if (islabelAlreadySelected === false) {
            if (selectedLabelIndex !== null) {
                setSelectedLabelIndex(null)
            } else {
                setSelectedLabelIndex(labelData);
            }
        }
    };

    useEffect(() => {
        if (labelData?.item?.status.toLowerCase() === 'completed') {
            setIsLabelAlreadySelected(true);
            setSelectedLabelIndex(Number(labelData?.index))
        }
    }, [labelData])

    return (
        <View>
            <View style={s.nameZone}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ ...commonCSS.headingIB60014 }}>{Number(labelData?.index) + 1}.</Text>
                    <Text style={s.name}>{labelData?.item?.name}</Text>
                </View>

                <View style={s.touchZone}>
                    <TouchableOpacity
                        onPress={() => handleItemPress(Number(labelData?.index))}
                        style={[s.radio, {
                            backgroundColor: selectedLabelIndex === Number(labelData?.index) ? Colors.brandGreen : Colors.white
                        }]}>
                        {selectedLabelIndex === Number(labelData?.index) &&
                            <View style={s.alignimage}>
                                <ImageComponent source={Images.tickMark} height={1.8} width={hp(1.8)} mode={'contain'} />
                            </View>
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={s.desc}>{labelData?.item?.description}</Text>
        </View>
    );
}

const s = StyleSheet.create({
    nameZone: { ...commonCSS.fdralic, marginTop: hp(1.5) },
    name: {
        ...commonCSS.headingIB60014,
        width: wp(70),
        paddingLeft: wp(2)
    },
    touchZone: {
        flex: 1,
        ...commonCSS.alicjc,
        height: hp(3),
    },
    radio: {
        overflow: 'hidden',
        borderWidth: hp(0.1),
        borderColor: Colors.borderColorD4D4D4,
        height: hp(2.3),
        width: hp(2.3),
        borderRadius: hp(1.15),
    },
    desc: {
        ...commonCSS.smallfw400fs10,
        color: Colors.secondaryText94,
        fontFamily: Font.InterBlack,
        paddingLeft: wp(5.5),
        width: wp(74),
        marginTop: hp(0.5)
    },
    alignimage: {
        height: hp(2.3),
        width: hp(2.3),
        ...commonCSS.alicjc
    }


})
