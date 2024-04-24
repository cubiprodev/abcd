//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ImageComponent from './custom/ImageComponent';
import { Images } from '../assets';
import TextComponent from './custom/TextComponent';
import { Colors } from '../commonCSS/Colors';
import Font from '../commonCSS/Font';
import FontSize from '../commonCSS/FontSize';




type Iprops = {
  autoFocus: any;
  KeyboardType: string,
  focusedInput: string | number,
  selectedBox: number | string,
  onBlur: any,
  onFocus: any | void,//set focusedInput
  activeBorderColor: string,
  inactiveBorderColor: string,

  placeHolder: string,
  placeHolderColor: string,
  value: any,
  maxLength: number,

  textColor: string,
  fontFamily: string,
  fontSize: string | number,


  onChangeText: any,
  image: boolean,

}

// create a component
const CustomTextInput = (props: Iprops) => {


  useEffect(() => {
    console.log(props.focusedInput, props.selectedBox)
  }, [])

  return (
    <View style={[Number(props.focusedInput) === Number(props.selectedBox) ?
      {
        // color: props.activeBorderColor,
        paddingHorizontal: wp(5),
        borderWidth: hp(0.15),
        borderColor: props.activeBorderColor,
        borderRadius: wp(3.5),
        height: hp(6.5),
        marginTop: hp(2),
      }
      :
      {
        // color: props.inactiveBorderColor,
        paddingHorizontal: wp(5),
        borderWidth: hp(0.15),
        borderColor: props.inactiveBorderColor,
        borderRadius: wp(3.5),
        height: hp(6.5),
        marginTop: hp(2),
      }
    ]}>
      <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
        {props.image &&
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <ImageComponent source={Images.india} height={2} width={hp(2.5)} mode={'contain'} />
            <View style={{
              paddingHorizontal: wp(2),
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor: 'red'
              borderRightWidth: hp(0.2),
              borderRightColor: Colors.greyActiveC7C7C7,
              marginRight: wp(2)
            }}>
              <TextComponent
                autoFocus={props.autoFocus}
                txtLabel={'+91'} fontColor={props.textColor} fontFamily={props.fontFamily} fWeight={'500'} fSize={props.fontSize}
                marginTop={''} fontLineHeight={''} textAlign={''} />
              <View style={{
              }}></View>
            </View>
          </View>
        }
        <TextInput
          autoFocus={props.autoFocus}
          value={props.value}
          style={{ color: props.textColor, flex: 1, fontFamily: props.fontFamily, fontSize: props.fontSize }}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          placeholder={props.placeHolder}
          placeholderTextColor={props.placeHolderColor}
          keyboardType={props.KeyboardType ? props.KeyboardType : 'default'}
          maxLength={props.maxLength ? props.maxLength : 200}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>

  );
};
const styles = StyleSheet.create({

});
export default CustomTextInput;