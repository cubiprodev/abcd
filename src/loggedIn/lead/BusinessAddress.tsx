import React, {useEffect, useState} from 'react';
import {View, Text, PermissionsAndroid, TouchableOpacity, ScrollView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {commonCSS, hp, wp} from '../../commonCSS/GlobalCss';
import Geocoder from 'react-native-geocoding';
import constants from '../../services/constants';
import {Colors} from '../../commonCSS/Colors';
import TextInputCustom from '../../component/custom/TextInputCustom';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Button from '../../component/Button';
import FontSize from '../../commonCSS/FontSize';
import Font from '../../commonCSS/Font';
import HeaderCustom from '../../component/HeaderCustom';
import ModalAddAddress from '../../component/ModalAddAddress';
import ModalTaskCompleted from '../../component/ModalTaskCompleted';


export default function BusinessAddress({route, navigation}: {route: any, navigation: any}) {
    const [leadData, setLeadData] = useState({});
    const [message, setMessage] = useState('');
    const [normalModal, setNormalModal] = useState(false);
    const [isLocationModalVisible, setIsLocationModalVisible] = useState(false);

    // address
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    // modal
    const [addModal, setAddModal] = useState(false);
    const [leadDone, setLeadDone] = useState(false);

    Geocoder.init(constants.MapApiKey); // use a valid API key
    useEffect(() => {
        console.log('qwertyui,', route?.params?.leadData);
        if(route?.params?.leadData) {
            setLeadData(route?.params?.leadData)
        }
    }, [route])


    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            console.log('granted:::::::', granted);
            if(granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the Location');
                getAndroidLocation();
            }
            if(granted.toLocaleLowerCase() === 'location permission denied') {
                setMessage('Please turn on device location');
                setNormalModal(true)
            }
        } catch(err) {
            console.warn('err:::::', err);
        }
    };

    const getAndroidLocation = async () => {
        console.log('hi::::::::::');
        setIsLocationModalVisible(false);
        console.log('hi:::::::::: 1');

        Geolocation.getCurrentPosition(
            (pos) => {
                setLatitude(pos?.coords?.latitude);
                setLongitude(pos?.coords?.longitude);
                updateAddress(pos?.coords?.latitude, pos?.coords?.longitude);
            },
            (error) => {
                JSON.stringify(error)
                console.log('hi::::::::::3', error);
                if(error?.message.toLowerCase() === 'no location provider available.') {
                    console.log('Hi::::::::::zz')
                    setMessage('Please turn on device location');
                    setNormalModal(true)
                }
            });
    };

    // converting the lat long to the address
    function updateAddress(latitude, longitude) {
        Geocoder.from(latitude, longitude).then(json => {
            var addressComponent = json.results;

            var formattedAddressx = addressComponent[2] ? addressComponent[2]?.formatted_address : addressComponent[0]?.formatted_address;
            var addressArray = formattedAddressx.split(',');
            var street1 = addressArray.slice(0, 3).join(',');
            setLeadData(prevData => ({
                ...prevData,
                street1: street1
            }));
            var street2 = addressArray.slice(3).join(',');
            setLeadData(prevData => ({
                ...prevData,
                street2: street2
            }));
            var address_components = addressComponent[0]?.address_components
            var zip = addressComponent;

            var city = addressComponent;
            var state = addressComponent;
        });
    }

    useEffect(() => {
        requestLocationPermission();
    }, [])

    useEffect(() => {
        console.log('leadData::::::::::', leadData)
    }, [leadData])

    return (
        <View style={{flex: 1}}>
            <HeaderCustom
                title={'Business address'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />
            <KeyboardAwareScrollView contentContainerStyle={{flex: 1, }}>
                <ScrollView style={{flex: 1}}>
                    {(latitude === 0 || longitude === 0) ? null :
                        <MapView
                            style={{
                                height: hp(53),
                                width: wp(100),
                            }}
                            zoomControlEnabled
                            loadingEnabled
                            showsUserLocation={true}
                            initialRegion={{
                                latitude: latitude,
                                longitude: longitude,
                                latitudeDelta: 0.002,
                                longitudeDelta: 0.002,
                            }}
                        />
                    }
                    <View style={{backgroundColor: Colors.white, flex: 1, paddingHorizontal: wp(4)}}>

                        <View style={{...commonCSS.fdralic, justifyContent: 'space-between', paddingTop: hp(2), }}>
                            <Text style={{...commonCSS.titleMB70016, color: Colors.black}}>Store address</Text>
                            <TouchableOpacity
                                onPress={() => {setAddModal(true)}}>
                                <Text style={{...commonCSS.titleMB70016, color: Colors.ThemeColorDark}}>Add manually</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            marginTop: hp(1.5)
                        }}>
                            <TextInputCustom
                                title={'Address'}
                                placeholderText={''}
                                defaultValue={leadData?.street1}
                                onChangeText={(val => {
                                    setLeadData(prevData => ({
                                        ...prevData,
                                        street1: val
                                    }));
                                })}
                                width={'92'}
                                keyboardType={undefined}
                                maxLength={0}
                            />
                        </View>
                        <View style={{
                            marginTop: hp(1.5)
                        }}>
                            <TextInputCustom
                                title={'Address'}
                                placeholderText={''}
                                defaultValue={leadData?.street2}
                                onChangeText={(val => {
                                    setLeadData(prevData => ({
                                        ...prevData,
                                        street2: val
                                    }));
                                })}
                                width={'92'}
                                keyboardType={undefined}
                                maxLength={0}
                            />
                        </View>


                        <View style={{paddingVertical: hp(2.5), ...commonCSS.alicjc}}>
                            <Button
                                label={'SAVE'}
                                labelSize={FontSize.fs16}
                                fontWeight={'700'}
                                textColor={Colors.white}
                                fontFamily={Font.MontserratBlack}
                                marginLeft={''}
                                paddingHorizontal={''}
                                paddingVertical={''}
                                onPress={() => {setLeadDone(true)}}
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

                </ScrollView>
            </KeyboardAwareScrollView>

            <ModalAddAddress
                data={leadData}
                visible={addModal}
                onRequestClose={() => {setAddModal(false);}}
                onRequestContinue={() => {setAddModal(false);}}
                onChangeStreetOne={(val => {
                    setLeadData(prevData => ({
                        ...prevData,
                        street1: val
                    }));
                })}
                onChangeStreetTwo={(val => {
                    setLeadData(prevData => ({
                        ...prevData,
                        street2: val
                    }));
                })}
                onChangeZip={(val => {
                    setLeadData(prevData => ({
                        ...prevData,
                        zip: val
                    }));
                })}
                onChangeCity={(val => {
                    setLeadData(prevData => ({
                        ...prevData,
                        city: val
                    }));
                })}
                onChangeState={(val => {
                    setLeadData(prevData => ({
                        ...prevData,
                        state: val
                    }));
                })}
            />

            <ModalTaskCompleted
                visible={leadDone}
                onRequestClose={() => {[setLeadDone(false)]}}
                message={'Lead created \nsuccessfully'}
            />
        </View>
    );
}
