import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../commonCSS/Colors';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import Button from '../../../component/Button';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import CustomTextInput from '../../../component/custom/CustomTextInput';
import ModalTaskCompleted from '../../../component/ModalTaskCompleted';

export default function ToBank({ navigation }: { navigation: any }) {
    const [bankData, setBankData] = useState({
        transactionId: '',
        amount: '',
        to: '',
        from: '',
    })
    const [isCompleted, setIsCompleted] = useState(false);
    return (
        <View style={{ marginTop: hp(1.5), ...commonCSS.pvh, flex: 1 }}>
            <View style={{
                backgroundColor: '#E8E8E8',
                paddingVertical: hp(1),
                paddingHorizontal: wp(3),
                borderRadius: hp(1)

            }}>
                <Text style={st.t1}>Please find below the account details to send money directly to MWB bank</Text>

                <CustomTextInput
                    title={'Account Number'}
                    placeholder={'283349909'}
                    multiline={false}
                    value={'283349909'}
                    onChangeText={(val => { undefined })}
                    marginTop={true}
                    keyboardTypes={undefined}
                    placeholderTextColor={Colors.secondaryText94}
                />

                <CustomTextInput
                    title={'IFSC Code'}
                    placeholder={'ICIC999217398'}
                    multiline={false}
                    value={'ICIC999217398'}
                    onChangeText={(val => { undefined })}
                    marginTop={true}
                    keyboardTypes={undefined}
                    placeholderTextColor={Colors.secondaryText94}
                />
            </View>


            <View style={{ marginTop: hp(1.5) }}>
                <Text style={st.t1}>Please enter the following details for transaction proof</Text>


                <CustomTextInput
                    title={'Transaction ID'}
                    placeholder={'Enter transaction ID'}
                    multiline={false}
                    value={bankData.transactionId}
                    onChangeText={(val => {
                        setBankData(prevData => ({
                            ...prevData,
                            transactionId: val
                        }));
                    })}
                    marginTop={true}
                    keyboardTypes={undefined}
                    placeholderTextColor={Colors.secondaryText94}
                />
                <CustomTextInput
                    title={'Amount'}
                    placeholder={'Enter amount'}
                    multiline={false}
                    value={bankData.amount}
                    onChangeText={(val => {
                        setBankData(prevData => ({
                            ...prevData,
                            amount: val
                        }));
                    })}
                    marginTop={true}
                    keyboardTypes={'number-pad'}
                    placeholderTextColor={Colors.secondaryText94}
                />
                <CustomTextInput
                    title={'To'}
                    placeholder={'Enter receiving ID'}
                    multiline={false}
                    value={bankData.to}
                    onChangeText={(val => {
                        setBankData(prevData => ({
                            ...prevData,
                            to: val
                        }));
                    })}
                    marginTop={true}
                    keyboardTypes={undefined}
                    placeholderTextColor={Colors.secondaryText94}
                />
                <CustomTextInput
                    title={'From'}
                    placeholder={'Enter sending ID'}
                    multiline={false}
                    value={bankData.from}
                    onChangeText={(val => {
                        setBankData(prevData => ({
                            ...prevData,
                            from: val
                        }));
                    })}
                    marginTop={true}
                    keyboardTypes={undefined}
                    placeholderTextColor={Colors.secondaryText94}
                />
            </View>

            <View style={{ marginVertical: hp(3), justifyContent: 'flex-end', }}>
                <Button
                    label={'Submit Request'}
                    labelSize={FontSize.fs15}
                    fontWeight={'700'}
                    textColor={Colors.white}
                    fontFamily={Font.MontserratBlack}
                    marginLeft={''}
                    paddingHorizontal={''}
                    paddingVertical={''}
                    onPress={() => { setIsCompleted(true) }}
                    width={'92'}
                    backgroundColor={Colors.ThemeColorDark}
                    isButtonDisabled={false}
                    btnHeight={'5.5'}
                    borderRadius={'1.5'}
                    borderColor={''}
                    borderwidth={''}
                />
            </View>
            <ModalTaskCompleted
                visible={isCompleted}
                onRequestClose={() => { setIsCompleted(false) }}
                message={'Request sent \nsuccessfully'} />
        </View>
    );
}

const st = StyleSheet.create({
    t1: {
        width: wp(70),
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs14,
        fontWeight: '400',
        color: Colors.mainText
    },

})