import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { commonCSS, hp, wp } from '../commonCSS/GlobalCss';
import { Colors } from '../commonCSS/Colors';
import ImageComponent from './custom/ImageComponent';
import { Images } from '../assets';
import Font from '../commonCSS/Font';
import FontSize from '../commonCSS/FontSize';
import Search from './custom/Search';
import CheckBoxAttendees from '../loggedIn/account/seminar/CheckboxAttendees';

export default function ModalAttendees({ visible, onRequestClose }: { visible: boolean, onRequestClose: any }) {
    const [searchData, setSearchData] = useState('')
    return (

        <Modal
            visible={visible}
            transparent
            onRequestClose={onRequestClose}
            animationType="fade"
        >
            <View style={style.main}>

                <View style={style.whiteArea}>
                    {/* r1 */}
                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between', width: wp(100), paddingHorizontal: wp(5) }}>
                        <TouchableOpacity
                            onPress={onRequestClose}
                            style={{ height: hp(3), width: hp(3), ...commonCSS.alicjc }}
                        >
                            <ImageComponent source={Images.backIcon} height={2} width={hp(1.5)} mode={'contain'} />
                        </TouchableOpacity>

                        <Text style={{
                            fontFamily: Font.MontserratBlack,
                            fontSize: FontSize.fs16,
                            fontWeight: '700',
                            color: Colors.mainText
                        }}>Add Attendees</Text>

                        <TouchableOpacity
                            onPress={onRequestClose}
                        >
                            <Text
                                style={{
                                    fontFamily: Font.MontserratBlack,
                                    fontSize: FontSize.fs16,
                                    fontWeight: '700',
                                    color: Colors.secondaryText94
                                }}>Next</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...commonCSS.alicjc, }}>
                        <View style={{ width: wp(90), marginVertical: hp(2) }}>
                            <Search
                                value={searchData}
                                placeHolder={'Search by name'}
                                placeHolderColor={Colors.secondaryText94}
                                maxLength={20}
                                onChangeText={undefined}
                            />
                        </View>
                    </View>

                    <Text style={{
                        fontFamily: Font.MontserratBlack,
                        fontSize: FontSize.fs14,
                        fontWeight: '700',
                        color: Colors.secondaryText94,
                        paddingHorizontal: wp(5),
                        paddingBottom: hp(1.5)
                    }}>Select participants</Text>


                    <View style={{
                        paddingHorizontal: wp(5),
                        paddingBottom: hp(3)
                    }}>
                        <CheckBoxAttendees
                            images={Images.selfiePerson}
                            name={'Lisa Alex'}
                            number={'9999999999'}
                            onSelect={(val) => { console.log(val) }}
                        />

                        <CheckBoxAttendees
                            images={Images.selfiePerson}
                            name={'Lisa Alex'}
                            number={'9999999999'}
                            onSelect={(val) => { console.log(val) }}
                        />

                        <CheckBoxAttendees
                            images={Images.selfiePerson}
                            name={'Lisa Alex'}
                            number={'9999999999'}
                            onSelect={(val) => { console.log(val) }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}


const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#000000aa',
        justifyContent: 'flex-end',
        // alignItems: 'center'
    },
    whiteArea: {
        // ...commonCSS.alicjc,
        backgroundColor: Colors.white,
        borderTopStartRadius: hp(4),
        borderTopEndRadius: hp(4),
        width: wp(100),
        paddingTop: hp(3)
    },
});
