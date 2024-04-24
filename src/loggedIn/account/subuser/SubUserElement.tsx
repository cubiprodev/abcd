import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { useIsFocused } from '@react-navigation/native';
import FontSize from '../../../commonCSS/FontSize';

export default function SubUserElement ( props ) {

	//lang
	const isFocused = useIsFocused();

	// const [ln, setLn] = useState('en');
	// useEffect(() => {
	//   const setLang = async () => {
	//     setLn(await AsyncStorage.getItem('LanguageCode'));
	//   };
	//   setLang();
	// }, [isFocused]);

	return (

		<TouchableOpacity
			onPress={props.onPress}
			style={{ width: '100%', marginTop: hp( 1.5 ) }}
		>
			<View style={[ styles.row, { paddingHorizontal: wp( 4 ) } ]}>

				<View style={styles.iconContainer}>
					<View style={styles.iconBox}>
						<Image
							style={styles.icon}
							source={props.image}
							resizeMode={'contain'}
						>
						</Image>
					</View>
				</View>

				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: wp( 3 ) }}>
					<View style={{ width: wp( 65 ) }}>
						<Text style={styles.text}>{props.name}</Text>

						<View style={styles.row}>
							<Text style={styles.lastSeen}>Last Seen: </Text>
							<Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.lastSeen}>{props.lastSeen} ago</Text>
						</View>
					</View>


					<View style={{ width: wp( 8 ), }}>
						<View style={{ width: hp( 3 ), height: hp( 3 ), }}>
							<Image style={styles.arrow} source={require( '../../../assets/rightArrow.png' )}>
							</Image>
						</View>
					</View>
				</View>

			</View>
			{/* line */}
			<View style={{ borderBottomColor: '#d9d9d9', borderBottomWidth: hp( 0.1 ), marginLeft: wp( 15 ) }}></View>
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create( {
	row: {
		flexDirection: 'row',
		alignItems: 'center',

	},

	iconContainer: {

		backgroundColor: '#C4C4C4',
		// height: 30,
		// width: 35,
		justifyContent: 'center',
		alignItems: 'center',
		// marginHorizontal: wp( 4 ),
		marginVertical: 12,
		borderRadius: hp( 10 )
	},
	iconBox:
	{
		// backgroundColor: "red",
		width: hp( 7 ),
		height: hp( 7 ),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: hp( 3.5 ),
		overflow: 'hidden',
	},
	icon: {
		width: '80%',
		height: '80%',
		// resizeMode: 'contain',
	},
	arrow: {
		flex: 1,
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	text: {
		fontFamily: 'Poppins-Regular',
		color: '#656567',
		fontSize: FontSize.fs15,
		fontWeight: '400'
	},
	lastSeen: {
		fontFamily: 'Poppins-Regular',
		color: '#656567',
		fontSize: FontSize.fs13,
		fontWeight: '300'
	}
} )
