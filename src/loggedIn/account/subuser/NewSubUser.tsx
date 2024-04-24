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
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontSize from '../../../commonCSS/FontSize';
import ModalSuccess from '../../../component/ModalSuccess';
import { postDataWithToken } from '../../../services/mobileApi';
import constants from '../../../services/constants';
import HeaderCustom from '../../../component/HeaderCustom';
// import FontSize from '../../../../theme/FontSize';

export default function NewSubUser({ route, navigation }) {

	const pattern =
		/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;

	const [userName, setUserName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const [countryCode, setCountryCode] = useState('+358');
	const [initialCountryCode, setInitialCountryCode] = useState('');
	const [phone, setPhone] = useState('');
	const [ph, setPh] = useState('');

	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [status, setStatus] = useState(false);

	const [message, setMessage] = useState('')
	const [applyModal, setApplyModal] = useState(false);
	const [applyModalb, setApplyModalb] = useState(false);

	useEffect(() => {
		if (route.params !== undefined) {
			setStatus(true);
			setUserName(route.params.username)
			setFirstName(route.params.first_name)
			setLastName(route.params.last_name)
			setEmail(route.params.email)

			setCountryCode(route.params.country_code)
			setInitialCountryCode(route.params.country_code);

			setPhone(route.params.phone)
			setPh('')
		}
	}, [])
	// /////////////////////////////////////////////////////////////new subuser





	const CreateUser = () => {
		console.log('hello1')
		if (ph == '') {
			setMessage('Please Enter New User Phone Number');
			setApplyModal(true);
			return;
		}
		if (ph.length > 10) {
			setMessage('Phone Number should not be \nmore than 10 characters');
			setApplyModal(true);
			return;
		}
		if (ph.length < 10) {
			setMessage('Phone Number should not be \nless than 10 characters');
			setApplyModal(true);
			return;
		}
		if (password.length <= 8) {
			setMessage('Passwords should be a minimum of \neight characters in length');
			setApplyModal(true)
			return;
		}
		if (confirmPassword.length <= 8) {
			setMessage('Please Confirm Your Password');
			setApplyModal(true)
			return;
		}
		if (password !== confirmPassword) {
			setMessage('Password Does Not Match');
			setApplyModal(true)
			return;
		}
		else {
			let request = {
				phone: ph,
				password: password,
			}
			console.log('BodyDataaa===>', request);

			postDataWithToken(request, constants.BASE_URL + '/signup')
				.then(res => {
					console.log('BodyDataaa===>', res);
					// if (res.status_code === 200) {
					// 	console.log('reeeeeeessssssssaaapppp', res)
					// 	console.log('jkfkjhasdjkfhsakfjhask', res.message);
					// 	setMessage(res.message);
					// 	setApplyModalb(true)
					// } else {
					// 	console.log("fasdasfgagadgagafsaff", res.error_message);
					// 	setMessage(res.error_message);
					// 	setApplyModal(true)
					// }
				})
				.catch(error => { });
		}
	};

	// --------------------------update Location api call --------------------------\\
	const updateSubuser = () => {
	};





	return (
		<View style={styles.main}>

			<HeaderCustom
				title={'Create Sub User'}
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
					<Text style={[styles.userDetails, { fontWeight: '700' }]}> User Details</Text>

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

					{status == true ?
						<View style={[styles.textInputView, { flexDirection: 'row', alignItems: 'center', paddingLeft: wp(2) }]}>
							<View style={{ height: 20, width: 20, alignItems: 'center', }}>
								{/* <Image
									resizeMode='cover'
									style={{height: '100%', width: '100%'}}
									source={require('../../../../assets/Icon/Login/call.png')}></Image> */}
							</View>
							<Text style={{ color: 'black' }}>{phone}</Text>
						</View>
						:
						<View style={[styles.textInputView, {
							flexDirection: 'row', alignItems: 'center', paddingLeft: wp(2),
							justifyContent: 'center'
						}]}>
							<View style={{ height: 20, width: 20, alignItems: 'center', }}>
								{/* <Image
									resizeMode='cover'
									style={{height: '100%', width: '100%'}}
									source={require('../../../../assets/Icon/Login/call.png')}></Image> */}
							</View>

							<TextInput
								placeholderTextColor={'#96989A'}
								style={{ flex: 1 }}
								keyboardType="numeric"
								placeholder={'Enter Mobile Number'}
								onChangeText={val => [setPh(val), setPhone(val)]}>
							</TextInput>
						</View>
					}




					<View style={styles.textInputView}>
						<TextInput
							placeholderTextColor={'#96989A'}
							style={styles.placeHolderText}
							//   secureTextEntry
							placeholder={'Enter Password'}
							onChangeText={val => setPassword(val)}>
						</TextInput>
					</View>

					<View style={styles.textInputView}>
						<TextInput
							placeholderTextColor={'#96989A'}
							style={styles.placeHolderText}
							//   secureTextEntry
							placeholder={'Confirm Password'}
							onChangeText={val => setConfirmPassword(val)}>
						</TextInput>
					</View>
				</View>
			</ScrollView >

			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flex: 1,
					marginVertical: hp(5),
				}}>
				{/* btn */}
				{route.params !== undefined ?
					<TouchableOpacity
						style={styles.btnBackGround}
						onPress={() => updateSubuser()}>
						<Text style={styles.btnText}>  {'Update Sub User'}</Text>
					</TouchableOpacity>
					:
					<TouchableOpacity
						style={styles.btnBackGround}
						onPress={() => CreateUser()}>
						<Text style={styles.btnText}>  {'Create Sub User '}</Text>
					</TouchableOpacity>}

			</View>

			{/* <Loader val={loaderResponse.loader} /> */}

			<ModalSuccess
				error={true}
				message={message}
				visible={applyModal}
				onRequestClose={() => {
					setApplyModal(false);
				}}
				onPress={() => {
					setApplyModal(false);
				}}
			/>

			{/* go back */}
			{/* <SuccessModal
					single={true}
					visible={applyModalb}
					onRequestClose={() => setApplyModalb(false)}
					message={message}
					onPressOk={() => [setApplyModalb(false), navigation.goBack()]}
				/> */}
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
		fontSize: FontSize.fs1,
		lineHeight: 22,
		marginVertical: hp(1),
	},
	btnBackGround: {
		backgroundColor: '#1374DF',
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

