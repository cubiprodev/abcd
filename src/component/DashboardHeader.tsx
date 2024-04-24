import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../commonCSS/Colors';
import FontSize from '../commonCSS/FontSize';
import { Images } from '../assets';
import ImageComponent from './custom/ImageComponent';
import LinearGradient from 'react-native-linear-gradient';
import TextComponent from './custom/TextComponent';
import Font from '../commonCSS/Font';



export default function DashboardHeader ( { onPressDrawer, onPressNotification, count }: { onPressDrawer: any, onPressNotification: any, count: number | string } ) {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
      colors={[ '#124667', '#11699A' ]}
      style={{
        paddingHorizontal: wp( 5 )
      }}
    >
      <View style={styles.innerArea}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={onPressDrawer}>
          <ImageComponent
            height={5}
            width={hp( 5 )}
            source={Images.logo}
            mode={'cover'} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressNotification}
        >
          <ImageComponent source={Images.notification} height={3} width={hp( 2.5 )} mode={'cover'} />
          <View style={styles.notificationArea}>
            <TextComponent
              txtLabel={count}
              fontColor={Colors.white}
              fontFamily={Font.InterBlack}
              fWeight={'700'}
              fSize={FontSize.fs12}
              textAlign={''}
              marginTop={''}
              fontLineHeight={''}
            />
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}



const styles = StyleSheet.create( {
  innerArea: {
    flexDirection: 'row',
    paddingVertical: hp( 1 ),
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: Colors.cicoToColor,
    // backgroundColor:'#ffffff',
    paddingHorizontal: wp( 5 )

  },
  notificationArea: {
    height: hp( 2.4 ),
    width: hp( 2.4 ),
    borderRadius: hp( 1.2 ),
    backgroundColor: Colors.ThemeColorDark,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: hp( -1 ),
    right: hp( -1 ),
  }

} )