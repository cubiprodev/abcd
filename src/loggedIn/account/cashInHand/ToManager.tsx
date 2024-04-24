import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import { Colors } from '../../../commonCSS/Colors';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import CustomTextInput from '../../../component/custom/CustomTextInput';
import Button from '../../../component/Button';
import ModalTaskCompleted from '../../../component/ModalTaskCompleted';

export default function ToManger({ navigation }: { navigation: any }) {
    const [managerData, setManagerData] = useState({
        amount: '',
        dop: '',
    })

    const [isCompleted, setIsCompleted] = useState(false);
    return (
        <View style={{ marginTop: hp(1.5), ...commonCSS.pvh, flex: 1 }}>
            <View style={{ height: hp(68) }}>
                <Text style={{
                    width: wp(70),
                    fontFamily: Font.InterBlack,
                    fontSize: FontSize.fs14,
                    fontWeight: '400',
                    color: Colors.mainText
                }}>Please enter the following details for transaction proof</Text>


                <CustomTextInput
                    title={'Amount'}
                    placeholder={'Enter amount'}
                    multiline={false}
                    value={managerData.amount}
                    onChangeText={(val => {
                        setManagerData(prevData => ({
                            ...prevData,
                            amount: val
                        }));
                    })}
                    marginTop={true}
                    keyboardTypes={'number-pad'}
                    placeholderTextColor={Colors.secondaryText94}
                />
                <CustomTextInput
                    title={'Date Of Payment'}
                    placeholder={'Enter the date of payment'}
                    multiline={false}
                    value={managerData.dop}
                    onChangeText={(val => {
                        setManagerData(prevData => ({
                            ...prevData,
                            dop: val
                        }));
                    })}
                    marginTop={true}
                    keyboardTypes={'number-pad'}
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
