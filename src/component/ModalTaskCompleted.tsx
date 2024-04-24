import React from "react";
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

const ModalTaskCompleted = ({ visible, onRequestClose, message }: { visible: boolean, onRequestClose: any, message: string }) => {
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


                    <LinearGradient
                        start={{ x: -0.5, y: -0.5 }}
                        end={{ x: 0.87, y: 0 }}
                        colors={[Colors.tpFromColor, Colors.tpToColor]}
                        style={styles.messageImageView}
                    >
                        <ImageComponent source={Images.tickMark} height={4} width={hp(4)} mode={"contain"} />
                    </LinearGradient>


                    <Text style={styles.requestModalText}>{message} </Text>




                    <Button
                        label={'Done'}
                        labelSize={FontSize.fs16}
                        fontWeight={'700'}
                        textColor={Colors.white}
                        fontFamily={Font.MontserratBlack}
                        marginLeft={''}
                        paddingHorizontal={''}
                        paddingVertical={'1'}
                        onPress={onRequestClose}
                        width={'55'}
                        backgroundColor={Colors.ThemeColorDark}
                        isButtonDisabled={false}
                        btnHeight={'5'}
                        borderRadius={'1.5'}
                        borderColor={''}
                        borderwidth={''}
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    );
};

export default ModalTaskCompleted;

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
    msgSquare: {
        height: hp(5),
        width: hp(5),
        resizeMode: "contain",
    },
    requestModalView: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: hp(3),
        borderRadius: 20,
        alignItems: "center",
        paddingVertical: hp(3),
        width: wp(70),
    },
    requestModalText: {
        width: wp(50),
        color: Colors.primartText,
        fontWeight: "700",
        fontSize: FontSize.fs16,
        fontFamily: Font.InterBlack,
        textAlign: "center",
        paddingVertical: hp(2),
        lineHeight: hp(2.5)
    },
    requestButton: {
        padding: hp(1),
        borderRadius: hp(1.5),
        paddingHorizontal: hp(10),
        marginVertical: hp(1.5),
        backgroundColor: Colors.error
    },
    messageImageView: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: hp(5.5),
        height: hp(11),
        width: hp(11),
    },

});