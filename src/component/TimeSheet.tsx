import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../commonCSS/Colors';
import { commonCSS } from '../commonCSS/GlobalCss';
import moment from 'moment';

export default function TimeSheet({ timeSheet }: { timeSheet: object }) {

    return (
        <View style={styles.main}>
            <View style={styles.r1}>
                <View style={styles.z1}>
                    <Text style={styles.t1}>First Half</Text>
                </View>
                <View style={styles.z2}>
                    <Text style={styles.t1}>Second Half</Text>
                </View>
            </View>


            {/* 2nd line */}
            <View style={[styles.r1n, {}]}>
                <View style={[styles.z1, { ...commonCSS.fdralic, }]}>
                    <View style={styles.z1n}>
                        <Text style={styles.t2}>Check-in</Text>
                    </View>
                    <View style={[styles.z2n]}>
                        <Text style={styles.t2}>Check-Out</Text>
                    </View>
                </View>
                <View style={[styles.z2, { ...commonCSS.fdralic }]}>
                    <View style={[styles.z1, { borderBottomWidth: 0 }]}>
                        <Text style={styles.t2}>Check-in</Text>
                    </View>
                    <View style={[styles.z2, { borderBottomWidth: 0 }]}>
                        <Text style={styles.t2}>Check-Out</Text>
                    </View>
                </View>
            </View>

            {/* 3rd Line */}

            <View style={[styles.r1n, { backgroundColor: Colors.white }]}>

                <View style={[styles.z1, { ...commonCSS.fdralic, }]}>
                    <View style={styles.z1n}>
                        <Text style={styles.t3}>{timeSheet?.fhCin.toLowerCase() !== "-" &&
                            timeSheet !== null ? moment(timeSheet?.fhCin).format('LT') : '-'}</Text>
                    </View>
                    <View style={[styles.z2n]}>
                        <Text style={styles.t3}>{timeSheet?.fhCout !== '-' &&
                            timeSheet?.fhCout !== null ? moment(timeSheet?.fhCout).format('LT') : '-'}</Text>
                    </View>
                </View>

                <View style={[styles.z2, { ...commonCSS.fdralic }]}>
                    <View style={[styles.z1, { borderBottomWidth: 0 }]}>
                        <Text style={styles.t3}>{timeSheet?.shCin !== '-' &&
                            timeSheet?.shCin !== null ? moment(timeSheet?.shCin).format('LT') : '-'}</Text>
                    </View>
                    <View style={[styles.z2, { borderBottomWidth: 0 }]}>
                        <Text style={styles.t3}>{timeSheet?.shCout !== '-' &&
                            timeSheet?.shCout !== null ? moment(timeSheet?.shCout).format('LT') : '-'}</Text>
                    </View>
                </View>

            </View>


            {/* 4th line */}
            <View style={[styles.r1n, { backgroundColor: Colors.white, borderTopWidth: hp(0.05), borderTopColor: Colors.borderColorD4D4D4 }]}>

                <View style={[styles.z1, { ...commonCSS.fdralic, }]}>
                    {timeSheet.ftype.toLowerCase() === 'office' ?
                        <Text style={styles.t3}>Office Visit</Text> : timeSheet.ftype.toLowerCase() === 'local' ?
                            <Text style={styles.t3}>Local Visit</Text> : null
                    }
                </View>

                <View style={[styles.z2, { ...commonCSS.fdralic }]}>
                    {timeSheet.stype.toLowerCase() === 'office' ?
                        <Text style={styles.t3}>Office Visit</Text> : timeSheet.stype.toLowerCase() === 'local' ?
                            <Text style={styles.t3}>Local Visit</Text> : null
                    }
                </View>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: hp(2),
    },
    r1: {
        flex: 1,
        backgroundColor: Colors.lightBrandColor,
        ...commonCSS.fdralic,
        width: wp(90),
        height: hp(6),
        borderTopStartRadius: hp(2),
        borderTopEndRadius: hp(2),
        borderBottomWidth: hp(0.2),
        borderBottomColor: Colors.ThemeColorDark
    },
    r1n: {
        flex: 1,
        backgroundColor: Colors.lightBrandColor,
        ...commonCSS.fdralic,
        width: wp(90),
        height: hp(6),
        // borderTopStartRadius: hp(2),
        // borderTopEndRadius: hp(2),
    },
    z1: {
        width: '50%',
        height: hp(6),
        ...commonCSS.alicjc,
        borderRightWidth: hp(0.1),
        borderRightColor: Colors.ThemeColorDark,
    },
    z1n: {
        width: '50%',
        height: hp(6),
        ...commonCSS.alicjc,
        borderRightWidth: hp(0.1),
        borderRightColor: Colors.ThemeColorDark,
    },
    t1: {
        ...commonCSS.headingIB60014,
        color: Colors.ThemeColorDark,
    },
    t2: {
        ...commonCSS.subTextIB50012primary,
        color: Colors.ThemeColorDark,
    },
    t3: {
        ...commonCSS.subTextIB50012primary,
        color: Colors.mainText,
    },
    z2: {
        width: '50%',
        height: hp(6),
        ...commonCSS.alicjc,
        borderLeftWidth: hp(0.1),
        borderLeftColor: Colors.ThemeColorDark,
    },
    z2n: {
        width: '50%',
        height: hp(6),
        ...commonCSS.alicjc,
        borderLeftWidth: hp(0.1),
        borderLeftColor: Colors.ThemeColorDark,
    },
})