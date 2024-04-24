import React from 'react'
import { StyleSheet, ActivityIndicator, View, Dimensions } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Colors } from '../../commonCSS/Colors';

type loderProps = {
    visible: boolean
}

const Loader = (props: loderProps) => {
    if (!props?.visible) {
        return null
    }
    return (
        <View style={s.modalRoot}>
            <ActivityIndicator
                style={s.loader}
                animating={true}
                size={hp(5)}
                color={Colors.ThemeColorDark}
            />
        </View>
    )
}

export default Loader

const s = StyleSheet.create({
    modalRoot: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        width: wp(100),
        height: hp(100),
        zIndex: 9,
        top: 0,
    },
    loader: {
        backgroundColor: Colors.lightBrandColor,
        borderRadius: 100,
        padding: 5,
        elevation: 3,
    }
})