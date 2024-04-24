import React, { useEffect, useState } from 'react';
import {
	Alert,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

// import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import CustomMenuHeader from '../../../../component/CustomMenuHeader';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { useIsFocused } from '@react-navigation/native';
import FontSize from '../../../commonCSS/FontSize';
import HeaderCustom from '../../../component/HeaderCustom';
import { Colors } from '../../../commonCSS/Colors';
// import FontSize from '../../../../theme/FontSize';
// import Loader from '../../../../component/loader';
// import { loaderAction } from '../../../../redux/Action/LoaderAction';
// import { ToastDisplay } from '../../../../redux/Action/ToastAction';
// import { CreateSubUserRequest } from '../../../../redux/Action/CreateSubUserAction';
// import { patchData, postDataWithToken } from '../../../../service/mobile-api';
// import Constant from '../../../../theme/Constant';/
// import { Lang } from '../../../lang/lang'
// import { useIsFocused } from '@react-navigation/native';
// import SuccessModal from '../SuccessModal';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { CountryPicker } from 'react-native-co/untry-codes-picker';
// import Constant from '../../../../theme/Constant';

export default function CreateSubUser({ route, navigation }) {
	// * * * * * * * LANGUAGE PART * * * * * * *
	// const [Lang, setLang] = useState({})
	// useEffect(() => {
	//     AsyncStorage.getItem('LANGUAGE').then((lang) => {
	//         setLang(JSON.parse(lang));
	//     })
	// }, [])

	//lang
	const isFocusedx = useIsFocused();

	// const [ ln, setLn ] = useState( 'en' );
	// useEffect( () => {
	// 	const setLang = async () => {
	// 		setLn( await AsyncStorage.getItem( 'LanguageCode' ) );
	// 	};
	// 	setLang();
	// }, [ isFocusedx ] );

	// console.log( 'hieireirheirererererer', route.params )
	// const dispatch = useDispatch();

	// const loaderResponse = useSelector( state => state.loader );


	const pattern =
		/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;

	const [userName, setUserName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const [countryCode, setCountryCode] = useState('+91');
	const [initialCountryCode, setInitialCountryCode] = useState('');
	const [phone, setPhone] = useState('');
	const [ph, setPh] = useState('');

	const [show, setShow] = useState(false);


	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [isFocused, setIsFocused] = useState(false);
	const [isFocused1, setIsFocused1] = useState(false);
	const [isFocused2, setIsFocused2] = useState(false);
	const [isFocused3, setIsFocused3] = useState(false);
	const [isFocused4, setIsFocused4] = useState(false);
	const [isFocused5, setIsFocused5] = useState(false);
	const [isFocused6, setIsFocused6] = useState(false);
	const [status, setStatus] = useState(false);


	// useEffect( () => {
	// 	if ( route.params !== undefined ) {
	// 		setStatus( true );
	// 		setUserName( route.params.username )
	// 		setFirstName( route.params.first_name )
	// 		setLastName( route.params.last_name )
	// 		setEmail( route.params.email )

	// 		setCountryCode( route.params.country_code )
	// 		setInitialCountryCode( route.params.country_code );

	// 		setPhone( route.params.phone )
	// 		setPh( '' )
	// 	}
	// }, [ isFocusedx ] )

	const CreateUser = () => {
		if (
			userName == '' ||
			firstName == '' ||
			lastName == '' ||
			email == '' ||
			ph == '' ||
			password == '' ||
			confirmPassword == ''
		) {
			setMessage(
				// 'Please Enter Details'
				Lang && Object.keys(Lang).length > 0 ? Lang[ln]?.new['Please Enter Details'] : ''
			);
			setApplyModal(true);
		} else if (pattern.test(email) === false) {
			// setMessage(
			// 	// 'Please Enter valid Email'
			// 	Lang && Object.keys( Lang ).length > 0 ? Lang[ ln ]?.new[ 'Please Enter valid Email' ] : ''

			// );
			// setApplyModal( true )
		}
		else if (password.length <= 8) {
			// setMessage(
			// 	// 'Passwords should be a minimum of eight characters in length'
			// 	Lang && Object.keys( Lang ).length > 0 ? Lang[ ln ]?.new[ 'Passwords should be a minimum of eight characters in length' ] : ''
			// );
			// setApplyModal( true )
		}
		else if (confirmPassword.length <= 8) {
			// setMessage(
			// 	// 'Please Confirm Your Password'
			// 	Lang && Object.keys( Lang ).length > 0 ? Lang[ ln ]?.new[ 'Please Confirm Your Password' ] : ''
			// );
			// setApplyModal( true )
		}
		else if (password !== confirmPassword) {
			// setMessage(
			// 	// 'Password Does Not Match'
			// 	Lang && Object.keys( Lang ).length > 0 ? Lang[ ln ]?.new[ 'Password Does Not Match' ] : ''
			// );
			// setApplyModal( true )
		} else {
			let bodyData = {
				country_code: countryCode,
				username: userName,
				first_name: firstName,
				last_name: lastName,
				email: email,
				phone: countryCode + ph,
				password: password,
				confirm_password: confirmPassword
			};
			console.log('BodyDataaa===>', bodyData);

			// 	postDataWithToken( bodyData, Constant.end_Point.SUBUSER )
			// 		.then( res => {
			// 			if ( res.status_code === 200 ) {
			// 				console.log( 'reeeeeeessssssssaaapppp', res )
			// 				console.log( 'jkfkjhasdjkfhsakfjhask', res.message );
			// 				setMessage( res.message );
			// 				setApplyModalb( true )
			// 			} else {
			// 				console.log( "fasdasfgagadgagafsaff", res.error_message );
			// 				setMessage( res.error_message );
			// 				setApplyModal( true )
			// 			}
			// 		} )
			// 		.catch( error => { } );
		}
	};

	// --------------------------update Location api call --------------------------\\
	const updateSubuser = () => {
		console.log('update:::http://localhost:8080/user/update?phoneNumber=6642855254')
		// if (
		// 	userName == '' ||
		// 	firstName == '' ||
		// 	lastName == '' ||
		// 	email == '' ||
		// 	phone == '' ||
		// 	password == '' ||
		// 	confirmPassword == ''
		// ) {
		// 	setMessage( Lang && Object.keys( Lang ).length > 0 ? Lang[ ln ]?.new[ 'Please Enter Details' ] : '' );
		// 	setApplyModal( true )
		// } else if ( pattern.test( email ) === false ) {
		// 	setMessage( Lang && Object.keys( Lang ).length > 0 ? Lang[ ln ]?.new[ 'Please Enter valid Email' ] : '' );
		// 	setApplyModal( true )
		// } else if ( password !== confirmPassword ) {
		// 	setMessage( Lang && Object.keys( Lang ).length > 0 ? Lang[ ln ]?.new[ 'Password Does Not Match' ] : '' );
		// 	setApplyModal( true )
		// } else {
		// 	let request = {
		// 		country_code: countryCode,
		// 		username: userName,
		// 		first_name: firstName,
		// 		last_name: lastName,
		// 		email: email,
		// 		phone: countryCode + ph,
		// 		password: password,
		// 		confirm_password: confirmPassword,
		// 		subuser_id: route.params.id
		// 	};
		// 	console.log( "bodududuududduddddddddddd", request )
		// 	dispatch( loaderAction( true ) );
		// 	patchData( request, Constant.end_Point.SUBUSER )
		// 		.then( res => {
		// 			console.log( 'resssffere', res );
		// 			if ( res.status_code === 200 ) {
		// 				dispatch( loaderAction( false ) );
		// 				// navigation.pop()
		// 				setMessage( res.detail );
		// 				setApplyModalb( true );
		// 			} else {
		// 				setMessage( res.detail );
		// 				setApplyModal( true )
		// 				dispatch( loaderAction( false ) );
		// 			}
		// 		} )
		// 		.catch( error => {
		// 			dispatch( loaderAction( false ) );
		// 		} );
		// };
	};


	return (
		<View style={styles.main}>
			<HeaderCustom
				title={'Edit Sub User'}
				onPressBackArrow={() => navigation.goBack()}
				button={false}
				onPressButton={undefined}
				btnText={''}
				isSearchAvailable={false}
				searchKeyword={''}
				onchangeText={undefined}
			/>


			<ScrollView style={{ paddingHorizontal: wp(3), marginTop: hp(2) }}>
				<View style={{ flex: 1 }}>
					<Text style={[styles.userDetails, { fontWeight: '700' }]}>User Details</Text>

					{/* <View style={styles.textInputView}>
						<TextInput
							placeholderTextColor={'#96989A'}
							style={styles.placeHolderText}
							placeholder={'Enter First Name'}
							onChangeText={val => setFirstName(val)}>
						</TextInput>
					</View>



					<View style={styles.textInputView}>
						<TextInput
							placeholderTextColor={'#96989A'}
							placeholder={'Enter Last Name'}
							style={styles.placeHolderText}
							onChangeText={val => setLastName(val)}>
						</TextInput>
					</View> */}



					<View style={[styles.textInputView, {
						flexDirection: 'row', alignItems: 'center', paddingLeft: wp(2),
						justifyContent: 'center'
					}]}>
						<View style={{ height: 20, width: 20, alignItems: 'center', }}>
							<Image
								resizeMode='cover'
								style={{ height: '100%', width: '100%' }}
								source={require('../../../assets/call.png')}></Image>
						</View>

						<TouchableOpacity
							onPress={() => setShow(!show)}
							style={{
								alignItems: 'center',
								width: '15%',
								justifyContent: 'space-around',
							}}>
							<Text
								style={{
									fontSize: FontSize.fs13,
									color: '#333333',
								}}>
								{countryCode}
							</Text>
						</TouchableOpacity>

						<TextInput
							placeholderTextColor={'#96989A'}
							style={{ flex: 1, color: 'black' }}
							keyboardType="numeric"
							placeholder='Enter Mobile Number'
							onChangeText={val => [setPh(val), setPhone(val)]}>
						</TextInput>
					</View>




					<View style={styles.textInputView}>
						<TextInput
							placeholderTextColor={'#96989A'}
							style={styles.placeHolderText}
							placeholder='Enter Password'
							onChangeText={val => setPassword(val)}>
						</TextInput>
					</View>


					<View style={styles.textInputView}>
						<TextInput
							placeholderTextColor={'#96989A'}
							style={styles.placeHolderText}
							placeholder='Confirm Password'
							onFocus={() => setIsFocused6(true)}
							onBlur={() => setIsFocused6(false)}
							onChangeText={val => setConfirmPassword(val)}>
						</TextInput>
					</View>
				</View>
			</ScrollView>


			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flex: 1,
					marginVertical: hp(5),
				}}>
				<TouchableOpacity
					style={styles.btnBackGround}
					onPress={() => updateSubuser()}>
					<Text style={styles.btnText}>Update Sub User</Text>
				</TouchableOpacity>
			</View>

		</View >
	);
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#FFFFFF',
		flex: 1,
	},
	userDetails: {
		color: '#444444',
		fontFamily: 'Poppins-Regular',
		fontWeight: '500',
		fontSize: FontSize.fs11,
		lineHeight: 22,
		marginVertical: hp(1),
	},
	btnBackGround: {
		// backgroundColor: '#1374DF',
		backgroundColor: Colors.ThemeColorDark,
		height: hp(5),
		// width: 332,
		// flex:1,
		width: wp(55),
		borderRadius: hp(10),
		justifyContent: 'center',
	},
	btnText: {
		color: '#FFFFFF',
		textAlign: 'center',
		fontFamily: 'Poppins-Regular',
		fontWeight: '400',
		fontSize: FontSize.fs16,
	},

	textInputView: {
		marginTop: hp(1.8),
		// height: 40,
		height: hp(6),
		// alignItems: 'center',
		backgroundColor: '#FFF',

		borderWidth: 1,
		borderColor: '#D2D2D2',
		borderRadius: hp(1),
	},
	placeHolderText: {
		// top: 2,
		flex: 1,
		color: '#000',
		paddingLeft: wp(5),
		fontFamily: 'Poppins-Regular',
		justifyContent: 'center',
		fontSize: FontSize.fs15,
		fontWeight: '400',
		alignItems: 'center',
		paddingTop: hp(1)

	},
});