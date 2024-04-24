import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { commonCSS, hp } from '../../commonCSS/GlobalCss';
import HeaderCustom from '../../component/HeaderCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../commonCSS/Colors';
import CustomTextInput from '../../component/custom/CustomTextInput';
import ModalSuccess from '../../component/ModalSuccess';
import Button from '../../component/Button';
import FontSize from '../../commonCSS/FontSize';
import Font from '../../commonCSS/Font';
import AccordianDealInfo from './comp/AccordianDealInfo';
import { Images } from '../../assets';

export default function CreateDeal({ navigation }: { navigation: any }) {
    const [newDealData, setNewDealData] = useState({
        orginationName: '',
        phone: '',
        qty: '',
    });
    const [errMessage, setErrMessage] = useState('');
    const [errModalVisible, setErrModalVisible] = useState(false);

    const createMedicine = async () => {
        if (newDealData.orginationName === '') {
            setErrMessage('Please Enter Medicine Name')
            setErrModalVisible(true);
            return;
        }
        if (newDealData.phone === '') {
            setErrMessage('Please Enter Price')
            setErrModalVisible(true);
            return;
        }
        if (newDealData.qty.length < 0) {
            setErrMessage('Please Enter Valid Quantity')
            setErrModalVisible(true);
            return;
        }

        var form = new FormData();
        form.append('productName', '');
        form.append('price', '');
        // form.append('text', number.length == 0 ? 'hidetext' : number);

        // http://localhost:8080/product/createProduct?productName="abcd"&price=20
        // await axios.post('http://localhost:8080/product/createProduct', form, {
        //     headers: {
        //         // Authorization: `Bearer ${token}`,
        //         Accept: 'application/json',
        //         'Content-Type': 'multipart/form-data',
        //     },
        // })
        //     .then(json => {
        //         if (json) {
        //             if (json?.status == 200) {
        //                 console.log(json?.data, 'vvvvvvvvvvvv1');
        //             } else {
        //                 console.log(json?.data, 'vvvvvvvvvvvv2');
        //             }
        //         }
        //     })
        //     .catch(error => {
        //         if (error) {
        //             console?.log(error, 'vvvvvvvvvvvv');
        //         }
        //     });




    }

    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Add New Medicine'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''} isSearchAvailable={false} searchKeyword={''} onchangeText={undefined} />

            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, ...commonCSS.pvh }}>
                <ScrollView style={{}}>
                    <CustomTextInput
                        title={'Medicine Name'}
                        placeholder={'Medication Name Here'}
                        multiline={false}
                        value={newDealData.orginationName}
                        onChangeText={(val => {
                            setNewDealData(prevData => ({
                                ...prevData,
                                orginationName: val
                            }));
                        })}
                        marginTop={false}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94}
                        disabled={false}
                    />
                    <CustomTextInput
                        title={'Medicine Price'}
                        placeholder={'123'}
                        multiline={false}
                        value={newDealData.phone}
                        onChangeText={(val => {
                            setNewDealData(prevData => ({
                                ...prevData,
                                phone: val
                            }));
                        })}
                        marginTop={true}
                        keyboardTypes={'number-pad'}
                        placeholderTextColor={Colors.secondaryText94}
                        disabled={false}
                    />
                    <CustomTextInput
                        title={'Total Quantity Per Strip'}
                        placeholder={'123'}
                        multiline={false}
                        value={newDealData.qty}
                        onChangeText={(val => {
                            setNewDealData(prevData => ({
                                ...prevData,
                                qty: val
                            }));
                        })}
                        marginTop={true}
                        keyboardTypes={'number-pad'}
                        placeholderTextColor={Colors.secondaryText94}
                        disabled={false}
                    />

                    <View style={{ marginTop: hp(2.5), ...commonCSS.alicjc }}>
                        <Button
                            label={'Add NEW MEDICINE'}
                            labelSize={FontSize.fs15}
                            fontWeight={'700'}
                            textColor={Colors.white}
                            fontFamily={Font.MontserratBlack}
                            marginLeft={''}
                            paddingHorizontal={''}
                            paddingVertical={''}
                            onPress={() => { createMedicine() }}
                            width={'92'}
                            backgroundColor={Colors.ThemeColorDark}
                            isButtonDisabled={false}
                            btnHeight={'5.5'}
                            borderRadius={'1.5'}
                            borderColor={''}
                            borderwidth={''}
                        />
                    </View>

                </ScrollView>
            </KeyboardAwareScrollView>

            <ModalSuccess
                message={errMessage}
                visible={errModalVisible}
                onRequestClose={() => {
                    setErrModalVisible(false);
                }}
                onPress={() => {
                    setErrModalVisible(false);
                }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    tml: {
        fontFamily: Font.InterBold,
        fontSize: FontSize.fs14,
        fontWeight: '700',
        color: Colors.mainText,
        textAlign: 'center',
        marginTop: hp(1.5)
    }
})
