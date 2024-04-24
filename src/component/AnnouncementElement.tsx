import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonCSS } from '../commonCSS/GlobalCss';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../commonCSS/Colors';


export default function AnnouncementElement({ title, date, description }: { title: string, date: string, description: string }) {
    return (
        <View style={styles.mainBox}>
            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>
                <Text style={{ ...commonCSS.headingIB60014 }}>{title}</Text>
                <Text style={{ ...commonCSS.subTextIB50012primary }}>{date}</Text>
            </View>

            <Text style={{ ...commonCSS.subTextIB40012secText, marginTop: hp(1) }}>{description}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    mainBox: {
        marginTop: hp(1),
        // ...commonCSS.shadowBox,
        borderWidth: hp(0.1),
        borderColor: Colors.borderColorECECEC,
        paddingVertical: hp(1),
        paddingHorizontal: wp(3.5),
        borderRadius: hp(1)
    },
});
