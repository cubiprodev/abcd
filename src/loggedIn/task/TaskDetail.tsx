import React, { useEffect, useState, } from 'react';
import { View, Text, StyleSheet, Platform, Linking, TouchableOpacity, FlatList } from 'react-native';
import ImageComponent from '../../component/custom/ImageComponent';
import { Images, dummyImages } from '../../assets';
import { commonCSS, hp, wp } from '../../commonCSS/GlobalCss';
import { Colors } from '../../commonCSS/Colors';
import Font from '../../commonCSS/Font';
import FontSize from '../../commonCSS/FontSize';
import ButtonLightDArkBorder from '../../component/ButtonLightDArkBorder';

import call from 'react-native-phone-call'
import Button from '../../component/Button';
import ModalTaskCompleted from '../../component/ModalTaskCompleted';
import ModalRescheduleVisit from '../../component/ModalRescheduleVisit';
import { RescheduleOption } from '../../data/Data';
import RadioLabel from '../../component/RadioLabel';

export default function TaskDetail({ navigation, data }: { navigation: any, data: any }) {
    const [isRestVisisble, setIsRestVisisble] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [openRescheduleModal, setOpenRescheduleModal] = useState(false);
    const [selectedReasonToCancel, setSelectedReasonToCancel] = useState({});
    const [taskCompletionPercent, setTaskCompletionPercent] = useState(0);
    const [upcomingDates, setUpcomingDates] = useState([]);

    // maps,
    const openMap = async (latitude, longitude, label = 'MyLabel') => {
        const scheme = Platform.select({
            ios: 'maps:0,0?q=',
            android: 'geo:0,0?q=',
        });

        const link = Platform.select({
            ios: `${scheme}${label}@${latitude},${longitude}`,
            android: `${scheme}${latitude},${longitude}(${label})`
        });

        try {
            const supported = await Linking.canOpenURL(link);

            if (supported) Linking.openURL(link);
        } catch (error) {
            console.log(error);
        }
    }
    //call 
    const args = {
        number: data?.item?.leadData?.phone, // String value with the number to call
        prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
        skipCanOpen: true // Skip the canOpenURL check
    }

    // date
    function formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }

    function getNextFiveDates() {
        const today = new Date();
        const upcomingDates = [];

        for (let i = 1; i <= 5; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            const label = formatDate(nextDate);
            upcomingDates.push({ label });
        }

        return upcomingDates;
    }


    useEffect(() => {
        const nextFiveDates = getNextFiveDates();
        setUpcomingDates(nextFiveDates);
        setSelectedReasonToCancel(RescheduleOption[0]);
    }, []);

    useEffect(() => {
        if (data?.item?.tasks) {
            var totalTasks = data?.item?.tasks.length;
            var completedTasks = data?.item?.tasks.filter(task => task.status === "Completed").length;
            var completionPercentage = (completedTasks / totalTasks) * 100;
            console.log("Completion Percentage: " + completionPercentage + "%");
            setTaskCompletionPercent(completionPercentage)
            if (completionPercentage === 100) {
                setIsButtonDisabled(true)
            } else {
                setIsButtonDisabled(false)
            }
        }
    }, [])


    // reschedule task


    return (
        <View style={s.main}>
            <View style={s.upperSection}>
                <View style={{ ...commonCSS.fdralic }}>
                    <View style={s.profileZone}>
                        <ImageComponent source={
                            // (data?.completionProofImageUrl.toLowerCase() === 'http://example.com/proof.jpg' || data?.completionProofImageUrl === null || data?.completionProofImageUrl === undefined) ? dummyImages.person : 
                            dummyImages.person} height={5.5} width={hp(5.5)} mode={'contain'} />
                    </View>

                    <View style={{ marginLeft: wp(4) }}>
                        <Text style={{ ...commonCSS.titleMB70016, color: Colors.black }}>{data?.item?.leadData?.name}</Text>
                        <Text style={s.tc}>{taskCompletionPercent}% completed</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{ height: hp(3), width: hp(3), ...commonCSS.alicjc }}
                    onPress={() => { setIsRestVisisble(!isRestVisisble) }}
                >
                    <ImageComponent source={isRestVisisble ? Images.upArrowBlack : Images.downArrowBlack} height={2} width={hp(2)} mode={'contain'} />
                </TouchableOpacity>
            </View>

            {isRestVisisble &&
                <View>
                    <View style={s.line}></View>

                    <View style={s.addressZone}>
                        <ImageComponent source={Images.locationNormal} height={2.5} width={hp(2.5)} mode={'contain'} />
                        <Text style={s.address}>{data?.item?.leadData?.address}{', '}{data?.item?.leadData?.state?.name}{', '}{data?.item?.leadData?.district?.name}{', '}{data?.item?.leadData?.pincode?.code}</Text>
                    </View>

                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between', marginTop: hp(1.5) }}>
                        <ButtonLightDArkBorder
                            image={Images.direction}
                            label={'Get Directions'}
                            onPressButton={() => {
                                openMap(data?.item?.leadData?.lat, data?.item?.leadData?.lng)
                            }} />

                        <ButtonLightDArkBorder
                            image={Images.phone}
                            label={'Call Client'}
                            onPressButton={() => { call(args).catch(console.error) }} />
                    </View>
                    <View style={s.line}></View>

                    <View style={{
                        paddingTop: hp(1.5),
                        width: '100%',
                    }}>
                        <FlatList
                            data={data?.item?.tasks}
                            keyExtractor={item => item.index}
                            renderItem={(item) => {
                                return (
                                    <RadioLabel
                                        labelData={item}
                                    />
                                )
                            }}
                        />
                    </View>


                    <View style={{ marginTop: hp(2.5), ...commonCSS.alicjc }}>
                        <Button
                            label={'Complete Task'}
                            labelSize={FontSize.fs16}
                            fontWeight={'700'}
                            textColor={Colors.white}
                            fontFamily={Font.MontserratBlack}
                            marginLeft={''}
                            paddingHorizontal={''}
                            paddingVertical={''}
                            onPress={() => { taskCompletionPercent === 100 ? null : navigation.navigate('CompleteTaskSelfie', {data:data}) }}
                            width={'85'}
                            backgroundColor={!isButtonDisabled ? Colors.ThemeColorDark : Colors.greyActiveC7C7C7}
                            isButtonDisabled={!isButtonDisabled ? false : true}
                            btnHeight={'5.5'}
                            borderRadius={'1.5'}
                            borderColor={''}
                            borderwidth={''}
                        />

                        <TouchableOpacity
                            activeOpacity={taskCompletionPercent === 100 ? 1 : 0}
                            onPress={() => { taskCompletionPercent === 100 ? null : setOpenRescheduleModal(true) }}>
                            <Text style={s.reVisit}>Reschedule Visit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }

            <ModalRescheduleVisit
                visible={openRescheduleModal}
                onRequestClose={() => { setOpenRescheduleModal(false); }}
                dateData={upcomingDates}

                rescheduleOption={RescheduleOption}
                selectedValue={selectedReasonToCancel}
                onSelectReasonToReschedule={(val) => { setSelectedReasonToCancel(val) }}

                onPressRescheduleTask={() => { selectedReasonToCancel.id === 1 ? [setOpenRescheduleModal(false), navigation.navigate('CompleteTaskSelfie', { key: 'storeClosed', data: data })] : setOpenRescheduleModal(false); }}
            />
        </View>
    );
}


const s = StyleSheet.create({
    main: {
        backgroundColor: Colors.white,
        ...commonCSS.pvh,
        borderRadius: hp(1.5),
        marginTop: hp(1.5)
    },
    upperSection: {
        ...commonCSS.fdralic,
        justifyContent: 'space-between'
    },
    profileZone: {
        height: hp(5.5),
        width: hp(5.5),
        borderRadius: hp(2.75),
        ...commonCSS.alicjc,
        overflow: 'hidden'
    },
    line: {
        borderBottomWidth: hp(0.15),
        borderBottomColor: Colors.LineColor,
        paddingVertical: hp(1),
        borderStyle: 'dashed',
    },
    tc: {
        fontFamily: Font.InterBlack,
        fontWeight: '600',
        fontSize: FontSize.fs9,
        color: Colors.error,
        backgroundColor: Colors.lightError,
        paddingVertical: hp(0.5),
        textAlign: 'center',
        width: wp(19),
        marginTop: hp(0.6)
    },
    addressZone: {
        paddingTop: hp(1.5),
        ...commonCSS.fdralic,
    },
    address: {
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs12,
        color: Colors.black,
        fontWeight: '400',
        paddingLeft: wp(2),
        width: wp(70)
    },
    reVisit: {
        fontFamily: Font.InterBlack,
        fontWeight: '600',
        fontSize: FontSize.fs14,
        color: Colors.ThemeColorDark,
        marginTop: hp(1.5),
        borderBottomWidth: hp(0.1),
        borderBottomColor: Colors.ThemeColorDark
    },



})