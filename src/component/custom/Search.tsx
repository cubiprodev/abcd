import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ImageComponent from './ImageComponent';
import { Images } from '../../assets';
import { heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../../commonCSS/Colors';
import Font from '../../commonCSS/Font';
import FontSize from '../../commonCSS/FontSize';
import { commonCSS } from '../../commonCSS/GlobalCss';




type Iprops = {

}

export default function Search({ value, placeHolder, placeHolderColor, maxLength, onChangeText }: {
    value: string,
    placeHolder: string,
    placeHolderColor: string,
    maxLength: number,
    onChangeText: any
}) {
    return (

        <View style={style.main}>
            <View style={style.v2}>
                <ImageComponent source={Images.search} height={2} width={hp(2)} mode={'contain'} />
                <TextInput
                    value={value}
                    style={style.txt}
                    placeholder={placeHolder}
                    placeholderTextColor={placeHolderColor}
                    keyboardType={'default'}
                    maxLength={maxLength ? maxLength : 200}
                    onChangeText={onChangeText}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    main: {
        borderWidth: hp(0.1),
        borderColor: Colors.borderColorD4D4D4,
        borderRadius: hp(1),
        overflow: 'hidden'
    },
    v2: {
        ...commonCSS.fdralic,
        paddingHorizontal: wp(4),
        // backgroundColor: Colors.inactivegreyE9E9E9,
        backgroundColor: 'rgba(233, 233, 233, 0.34)'
    },
    txt: {
        flex: 1,
        color: Colors.primartText,
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs12,
        paddingHorizontal: wp(3)
    },
})
