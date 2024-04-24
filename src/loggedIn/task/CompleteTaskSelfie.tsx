import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderCustom from '../../component/HeaderCustom';
import { commonCSS, hp, wp } from '../../commonCSS/GlobalCss';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../commonCSS/Colors';
import ModalTaskCompleted from '../../component/ModalTaskCompleted';
import ImageComponent from '../../component/custom/ImageComponent';
import { Images } from '../../assets';
import FontSize from '../../commonCSS/FontSize';
import Button from '../../component/Button';
import Font from '../../commonCSS/Font';
import { launchCamera } from 'react-native-image-picker';
import { useIsFocused } from '@react-navigation/native';

export default function CompleteTaskSelfie({ navigation, route }: { navigation: any, route: any }) {

    const [openTaskCompletedModal, setOpenTaskCompletedModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(undefined);
    const [isStoreClosed, setIsStoreClosed] = useState(false);

    const handleCameraLaunch = () => {
        const options = {
            mediaType: 'photo',
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
                setSelectedImage(imageUri);
            }
        });
    }

    console.log('isStoreClosed:::::::::1', route?.params);

    useEffect(() => {
        const isStoreClosedzz = route?.params?.key;
        console.log('isStoreClosed:::::::::', isStoreClosedzz);
        if (isStoreClosed !== undefined) {
            if (isStoreClosedzz.toLowerCase() === 'storeclosed') {
                console.log('store is closed');
                setIsStoreClosed(true);
                return
            }
        } else {
            setIsStoreClosed(false);
            return
        }
    }, [route])


    useEffect(() => {
        console.log('isStoreClosed::::::::::::1', isStoreClosed)
    }, [isStoreClosed])

    

    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Tasks'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''} />

            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, ...commonCSS.pvh, alignItems: 'center' }}>
                <Text style={style.title}>{isStoreClosed === true ? 'Submit proof of closed store' : 'How to : Take a selfie'}</Text>

                <Text style={style.subText}> {isStoreClosed === true ? 'Please click a photo of the store closed as soon in the picture below.' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis sed ac diam sagittis mauris.'}</Text>


                <View style={{ marginVertical: hp(5) }}>

                    {selectedImage === undefined ?
                        <ImageComponent source={isStoreClosed === true ? Images.storeclosed : Images.selfiePerson} height={40} width={wp(80)} mode={'contain'} />
                        :
                        selectedImage !== '-' ?
                            <View>
                                <ImageComponent source={{ uri: selectedImage }} height={40} width={wp(80)} mode={'cover'} />
                                {selectedImage !== '-' && isStoreClosed &&
                                    <TouchableOpacity
                                        onPress={() => { handleCameraLaunch() }}
                                        style={style.changeImage}>
                                        <ImageComponent source={Images.edit} height={3} width={hp(3)} mode={'contain'} />
                                        <Text style={style.txt1}>Change Image</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                            :
                            <ImageComponent source={isStoreClosed === true ? Images.storeclosed : Images.selfiePerson} height={40} width={wp(80)} mode={'contain'} />
                    }
                </View>


                <Button
                    label={selectedImage === undefined ? 'Take a photo' : 'Continue'}
                    labelSize={FontSize.fs16}
                    fontWeight={'700'}
                    textColor={Colors.white}
                    fontFamily={Font.MontserratBlack}
                    marginLeft={''}
                    paddingHorizontal={''}
                    paddingVertical={''}
                    onPress={() => selectedImage === undefined ? handleCameraLaunch() : setOpenTaskCompletedModal(true)}
                    width={'85'}
                    backgroundColor={Colors.ThemeColorDark}
                    isButtonDisabled={false}
                    btnHeight={'5.5'}
                    borderRadius={'1.5'}
                    borderColor={''}
                    borderwidth={''}
                />

            </KeyboardAwareScrollView >

            <ModalTaskCompleted
                visible={openTaskCompletedModal}
                onRequestClose={() => { [setOpenTaskCompletedModal(false), navigation.goBack()] }}
                message={'Task Completed Successfully'} />

        </View >
    );
}

const style = StyleSheet.create({
    title: {
        ...commonCSS.titleMB70016,
        color: Colors.mainText,
        paddingTop: hp(1),
        fontSize: FontSize.fs20
    },
    subText: {
        ...commonCSS.subTextIB40012secText,
        textAlign: 'center',
        marginTop: hp(1),
        paddingHorizontal: wp(10),
        lineHeight: hp(2)
    },
    changeImage: {
        ...commonCSS.fdralic,
        position: 'absolute',
        backgroundColor: '#000000aa',
        height: hp(4),
        paddingHorizontal: wp(3),
        borderRadius: hp(1),
        bottom: hp(1.5),
        alignSelf: 'center'
    },
    txt1: {
        paddingLeft: wp(3),
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs15,
        color: Colors.white
    },



})