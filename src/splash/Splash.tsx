import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from "@react-navigation/native";
import constants from '../services/constants';
import ImageComponent from '../component/custom/ImageComponent';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Colors } from '../commonCSS/Colors';
import { Images } from '../assets';
import TextComponent from '../component/custom/TextComponent';
import Font from '../commonCSS/Font';
import FontSize from '../commonCSS/FontSize';


export default function Splash({ navigation }: { navigation: any }) {

  useEffect(() => {
    setTimeout(() => {
      handleNavigation();
    }, 1000);
  }, []);

  const handleNavigation = async () => {
    let IS_LOGIN = await AsyncStorage.getItem(constants.MOB_ACCESS_TOKEN_KEY);

    if (IS_LOGIN != null) {
      let reset = CommonActions.reset({
        index: 0,
        routes: [{ name: "LoggedIn" }],
      });
      navigation.dispatch(reset);
    } else {
      console.log("go to auth")
      let reset = CommonActions.reset({
        index: 0,
        routes: [{ name: "Authentication" }],
      });
      navigation.dispatch(reset);
    }
  };


  return (
    <SafeAreaView style={styles.main}>

      <ImageComponent
        source={Images.productLogo}
        height={30} width={heightPercentageToDP(30)} mode={'cover'} />

      <TextComponent
        txtLabel={constants.splashText}
        fontColor={Colors.ThemeColorDark}
        fontFamily={Font.MontserratBlack}
        fWeight={'700'}
        fSize={FontSize.fs30}
        textAlign={'center'}
        marginTop={27}
        fontLineHeight={''}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingTop: heightPercentageToDP(30),
    alignItems: 'center',
  },
})