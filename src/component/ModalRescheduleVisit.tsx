import React, { useEffect } from "react";
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
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../assets";
import ImageComponent from "./custom/ImageComponent";
import FontSize from "../commonCSS/FontSize";
import Font from "../commonCSS/Font";
import { Colors } from "../commonCSS/Colors";
import { commonCSS } from "../commonCSS/GlobalCss";
import Button from "./Button";
import RadioButton from "./RadioButton";
import Dropdown from "./custom/DropDown";
// import {  } from "../data/Data";


const ModalRescheduleVisit = ({ visible, onRequestClose, dateData, rescheduleOption, onPressRescheduleTask, onSelectReasonToReschedule, selectedValue }: { visible: boolean, onRequestClose: any, dateData: any, rescheduleOption: any, onPressRescheduleTask: any, onSelectReasonToReschedule: any, selectedValue: any }) => {



    return (
        <Modal
            visible={visible}
            transparent
            onRequestClose={onRequestClose}
            animationType="fade"
        >
            <TouchableOpacity
                activeOpacity={1}
                style={styles.mainViewx}
                onPress={onRequestClose}
            >
                <View style={styles.requestModalView}>

                    <Text style={{ ...commonCSS.headingIB60014, fontSize: FontSize.fs16 }}>Select reason to reschedule</Text>

                    <Dropdown
                        data={rescheduleOption}
                        onSelect={onSelectReasonToReschedule}
                        labelName={'name'}
                        typeName={""}
                        value={selectedValue}
                        isDisabled={false}
                        optionWidth={wp(72)}
                    />


                    <Text style={{ ...commonCSS.headingIB60014, marginTop: hp(1.7), fontSize: FontSize.fs16 }}>Reschedule Task</Text>

                    <Text style={{
                        ...commonCSS.subTextIB40012secText,
                        color: Colors.primartText,
                        paddingVertical: hp(0.5),
                        fontSize: FontSize.fs13
                    }}>When do you want to reschedule task to?</Text>

                    <View style={{
                        height: hp(22),
                        width: wp(70),
                    }}>
                        <RadioButton data={dateData} onSelect={(e) => console.log(e)} radioLabelName={"label"} />
                    </View>

                    {/* </View> */}


                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>
                        <Button
                            label={'Reschedule Task'}
                            labelSize={FontSize.fs12}
                            fontWeight={'700'}
                            textColor={Colors.white}
                            fontFamily={Font.MontserratBlack}
                            marginLeft={''}
                            paddingHorizontal={''}
                            paddingVertical={'1'}
                            onPress={onPressRescheduleTask}
                            width={'32'}
                            backgroundColor={Colors.ThemeColorDark}
                            isButtonDisabled={false}
                            btnHeight={'5'}
                            borderRadius={'1.5'}
                            borderColor={''}
                            borderwidth={''}
                        />

                        <Button
                            label={'Cancel'}
                            labelSize={FontSize.fs12}
                            fontWeight={'700'}
                            textColor={Colors.ThemeColorDark}
                            fontFamily={Font.MontserratBlack}
                            marginLeft={''}
                            paddingHorizontal={''}
                            paddingVertical={'1'}
                            onPress={onRequestClose}
                            width={'32'}
                            backgroundColor={Colors.white}
                            isButtonDisabled={false}
                            btnHeight={'5'}
                            borderRadius={'1.5'}
                            borderColor={Colors.ThemeColorDark}
                            borderwidth={'0.15'}
                        />
                    </View>

                    {/* <TouchableOpacity
                        onPress={}
                        style={{
                            // marginVertical: hp(1.5)
                            marginTop: hp(2)
                        }}>
                        <Text style={{
                            fontFamily: Font.InterBlack,
                            fontSize: FontSize.fs14,
                            fontWeight: '400',
                            color: Colors.mainText
                        }}>Cancel</Text>
                    </TouchableOpacity> */}

                </View>
            </TouchableOpacity>
        </Modal >
    );
};

export default ModalRescheduleVisit;

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
        paddingHorizontal: wp(4),
        borderRadius: 20,
        paddingVertical: hp(3),
        width: wp(80),
    },
});