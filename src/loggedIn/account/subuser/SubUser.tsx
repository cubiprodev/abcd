import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TouchableOpacity,
	FlatList,
	Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import CustomMenuHeader from '../../../../component/CustomMenuHeader';
// import SubUserElement from '../../../../component/SubUserElement';

import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import { deleteData, getData, postDataWithToken } from '../../../../service/mobile-api';
// import Constant from '../../../../theme/Constant';
// import Loader from '../../../../component/loader';
import {useIsFocused} from '@react-navigation/native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderCustom from '../../../component/HeaderCustom';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {commonCSS} from '../../../commonCSS/GlobalCss';
import SubUserElement from './SubUserElement';

// import AsktoLogin from '../AsktoLogin';
// import SuccessModal from '../SuccessModal'
// import NoUserFound from './NoUserFound'


// import { Lang } from '../../../lang/lang'
// import { useIsFocused } from '@react-navigation/native';

export default function SubUser({navigation: {goBack}, navigation}) {
	//lang
	// const isFocused = useIsFocused();

	// const [ ln, setLn ] = useState( 'en' );
	// useEffect( () => {
	// 	const setLang = async () => {
	// 		setLn( await AsyncStorage.getItem( 'LanguageCode' ) );
	// 	};
	// 	setLang();
	// }, [ isFocused ] );
	// * * * * * * * LANGUAGE PART * * * * * * *
	// const [Lang, setLang] = useState({})
	// useEffect(() => {
	//   AsyncStorage.getItem('LANGUAGE').then((lang) => {
	//     setLang(JSON.parse(lang));
	//   })
	// }, [])

	// checking the login
	// const [ loginToken, setLoginToken ] = useState( '' );
	// console.log( 'loginToken===', loginToken );
	// useEffect( () => {
	// 	( async () => {
	// 		const token = await AsyncStorage.getItem( 'LoginAccessToken' );
	// 		console.log( 'tokeprofileDatan--->', token );
	// 		setLoginToken( token );
	// 	} )();
	// }, [ loginToken ] );



	const isFocused = useIsFocused();
	const [subUserData, setSubUserData] = useState([
		{
			check: false
		}
	]);
	const [loader, setLoader] = useState(false);

	// useEffect( () => {
	// 	getDashboardOverview();
	// }, [ isFocused ] );


	// const handleMakeAdmin = () => {
	// 	showMenu( 3, 3 );
	// 	setTimeout( () => {
	// 		setMessage( 'Are you sure you want to Transfer Admin Right?' )
	// 		setApplyModaln( true )
	// 	}, 1000 );
	// }


	const showMenu = (item, index, key) => {
		console.log('helo1::::::::::1a', item, index, key)
		let temp = subUserData;
		console.log('helo1::::::::::1b')
		temp.map((mapItem, mapIndex) => {
			console.log('helo1::::::::::1c', mapItem, mapIndex)
			if(mapIndex === index) {


				console.log('helo1::::::::::1d')
				if(mapItem.check !== undefined) {
					console.log('helo1::::::::::1')
					if(mapItem.check !== true) {
						console.log('helo1::::::::::2')
						mapItem.check = true;
					} else {
						console.log('helo1::::::::::3')
						if(key == 'edit') {
							navigation.navigate('CreateSubUser', item)
							mapItem.check = false;
						} else if(key === 'delete') {
							mapItem.check = false;
							DeleteData(item)
						} else {
							mapItem.check = false;
						}
					}
				} else {
					temp[mapIndex] = {...mapItem, check: true};
				}
			} else {
				mapItem.check = false;
			}
			setSubUserData([...temp]);
		});
	};

	useEffect(() => {
		console.log('subuserDAta::::::::::::::::::::::::', subUserData)
	}, [subUserData])

	const getDashboardOverview = () => {
		// setLoader( true );
		// getData( Constant.end_Point.SUBUSER )
		// 	.then( async res => {
		// 		const response = res;
		// 		if ( response.status_code === 200 ) {
		// 			setSubUserData( response.data );
		// 			setLoader( false );
		// 		} else {
		// 			// Alert.alert('Error', response.message);
		// 			setLoader( false );
		// 		}
		// 	} )
		// 	.catch( error => {
		// 		console.log( error );
		// 		setLoader( false );

		// 	} );
	};

	const DeleteData = item => {
		// let request = {
		// 	"subuser_id": item.id,
		// };
		// deleteData( request, Constant.end_Point.SUBUSER )
		// 	.then( res => {
		// 		console.log( 'res~~~~~~', res );
		// 		if ( res.status_code === 200 ) {
		// 			// Alert.alert(res.message);
		// 			getDashboardOverview();
		// 		} else {
		// 			// Alert.alert('Erroe', res.message);
		// 		}
		// 	} )
		// 	.catch( error => { } );
	};


	const [item, setItem] = useState('');
	const [index, SetIndex] = useState('');
	// make admin
	const MakeAdmin = item => {
		// setApplyModaln( false );
		// let request = {
		// 	"subuser_id": item.id,
		// };
		// postDataWithToken( request, Constant.end_Point.MAKEADMIN )
		// 	.then( res => {
		// 		if ( res.status_code === 200 ) {
		// 			setApplyModaln( false )
		// 			navigation.goBack()
		// 			console.log( res.message );
		// 			// GetCreatedList();
		// 			// setWriteList('');
		// 		} else {
		// 			console.log( res.error_message );
		// 		}
		// 	} )
		// 	.catch( error => { } );
	}
	const [applyModaln, setApplyModaln] = useState(false);
	const [message, setMessage] = useState('')

	return (

		<View style={{...commonCSS.bodyFAFAFA}}>
			<HeaderCustom
				title={'Sub Users'}
				onPressBackArrow={() => navigation.goBack()}
				button={true}
				onPressButton={() => {navigation.navigate('NewSubUser')}}
				btnText={'Create Sub User'}
				isSearchAvailable={false}
				searchKeyword={''}
				onchangeText={undefined}
			/>




			{/* {subUserData.length < 0  ? <View style={{ flex: 1 }}><Text>No Users Found</Text></View> : */}

			<FlatList
				data={subUserData}
				renderItem={({item, index}) => {
					return (
						<View style={{}}>
							<SubUserElement
								image={require('../../../assets/userFrame.png')}
								// image={item.subuser_image == "" ?
								// 	`${ require( '../../../assets/userFrame.png' ) }` :
								// 	{ uri: item.subuser_image }
								// }

								// name={item.first_name + ' ' + item.last_name}
								name={'sonal'}
								// lastSeen={item.last_seen}
								// onPress={navigation.navigate( 'NewSubUser', { item } )}
								onPress={() => showMenu(item, index)}
							// onPress={() => showMenu(item, index)}

							/>

							{/* onPressPen={() => showMenu(item, index)}
				visible={item.check}
				onRequestClose={() => showMenu(item, index)}
				Edit={() => showMenu(item, index, 'edit')}
				Delete={() => DeleteData(item, index)} */}

							<View style={{backgroundColor: 'red', width: wp(100)}}>
								<Menu
									visible={item.check} onRequestClose={() => showMenu(item, index)}>
									<MenuItem
										textStyle={{color: '#444444'}}
										onPress={() => showMenu(item, index, 'edit')}>Edit</MenuItem>
									<MenuDivider />
									<MenuItem textStyle={{color: '#444444'}} onPress={() => showMenu(item, index, 'delete')}>Delete</MenuItem>
									<MenuDivider />
								</Menu>
							</View>
						</View>
					);
				}}
			/>
			{/* } */}
			{/* <ScrollView showsVerticalScrollIndicator={false}>
		  <View>
			<SubUserElement
			  image={require('../../../../assets/Icon/userFrame.png')}
			  name={'Sub User Name 1'}
			  lastSeen={'01:23 am, 02/02/2021'}
			/>
		  </View>
		</ScrollView> */}
			{/* {subUserData.length == [] ? null :
					<TouchableOpacity
						style={styles.addPosition}
						onPress={() => navigation.navigate( 'SubUsers' )}>
						<Image
							style={styles.img}
							source={require( '../../../assets/addCreate.png' )}></Image>
					</TouchableOpacity>
				} */}
			{/* </> */}
			{/* <SuccessModal
				// single={true}
				visible={applyModaln}
				onRequestClose={() => setApplyModaln( false )}
				message={message}
				onPressOk={() => MakeAdmin()}
			/> */}

			{/* <Loader val={loader} /> */}

		</View >
	);
}

const styles = StyleSheet.create({
	addPosition: {
		position: 'absolute',
		bottom: hp(8),
		right: wp(10),
		// marginLeft: wp(80),
		width: hp(7.5),
		height: hp(7.5),
		flexDirection: 'row',
	},

	img: {
		borderRadius: hp(10),
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
});
