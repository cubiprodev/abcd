import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { commonCSS } from '../commonCSS/GlobalCss';
import { Colors } from '../commonCSS/Colors';
import Font from '../commonCSS/Font';
import FontSize from '../commonCSS/FontSize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function SeminarsElement({ label, time, description, date, Attendees, alter, onPressJoin }: { label: string, time: string, description: string, date: string, Attendees: string | number, alter: boolean, onPressJoin: any }) {
    return (
        <View style={styles.mainBox}>
            <View style={{ ...commonCSS.fdralic }}>
                <Text style={{ ...commonCSS.headingIB60014, flex: 1 }}>{label}</Text>
                <View style={{ backgroundColor: Colors.lightBrandColor, borderRadius: hp(2) }}>
                    <Text style={styles.time}>{time}</Text>
                </View>
            </View>
            <Text style={styles.desc}>{description}</Text>

            {alter === true ?
                <View style={styles.lastRow}>
                    <Text style={{ ...commonCSS.subTextIB50012primary }}>{date}</Text>
                    <TouchableOpacity
                        onPress={onPressJoin}
                        style={styles.btn}>
                        <Text style={styles.join}>Join</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>
                    <Text style={styles.tx}>{`Attendees (${Attendees})`}</Text>
                    <Text style={{ ...commonCSS.subTextIB50012primary, marginTop: hp(1.5) }}>{date}</Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    mainBox: {
        // marginTop: hp(1),
        // // ...commonCSS.shadowBox,
        // borderWidth: hp(0.1),
        // borderColor: Colors.borderColorECECEC,
        // paddingVertical: hp(1),
        // paddingHorizontal: wp(3.5),
        // borderRadius: hp(1)
        ...commonCSS.shadowBox,
        ...commonCSS.boxShadowx
    },
    time: {
        color: Colors.ThemeColorDark,
        fontFamily: Font.openSansBlack,
        fontWeight: '700',
        fontSize: FontSize.fs12,
        paddingHorizontal: wp(3),
        paddingVertical: hp(0.6),
    },
    btn: {
        backgroundColor: Colors.ThemeColorDark,
        paddingVertical: hp(0.5),
        paddingHorizontal: wp(4),
        borderRadius: hp(1)
    },
    desc: { ...commonCSS.subTextIB40012secText, marginTop: hp(1) },
    join: { ...commonCSS.subTextIB50012primary, color: Colors.whiteText },
    lastRow: { ...commonCSS.fdralic, justifyContent: 'space-between', marginTop: hp(1.5) },
    tx: { ...commonCSS.subTextIB50012primary, marginTop: hp(1.5), color: Colors.mainText }
})