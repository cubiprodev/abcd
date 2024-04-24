import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';
import { Colors } from '../../../commonCSS/Colors';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import ImageComponent from '../../../component/custom/ImageComponent';
import { Images } from '../../../assets';
import CashElement from './CashElement';
import Button from '../../../component/Button';

export default function CashInHand({ navigation }: { navigation: any }) {
    return (

        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Cash In Hand'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }}>
                <ScrollView style={{}}>
                    <View style={s.blueZone}>
                        <Text style={s.t1}>Total cash-in-hand</Text>
                        <View style={s.whiteArea}>
                            <Text style={s.today}>Today</Text>
                            <View style={s.whiteBottom}>
                                <TouchableOpacity style={s.touch}>
                                    <ImageComponent source={Images.leftArrow} height={2} width={hp(1.5)} mode={'cover'} />
                                </TouchableOpacity>
                                <Text style={s.amount}>₹ 1,000</Text>
                                <TouchableOpacity style={s.touch}>
                                    <ImageComponent source={Images.rightArrow} height={2} width={hp(1.5)} mode={'cover'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: hp(1.5), flex: 1 }}>
                        <View style={{
                            backgroundColor: "#DDF8FF",
                            ...commonCSS.fdralic,
                            height: hp(5)
                        }}>
                            <View style={s.lightBlueZone}>
                                <Text style={s.lightBLueZoneText}>Order no.</Text>
                            </View>
                            <View style={s.lightBlueZone}>
                                <Text style={s.lightBLueZoneText}>Amount</Text>
                            </View>
                            <View style={s.lightBlueZone}>
                                <Text style={s.lightBLueZoneText}>Mode</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: hp(1.5), }}>
                            <CashElement />
                            <CashElement />
                            <CashElement />
                        </View>
                    </View>


                </ScrollView>
                <View style={{
                    paddingVertical: hp(1.5),
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <Button
                        label={'Hand Over Cash'}
                        labelSize={FontSize.fs16}
                        fontWeight={'700'}
                        textColor={Colors.white}
                        fontFamily={Font.MontserratBlack}
                        marginLeft={''}
                        paddingHorizontal={''}
                        paddingVertical={''}
                        onPress={() => { navigation.navigate('HandOverCash') }}
                        width={'92'}
                        backgroundColor={Colors.ThemeColorDark}
                        isButtonDisabled={false}
                        btnHeight={'5.5'}
                        borderRadius={'1.5'}
                        borderColor={''}
                        borderwidth={''}
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

const s = StyleSheet.create({
    blueZone: { backgroundColor: Colors.ThemeColorDark, flex: 1, ...commonCSS.pvh, paddingBottom: hp(3) },
    t1: { ...commonCSS.titleMB70016, color: Colors.whiteText, textAlign: 'center' },
    touch: {
        height: hp(3),
        width: hp(3),
        ...commonCSS.alicjc,
    },
    whiteArea: {
        marginTop: hp(1.5),
        backgroundColor: Colors.white,
        ...commonCSS.pvh,
        borderRadius: hp(2)
    },
    today: {
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs14,
        color: Colors.secondaryText94,
        fontWeight: '500',
        textAlign: 'center'
    },
    whiteBottom: { flexDirection: 'row', paddingTop: hp(2), justifyContent: 'space-evenly', alignItems: 'baseline', },
    amount: {
        fontFamily: Font.MontserratBlack,
        fontSize: FontSize.fs29,
        fontWeight: '700',
        color: Colors.ThemeColorDark,
        width: wp(60),
        textAlign: 'center',
        top: hp(-0.5)
    },
    lightBlueZone: { width: wp(33.33), ...commonCSS.alicjc },
    lightBLueZoneText: {
        color: Colors.mainText,
        fontWeight: "700",
        fontSize: FontSize.fs14,
        fontFamily: Font.InterBlack
    },

})