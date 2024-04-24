import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { commonCSS, hp, wp } from '../../commonCSS/GlobalCss';
import ImageComponent from './ImageComponent';
import FontSize from '../../commonCSS/FontSize';
import { Colors } from '../../commonCSS/Colors';
import Font from '../../commonCSS/Font';

export default function CustomTextInput({ title, placeholder, multiline, value, onChangeText, marginTop, keyboardTypes, placeholderTextColor, disabled }: { title: string, placeholder: string, multiline: boolean, value: string, onChangeText: any, marginTop: boolean, keyboardTypes: any, placeholderTextColor: string, disabled: boolean }) {
    return (
        <View style={marginTop && { marginTop: hp(1.5) }}>
            {title &&
                <Text style={styles.title}>{title}</Text>
            }

            {disabled === false ?
                <TextInput
                    multiline={multiline}
                    placeholderTextColor={placeholderTextColor}
                    placeholder={placeholder}
                    style={styles.textBox}
                    value={value}
                    onChangeText={(text: string) => onChangeText && onChangeText(text)}
                    keyboardType={keyboardTypes ? keyboardTypes : 'default'}
                />
                :
                <View style={[styles.textBox, { paddingVertical: hp(1.2) }]}>
                    <Text style={{
                        fontWeight: '400',
                        fontFamily: Font.InterBlack,
                        fontSize: FontSize.fs14,
                        color: Colors.mainText,
                    }}>{value}</Text>
                </View>
            }
        </View>
    );
}


// define your styles
const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs14,
        color: Colors.mainText,
    },
    textBox: {
        marginTop: hp(1.5),
        borderRadius: hp(1),
        paddingHorizontal: wp(4),
        // height: hp(5),
        maxHeight: hp(30),
        fontWeight: '400',
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs14,
        color: Colors.mainText,
        borderWidth: hp(0.1),
        backgroundColor: Colors.white

    },
});