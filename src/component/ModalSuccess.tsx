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

const ModalSuccess = ({ visible, onRequestClose, onPress, message, type, error }: any) => {
    return (
        <Modal
            visible={visible}
            transparent
            onRequestClose={onRequestClose}
            animationType="fade"
        >
            {!error ?
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.mainViewx}
                    onPress={onRequestClose}
                >
                    <View style={styles.requestModalView}>
                        <View style={styles.messageImageView}>
                            <Image
                                resizeMode="contain"
                                source={Images.messageSquare}
                                style={styles.msgSquare}
                            />
                        </View>
                        <Text style={styles.requestModalText}>{message} </Text>

                        <TouchableOpacity activeOpacity={1} onPress={onPress}>
                            <LinearGradient
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                colors={[Colors.tpFromColor, Colors.tpToColor]}
                                style={styles.requestButton}
                            >
                                <Text style={styles.btnText}>Ok</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.mainViewx}
                    onPress={onRequestClose}
                >
                    <View style={styles.requestModalView}>
                        <View style={styles.errmessageImageView}>
                            <ImageComponent source={Images.crossblack} height={3} width={hp(3)} mode={"contain"} />
                        </View>

                        <Text style={{
                            ...commonCSS.titleMB70016,
                            paddingTop: hp(5),
                            color: Colors.mainText
                        }}>Oops !</Text>

                        <Text style={styles.requestModalText}>{message} </Text>

                        <TouchableOpacity activeOpacity={1} style={styles.requestButton} onPress={onPress}>
                            <Text style={styles.btnText}>Ok</Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity>
                            <Text style={{
                                fontFamily: Font.MontserratBlack,
                                fontWeight: '700',
                                fontSize: FontSize.fs16,
                                color: Colors.mainText,
                                paddingBottom: hp(1.5)
                            }}>Contact us</Text>
                        </TouchableOpacity> */}
                    </View>
                </TouchableOpacity>

            }
        </Modal>
    );
};

export default ModalSuccess;

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
        paddingVertical: hp(1),
        width: wp(70),
    },
    requestModalText: {
        color: Colors.secondaryText94,
        fontWeight: "600",
        fontSize: FontSize.fs14,
        fontFamily: Font.InterBlack,
        textAlign: "center",
        paddingBottom: hp(1),
        paddingTop: hp(2.5),
        lineHeight: hp(2.2)
    },
    requestButton: {
        padding: hp(1),
        borderRadius: hp(1.5),
        paddingHorizontal: hp(10),
        marginVertical: hp(1.5),
        backgroundColor: Colors.error
    },
    messageImageView: {
        backgroundColor: Colors.ThemeColorDark,
        borderWidth: 4,
        borderColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        height: hp(11),
        width: hp(11),
        marginTop: hp(-4.5),
        shadowColor: "#171717",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    errmessageImageView: {
        backgroundColor: Colors.error,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: hp(4),
        height: hp(8),
        width: hp(8),
        position: 'absolute',
        top: hp(-4)
    },
});