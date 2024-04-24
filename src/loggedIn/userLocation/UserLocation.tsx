import { View, Text } from 'react-native'
import React from 'react'
import HeaderCustom from '../../component/HeaderCustom'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { hp, wp } from '../../commonCSS/GlobalCss'
import { Colors } from '../../commonCSS/Colors'
import FontSize from '../../commonCSS/FontSize'
import ImageComponent from '../../component/custom/ImageComponent'
import { Images } from '../../assets'

export default function UserLocation({ navigation }: { navigation: any }) {
    return (
        <View>
            <HeaderCustom
                title={'User Location'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />

            <View style={{
                flex: 1,
                marginTop: hp(2),
                alignItems: 'center',
            }}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Map') }}
                    activeOpacity={0.7}
                    style={{
                        height: hp(10),
                        width: wp(92),
                        backgroundColor: Colors.ThemeColorDark,
                        borderRadius: hp(2),
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    <View style={{ marginHorizontal: wp(6), borderRadius: hp(3.5), overflow: 'hidden' }}>
                        <ImageComponent
                            source={Images.selfiePerson}
                            height={7}
                            width={hp(7)}
                            mode={'cover'}
                            tintColor={{
                                // marginHorizontal: wp(6),
                            }}
                        />
                    </View>


                    <Text style={{
                        color: Colors.white,
                        // fontWeight: 'bold',
                        fontSize: FontSize.fs18,
                    }}> user 1 </Text>


                </TouchableOpacity>



            </View>

        </View >
    )
}