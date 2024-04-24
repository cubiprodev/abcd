import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import HeaderCustom from '../../component/HeaderCustom';
import { hp, wp } from '../../commonCSS/GlobalCss';
import { PERMISSIONS, request } from 'react-native-permissions';
import { styles } from './Map';


export default function Map({ navigation }: { navigation: any; }) {
    const [currentLatitude, setCurrentLatitude] = useState('20.5937');
    const [currentLongitude, setCurrentLongitude] = useState('78.9629');

    Geocoder.init('AIzaSyAyu-6Pv7RaiohWH1bWpQqwXbx7roNG_GA'); // use a valid API key
    const GOOGLE_PACES_API_BASE_URL = 'https://maps.googleapis.com/maps/api/place';

    function getiosLocation(permission) {
        request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            .then(result => {
                console.log('locationstatus', result);
                if (result == 'granted') {
                    getCurrentLocation();
                    // Nearbymexxc();
                } else {
                    // getiosLocation();
                    console.log('ios permission failed');
                }
            })
            .catch(error => {
                // …
            });
    }

    useEffect(() => {
        getiosLocation();
    }, []);

    const getCurrentLocation = async () => {
        console.log('gettingCurrentLocationzz');
        await Geolocation.getCurrentPosition(
            async (position) => {
                var currentLatitudex = position.coords.latitude;
                var currentLongitudex = position.coords.longitude;
                console.log('currentLatitude', currentLatitudex, currentLongitudex);
                // setCurrentLatitude(currentLatitudex);
                // setCurrentLongitude(currentLongitudex);
            },
            error => {
                console.log(error.message.toString());
            }
        );
    };




    return (
        <View style={{ flex: 1 }}>
            <HeaderCustom
                title={'User Location'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined} />

            <View style={styles.container}>
                <MapView
                    // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{
                        width: wp(100),
                        height: hp(90),
                    }}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
        </View>
    );
}
