import React from 'react';
import { View, Text, TextInput, TextStyle, StyleSheet } from 'react-native';
import Font from '../commonCSS/Font';
import { Colors } from '../commonCSS/Colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontSize from '../commonCSS/FontSize';
import ImageComponent from './custom/ImageComponent';
// import ImageComponent from './ImageComponent';


export default function MyProfileElement({ title, titleColor, titleFontFamily, titleFontSize, placeholder, multiline, customstyle, value, onChangeText, marginTop, image, keyboardTypes, placeholderTextColor, textColor, textFontSize }: { title: string, titleColor: string, titleFontFamily: string, titleFontSize: string, placeholder: string, multiline: boolean, customstyle: any, value: string, onChangeText: any, marginTop: boolean, image: any, keyboardTypes: any, placeholderTextColor: string, textColor: string, textFontSize: string }) {

    return (
        <View style={marginTop && { marginTop: hp(2) }}>
            {title &&
                <Text style={[styles.title, { color: titleColor, fontFamily: titleFontFamily, fontSize: titleFontSize }]}>{title}</Text>
            }
            {image == undefined ?
                <TextInput
                    multiline={multiline}
                    placeholderTextColor={placeholderTextColor}
                    placeholder={placeholder}
                    style={customstyle ? [styles.textBox, customstyle, { color: textColor, fontSize: textFontSize }] : [styles.textBox, { color: textColor, fontSize: textFontSize }]}
                    value={value}
                    onChangeText={(text: string) => onChangeText && onChangeText(text)}
                    keyboardType={keyboardTypes ? keyboardTypes : 'default'}
                />
                :
                <View style={[styles.textBox, { alignItems: 'center', flexDirection: 'row', flex: 1 }]}>
                    <ImageComponent
                        source={image}
                        height={3}
                        width={hp(3)}
                        mode={undefined}
                    />

                    <TextInput
                        multiline={multiline}
                        placeholderTextColor={placeholderTextColor}
                        placeholder={placeholder}
                        style={customstyle ? [styles.textBox, customstyle, { color: textColor, fontSize: textFontSize }] : [styles.textBox, { color: textColor, fontSize: textFontSize }]}
                        value={value}
                        onChangeText={(text: string) => onChangeText && onChangeText(text)}
                        keyboardType={keyboardTypes ? keyboardTypes : 'default'}
                    />
                </View>
            }
        </View>
    );
}


// define your styles
const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
    },
    textBox: {
        marginTop: hp(1.5),
        borderRadius: hp(1),
        paddingHorizontal: wp(4),

        // text
        fontWeight: '700',
    },


});