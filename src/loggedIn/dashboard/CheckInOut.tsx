import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid, Platform, Alert, StyleSheet } from 'react-native';
import HeaderCustom from '../../component/HeaderCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../commonCSS/Colors';
import Font from '../../commonCSS/Font';
import FontSize from '../../commonCSS/FontSize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Clock from '../../component/Clock';
import Dropdown from '../../component/custom/DropDown';
import { HourFrame, VisitType } from '../../data/Data';
import { commonCSS } from '../../commonCSS/GlobalCss';
import SelfieElement from '../../component/SelfieElement';
import LinearGradient from 'react-native-linear-gradient';
import ImageComponent from '../../component/custom/ImageComponent';
import { Images } from '../../assets';
import TimeSheet from '../../component/TimeSheet';


import Geolocation from '@react-native-community/geolocation';
import ModalLocationError from '../../component/ModalLocationError';
import constants from '../../services/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalSuccess from '../../component/ModalSuccess';
import Loader from '../../component/custom/Loader';
import { useIsFocused } from '@react-navigation/native';
import { getCurrentLocalDate } from '../../services/commonFunc';

export default function CheckInOut({ navigation, route }: { navigation: any, route: any }) {
    const isFocused = useIsFocused();

    const isAttendenceDone = route?.params?.isAttendenceDone;
    const isUserAlreadyCheckedIn = route?.params?.isUserAlreadyCheckedIn;

    const [timeSheet, setTimeSheet] = useState({
        'day': "-",
        'ftype': '-',
        'fhCin': '-',
        'fhCout': '-',

        'stype': '-',
        'shCin': '-',
        'shCout': '-',
    });
    // state
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [selectedVisitType, setSelectedVisitype] = useState({});
    const [workingHourType, setWorkingHourType] = useState({});
    const [storedCheckIn, setStoredCheckIn] = useState({});
    const [storedCheckOut, setStoredCheckOut] = useState({});
    // modal/loader
    const [message, setMessage] = useState('');
    const [isMessageModalVisible, setIsMessageModalVisible] = useState(false);
    const [isLocationModalVisible, setIsLocationModalVisible] = useState(false);
    const [normalModal, setNormalModal] = useState(false);
    const [loading, setLoading] = useState(false);


    // condition

    // getting stored checked in data
    useEffect(() => {
        setLoading(true);
        setWorkingHourType(HourFrame[0]);
        setSelectedVisitype(VisitType[0]);

        const getTimeSheet = async () => {
            try {
                const value = await AsyncStorage.getItem('timesheet');
                if (value !== null) {
                    const data = JSON.parse(value);
                    console.log('previous timesheet::::::', data)
                    setTimeSheet(data);
                    // VisitType:-----------------------------
                    // first half
                    if (data.ftype !== '-') {
                        console.log('x1')
                        if (data.ftype.toLocaleLowerCase() === 'office') {
                            console.log('x2')
                            setSelectedVisitype(VisitType[0]);
                        }
                        else if (data.ftype.toLocaleLowerCase() === 'local') {
                            console.log('x3')
                            setSelectedVisitype(VisitType[1]);
                        }
                    } else {
                        console.log('x4')
                        setSelectedVisitype(VisitType[0]);
                    }


                    // VisitType:-----------------------------
                    // second half
                    console.log('x5')
                    if (data.stype !== '-') {
                        console.log('x6')
                        if (data.stype.toLocaleLowerCase() === 'office') {
                            console.log('x7')
                            setSelectedVisitype(VisitType[0]);
                            setWorkingHourType(HourFrame[1]);
                        }
                        else if (data.stype.toLocaleLowerCase() === 'local') {
                            console.log('x8')
                            setSelectedVisitype(VisitType[1]);
                            setWorkingHourType(HourFrame[1]);
                        }
                    } else if (data.fhCout !== '-' && data.stype !== '-') {
                        // ready for the checkin to the second half
                        console.log('x9')
                        setSelectedVisitype(VisitType[0]);
                        setWorkingHourType(HourFrame[1]);
                    }

                    // whole day:------------------
                    console.log('x10')
                    if (data.ftype !== '-' && data.stype !== '-' &&
                        data.fhCin !== '-' && data.fhCout === '-' && data.shCout === '-') {
                        console.log('x11')
                        setWorkingHourType(HourFrame[2]);
                    } else if (data.ftype !== '-' && data.stype !== '-' && data.fhCout === '-') {
                        console.log('x12')
                        setWorkingHourType(HourFrame[2]);
                    } else if (data.ftype !== '-' && data.stype === '-' &&
                        data.fhCin !== '-' && data.fhCout !== '-') {
                        if (data.fhCout === null) {
                            console.log('x13')
                            setWorkingHourType(HourFrame[0]);
                        } else {
                            console.log('x13 a');
                            setWorkingHourType(HourFrame[1]);
                        }
                    }
                    console.log('x14')
                }
                console.log('x15')
                setLoading(false);
            } catch (e) {
                // error reading value
                setLoading(false);
                console.log('rrror:', e)
            }
        };

        getTimeSheet();
    }, [])

    // storin the timesheet for later use

    useEffect(() => {

        const storeData = async () => {
            console.log('storeData in timesheet::::::::::::::', timeSheet)
            try {
                if (timeSheet.ftype !== '-' || timeSheet.stype !== '-') {
                    console.log('current timesheet which is getting saved', timeSheet);
                    const jsonValue = JSON.stringify(timeSheet);
                    await AsyncStorage.setItem('timesheet', jsonValue);
                } else {
                    console.log('not saving the timesheet yet::::::::', timeSheet)
                }

            } catch (e) {
                // saving error
            }
        };

        storeData();
    }, [timeSheet])



    // updaing the value in the timeshseet after api hitting
    useEffect(() => {
        console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', storedCheckIn, storedCheckOut)
        const todayDate = getCurrentLocalDate();

        // checkin
        if (storedCheckIn !== undefined) {
            if (storedCheckIn.hasOwnProperty('halfOfDay')) {
                if (storedCheckIn?.halfOfDay?.toLowerCase() === "am") {
                    console.log('todays:::::::::::::1', todayDate)
                    setTimeSheet({
                        ...timeSheet,
                        'day': todayDate,
                        'ftype': storedCheckIn?.visitType,

                        'fhCin': storedCheckIn?.checkInTime,
                    });

                }
                else if (storedCheckIn?.halfOfDay?.toLowerCase() === "pm") {
                    console.log('todays:::::::::::::2', todayDate)
                    setTimeSheet({
                        ...timeSheet,
                        'day': todayDate,
                        'stype': storedCheckIn?.visitType,

                        'shCin': storedCheckIn?.checkInTime,
                    });
                }
                else if (storedCheckIn?.halfOfDay?.toLowerCase() === "full_day") {
                    console.log('todays:::::::::::::3', todayDate)
                    setTimeSheet({
                        ...timeSheet,
                        'day': todayDate,
                        'ftype': storedCheckIn?.visitType,
                        'stype': storedCheckIn?.visitType,

                        'fhCin': storedCheckIn?.checkInTime,
                    });
                }
            }
        }


        // checkout
        console.log('checkout data::::::::::', storedCheckOut)
        if (storedCheckOut !== undefined && storedCheckOut !== null) {
            if (storedCheckOut && storedCheckOut.hasOwnProperty('halfOfDay')) {
                if (storedCheckOut?.halfOfDay?.toLowerCase() === "am") {
                    setTimeSheet({
                        ...timeSheet,
                        'day': todayDate,
                        'fhCout': storedCheckOut?.checkOutTime,
                    });
                }
                else if (storedCheckOut?.halfOfDay?.toLowerCase() === "pm") {
                    setTimeSheet({
                        ...timeSheet,
                        'day': todayDate,
                        'shCout': storedCheckOut?.checkOutTime,
                    });
                }
                else if (storedCheckOut?.halfOfDay?.toLowerCase() === "full_day") {
                    setTimeSheet({
                        ...timeSheet,
                        'day': todayDate,
                        'shCout': storedCheckOut?.checkOutTime,
                    });
                }
            }
        }
    }, [storedCheckIn, storedCheckOut])


    // handleCheckIn
    const handleCheckIn = async () => {

        // setLoading(true);
        // if (selectedImage.uri === undefined) {
        //     setMessage('Please select Image');
        //     setLoading(false);
        //     setNormalModal(true);
        //     return
        // }
        // let token = await AsyncStorage.getItem(
        //     constants.MOB_ACCESS_TOKEN_KEY
        // );

        // new Promise((resolve, reject) => {
        //     let formdata = new FormData();

        //     formdata.append("visitType", selectedVisitType?.name === 'Office Visit' ? 'OFFICE' : 'LOCAL')
        //     formdata.append("halfOfDay", workingHourType?.name === 'First Half' ? 'AM' : workingHourType?.name === 'Second Half' ? 'PM' : 'FULL_DAY',)
        //     formdata.append("selfie", { uri: selectedImage?.uri, name: selectedImage?.fileName, type: 'image/jpeg' })

        //     console.log('check in FormData:', formdata)
        //     fetch('http://3.7.216.224:3000/attendance/checkin', {
        //         method: 'POST',
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         },
        //         body: formdata
        //     })
        //         .then((response) => {
        //             if (response.status === 200) {
        //                 return response.json();
        //             } else {
        //                 // throw new Error(`HTTP error! Status: ${response.status}`);
        //                 console.log('::ERROR IN CHECKIN::')
        //                 return response.json();
        //             }
        //         })
        //         .then((json) => {
        //             console.log('check in response::::::::::', json);
        //             setLoading(false);
        //             if (json.message.toLowerCase() === 'already checked in for this half day') {
        //                 setMessage('Already checked in for this half day');
        //                 setNormalModal(true);
        //                 return
        //             }
        //             else if (json.message.toLowerCase() === 'check-in conflict: already checked in for this time frame') {
        //                 setMessage('Already checked in for this half day');
        //                 setNormalModal(true);

        //             } else {
        //                 setStoredCheckIn(json?.newRecord);
        //                 setMessage('Checked in successfully');
        //                 setIsMessageModalVisible(true);
        //                 // selectedImage
        //             }
        //             // resolve(json);
        //         })
        //         .catch((error) => {
        //             console.log('=== ERROR ===', error);
        //             setMessage('Network request failed');
        //             setNormalModal(true);
        //             setLoading(false);
        //             // reject(error);
        //         });
        // })
    }

    // handleCheckOut
    const handleCheckOut = async () => {

        // setLoading(true);
        // if (selectedImage.uri === undefined) {
        //     setLoading(false);
        //     setMessage('Please select Image');
        // //     setNormalModal(true);
        //     return
        // }

        // let token = await AsyncStorage.getItem(
        //     constants.MOB_ACCESS_TOKEN_KEY
        // );

        // new Promise((resolve, reject) => {
        //     let formdata = new FormData();
        //     formdata.append("visitType", selectedVisitType?.name === 'Office Visit' ? 'OFFICE' : 'LOCAL')
        //     formdata.append("halfOfDay", workingHourType?.name === 'First Half' ? 'AM' : workingHourType?.name === 'Second Half' ? 'PM' : 'FULL_DAY',)
        //     formdata.append("selfie", { uri: selectedImage?.uri, name: selectedImage?.fileName, type: 'image/jpeg' })

        //     console.log('FormData:', formdata)
        //     fetch('http://3.7.216.224:3000/attendance/checkout', {
        //         method: 'POST',
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         },
        //         body: formdata
        //     })
        //         .then((response) => response.json())
        //         .then((json) => {
        //             const data = json;
        //             setLoading(false);
        //             console.log('response::::::::::', data)
        //             if (json.message.toLowerCase() === 'already checked in for this half day') {
        //                 setMessage('Already checked in for this half day');
        //                 setNormalModal(true);
        //                 return
        //             } else if (json.message.toLowerCase() === 'no check-in record found for this half day') {
        //                 setMessage('No check-in record found for this half day');
        //                 setNormalModal(true);
        //             }
        //             else if (json.message.toLowerCase() === 'no check-in record found for this time frame') {
        //                 setMessage('No check-in record found for this half day');
        //                 setNormalModal(true);
        //             }
        //             else if (json.message.toLowerCase() === 'checked out successfully') {
        //                 console.log('checkout::::::', data?.existingRecord, typeof (data?.existingRecord));
        //                 setStoredCheckOut(json?.existingRecord ? json?.existingRecord : json)
        //                 setMessage('Checked out successfully');
        //                 setIsMessageModalVisible(true);
        //             }
        //             // resolve(json);
        //         })
        //         .catch((error) => {
        //             console.log('=== ERROR ===', error);
        //             // reject(error);
        //             setMessage('Network request failed');
        //             setNormalModal(true);
        //             setLoading(false);
        //         });
        // })
    }

    // lcoaiton
    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            console.log('granted:::::::', granted);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the Location');
                getAndroidLocation();
            }
            if (granted.toLocaleLowerCase() === 'location permission denied') {
                setMessage('Please turn on device location');
                setNormalModal(true)
            }
        } catch (err) {
            console.warn('err:::::', err);
        }
    };


    const getAndroidLocation = async () => {
        console.log('hi::::::::::');
        setIsLocationModalVisible(false);
        console.log('hi:::::::::: 1');

        Geolocation.getCurrentPosition(
            (pos) => {
                console.log('pos:::::', pos);
                isUserAlreadyCheckedIn ? handleCheckOut() : handleCheckIn()
            },
            (error) => {
                JSON.stringify(error)
                console.log('hi::::::::::3', error);
                if (error?.message.toLowerCase() === 'no location provider available.') {
                    console.log('Hi::::::::::zz')
                    setMessage('Please turn on device location');
                    setNormalModal(true)
                }
            });
    };


    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom title={'Check In / Check Out'} onPressBackArrow={() => navigation.goBack()} button={false}
                onPressButton={undefined} btnText={''} />

            <KeyboardAwareScrollView>
                <View style={{ ...commonCSS.alicPt2,  marginTop:hp(2) }}>

                    <Clock />

                    <View style={{ width: wp(80), marginTop: hp(2) }}>
                        <Dropdown
                            data={VisitType}
                            value={selectedVisitType}
                            onSelect={(val: any) => { setSelectedVisitype(val); }}
                            labelName={'name'}
                            typeName={'Location:'}
                            isDisabled={isUserAlreadyCheckedIn}
                        />
                        <Dropdown
                            isDisabled={timeSheet.stype === '-' && timeSheet.fhCin !== '-' ? true : timeSheet.stype !== '-' ? true : false}
                            data={HourFrame}
                            value={workingHourType}
                            onSelect={(val: any) => { setWorkingHourType(val) }}
                            labelName={'name'}
                            typeName={'Time:'}
                        />
                    </View>

                    <SelfieElement selectedImagebyUser={(val: string) => { setSelectedImage(val) }} />

                    {!isAttendenceDone &&
                        <TouchableOpacity
                            onPress={() => { requestLocationPermission() }}
                            style={{ marginTop: hp(2) }}>
                            <LinearGradient
                                start={{ x: -0.5, y: -0.5 }} end={{ x: 0.87, y: 0 }}
                                colors={[Colors.cicoFromColor, Colors.cicoToColor]}
                                style={s.g1}
                            >
                                <ImageComponent source={Images.buttonCheckinWhite} height={3} width={hp(3)} mode={'contain'} />
                                <Text style={s.t1}>{isUserAlreadyCheckedIn ? 'Check-out' : 'Check-in'}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    }

                    <TimeSheet timeSheet={timeSheet} />
                </View>
            </KeyboardAwareScrollView>

            <ModalSuccess
                message={message}
                visible={isMessageModalVisible}
                onRequestClose={() => {
                    setIsMessageModalVisible(false);
                }}
                onPress={() => {
                    navigation.navigate('DashBoard');
                }}
            />

            <ModalSuccess
                message={message}
                visible={normalModal}
                onRequestClose={() => {
                    setNormalModal(false);
                }}
                onPress={() => {
                    setNormalModal(false);
                }}
            />

            <ModalLocationError
                visible={isLocationModalVisible}
                onRequestClose={() => setIsLocationModalVisible(false)}
                onRequestContinue={() => { getAndroidLocation() }} />

            <Loader visible={loading} />

        </View>
    );
}

const s = StyleSheet.create({
    g1: {
        ...commonCSS.fdralic,
        paddingVertical: hp(1),
        borderRadius: hp(1),
        width: wp(35),
        justifyContent: 'space-evenly'
    },
    t1: {
        fontFamily: Font.openSansBlack,
        fontSize: FontSize.fs18,
        fontWeight: '700',
        color: Colors.white
    },

})