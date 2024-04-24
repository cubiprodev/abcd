import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../commonCSS/Colors';
import FontSize from '../commonCSS/FontSize';
import Button from '../component/Button';
import Font from '../commonCSS/Font';
import TextComponent from '../component/custom/TextComponent';
import CustomTextInput from '../component/CustomTextInput';
import constants from '../services/constants';
import { postData } from '../services/mobileApi';
import Loader from '../component/custom/Loader';
import ModalSuccess from '../component/ModalSuccess';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Login({ navigation }: { navigation: any }) {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // 
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);


  const [focusedInput, setFocusedInput] = useState<number>(0);
  const [phoneNumber, setPhoneNumber] = useState<string>('9599302496');
  const [phoneError, setPhoneError] = useState<boolean>(false);

  const checkInternet = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://www.google.com', { method: 'HEAD' });
      if (response.status === 200) {
        setIsConnected(true);
        if (phoneNumber.length == 10) {
          console.log('Hello 1');
          doLogin();
        } else {
          setLoading(false);
          console.log('Hello 2')
          setMessage('Phone number should be \nof 10 characters');
          setShowModal(true);
        }
      } else {
        setLoading(false);
        setMessage('No internet Connection');
        setShowModal(true);
      }
    } catch (error) {
      console.log('Hello2x', error);
      setLoading(false)
      setIsConnected(false);
      setMessage('No internet Connection');
      setShowModal(true);
    }
  };


  const doLogin = async () => {
    console.log('hi:::::',)
    // AsyncStorage.setItem(constants.MOB_ACCESS_TOKEN_KEY, 'QWERTYUIOP');
    if (phoneNumber.length > 10) {
      setMessage('Phone number should not be greater \nthan 10 characters');
      setShowModal(true);
      setLoading(false)
      return;
    }
    if (phoneNumber.length < 10) {
      setMessage('Phone number should not be less \nthan 10 characters');
      setShowModal(true);
      setLoading(false)
      return;
    }
    if (password.length < 8) {
      setMessage('Password should not be less \nthan 8 characters');
      setShowModal(true);
      setLoading(false)
      return;
    }
    if (password.length > 18) {
      setMessage('Password should not be greater \nthan 18 characters');
      setShowModal(true);
      setLoading(false)
      return;
    }
    let request = {
      username: phoneNumber,
      password: password,
    };

    console.log('Hello 3', request)
    fetch(`http://localhost:8080/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify the content type as JSON
      },
      body: JSON.stringify(request) // Convert postData to JSON string
    })
      .then(response => {
        return response.json(); // Parse the JSON response
      })
      .then(data => {
        setLoading(false)
        console.log(data); // Output the response data
        // AsyncStorage.setItem(constants.MOB_ACCESS_TOKEN_KEY, 'QWERTYUIOP');
        // navigation.replace('LoggedIn');
      })
      .catch(error => {
        setLoading(false)
        console.log('There was a problem with your POST request:', error);
      });
  };


  return (
    <View style={styles.main}>
      <SafeAreaView
        style={{ flex: 1 }}>
        <View style={{
          width: wp(65),
          paddingTop: hp(10)
        }}>
          <View style={{
            borderBottomWidth: hp(0.3),
            borderBottomColor: Colors.ThemeColorDark,
            width: wp(21),
            paddingBottom: hp(0.6)
          }}>

            <TextComponent
              txtLabel={'Login'}
              fontColor={Colors.ThemeColorDark}
              fontFamily={Font.MontserratBlack}
              fWeight={'700'}
              fSize={FontSize.fs27}
              textAlign={''}
              marginTop={''}
              fontLineHeight={''}
            />
          </View>
          <TextComponent
            txtLabel={'Enter your mobile number and password'}
            fontColor={''}
            fontFamily={Font.MontserratBlack}
            fWeight={'700'}
            fSize={FontSize.fs20}
            marginTop={3}
            fontLineHeight={hp(4.5)}
            textAlign={''}
          />
        </View>


        <View style={{ marginTop: hp(3) }}>
          <CustomTextInput
            KeyboardType={'number-pad'}
            focusedInput={focusedInput}
            selectedBox={1}
            onBlur={(val: any) => setFocusedInput(0)}
            onFocus={(val: any) => setFocusedInput(1)}
            placeHolder={'Phone Number'}
            placeHolderColor={'lightgray'}
            value={phoneNumber}
            maxLength={13}
            textColor={Colors.mainText}
            onChangeText={(val: any) => { [setPhoneNumber(val), setPhoneError(false)]; }}
            image={true}
            fontFamily={Font.MontserratBlack}
            fontSize={FontSize.fs14}
            activeBorderColor={Colors.strokeBlue}
            inactiveBorderColor={Colors.textInputInactive}
            autoFocus={true}
          />

          {phoneError ? (
            <Text style={styles.error}>Invalid Password</Text>
          ) : null}
        </View>


        {/* password */}
        <CustomTextInput
          KeyboardType={'default'}
          focusedInput={focusedInput}
          selectedBox={2}
          onBlur={(val: any) => setFocusedInput(0)}
          onFocus={(val: any) => setFocusedInput(2)}
          placeHolder={'Password'}
          placeHolderColor={'lightgray'}
          value={password}
          maxLength={13}
          textColor={Colors.mainText}
          onChangeText={(val: any) => { [setPassword(val), setPasswordError(false)]; }}
          // image={true}
          fontFamily={Font.MontserratBlack}
          fontSize={FontSize.fs14}
          activeBorderColor={Colors.strokeBlue}
          inactiveBorderColor={Colors.textInputInactive}
          autoFocus={true}
        />






        <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: hp(4) }}>

          <Button
            label={'LOGIN'}
            labelSize={FontSize.fs16}
            fontWeight={'700'}
            textColor={Colors.white}
            fontFamily={Font.MontserratBlack}
            marginLeft={''}
            paddingHorizontal={''}
            paddingVertical={''}
            onPress={() => phoneNumber.length >= 10 ? checkInternet() : undefined}
            width={'85'}
            // backgroundColor={phoneNumber.length >= 10 ? Colors.ThemeColorDark : Colors.greyActiveC7C7C7}
            // isButtonDisabled={phoneNumber.length >= 10 ? false : true}
            btnHeight={'5.5'}
            borderRadius={'1.5'}
            borderColor={''}
            borderwidth={''}
          />
        </View>


        <ModalSuccess
          error={true}
          message={message}
          visible={showModal}
          onRequestClose={() => {
            setShowModal(false);
          }}
          onPress={() => {
            setShowModal(false);
          }}
        />


      </SafeAreaView>
      <Loader visible={loading} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.backgroundColorf8,
  },

  focusedInput: {
    paddingHorizontal: wp(5),
    borderWidth: hp(0.15),
    borderColor: Colors.textInputActive,
    borderRadius: wp(3.5),
    height: hp(6.5),
    marginTop: hp(2),
  },

  input: {
    paddingHorizontal: wp(5),
    borderWidth: hp(0.15),
    borderColor: Colors.textInputInactive,
    borderRadius: wp(3.5),
    height: hp(6.5),
    marginTop: hp(2),
  },
  error: {
    color: 'red',
    fontFamily: Font.poppinsItalic,
    paddingLeft: wp(1),
    marginTop: hp(0.5)
  }
})