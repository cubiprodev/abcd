import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonCSS } from '../commonCSS/GlobalCss';
import { Colors } from '../commonCSS/Colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import TextComponent from './custom/TextComponent';
import FontSize from '../commonCSS/FontSize';
import Font from '../commonCSS/Font';
import ImageComponent from './custom/ImageComponent';
import { dummyImages } from '../assets';


type Iprops = {
    name: string;
    designation: string;
}

export default function EmpOfTheWeek({ props }: { props: Iprops }) {
    return (
        <View style={styles.empOfWeek}>
            <TextComponent txtLabel={'Employee of the week'} fontColor={Colors.mainText} fontFamily={Font.mulishBold} fWeight={'700'} fSize={FontSize.fs15} textAlign={'center'} marginTop={''} fontLineHeight={''} />

            <View style={styles.line}></View>

            <View style={{ ...commonCSS.fdralic, justifyContent: 'center' }}>
                <View style={styles.profilePic}>
                    <ImageComponent source={dummyImages.profile} height={5} width={hp(5)} mode={'cover'} />
                </View>

                <View>
                    <TextComponent txtLabel={props.name} fontColor={Colors.mainText} fontFamily={Font.mulishBold} fWeight={'700'}
                        fSize={FontSize.fs20} textAlign={''} marginTop={''} fontLineHeight={''} />
                    <TextComponent txtLabel={props.designation} fontColor={Colors.primartText} fontFamily={Font.mulish} fWeight={'700'} fSize={FontSize.fs13} textAlign={''} marginTop={''} fontLineHeight={''} />
                </View>
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    empOfWeek: {
        ...commonCSS.shadowBox,
        width: wp(92),
        backgroundColor: Colors.white,
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(4),
        marginHorizontal: wp(4),
        borderRadius: hp(1.5),
        alignItems: 'center'
    },
    line: {
        ...commonCSS.line,
        width: wp(70),
        alignItems: 'center',
        marginVertical: hp(1),
        paddingTop: hp(0.5)
    },
    profilePic: {
        marginRight: wp(3),
        borderRadius: hp(2),
        alignItems: 'center',
        justifyContent: 'center'
    },
})