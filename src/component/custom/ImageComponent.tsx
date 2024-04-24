import React from 'react';
import { View, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ImageComponent = ( { source, height, width, mode, tintColor }: { source: any, height: any, width: any, mode: string, tintColor: any } ) => {
    return (
        <View style={{
            height: height ? hp( height ) : '100%',
            width: width ? width : '100%',
            overflow: 'hidden',
        }}>
            <Image
                source={source}
                resizeMode={mode !== undefined ? mode : 'contain'}
                style={{ height: '100%', width: '100%', tintColor: tintColor, overflow: 'hidden' }}
            >
            </Image>
        </View>
    );
};


export default ImageComponent;
