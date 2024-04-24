import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderCustom from '../../component/HeaderCustom';
import { commonCSS } from '../../commonCSS/GlobalCss';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import VideoPlayer from '../../component/custom/VideoPlayer';
import { Colors } from '../../commonCSS/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontSize from '../../commonCSS/FontSize';
import Font from '../../commonCSS/Font';

export default function CarouselDetail({ navigation }: { navigation: any }) {
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom title={'Kalpavriksha'} onPressBackArrow={() => navigation.goBack()} />
            <KeyboardAwareScrollView
                contentContainerStyle={{ flex: 1 }}
            >
                <VideoPlayer
                    // url={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
                    url={`https://www.youtube.com/watch?v=AOihktRuTvw`}
                    isPlaying={isPlaying}
                    onPlay={() => setIsPlaying(true)}
                />

                <Text style={s.t1}>Lorem ipsum dolor sit amet consectetur. Egestas nascetur consequat quisque diam odio sed proin luctus nisl. Id in suscipit aliquet pellentesque euismod justo consequat. Dui fermentum id cras elementum sed purus rhoncus consequat habitasse. Tortor morbi vestibulum ipsum pulvinar volutpat vitae. In rhoncus malesuada nunc gravida nam vivamus lectus auctor. In eu dictumst dui quisque amet. Sed tempor cursus non malesuada aliquet. Vel senectus vitae pulvinar eget sed sed gravida. Elit quis sem eget ut vitae fringilla.</Text>
            </KeyboardAwareScrollView>
        </View>
    );
}

const s = StyleSheet.create({
    t1: {
        color: Colors.secondaryText94,
        backgroundColor: Colors.white,
        ...commonCSS.pvh,
        marginHorizontal: wp(4),
        borderWidth: hp(0.1),
        borderRadius: hp(1),
        borderColor: Colors.borderColorD4D4D4,
        lineHeight: FontSize.fs14,
        fontSize: FontSize.fs12,
        fontWeight: '400',
        fontFamily: Font.InterBlack
    }
})
