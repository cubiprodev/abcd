import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../commonCSS/Colors';
import ImageComponent from './custom/ImageComponent';
import { Images } from '../assets';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { commonCSS } from '../commonCSS/GlobalCss';
import Button from './Button';
import FontSize from '../commonCSS/FontSize';
import Font from '../commonCSS/Font';
import TextInputCustom from './custom/TextInputCustom';



export default function ModalAddAddress({ data, visible, onRequestClose, onRequestContinue, onChangeStreetOne, onChangeStreetTwo, onChangeZip, onChangeCity, onChangeState }: { data: any, visible: boolean, onRequestClose: any, onRequestContinue: any, onChangeStreetOne: any, onChangeStreetTwo: any, onChangeZip: any, onChangeCity: any, onChangeState: any }) {
    return (
        <Modal
            visible={visible}
            transparent
            onRequestClose={onRequestClose}
            animationType="fade"
        >
            <View
                style={style.main}>
                <View style={style.whiteArea}>


                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between', width: wp(92) }}>
                        <Text style={{ ...commonCSS.titleMB70016, color: Colors.black }}>Store address</Text>
                        <TouchableOpacity
                            onPress={onRequestClose}>
                            <ImageComponent
                                source={Images.blueCross}
                                height={2}
                                width={hp(2)}
                                mode={'contain'}
                            />
                        </TouchableOpacity>
                    </View>



                    <View style={{
                        marginTop: hp(1.5)
                    }}>
                        <TextInputCustom
                            title={'Street 1'}
                            placeholderText={''}
                            defaultValue={data?.street1}
                            onChangeText={(val) => { onChangeStreetOne(val) }}
                            width={wp(92)}
                            keyboardType={undefined}
                            maxLength={0}
                        />
                    </View>



                    <View style={{
                        marginTop: hp(1.5)
                    }}>
                        <TextInputCustom
                            title={'Street 2'}
                            placeholderText={''}
                            defaultValue={data?.street2}
                            onChangeText={(val) => { onChangeStreetTwo(val) }}
                            width={wp(92)}
                            keyboardType={undefined}
                            maxLength={undefined}
                        />
                    </View>


                    <View style={{
                        marginTop: hp(1.5)
                    }}>
                        <TextInputCustom
                            title={'PIn / Zip code'}
                            placeholderText={''}
                            defaultValue={data?.zip}
                            onChangeText={(val) => { onChangeZip(val) }}
                            width={wp(92)}
                            keyboardType={'number-pad'}
                            maxLength={undefined}
                        />
                    </View>

                    <View style={{
                        marginTop: hp(1.5)
                    }}>
                        <TextInputCustom
                            title={'City'}
                            placeholderText={''}
                            defaultValue={data?.city}
                            onChangeText={(val) => { onChangeCity(val) }}
                            width={wp(92)}
                            keyboardType={undefined}
                            maxLength={undefined}
                        />
                    </View>

                    <View style={{
                        marginTop: hp(1.5)
                    }}>
                        <TextInputCustom
                            title={'State / Province'}
                            placeholderText={''}
                            defaultValue={data?.state}
                            onChangeText={(val) => { onChangeState(val) }}
                            width={wp(92)}
                            keyboardType={undefined}
                            maxLength={undefined}
                        />
                    </View>

                    <View style={style.b1}>
                        <Button
                            label={'SAVE'}
                            labelSize={FontSize.fs12}
                            fontWeight={'700'}
                            textColor={Colors.white}
                            fontFamily={Font.InterBold}
                            marginLeft={''}
                            paddingHorizontal={''}
                            paddingVertical={''}
                            onPress={onRequestContinue}
                            width={'92'}
                            backgroundColor={undefined}
                            isButtonDisabled={false}
                            btnHeight={'5'}
                            borderRadius={'2.5'}
                            borderColor={''}
                            borderwidth={''}
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
        alignItems: 'center'
    },
    whiteArea: {
        ...commonCSS.alicjc,
        backgroundColor: Colors.white,
        borderTopStartRadius: hp(4),
        borderTopEndRadius: hp(4),
        width: wp(100),
        paddingTop: hp(3)
    },


    t1: {
        marginTop: hp(4),
        ...commonCSS.titleMB70016,
        color: Colors.mainText,
        textAlign: 'center',
        lineHeight: hp(3.5),
    },
    b1: {
        marginVertical: hp(1),
        marginTop: hp(3)
    },
})