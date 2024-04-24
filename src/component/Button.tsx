import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from '../commonCSS/Colors';
import Font from '../commonCSS/Font';
import FontSize from '../commonCSS/FontSize';


type Iprops = {
    label: string,
    labelSize: number,
    fontWeight: string,
    textColor: string,
    fontFamily: string,

    marginLeft: string,
    paddingHorizontal: string,
    paddingVertical: string,
    onPress: any

    width: string | number,
    backgroundColor: any,
    isButtonDisabled: boolean,
    btnHeight: string | number,
    borderRadius: string | number,
    borderColor: string,
    borderwidth: string,

}

const Button = (props: Iprops) => {

    return (
        <TouchableOpacity
            activeOpacity={props.isButtonDisabled ? 1 : 0.6}
            onPress={props.onPress}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: props.width ? wp(props.width) : null,
                height: props.btnHeight ? hp(props.btnHeight) : hp(5),
                backgroundColor: props.backgroundColor ? props.backgroundColor : Colors.ThemeColorDark,
                borderRadius: props.borderRadius ? hp(props.borderRadius) : 0,
                borderWidth: props.borderwidth ? hp(props.borderwidth) : 0,
                borderColor: props.borderColor ? props.borderColor : undefined,
                marginLeft: props.marginLeft ? wp(props.marginLeft) : undefined,
                paddingVertical: props.paddingVertical ? wp(props.paddingVertical) : hp(0),
                paddingHorizontal: props.paddingHorizontal ? wp(props.paddingHorizontal) : wp(0),
            }}
        >
            <Text style={{
                fontFamily: props.fontFamily ? props.fontFamily : Font.InterBlack,
                color: props.textColor ? props.textColor : Colors.white,
                fontSize: props.labelSize ? props.labelSize : FontSize.fs13,
                fontWeight: props.fontWeight ? props.fontWeight : '700',
                textAlign: 'center',
            }}>{props.label}</Text>
        </TouchableOpacity>
    );
};

export default Button;