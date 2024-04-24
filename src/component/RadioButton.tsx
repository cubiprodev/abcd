import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from '../commonCSS/Colors';
import FontSize from '../commonCSS/FontSize';


export default function RadioButton({ data, onSelect, radioLabelName, horizontal }: { data: any, onSelect: any, radioLabelName: string, horizontal: boolean }) {

    const [userOption, setUserOption] = useState(null);

    const handleItemPress = (i) => {
        setUserOption(i);
    };

    return (

        <FlatList
            data={data}
            horizontal={horizontal}
            contentContainerStyle={{
                width: wp(70),
                paddingLeft: horizontal ? wp(0) : wp(20),
            }}
            renderItem={({ item, index }) => (
                <View key={index} style={{ paddingRight: horizontal ? wp(10) : wp(0) }}>
                    <TouchableOpacity onPress={() => handleItemPress(index)}>
                        <View style={{
                            flexDirection: 'row',
                            marginVertical: hp(0.4),
                            alignItems: 'center'
                        }}>
                            {index === userOption ?
                                (
                                    <View style={{
                                        height: hp(2),
                                        width: hp(2),
                                        borderRadius: hp(1.5),
                                        borderWidth: hp(0.1),
                                        borderColor: horizontal ? Colors.ThemeColorDark : Colors.borderColorD4D4D4,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{
                                            height: hp(1.4),
                                            width: hp(1.4),
                                            borderRadius: hp(1.2),
                                            backgroundColor: Colors.ThemeColorDark
                                        }}>
                                        </View>
                                    </View>
                                ) :
                                (
                                    <View style={{
                                        height: hp(2.1),
                                        width: hp(2.1),
                                        borderRadius: hp(1.05),
                                        borderWidth: hp(0.1),
                                        borderColor: Colors.borderColorD4D4D4
                                    }}>
                                    </View>

                                )}

                            <View style={{
                                height: hp(3),
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Text style={{
                                    color: Colors.black,
                                    fontSize: FontSize.fs14,
                                    paddingLeft: wp(2),
                                }}> {item && item[radioLabelName]}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )}
        />

    )
}
