import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImageComponent from './custom/ImageComponent';
import { Images } from '../assets';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { commonCSS } from '../commonCSS/GlobalCss';
import TextComponent from './custom/TextComponent';
import { Colors } from '../commonCSS/Colors';
import Font from '../commonCSS/Font';
import FontSize from '../commonCSS/FontSize';
import LinearGradient from 'react-native-linear-gradient';
import TaskProgressElement from './TaskProgressElement';

export default function TaskElement({ completedProgress, totalTaskCount, onPressArrow }: { completedProgress: number, totalTaskCount: number, onPressArrow: any }) {
    return (
        <View style={{ ...commonCSS.box }}>
            <View style={styles.row}>
                <Text style={{ ...commonCSS.headingIB60014 }}>Your Route</Text>
                <TouchableOpacity onPress={onPressArrow}>
                    <ImageComponent source={Images.forwardArrow} height={2} width={hp(2)} mode={'contain'} />
                </TouchableOpacity>
            </View>

            <TextComponent txtLabel={'South Hubli: 120027'} fontColor={Colors.ThemeColorDark} fontFamily={Font.MontserratBlack} fWeight={'700'} fSize={FontSize.fs16} textAlign={''} marginTop={1} fontLineHeight={''}
            />
            <TextComponent txtLabel={'South Hubli: 120027'} fontColor={Colors.ThemeColorDark} fontFamily={Font.MontserratBlack} fWeight={'700'} fSize={FontSize.fs16} textAlign={''} marginTop={''} fontLineHeight={''}
            />

            <View style={{ ...commonCSS.line, marginVertical: hp(1.5) }}></View>

            <Text style={{ ...commonCSS.headingIB60014, paddingBottom: hp(1) }}>Total Tasks ({totalTaskCount}) </Text>

            <View style={styles.row}>
                <Text style={styles.progress}>Progress</Text>
                <Text style={[styles.progress, { fontWeight: '700' }]}>4/8</Text>
            </View>


            <View style={{ marginTop: hp(1.5) }}>
                <TaskProgressElement completedProgress={completedProgress} totalTaskCount={totalTaskCount} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: { ...commonCSS.fdralic, justifyContent: 'space-between' },
    progress: { ...commonCSS.smallfw400fs10, fontFamily: Font.poppinsBlack, color: Colors.c7E8594 }
})