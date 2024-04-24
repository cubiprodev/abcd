import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '../../../component/custom/CustomTextInput';
import { Colors } from '../../../commonCSS/Colors';
import ImageComponent from '../../../component/custom/ImageComponent';
import { Images } from '../../../assets';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import Button from '../../../component/Button';

export default function MyProfile({ navigation }: { navigation: any }) {
    const [profileData, setProfileData] = useState({
        name: '',
        phone: '',
        email: '',
        designation: '',
        reportinTo: '',
    })
    return (

        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'My Profile'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }}>
                <ScrollView style={{ ...commonCSS.pvh, }}>

                    <View style={s.imageZoneouter}>
                        <View style={{ width: hp(12) }}>
                            <View style={s.imageZone}>
                                <ImageComponent source={Images.selfiePerson} height={12} width={hp(12)} mode={'contain'} />
                            </View>
                            <View style={s.pen}>
                                <ImageComponent source={Images.pen} height={2} width={hp(2)} mode={'cover'} />
                            </View>
                        </View>
                    </View>

                    <CustomTextInput
                        title={'Name'}
                        placeholder={'Danish Zaar'}
                        multiline={false}
                        value={profileData.name}
                        onChangeText={( val => {
                            setProfileData( prevData => ( {
                                ...prevData,
                                name: val
                            } ) );
                        } )}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94} disabled={false}                    />

                    <CustomTextInput
                        title={'Phone Number'}
                        placeholder={'+91 1234567890'}
                        multiline={false}
                        value={profileData.phone}
                        onChangeText={( val => {
                            setProfileData( prevData => ( {
                                ...prevData,
                                phone: val
                            } ) );
                        } )}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94} disabled={false}                    />

                    <CustomTextInput
                        title={'Email ID'}
                        placeholder={'DanishZaar@gmail.com'}
                        multiline={true}
                        value={profileData.email}
                        onChangeText={( val => {
                            setProfileData( prevData => ( {
                                ...prevData,
                                email: val
                            } ) );
                        } )}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94} disabled={false}                    />

                    {/* <CustomTextInput
                        title={'Designation'}
                        placeholder={'Sales Agent'}
                        multiline={false}
                        value={profileData.designation}
                        onChangeText={( val => {
                            setProfileData( prevData => ( {
                                ...prevData,
                                designation: val
                            } ) );
                        } )}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94} disabled={false}                    /> */}


                    {/* <CustomTextInput
                        title={'Reporting to'}
                        placeholder={'Mukesh Kumar'}
                        multiline={false}
                        value={profileData.reportinTo}
                        onChangeText={( val => {
                            setProfileData( prevData => ( {
                                ...prevData,
                                reportinTo: val
                            } ) );
                        } )}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94} disabled={false}                    /> */}


                    {/* <TouchableOpacity style={s.lineBtn}>
                        <Text style={commonCSS.underLine}>See Organisation Tree</Text>
                    </TouchableOpacity> */}

                    <View style={{ marginTop: hp(3) }}>
                        <Button
                            label={'UPDATE'}
                            labelSize={FontSize.fs15}
                            fontWeight={'700'}
                            textColor={Colors.white}
                            fontFamily={Font.MontserratBlack}
                            marginLeft={''}
                            paddingHorizontal={''}
                            paddingVertical={''}
                            onPress={() => { }}
                            width={'92'}
                            backgroundColor={Colors.ThemeColorDark}
                            isButtonDisabled={false}
                            btnHeight={'5.5'}
                            borderRadius={'1.5'}
                            borderColor={''}
                            borderwidth={''}
                        />
                    </View>


                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={{ marginTop: hp(1.5), ...commonCSS.alicjc }}>
                        <Text style={{ ...commonCSS.titleMB70016, color: Colors.mainText, alignItems: 'center' }}>Cancel</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}


const s = StyleSheet.create({
    imageZoneouter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageZone: {
        height: hp(12),
        width: hp(12),
        borderRadius: hp(6),
        overflow: 'hidden',
    },
    pen: {
        height: hp(4),
        width: hp(4),
        borderRadius: hp(2),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderWidth: hp(0.4),
        borderColor: Colors.ThemeColorDark,
        backgroundColor: Colors.white,
        bottom: 0,
        right: 0,
    },
    lineBtn: {
        marginTop: hp(1.5),
        width: wp(37),
        ...commonCSS.alicjc
    },

});