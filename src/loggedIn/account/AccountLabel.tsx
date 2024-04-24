import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Font from '../../commonCSS/Font'
import { Colors } from '../../commonCSS/Colors'
import FontSize from '../../commonCSS/FontSize'
import ImageComponent from '../../component/custom/ImageComponent'
import { Images } from '../../assets'
import { commonCSS } from '../../commonCSS/GlobalCss'

export default function AccountLabel({ onPressx, imgSource, label, showArrow }: { onPressx: any, imgSource: any, label: string, showArrow: boolean }) {
    return (
        <TouchableOpacity
            onPress={onPressx}
            style={[styles.main]}>
            {imgSource === undefined ? null :
                <ImageComponent source={imgSource} height={3} width={hp( 2.9 )} mode={'cover'} tintColor={'black'} />
            }

            <Text style={styles.text}>{label}</Text>

            {showArrow &&
                <View>
                    <ImageComponent source={Images.forwardArrow} height={2.5} width={hp(1.5)} mode={'cover'} />
                </View>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    main: {
        ...commonCSS.boxShadowx,
        ...commonCSS.shadowBox,
        // width: wp(92),
        flexDirection: 'row',
        alignItems: 'center',
        // paddingVertical: hp(1),
        // backgroundColor: Colors.white,
    },
    text: {
        flex: 1,
        color: Colors.mainText,
        fontWeight: '600',
        fontFamily: Font.InterBold,
        marginHorizontal: wp(4),
        fontSize: FontSize.fs17
    },

})