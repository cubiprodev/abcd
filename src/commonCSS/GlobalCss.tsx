import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "./Colors";
import { StyleSheet } from "react-native";
import Font from "./Font";
import FontSize from "./FontSize";

export const commonCSS = StyleSheet.create({

    // body:[[[[[[[[[[[]]]]]]]]]]]
    bodyFAFAFA: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },


    // box
    box: {
        marginTop: hp(1),
        borderWidth: hp(0.1),
        borderColor: Colors.borderColorECECEC,
        paddingVertical: hp(1),
        paddingHorizontal: wp(3.5),
        borderRadius: hp(1),
    },
    shadowBox: {

        shadowColor: Colors.shadowColor,
        shadowOffset: {
            width: 7,
            height: 1,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 8,
    },

    boxShadowx: {
        borderWidth: hp(0.1),
        borderColor: Colors.borderColorECECEC,
        marginTop: hp(1.5),
        paddingHorizontal: wp(5),
        paddingVertical: hp(1.5),
        borderRadius: hp(1),
        backgroundColor: Colors.white,
    },

    // line
    line: {
        borderBottomWidth: hp(0.1),
        borderBottomColor: Colors.LineColor,
    },
    dottedLine: { borderBottomWidth: hp(0.1), borderBottomColor: Colors.inactiveDotColor, borderStyle: 'dashed' },
    underLine: {
        fontFamily: Font.InterBlack,
        fontWeight: '700',
        fontSize: FontSize.fs14,
        color: Colors.ThemeColorDark,
        borderBottomColor: Colors.ThemeColorDark,
        borderBottomWidth: hp(0.15)
    },

    // text 16
    titleMB70016: {
        fontFamily: Font.InterBold,
        fontWeight: '700',
        fontSize: FontSize.fs16,
    },


    //14 
    headingIB60014: {
        fontFamily: Font.InterBlack,
        fontWeight: '700',
        fontSize: FontSize.fs14,
        color: Colors.mainText
    },


    // fs 12
    subTextIB40012secText: {
        fontFamily: Font.InterBlack,
        fontWeight: '400',
        fontSize: FontSize.fs12,
        color: Colors.secondaryText94
    },
    subTextIB50012primary: {
        fontFamily: Font.InterBlack,
        fontWeight: '500',
        fontSize: FontSize.fs12,
        color: Colors.primartText
    },


    // fs 10
    smallfw400fs10: {
        fontWeight: '400',
        fontSize: FontSize.fs10
    },
    smallfw500fs10: {
        fontWeight: '500',
        fontSize: FontSize.fs10
    },
    smallfw600fs10: {
        fontWeight: '700',
        fontSize: FontSize.fs10,
    },
    smallfw700fs10: {
        fontWeight: '700',
        fontSize: FontSize.fs10,
    },



    // alignment
    fdralic: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    alicjc: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    defaultPadding: {
        paddingHorizontal: wp(4),
    },

    gradientProgress: {
        height: hp(1),
        width: wp(8),
        borderRadius: hp(0.5),
        marginRight: wp(1),
        overflow: 'hidden'
    },
    //padding
    pvh: {
        paddingVertical: hp(1.5),
        paddingHorizontal: wp(4)
    },
    alicPt2: {
        flex: 1,
        alignItems: 'center',
        paddingTop: hp(2)
    },


    // modal zone:----------------
    zoneOne: {
        paddingTop: hp(38),
        flex: 1,
        backgroundColor: '#DDF8FFaa',
        justifyContent: 'flex-end'
    },
    zoneTwo: {
        alignSelf: 'center',
        bottom: hp(1),
    },
    zoneThree: {
        width: wp(30),
        height: hp(0.50),
        backgroundColor: Colors.ThemeColorDark,
        borderRadius: wp(1),
    },
    zoneFour: {
        backgroundColor: Colors.ThemeColorDark,
        borderRadius: hp(1.5),
        width: '100%',
        maxHeight: hp(30),
        paddingBottom: hp(1.5)
    }

})

export { wp, hp };
