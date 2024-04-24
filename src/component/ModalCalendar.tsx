import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Modal,
    TouchableOpacity,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FontSize from "../commonCSS/FontSize";
import Font from "../commonCSS/Font";
import { Colors } from "../commonCSS/Colors";
import { commonCSS } from "../commonCSS/GlobalCss";
import Button from "./Button";
import RadioButton from "./RadioButton";
import { Calendar, LocaleConfig } from 'react-native-calendars';


const ModalCalendar = ({ visible, onRequestClose, onPressOk, selectedDate, initialDate }: { visible: boolean, onRequestClose: any, onPressOk: any, selectedDate: any, initialDate: any }) => {

    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (selected) {
            selectedDate(selected)
        }
    }, [selected])

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <TouchableOpacity
                activeOpacity={1}
                style={styles.mainViewx}
            >
                <View style={styles.requestModalView}>
                    <Calendar
                        minDate={initialDate ? initialDate : undefined}
                        onDayPress={day => {
                            setSelected(day.dateString);
                        }}
                        markedDates={{
                            [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: Colors.ThemeColorDark }
                        }}
                    />

                    <View style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: hp(2),
                        right: hp(4),
                        marginTop: hp(2),
                        width: wp(30),
                        justifyContent: 'space-between'

                    }}>

                        <TouchableOpacity
                            onPress={onRequestClose}
                        >
                            <Text style={{
                                fontFamily: Font.InterBlack,
                                fontWeight: '600',
                                fontSize: FontSize.fs14,
                                color: Colors.ThemeColorDark,
                            }}>Cancel</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={onPressOk}
                        >
                            <Text style={{
                                fontFamily: Font.InterBlack,
                                fontWeight: '600',
                                fontSize: FontSize.fs14,
                                color: Colors.ThemeColorDark,
                            }}>OK</Text>
                        </TouchableOpacity>


                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalCalendar;

const styles = StyleSheet.create({
    btnText: {
        color: "#ffff",
        fontFamily: Font.MontserratBlack,
        fontSize: FontSize.fs16,
        lineHeight: 20,
        fontWeight: '700'
    },
    mainViewx: {
        flex: 1,
        backgroundColor: "#000000aa",
        justifyContent: "center",
        alignItems: "center",
    },
    requestModalView: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: hp(3),
        borderRadius: 20,
        alignItems: "center",
        paddingVertical: hp(3),
        width: wp(80),
        height: hp(44)
    },
});