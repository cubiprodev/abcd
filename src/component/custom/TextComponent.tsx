import React from 'react';
import { View, Text } from 'react-native';
import Font from '../../commonCSS/Font';
import { Colors } from '../../commonCSS/Colors';
import FontSize from '../../commonCSS/FontSize';
import { heightPercentageToDP } from 'react-native-responsive-screen';


type Iprops = {
    txtLabel: string | number,
    fontColor: string,
    fontFamily: string,
    fWeight: string | number,
    fSize: string | number,
    textAlign: string,
    marginTop: string | number,
    fontLineHeight: string | number,
}

export default function TextComponent(props: Iprops) {
    return (
        <View style={{
            marginTop: props.marginTop ? heightPercentageToDP(props.marginTop) : 0,
        }}>
            <Text
                style={{
                    textAlign: props.textAlign ? props.textAlign : 'left',
                    color: props.fontColor ? props.fontColor : Colors.black,
                    fontFamily: props.fontFamily ? props.fontFamily : Font.InterBlack,
                    lineHeight: props.fontLineHeight ? props.fontLineHeight : undefined,
                    fontSize: props.fSize ? props.fSize : FontSize.fs10,
                    fontWeight: props.fWeight ? props.fWeight : '400'
                }}
            >{props.txtLabel}</Text>
        </View>
    );
}
