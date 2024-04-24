import React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import HeaderCustom from '../../component/HeaderCustom';
import { commonCSS, hp, wp } from '../../commonCSS/GlobalCss';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImageComponent from '../../component/custom/ImageComponent';
import { Images } from '../../assets';
import { Colors } from '../../commonCSS/Colors';
import FontSize from '../../commonCSS/FontSize';
import Font from '../../commonCSS/Font';
import AccountLabel from './AccountLabel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constants from '../../services/constants';
import { CommonActions } from '@react-navigation/native';

export default function Account ( { navigation }: { navigation: any } ) {

    const logoutUser = () => {
        Alert.alert( "Logout", "Are you sure want to logout?", [
            {
                text: "No",
                onPress: () => { },
                style: "cancel",
            },
            {
                text: "Yes",
                onPress: () => confirmLogout(),
                style: "cancel",
            },
        ] );
    };

    const confirmLogout = async () => {
        await AsyncStorage.removeItem( 'timesheet' );
        AsyncStorage.removeItem( constants.MOB_ACCESS_TOKEN_KEY ).then( () => {
            AsyncStorage.removeItem( constants.IS_LOGIN ).then( () => {
                AsyncStorage.removeItem( constants.MOB_ACCESS_TOKEN_KEY )
                let reset = CommonActions.reset( {
                    index: 0,
                    routes: [ { name: "Authentication" } ],
                } );
                navigation.dispatch( reset );
            } );
        } );
    };


    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'My Account'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={() => { }}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />

            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
                <ScrollView style={{ ...commonCSS.pvh }}>
                    <View style={{ ...commonCSS.fdralic }}>
                        <View style={s.imageZone}>
                            <ImageComponent source={Images.selfiePerson} height={7} width={hp( 7 )} mode={'contain'} />
                        </View>

                        <View style={{ paddingLeft: wp( 5 ) }}>
                            <Text style={s.userName}>Danish Zaar</Text>
                            <Text style={s.ph}>+91 1234567890</Text>
                        </View>
                    </View>

                    <View style={{ paddingTop: hp( 1 ), }}>
                        <AccountLabel
                            imgSource={Images.profilex}
                            label={'My Profile'}
                            showArrow={true}
                            onPressx={() => { navigation.navigate( 'MyProfile' ) }}
                        />

                        <AccountLabel
                            imgSource={require('../../assets/subuser.png')}
                            label={'Sub Users'}
                            showArrow={true}
                            onPressx={() => { navigation.navigate( 'SubUsers' ) }}
                        />

                        {/* <AccountLabel
                            imgSource={Images.cash}
                            label={'Cash In Hand'}
                            showArrow={true}
                            onPressx={() => { navigation.navigate('CashInHand') }}
                        />

                        <AccountLabel
                            imgSource={Images.seminar}
                            label={'Seminars'}
                            showArrow={true}
                            onPressx={() => { navigation.navigate('Seminar') }}
                        />

                        <AccountLabel
                            imgSource={Images.demo}
                            label={'Demo & Info'}
                            showArrow={true}
                            onPressx={() => { navigation.navigate('Demo') }}

                        />

                        <AccountLabel
                            imgSource={Images.offer}
                            label={'Offers'}
                            showArrow={true}
                            onPressx={() => { navigation.navigate('Offers') }}

                        />

                        <AccountLabel
                            imgSource={Images.orgination}
                            label={'Organisation Tree'}
                            showArrow={true}
                            onPressx={() => { navigation.navigate('OrginationTree') }}

                        />

                        <AccountLabel
                            imgSource={Images.incentive}
                            label={'View Incentive Plan'}
                            showArrow={true}
                            onPressx={() => { navigation.navigate('Incentive') }}

                        />
                        <AccountLabel
                            imgSource={Images.support}
                            label={'Help and Support'}
                            showArrow={true}
                            onPressx={() => { navigation.navigate('Support') }}

                        />

                        <AccountLabel
                            imgSource={Images.refer}
                            label={'Refer a friend'}
                            showArrow={true}
                            onPressx={() => { navigation.navigate('Refer') }}

                        /> */}

                        <View style={{ ...commonCSS.line, paddingVertical: hp( 1.5 ) }}></View>

                        <AccountLabel
                            imgSource={Images.logout}
                            label={'Logout'}
                            showArrow={true}
                            onPressx={() => { logoutUser() }}

                        />
                    </View>

                    <View style={{ height: hp( 3 ) }}></View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}


const s = StyleSheet.create( {
    imageZone: {
        height: hp( 7 ),
        width: hp( 7 ),
        borderRadius: hp( 3.5 ),
        overflow: 'hidden'
    },
    userName: {
        ...commonCSS.titleMB70016,
        color: Colors.mainText
    },
    ph: {
        marginTop: hp( 0.7 ),
        color: '#002441',
        fontSize: FontSize.fs12,
        fontFamily: Font.MontserratBlack,
        fontWeight: '600'
    },

} )