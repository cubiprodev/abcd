import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Font from '../commonCSS/Font';
import FontSize from '../commonCSS/FontSize';
import { commonCSS, hp, wp } from '../commonCSS/GlobalCss';
import { Colors } from '../commonCSS/Colors';
import ImageComponent from './custom/ImageComponent';
import { Images } from '../assets';

export default function ModalTime({ visible, onRequestClose, onpressOk }: { visible: boolean, onRequestClose: any, onpressOk: any }) {
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');

    const [isHourFocused, setIsHourFocused] = useState(false);
    const [isMinuteFocused, setIsMinuteFocused] = useState(false);
    const [isAmSelected, setIsAmSelected] = useState(true);

    const handleSetTime = () => {
        // Validate input if needed
        const formattedTime = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')} ${isAmSelected ? 'AM' : 'PM'}`;
        // console.log(formattedTime); // You can use this formatted time as needed
        onpressOk(formattedTime);
    };


    return (
        <Modal
            visible={visible}
            transparent
            onRequestClose={onRequestClose}
            animationType="fade"
        >
            <View style={styles.mainViewx}>
                <View style={styles.requestModalView}>
                    <Text style={styles.t1}>ENTER TIME</Text>


                    <View style={{ marginTop: hp(2) }}>

                        <View style={{ ...commonCSS.fdralic }}>
                            <View style={[styles.hour, {
                                borderColor: isHourFocused ? Colors.ThemeColorDark : Colors.lightBrandColor,
                                backgroundColor: isHourFocused ? Colors.white : Colors.lightBrandColor,
                            }]}>
                                <TextInput
                                    value={hour}
                                    style={styles.txt}
                                    placeholder={'00'}
                                    onFocus={() => { setIsHourFocused(true) }}
                                    onBlur={() => { setIsHourFocused(false) }}
                                    placeholderTextColor={Colors.inactivegreyE9E9E9}
                                    keyboardType={'number-pad'}
                                    maxLength={2}
                                    onChangeText={(val) => { setHour(val) }}
                                />
                            </View>

                            <View style={styles.dots}>
                                <View style={styles.doto}></View>
                                <View style={styles.dott}></View>
                            </View>

                            <View style={[styles.hour, {
                                borderColor: isMinuteFocused ? Colors.ThemeColorDark : Colors.lightBrandColor,
                                backgroundColor: isMinuteFocused ? Colors.white : Colors.lightBrandColor,
                            }]}>
                                <TextInput
                                    value={minute}
                                    style={styles.txt}
                                    placeholder={'00'}
                                    onFocus={() => { setIsMinuteFocused(true) }}
                                    onBlur={() => { setIsMinuteFocused(false) }}
                                    placeholderTextColor={Colors.inactivegreyE9E9E9}
                                    keyboardType={'number-pad'}
                                    maxLength={2}
                                    onChangeText={(val) => { setMinute(val) }}
                                />
                            </View>

                            <View style={styles.dots}></View>

                            <View style={styles.ampm}>
                                <TouchableOpacity
                                    onPress={() => { setIsAmSelected(true) }}
                                    style={{
                                        flex: 1,
                                        width: wp(9),
                                        ...commonCSS.alicjc,
                                        backgroundColor: isAmSelected ? Colors.lightBrandColor : Colors.white
                                    }}>
                                    <Text style={{
                                        color: isAmSelected ? Colors.ThemeColorDark : Colors.grey969696,
                                    }}>AM</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => { setIsAmSelected(false) }}
                                    style={{
                                        flex: 1,
                                        width: wp(9),
                                        ...commonCSS.alicjc,
                                        backgroundColor: isAmSelected ? Colors.white : Colors.lightBrandColor
                                    }}>
                                    <Text style={{
                                        color: isAmSelected ? Colors.grey969696 : Colors.ThemeColorDark,
                                    }}>PM</Text>
                                </TouchableOpacity>

                            </View>
                        </View>

                        <View style={{ ...commonCSS.fdralic, marginTop: hp(0.5) }}>
                            <Text style={[styles.t1, { paddingRight: wp(21) }]}>Hour</Text>

                            <Text style={styles.t1}>Minute</Text>
                        </View>
                    </View>


                    <View style={{ marginTop: hp(3), ...commonCSS.fdralic, justifyContent: 'space-between' }}>
                        <ImageComponent source={Images.clockt} height={2} width={hp(2)} mode={'contain'} />

                        <View style={{ ...commonCSS.fdralic }}>

                            <TouchableOpacity onPress={onRequestClose}>
                                <Text style={styles.t2}>CANCEL</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={handleSetTime}
                                style={{ marginLeft: wp(8) }}>
                                <Text style={[styles.t2, { color: Colors.ThemeColorDark }]}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    mainViewx: {
        flex: 1,
        backgroundColor: "#000000aa",
        justifyContent: "center",
        alignItems: "center",
    },
    requestModalView: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: hp(3),
        borderRadius: hp(0.5),
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(4),
        // width: wp(92),
    },
    txt: {
        color: Colors.black,
        fontFamily: Font.InterBold,
        fontWeight: '800',
        fontSize: FontSize.fs30
    },
    t1: {
        fontFamily: Font.MontserratBlack,
        fontWeight: '600',
        fontSize: FontSize.fs12,
        color: Colors.grey969696
    },
    t2: {
        fontFamily: Font.MontserratBlack,
        fontWeight: '600',
        fontSize: FontSize.fs14,
        color: Colors.grey969696
    },
    hour: {
        width: wp(20),
        height: hp(7),
        borderWidth: hp(0.25),
        alignItems: 'center',
        justifyContent: 'center',
    },
    dots: {
        width: wp(8),
        alignItems: 'center',
        justifyContent: 'center'
    },
    doto: {
        backgroundColor: Colors.black,
        height: hp(1),
        width: hp(1),
        borderRadius: hp(0.5),
        marginBottom: hp(1)
    },
    dott: {
        backgroundColor: Colors.black,
        height: hp(1),
        width: hp(1),
        borderRadius: hp(0.5),
    },
    ampm: {
        width: wp(10),
        height: hp(7),
        borderWidth: hp(0.25),
        borderColor: Colors.ThemeColorDark,
        ...commonCSS.alicjc
    },



});
