import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { commonCSS, hp, wp } from '../../../commonCSS/GlobalCss';
import HeaderCustom from '../../../component/HeaderCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CustomTextInput from '../../../component/custom/CustomTextInput';
import { Colors } from '../../../commonCSS/Colors';
import RadioButton from '../../../component/RadioButton';
import RadioLabel from '../../../component/RadioLabel';
import ButtonWithImage from '../../../component/ButtonWithImage';
import { Images } from '../../../assets';
import Button from '../../../component/Button';
import FontSize from '../../../commonCSS/FontSize';
import Font from '../../../commonCSS/Font';
import ImageComponent from '../../../component/custom/ImageComponent';
import ModalCalendar from '../../../component/ModalCalendar';
import moment from 'moment';
import ModalTime from '../../../component/ModalTime';
import ModalAttendees from '../../../component/ModalAttendees';

export default function CreateEvent({ navigation }: { navigation: any }) {
    // modal
    const [isCalendarmodalvisisble, setIsCalendarmodalvisisble] = useState(false);
    const [isTimeModalVisible, setIsTimeModalVisible] = useState(false);
    const [isAttendeesModalVisible, setIsAttendeesModalVisible] = useState(false);

    const [eventData, setEventData] = useState({
        title: '',
        desc: '',
        eventDate: '',
        eventTime: '',
    })

    const radioData = [
        {
            name: 'Offline',
            id: 1,
        },
        {
            name: 'Online',
            id: 2,
        },
    ]

    const openURI = async () => {
        const url = 'https://meet.google.com/wfu-nsus-jku'
        const supported = await Linking.canOpenURL(url); //To check if URL is supported or not.
        if (supported) {
            await Linking.openURL(url); // It will open the URL on browser.
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }

    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Seminars'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />
            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, paddingHorizontal: wp(4) }}>
                <ScrollView style={{}}>
                    <CustomTextInput
                        title={'Add a title'}
                        placeholder={'Daily Stand Up Call'}
                        multiline={false}
                        value={eventData.title}
                        onChangeText={(val => {
                            setEventData(prevData => ({
                                ...prevData,
                                title: val
                            }));
                        })}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94}
                        disabled={false}
                    />

                    <View style={{ marginTop: hp(2.5) }}>
                        <RadioButton data={radioData} onSelect={undefined} radioLabelName={'name'} horizontal={true} />
                    </View>

                    <View style={{ marginTop: hp(2) }}>
                        <ButtonWithImage
                            image={Images.calender}
                            label={eventData.eventDate === '' ? 'Add a date' : moment(eventData.eventDate).format('DD MMM YYYY')}
                            onPress={() => { setIsCalendarmodalvisisble(true) }}
                        />

                        <ButtonWithImage
                            image={Images.clock}
                            label={eventData?.eventTime === '' ? 'Add a time' : eventData.eventTime}
                            onPress={() => { setIsTimeModalVisible(true) }}
                        />
                    </View>

                    <View>
                        <View style={{ ...commonCSS.line, marginVertical: hp(1.5) }}></View>
                        <Text style={{
                            fontWeight: '700',
                            fontFamily: Font.InterBlack,
                            fontSize: FontSize.fs14,
                            color: Colors.mainText,
                        }}>Seminar Link</Text>

                        <TouchableOpacity onPress={() => { openURI() }}>
                            <Text>https://meet.google.com/wfu-nsus-jku</Text>
                        </TouchableOpacity>

                        <View style={{ ...commonCSS.line, marginVertical: hp(1.5) }}></View>
                    </View>


                    <CustomTextInput
                        title={'Description'}
                        placeholder={'Lorem ipsum dolor sit amet consectetur.'}
                        multiline={true}
                        value={eventData.desc}
                        onChangeText={(val => {
                            setEventData(prevData => ({
                                ...prevData,
                                desc: val
                            }));
                        })}
                        marginTop={true}
                        keyboardTypes={undefined}
                        placeholderTextColor={Colors.secondaryText94}
                        disabled={false}
                    />

                    <View style={{ marginTop: hp(2.5), ...commonCSS.fdralic }}>
                        <Text style={{
                            fontWeight: '700',
                            fontFamily: Font.InterBlack,
                            fontSize: FontSize.fs14,
                            color: Colors.mainText,
                        }}>Attendees {` `}</Text>

                        <Text style={{
                            fontWeight: '700',
                            fontFamily: Font.InterBlack,
                            fontSize: FontSize.fs14,
                            color: Colors.ThemeColorDark,
                        }}>(0)</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => { setIsAttendeesModalVisible(true) }}
                        style={{ ...commonCSS.fdralic, marginTop: hp(1.5) }}>
                        <ImageComponent source={Images.addBox} height={3} width={hp(3)} mode={'contain'} />
                        <Text style={{ ...commonCSS.subTextIB40012secText, paddingLeft: wp(4) }}>Add Attendees</Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAwareScrollView>

            <View style={{ position: 'absolute', alignItems: 'center', width: wp(100), bottom: hp(1) }}>
                <Button
                    label={'Done'}
                    labelSize={FontSize.fs15}
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

            <ModalCalendar
                visible={isCalendarmodalvisisble}
                onRequestClose={() => { setIsCalendarmodalvisisble(false); }}
                onPressOk={() => { setIsCalendarmodalvisisble(false); }}
                selectedDate={(val) => {
                    setEventData(prevData => ({
                        ...prevData,
                        eventDate: val
                    }));
                }}
                initialDate={'2023-01-01'}
            />

            <ModalTime
                visible={isTimeModalVisible}
                onRequestClose={() => { setIsTimeModalVisible(false); }}
                onpressOk={(val) => {
                    [setEventData(prevData => ({
                        ...prevData,
                        eventTime: val
                    })), setIsTimeModalVisible(false)]
                }}
            />

            <ModalAttendees
                visible={isAttendeesModalVisible}
                onRequestClose={() => { setIsAttendeesModalVisible(false) }}
            />
        </View>
    );
}
