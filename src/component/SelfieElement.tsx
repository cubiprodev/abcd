import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { commonCSS } from '../commonCSS/GlobalCss';
import { Colors } from '../commonCSS/Colors';
import TextComponent from './custom/TextComponent';
import FontSize from '../commonCSS/FontSize';
import Font from '../commonCSS/Font';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ImageComponent from './custom/ImageComponent';
import { Images } from '../assets';
import Button from './Button';
import { launchCamera } from 'react-native-image-picker';


export default function SelfieElement({ selectedImagebyUser }: { selectedImagebyUser: any }) {

    const [selectedImage, setSelectedImage] = useState(undefined);

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
                selectedImagebyUser(response.assets?.[0])
            }
        });
    }
    
    return (
        <View style={styles.main}>
            <TextComponent txtLabel={'Take a selfie'} fontColor={Colors.mainText} fontFamily={Font.MontserratBold}
                fWeight={'700'} fSize={FontSize.fs18} textAlign={''} marginTop={''} fontLineHeight={''} />

            <View style={styles.imageZone}>
                {selectedImage === undefined ?
                    <ImageComponent source={Images.camera} height={5} width={hp(5)} mode={'contain'} />
                    :
                    selectedImage !== '-' ?
                        <ImageComponent source={{ uri: selectedImage }} height={15} width={wp(30)} mode={'cover'} />
                        :
                        <ImageComponent source={Images.camera} height={5} width={hp(5)} mode={'contain'} />
                }
            </View>

            <View style={styles.btnZone}>
                <Button
                    label={'Take a photo'} labelSize={FontSize.fs13} fontWeight={'600'} textColor={Colors.white}
                    fontFamily={Font.InterSemiBold} marginLeft={''} paddingHorizontal={'23'} paddingVertical={''}
                    onPress={handleCameraLaunch} width={''} backgroundColor={Colors.ThemeColorDark} isButtonDisabled={false}
                    btnHeight={4.5} borderRadius={1} borderColor={''} borderwidth={''} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        ...commonCSS.box,
        ...commonCSS.shadowBox,
        backgroundColor: Colors.white,
        borderWidth: 0,
        alignItems: 'center',
        width: wp(80),
        marginTop: hp(3),
    },
    imageZone: {
        marginTop: hp(1.5),
        ...commonCSS.alicjc,
        borderWidth: hp(0.1),
        borderColor: Colors.borderColorD4D4D4,
        borderRadius: hp(1),
        height: hp(13.5),
        width: wp(30),
        overflow: 'hidden'
    },
    btnZone: {
        marginTop: hp(1.5),
        marginBottom: hp(1),
    },

})