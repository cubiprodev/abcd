import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';
import { Colors } from '../../../commonCSS/Colors';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import GestureRecognizer from 'react-native-swipe-gestures';
import ToManger from './ToManager';
import ToBank from './ToBank';
import Button from '../../../component/Button';

export default function HandOverCash({ navigation }: { navigation: any }) {
    const [selectedTab, setSelectedTab] = useState(1)
    return (

        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Hand Over Cash'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />
            <View style={{ alignItems: 'center', marginTop: hp(1.5) }}>
                <View style={s.tabZone}>
                    <TouchableOpacity
                        onPress={() => { setSelectedTab(1) }}
                        style={[s.btn, {
                            backgroundColor: selectedTab === 1 ? Colors.ThemeColorDark : Colors.white
                        }]}>
                        <Text style={[s.bt1, {
                            color: selectedTab === 1 ? Colors.white : Colors.black,
                        }]}>To Manager</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { setSelectedTab(2) }}
                        style={[s.btn, {
                            backgroundColor: selectedTab === 2 ? Colors.ThemeColorDark : Colors.white
                        }]}>
                        <Text style={[s.bt1, {
                            color: selectedTab === 2 ? Colors.white : Colors.black,
                        }]}>To MWB Bank</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }}>
                <ScrollView style={{}}>
                    <GestureRecognizer style={{}}
                        onSwipeLeft={() => setSelectedTab(1)}
                        onSwipeRight={() => setSelectedTab(2)}
                    >
                        {selectedTab === 1 ? <ToManger navigation={navigation} /> : <ToBank navigation={navigation} />}

                    </GestureRecognizer>
                </ScrollView>
                
            </KeyboardAwareScrollView>
        </View>
    );
}

const s = StyleSheet.create({
    tabZone: {
        width: wp(80),
        height: hp(4),
        borderRadius: hp(2),
        backgroundColor: Colors.white,
        ...commonCSS.fdralic
    },
    btn: {
        width: wp(40),
        height: hp(4),
        borderRadius: hp(2),
        ...commonCSS.alicjc,
    },
    bt1: {
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs12,
        fontWeight: '700'
    },
})
