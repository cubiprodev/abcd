//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../commonCSS/Colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ImageComponent from './custom/ImageComponent';
import { Images } from '../assets';
import TextComponent from './custom/TextComponent';
import Font from '../commonCSS/Font';
import FontSize from '../commonCSS/FontSize';
import { commonCSS } from '../commonCSS/GlobalCss';
import Search from './custom/Search';

// create a component
const HeaderCustom = ( { title, onPressBackArrow, button, onPressButton, btnText, isSearchAvailable, searchKeyword, onchangeText }: { title: string, onPressBackArrow: any, button: boolean, onPressButton: any, btnText: string, isSearchAvailable: boolean, searchKeyword: string, onchangeText: any } ) => {
    return (

        <View style={[ styles.container, {
            height: isSearchAvailable === true ? hp( 15 ) : hp( 7 ),
            // backgroundColor:Colors.cicoToColor,
            // backgroundColor:'#115882',
        } ]}>
            <View style={styles.container2}>
                <TouchableOpacity onPress={onPressBackArrow}
                    style={{
                        // backgroundColor: 'red',
                        height: hp( 3.5 ),
                        width: hp( 3.5 ),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <ImageComponent
                        height={2.5}
                        width={hp( 2.5 )}
                        source={Images.backIcon} mode={'contain'} tintColor={undefined} />
                </TouchableOpacity>
                <View style={styles.sp}>
                    <TextComponent
                        txtLabel={title}
                        fontColor={Colors.mainText}
                        fontFamily={Font.MontserratBold}
                        fWeight={'700'}
                        fSize={FontSize.fs16}
                        marginTop={'-0.4'} fontLineHeight={''} textAlign={''} />

                    {button &&
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={onPressButton}
                        >
                            <ImageComponent source={Images.add} height={2} width={hp( 2 )} mode={'contain'} />
                            <Text style={styles.btnText}>{btnText}</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>

            {isSearchAvailable &&
                <View style={{
                    paddingVertical: hp( 1.5 ),
                    width: wp( 91 )
                }}>
                    <Search
                        value={searchKeyword}
                        placeHolder={'Search Lead'}
                        placeHolderColor={Colors.secondaryText94}
                        maxLength={20}
                        onChangeText={onchangeText}
                    />
                </View>
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create( {
    container: {
        ...commonCSS.shadowBox,
        // ...commonCSS.boxShadowx,
        // borderWidth: hp( 0.15 ),
        // borderColor: Colors.borderColorECECEC,
        // marginTop: hp( 1.5 ),
        // paddingHorizontal: wp( 5 ),
        // paddingVertical: hp( 1.5 ),
        // borderRadius: hp( 1 ),
        backgroundColor: Colors.white,
        paddingLeft: wp( 3 ),
        justifyContent: 'center'
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn: {
        ...commonCSS.fdralic,
        backgroundColor: Colors.blueTab,
        marginRight: wp( 5 ),
        paddingVertical: hp( 0.7 ),
        paddingHorizontal: wp( 3 ),
        borderRadius: hp( 0.5 )
    },
    btnText: {
        ...commonCSS.subTextIB50012primary,
        color: Colors.white,
        paddingLeft: wp( 3 ),
        paddingRight: wp( 1 ),
    },
    sp: {
        ...commonCSS.fdralic,
        justifyContent: 'space-between',
        paddingLeft: wp( 4 ),
        flex: 1
    }
} );

//make this component available to the app
export default HeaderCustom;
