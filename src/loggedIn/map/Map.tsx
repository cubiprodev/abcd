
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import HeaderCustom from '../../component/HeaderCustom';
import { hp, wp } from '../../commonCSS/GlobalCss';
import { PERMISSIONS, request } from 'react-native-permissions';
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import { Images } from '../../assets';
import { Colors } from '../../commonCSS/Colors';
import ImageComponent from '../../component/custom/ImageComponent';
import MapViewDirections from 'react-native-maps-directions';
// import MapViewDirections from 'react-native-maps-directions';

export default function Map({ navigation }: { navigation: any }) {

	const [currentLatitude, setCurrentLatitude] = useState('28.390988085626653');
	const [currentLongitude, setCurrentLongitude] = useState('77.04931043457374');

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

	function getApkLocation(permission) {
		request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
		request(PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION)
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
		getApkLocation();
	}, []);

	const getCurrentLocation = async () => {
		console.log('gettingCurrentLocationzz');
		await Geolocation.getCurrentPosition(
			async position => {
				var currentLatitudex = position.coords.latitude;
				var currentLongitudex = position.coords.longitude;
				console.log('currentLatitude', currentLatitudex, currentLongitudex);
				// setCurrentLatitude(currentLatitudex);
				// setCurrentLongitude(currentLongitudex);
			},
			error => {
				console.log(error.message.toString());
			},
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
				onchangeText={undefined}
			/>

			<View style={styles.main}>
				<MapView
					showsUserLocation={true}
					zoomControlEnabled
					style={{
						width: wp(100),
						height: hp(90),
					}}
					initialRegion={{
						latitude: Number(currentLatitude), // currentLatitude,
						longitude: Number(currentLongitude), //currentLongitude,
						latitudeDelta: 0.172,
						longitudeDelta: 0.122,
					}}

				>

					<Marker
						coordinate={{
							latitude: Number(currentLatitude), // currentLatitude,
							longitude: Number(currentLongitude), //currentLongitude,
						}}>
						<View style={{ overflow: 'hidden' }}>
							<View
								style={{
									height: hp(7),
									width: hp(7),
									justifyContent: 'center',
									alignItems: 'center',
									backgroundColor: Colors.white,
									borderRadius: hp(3.5),
									overflow: 'hidden',
								}}>
								<ImageComponent source={Images.selfiePerson} height={6.5} width={hp(6.5)} mode={'contain'} style={{
									borderRadius: hp(3.5),
									overflow: 'hidden',
								}} />
							</View>
							<View style={styles.container}>
								<View style={styles.arrow}></View>
								{/* <Text style={styles.text}>↓</Text> */}
							</View>
						</View>
					</Marker>

					<MapViewDirections
						mode="DRIVING"
						apikey={'AIzaSyAyu-6Pv7RaiohWH1bWpQqwXbx7roNG_GA'}
						timePrecision="now"
						strokeWidth={5}
						strokeColor="#007AFF"
						origin={{
							latitude: parseFloat(currentLatitude), // currentLatitude,
							longitude: parseFloat(currentLatitude), //currentLongitude,
						}}
						destination={{
							latitude: parseFloat('37.4220936'),
							longitude: parseFloat('-122.083922'),
						}}
					/>
				</MapView>
			</View>
		</View >
	)
}

const styles = StyleSheet.create({
	main: {
		// ...StyleSheet.absoluteFillObject,
		// height: 400,
		// height: hp(80),
		flex: 1,
		width: wp(100),
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	arrow: {
		width: 0,
		height: 0,
		backgroundColor: 'transparent',
		borderStyle: 'solid',
		borderTopWidth: 20,
		borderRightWidth: 10,
		borderBottomWidth: 0,
		borderLeftWidth: 10,
		borderTopColor: Colors.ThemeColorDark, // Change color as needed
		borderRightColor: 'transparent',
		borderBottomColor: 'transparent',
		borderLeftColor: 'transparent',
		// transform: [{rotate: '180deg'}],
	},

});
