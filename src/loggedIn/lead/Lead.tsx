import React, {useState} from 'react';
import {View, Text, ScrollView, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {commonCSS, hp, wp} from '../../commonCSS/GlobalCss';
import HeaderCustom from '../../component/HeaderCustom';
import {Colors} from '../../commonCSS/Colors';
import Font from '../../commonCSS/Font';
import FontSize from '../../commonCSS/FontSize';
import GestureRecognizer from 'react-native-swipe-gestures';
import TabLead from './TabLead';
import TabDeal from './TabDeal';


export default function Lead({navigation}: {navigation: any}) {

    return (
        <View style={{...commonCSS.bodyFAFAFA}}>
            <HeaderCustom
                title={'All Medicine'}
                onPressBackArrow={() => navigation.goBack()}
                button={true}
                onPressButton={() => {navigation.navigate('CreateDeal')}}

                btnText={'Add Medicine'}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />

            <KeyboardAwareScrollView contentContainerStyle={{}}>
                <ScrollView style={{}}>

                    <TabDeal navigation={navigation} />

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
