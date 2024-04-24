import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { commonCSS } from '../commonCSS/GlobalCss';
import { Colors } from '../commonCSS/Colors';
import ImageComponent from './custom/ImageComponent';
import FontSize from '../commonCSS/FontSize';
import { Images } from '../assets';
import Font from '../commonCSS/Font';
import TextComponent from './custom/TextComponent';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default function CheckIn({ onPress, isUserAlreadyCheckedIn, isAttendenceDone }: { onPress: any, isUserAlreadyCheckedIn: boolean, isAttendenceDone: boolean }) {
    // console.log('isUserAlreadyCheckedIn',isUserAlreadyCheckedIn)

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.checkinArea}>
            <View>
                {isAttendenceDone ?

                    <TextComponent txtLabel={'Attendence Done'} fontColor={Colors.mainText} fontFamily={Font.openSansBlack}
                        fWeight={'700'} fSize={FontSize.fs17} textAlign={''} marginTop={''} fontLineHeight={''} />
                    :
                    <TextComponent txtLabel={isUserAlreadyCheckedIn ? 'Check-out' : 'Check-in'} fontColor={Colors.mainText} fontFamily={Font.openSansBlack}
                        fWeight={'700'} fSize={FontSize.fs17} textAlign={''} marginTop={''} fontLineHeight={''} />
                }
                {!isAttendenceDone &&
                    <TextComponent
                        txtLabel={'Mark your attendance for today'} fontColor={Colors.primartText} fontFamily={Font.openSansBlack}
                        fWeight={'700'} fSize={FontSize.fs12} textAlign={''} marginTop={0.8} fontLineHeight={''} />
                }
            </View>


            <ImageComponent source={Images.buttonCheckin} height={3} width={hp(3)} mode={'contain'} />
        </TouchableOpacity>

    );
}


const styles = StyleSheet.create({
    checkinArea: {
        ...commonCSS.shadowBox,
        borderWidth: hp(0.15),
        borderColor: Colors.borderColorECECEC,
        marginTop: hp(1.5),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: wp(5),
        paddingVertical: hp(1.5),
        borderRadius: hp(1),
        backgroundColor: Colors.white,
    },

})