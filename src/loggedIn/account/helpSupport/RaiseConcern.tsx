import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '../../../component/custom/CustomTextInput';
import { Colors } from '../../../commonCSS/Colors';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import ButtonLightDArkBorder from '../../../component/ButtonLightDArkBorder';
import { Images } from '../../../assets';
import ImageComponent from '../../../component/custom/ImageComponent';
import Button from '../../../component/Button';
import { launchCamera } from 'react-native-image-picker';
import VideoPlayer from '../../../component/custom/VideoPlayer';


export default function RaiseConcern({ navigation, route }: { navigation: any, route: any }) {
    const [concernData, setConcernData] = useState({
        title: '',
        desc: '',
        selectedImage: [],
    });
    const [isPlaying, setIsPlaying] = useState([]);

    const handleCameraLaunch = () => {

        const options = {
            mediaType: 'camera',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
            cameratype: 'front',
            quality: 0.5,
        };

        launchCamera(options, response => {
            console.log("imageUri::::::::", response);
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setConcernData(prevData => ({
                    ...prevData,
                    selectedImage: [...concernData.selectedImage, imageUri]
                }));
            }
        });
    }

    const handleVideoLaunch = () => {

        const options = {
            mediaType: 'video',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
            cameratype: 'front',
            quality: 0.5,
        };

        launchCamera(options, response => {
            console.log("imageUri::::::::", response);
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setConcernData(prevData => ({
                    ...prevData,
                    selectedImage: [...concernData.selectedImage, imageUri]
                }));
            }
        });
    }



    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Raise Concern'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, }}>
                <ScrollView style={{ ...commonCSS.pvh, }}>

                    <CustomTextInput
                        title={'Title'}
                        placeholder={'State your concern.'}
                        multiline={false}
                        value={concernData.title}
                        onChangeText={(val => {
                            setConcernData(prevData => ({
                                ...prevData,
                                title: val
                            }));
                        })}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94}
                    />

                    <CustomTextInput
                        title={'Description'}
                        placeholder={'State your concern.'}
                        multiline={true}
                        value={concernData.desc}
                        onChangeText={(val => {
                            setConcernData(prevData => ({
                                ...prevData,
                                desc: val
                            }));
                        })}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94}
                    />

                    <View style={{ marginTop: hp(1.5) }}>
                        <Text style={styles.title}>Upload Images</Text>

                        <TouchableOpacity
                            onPress={() => { handleCameraLaunch() }}
                            style={styles.btn}>
                            <ImageComponent source={Images.uploadDoc} height={2} width={hp(2)} mode={'contain'} />
                            <Text style={{
                                fontFamily: Font.InterBlack,
                                fontSize: FontSize.fs12,
                                fontWeight: '400',
                                color: Colors.mainText,
                                paddingLeft: wp(2)
                            }}>Upload Images</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => { handleVideoLaunch() }}
                            style={styles.btn}>
                            <ImageComponent source={Images.uploadDoc} height={2} width={hp(2)} mode={'contain'} />
                            <Text style={{
                                fontFamily: Font.InterBlack,
                                fontSize: FontSize.fs12,
                                fontWeight: '400',
                                color: Colors.mainText,
                                paddingLeft: wp(2)
                            }}>Upload Video</Text>
                        </TouchableOpacity>
                    </View>



                    <View style={{ marginTop: hp(1.5) }}>
                        {concernData?.selectedImage.map((item, index) => {
                            // Check the file format
                            const isImage = item.endsWith('.jpg');
                            const isVideo = item.endsWith('.mp4');

                            // Render Image component for .jpg files
                            if (isImage) {
                                return (
                                    <View style={{ paddingVertical: hp(1.5), width: hp(20), height: hp(20), borderRadius: hp(1), overflow: 'hidden' }}>
                                        <Image
                                            key={index}
                                            style={{ width: '100%', height: '100%', resizeMode: 'cover' }} // Adjust the style as needed
                                            source={{ uri: item }}
                                        />
                                    </View>
                                );
                            }

                            // Render Video component for .mp4 files
                            if (isVideo) {
                                return (
                                    <View style={{ paddingVertical: hp(1.5) }}>
                                        <VideoPlayer
                                            url={item}
                                            isPlaying={isPlaying}
                                            onPlay={() => setIsPlaying(true)}
                                            isControlVisible={false}
                                        />
                                    </View>
                                );
                            }

                            // Return null for unsupported formats or handle them as needed
                            return null;
                        })}
                    </View>
                    <View style={{ height: hp(7) }}></View>
                </ScrollView>
            </KeyboardAwareScrollView>

            <View style={{ position: 'absolute', alignItems: 'center', width: wp(100), bottom: hp(1) }}>

                <Button
                    label={'Raise Ticket'}
                    labelSize={FontSize.fs16}
                    fontWeight={'700'}
                    textColor={Colors.white}
                    fontFamily={Font.MontserratBlack}
                    marginLeft={''}
                    paddingHorizontal={''}
                    paddingVertical={''}
                    onPress={() => { }}
                    width={'92'}
                    backgroundColor={Colors.ThemeColorDark}
                    isButtonDisabled={false}
                    btnHeight={'5.5'}
                    borderRadius={'1.5'}
                    borderColor={''}
                    borderwidth={''}
                />
            </View>

        </View>
    );
}


// define your styles
const styles = StyleSheet.create({
    title: {
        fontWeight: '700',
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs14,
        color: Colors.mainText,
    },
    btn: {
        marginTop: hp(1.5),
        ...commonCSS.fdralic,
        backgroundColor: 'rgba(55, 177, 35, 0.1)',
        borderWidth: hp(0.1),
        borderColor: Colors.brandGreen,
        paddingVertical: hp(0.6),
        paddingHorizontal: wp(2),
        borderRadius: hp(0.7),
        width: wp(45),
        justifyContent: 'center'
    }
})  
