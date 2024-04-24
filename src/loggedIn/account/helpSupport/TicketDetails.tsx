import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '../../../component/custom/CustomTextInput';
import { Colors } from '../../../commonCSS/Colors';
import Font from '../../../commonCSS/Font';
import FontSize from '../../../commonCSS/FontSize';
import { Images } from '../../../assets';
import ImageComponent from '../../../component/custom/ImageComponent';
import ButtonWithImage from '../../../component/ButtonWithImage';
import ButtonLightDArkBorder from '../../../component/ButtonLightDArkBorder';
import Button from '../../../component/Button';

export default function TicketsDetails({ navigation, route }: { navigation: any, route: any }) {
    // view mode of tickets
    const [isClientTicket, setIsClientTicket] = useState(false);

    useEffect(() => {
        var routeKey = route?.params?.key;
        if (routeKey === 'client') {
            console.log('key::', routeKey);
            setIsClientTicket(true)
        }
        if (routeKey === 'concern') {
            console.log('key::', routeKey);
            setIsClientTicket(false)
        }
    }, [route])

    const images = [
        {
            name: Images.selfiePerson,
            id: 1
        },
        {
            name: Images.selfiePerson,
            id: 2
        },
        {
            name: Images.selfiePerson,
            id: 3
        },
        {
            name: Images.selfiePerson,
            id: 4
        },
        {
            name: Images.selfiePerson,
            id: 5
        },
        {
            name: Images.selfiePerson,
            id: 6
        },
        {
            name: Images.selfiePerson,
            id: 7
        },
        {
            name: Images.selfiePerson,
            id: 8
        },
    ]


    const renderImages = () => {
        switch (images.length) {
            case 1:
                return (
                    <View style={styles.image50}>
                        <ImageComponent source={images[0]?.name} height={20} width={wp(43)} mode={'stretch'} />
                    </View>
                );
            case 2:
                return (
                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>
                        <View style={styles.image50}>
                            <ImageComponent source={images[0]?.name} height={20} width={wp(43)} mode={'stretch'} />
                        </View>
                        <View style={styles.image50}>
                            <ImageComponent source={images[0]?.name} height={20} width={wp(43)} mode={'stretch'} />
                        </View>
                    </View>
                );
            case 3:
                return (
                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>
                        <View style={styles.image50}>
                            <ImageComponent source={images[0]?.name} height={20} width={wp(43)} mode={'stretch'} />
                        </View>

                        <View style={{ justifyContent: 'space-evenly' }}>
                            <View style={styles.image25}>
                                <ImageComponent source={images[0]?.name} height={10} width={wp(43)} mode={'stretch'} />
                            </View>
                            <View style={styles.image25}>
                                <ImageComponent source={images[0]?.name} height={10} width={wp(43)} mode={'stretch'} />
                            </View>
                        </View>
                    </View>
                );
            case 4:
                return (
                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>
                        <View style={styles.image50}>
                            <ImageComponent source={images[0]?.name} height={20} width={wp(43)} mode={'stretch'} />
                        </View>

                        <View style={{ justifyContent: 'space-evenly' }}>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                            <View style={styles.image25}>
                                <ImageComponent source={images[0]?.name} height={10} width={wp(43)} mode={'stretch'} />
                            </View>
                        </View>
                    </View>
                );
            case 5:
                return (
                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                        <View style={styles.image50}>
                            <ImageComponent source={images[0]?.name} height={20} width={wp(43)} mode={'stretch'} />
                        </View>

                        <View style={{ justifyContent: 'space-evenly' }}>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                        </View>
                    </View>
                );
            case 6:
                return (
                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                        <View style={{ justifyContent: 'space-evenly' }}>
                            <View style={styles.image25}>
                                <ImageComponent source={images[0]?.name} height={10} width={wp(43)} mode={'stretch'} />
                            </View>
                            <View style={styles.image25}>
                                <ImageComponent source={images[0]?.name} height={10} width={wp(43)} mode={'stretch'} />
                            </View>
                        </View>

                        <View style={{ justifyContent: 'space-evenly' }}>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                        </View>
                    </View>
                );
            case 7:
                return (
                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'space-evenly' }}>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                            <View style={styles.image25}>
                                <ImageComponent source={images[0]?.name} height={10} width={wp(43)} mode={'stretch'} />
                            </View>
                        </View>

                        <View style={{ justifyContent: 'space-evenly' }}>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                        </View>
                    </View>
                );
            case 8:
                return (
                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>
                        <View style={{ justifyContent: 'space-evenly' }}>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                        </View>

                        <View style={{ justifyContent: 'space-evenly' }}>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                            <View style={{ ...commonCSS.fdralic, justifyContent: 'space-evenly' }}>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                                <View style={styles.image25p}>
                                    <ImageComponent source={images[0]?.name} height={10} width={wp(20)} mode={'stretch'} />
                                </View>
                            </View>
                        </View>
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Client Tickets'}
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

                    {isClientTicket === false ?
                        <CustomTextInput
                            title={'Title'}
                            placeholder={'State your concern.'}
                            multiline={false}
                            value={'Lorem ipsum dolor sit amet '}
                            onChangeText={(val => { })}
                            marginTop={true}
                            keyboardTypes={undefined}
                            placeholderTextColor={Colors.secondaryText94}
                            disabled={true}
                        />
                        :
                        <>
                            <CustomTextInput
                                title={'Ticket No.'}
                                placeholder={'State your concern.'}
                                multiline={false}
                                value={'Lorem ipsum dolor sit amet '}
                                onChangeText={(val => { })}
                                marginTop={true}
                                keyboardTypes={undefined}
                                placeholderTextColor={Colors.secondaryText94}
                                disabled={true}
                            />

                            <CustomTextInput
                                title={'Client name'}
                                placeholder={'State your concern.'}
                                multiline={false}
                                value={'Ramesh Kumar'}
                                onChangeText={(val => { })}
                                marginTop={true}
                                keyboardTypes={undefined}
                                placeholderTextColor={Colors.secondaryText94}
                                disabled={true}
                            />
                            <CustomTextInput
                                title={'Category'}
                                placeholder={'State your concern.'}
                                multiline={false}
                                value={'Lorem ipsum dolor sit amet '}
                                onChangeText={(val => { })}
                                marginTop={true}
                                keyboardTypes={undefined}
                                placeholderTextColor={Colors.secondaryText94}
                                disabled={true}
                            />

                        </>
                    }

                    <CustomTextInput
                        title={'Description'}
                        placeholder={'State your concern.'}
                        multiline={false}
                        value={'Lorem ipsum dolor sit amet consectetur. Commodo quam sit integer tincidunt vitae. Sed turpis est vitae purus massa lobortis nunc leo eleifend. Vitae non odio dis massa tortor nisl augue. Eget aenean ipsum enim non arcu malesuada morbi at non. Integer lacus faucibus maecenas mauris. Habitasse mattis id platea convallis cursus suscipit sit amet nunc. Sed nunc diam maecenas amet malesuada cras.'}
                        onChangeText={(val => { })}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94}
                        disabled={true}
                    />

                    <View style={{ marginTop: hp(1.5) }}>
                        <Text style={styles.title}>Images</Text>
                    </View>

                    <View style={{ marginTop: hp(1.5), }}>{renderImages()}</View>

                    <View style={{
                        marginVertical: hp(1.5),
                        ...commonCSS.fdralic,
                    }}>
                        {isClientTicket &&
                            <View style={{ marginRight: wp(5) }}>
                                <ButtonLightDArkBorder
                                    image={Images.phone}
                                    label={'Call Client'}
                                    onPressButton={undefined}
                                    width={26} />
                            </View>
                        }

                        <ButtonLightDArkBorder
                            image={Images.phone}
                            label={'Call Customer Care'}
                            onPressButton={undefined}
                            width={45} />
                    </View>

                    <View style={{ height: hp(10) }}></View>
                </ScrollView>
            </KeyboardAwareScrollView>
            <View style={{ position: 'absolute', alignItems: 'center', width: wp(100), bottom: hp(1) }}>
                <Button
                    label={'OK'}
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
    image50: {
        overflow: 'hidden',
        height: hp(20),
        width: wp(43),
        borderRadius: hp(1),
        borderWidth: hp(0.2),
        borderColor: Colors.borderColorD4D4D4
    },

    image25: {
        overflow: 'hidden',
        height: hp(10),
        width: wp(43),
        borderRadius: hp(1),
        borderWidth: hp(0.2),
        borderColor: Colors.borderColorD4D4D4
    },
    image25p: {
        margin: hp(0.5),
        overflow: 'hidden',
        height: hp(10),
        width: wp(20),
        borderRadius: hp(1),
        borderWidth: hp(0.2),
        borderColor: Colors.borderColorD4D4D4
    },

})
