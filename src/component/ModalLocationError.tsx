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



export default function ModalLocationError({ visible, onRequestClose, onRequestContinue }: { visible: boolean, onRequestClose: any, onRequestContinue: any }) {
    return (
        <Modal
            visible={visible}
            transparent
            onRequestClose={onRequestClose}
            animationType="fade"
        >
            <TouchableOpacity
                onPress={onRequestClose}
                style={style.main}>
                <View style={style.whiteArea}>
                    <Text style={style.lt1}>Location Access</Text>

                    <View style={{
                        width: wp(100),
                        paddingTop: hp(2),
                        flexDirection: 'row',
                        paddingLeft: wp(8)
                    }}>
                        <ImageComponent source={Images.location} height={5} width={hp(5)} mode={'contain'} />
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={style.t2}>{"W Mart needs access to your\n location to proceed further!"}</Text>
                        </View>
                    </View>


                    <View style={style.b1}>
                        <Button label={'CONTINUE'} labelSize={FontSize.fs12} fontWeight={'700'} textColor={''} fontFamily={Font.InterBold} marginLeft={''} paddingHorizontal={''} paddingVertical={''} onPress={onRequestContinue} width={'80'} backgroundColor={undefined} isButtonDisabled={false} btnHeight={'5'} borderRadius={'2.5'} borderColor={''} borderwidth={''} />
                    </View>

                    <TouchableOpacity
                        onPress={onRequestClose}
                    >
                        <Text style={style.tml}>Maybe later</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
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
    t2: {
        fontFamily: Font.InterBlack,
        fontWeight: '700',
        fontSize: FontSize.fs14,
        color: Colors.secondaryText94,
        paddingLeft: wp(6)
    },
    b1: {
        marginVertical: hp(1),
        marginTop: hp(3)
    },
    lt1: {
        ...commonCSS.titleMB70016,
        textAlign: 'center',
        width: wp(80),
        color: Colors.mainText,
        borderBottomWidth: hp(0.07),
        borderBottomColor: Colors.borderColorD4D4D4,
        paddingBottom: hp(1.5),
    },
    tml: {
        fontFamily: Font.MontserratBlack,
        fontWeight: '500',
        fontSize: FontSize.fs16,
        color: Colors.mainText,
        paddingVertical: hp(1.5),
        paddingBottom: hp(3)
    }
})