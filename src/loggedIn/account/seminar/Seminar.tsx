import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';
import { Colors } from '../../../commonCSS/Colors';
import GestureRecognizer from 'react-native-swipe-gestures';
import FontSize from '../../../commonCSS/FontSize';
import Font from '../../../commonCSS/Font';
import OnlineSeminar from './OnlineSeminar';
import OfflineSeminar from './OfflineSeminar';

export default function Seminar({ navigation }: { navigation: any }) {
    const [selectedTab, setSelectedTab] = useState<number>(1);

    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Seminars'}
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
                        }]}>Online</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { setSelectedTab(2) }}
                        style={[s.btn, {
                            backgroundColor: selectedTab === 2 ? Colors.ThemeColorDark : Colors.white
                        }]}>
                        <Text style={[s.bt1, {
                            color: selectedTab === 2 ? Colors.white : Colors.black,
                        }]}>OffLine</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: wp(4) }}>
                <ScrollView style={{}}>
                    <GestureRecognizer style={{}}
                        onSwipeLeft={() => setSelectedTab(1)}
                        onSwipeRight={() => setSelectedTab(2)}
                    >
                        {selectedTab === 1 ?
                            <OnlineSeminar navigation={navigation} /> :
                            <OfflineSeminar navigation={navigation} />}

                    </GestureRecognizer>
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}

const s = StyleSheet.create({
    tabZone: {
        width: wp(92),
        height: hp(4),
        borderRadius: hp(2),
        backgroundColor: Colors.white,
        ...commonCSS.fdralic
    },
    btn: {
        width: wp(46),
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
