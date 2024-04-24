import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Image,
    Modal,
    TouchableWithoutFeedback,
    Alert,
    ScrollView
} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Menu, MenuDivider, MenuItem } from 'react-native-material-menu';
import moment from 'moment/moment';
// import ImageComponent from './ImageComponent';
import { useIsFocused } from '@react-navigation/native';
import HeaderCustom from '../../component/HeaderCustom';
import { commonCSS } from '../../commonCSS/GlobalCss';
import ImageComponent from '../../component/custom/ImageComponent';
// import Header from '../components/Header';
// import { Colors } from '../global/Colors';






const Notification = ( { navigation, route } ) => {
    var data = [
        {
            id: 1,
            is_read: false,
            created_at: new Date(),
            sender_image: require( '../../assets/med1.png' ),
            body: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            type: 'nda',
            check: false,
        },
        {
            id: 2,
            is_read: false,
            created_at: new Date(),
            sender_image: require( '../../assets/med1.png' ),
            body: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            type: 'nfaa',
            check: false,
        },
        {
            id: 3,
            is_read: false,
            created_at: new Date(),
            sender_image: require( '../../assets/med1.png' ),
            body: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            type: 'na',
            check: false,
        },
        {
            id: 4,
            is_read: true,
            created_at: new Date(),
            sender_image: require( '../../assets/med1.png' ),
            body: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            type: 'nffaa',
            check: false,
        },
        {
            id: 5,
            is_read: false,
            created_at: new Date(),
            sender_image: require( '../../assets/med1.png' ),
            body: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            type: 'nafaf',
            check: false,
        },
    ]

    const isFocused = useIsFocused();

    const [ show, setShow ] = useState( false );
    const [ flatlistData, setFlatlistData ] = useState( data );
    const [ backupData, setBackupData ] = useState( [] );
    const [ loader, setLoader ] = useState( false );


   


    // const dispatch=useDispatch();
    // // -------------------- Get Loder Responce using useSelector -------------------//
    // const loaderResponse=useSelector(state => state.loader);

    const showHandle = ( item, index, key ) => {
        let temp = flatlistData;
        temp.map( ( mapItem, mapIndex ) => {

            // console.log('index ::;', mapIndex);
            // console.log('mapIndex ::;', mapIndex);
            // console.log('mapItem ::;', mapItem);

            // LOG  mapItem ::; {"body": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua", "check": true, "created_at": 2024-02-01T20:12:39.873Z, "is_read": false, "sender_image": 14, "type": "na"}
            if ( mapIndex === index ) {
                if ( mapItem.check !== undefined ) {
                    if ( mapItem.check !== true ) {
                        mapItem.check = true;
                    } else {
                        if ( key === 'Delete' ) {
                            mapItem.check = false;
                            DeleteNotification( item )
                        } else if ( key === 'Read' ) {
                            mapItem.check = false;
                            ReadNotification( item )
                        }
                        else {
                            mapItem.check = false;
                        }
                    }
                } else {
                    temp[ mapIndex ] = { ...mapItem, check: true };
                }
            } else {
                mapItem.check = false;
            }
        } );
        console.log( 'temp :::', temp );
        setFlatlistData( [ ...temp ] );
    };


    // checking the login
    const [ loginToken, setLoginToken ] = useState( '' );

    //   useEffect( () => {
    //     ( async () => {
    //       const token = await AsyncStorage.getItem( 'token' );
    //       setLoginToken( token );
    //       getNotification( token );
    //     } )();
    //   }, [ isFocused ] );


    const getNotification = ( token ) => {

        // fetch( `https://shopninja.in/anurag/forexTrader/api/user/get-notifications`, {
        //   method: 'GET',
        //   headers: {
        //     Authorization: `Bearer ${ token }`,
        //   },
        // } )
        //   .then( ( response ) => {
        //     if ( response.status === 200 ) {
        //       return response.json();
        //     } else {
        //       return response.json();
        //     }
        //   } )
        //   .then( ( json ) => {
        //     console.log( 'get notification::::::::::', json );
        //     setFlatlistData( json?.message );
        //   } )
        //   .catch( ( error ) => {
        //     console.log( '=== ERROR ===', error );
        //   } );
    }

    const DeleteNotification = ( item ) => {
        const updatedData = flatlistData.filter( notification => notification.id !== item.id );
        console.log( 'item:::::::del', updatedData )
        setTimeout( () => {
            setFlatlistData( updatedData )
        }, 500 );
    }

    const ReadNotification = ( item ) => {
        const updatedData = flatlistData.map( notification => {
            if ( notification.id === item?.id ) {
                return { ...notification, is_read: true };
            }
            return notification;
        } );
        setTimeout( () => {
            setFlatlistData( updatedData )
        }, 800 );
    }

    const [ applyModal, setApplyModal ] = useState( false );
    const [ message, setMessage ] = useState( '' )

    //
    const handleNavigation = ( item ) => {
        // ReadNotification(item);

    };


    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Notification'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={() => { }}
                btnText={''}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined}
            />

            {/* {flatlistData && flatlistData.length == 0 && loader == false ?
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text> {'No New Notification Found'}</Text>
                </View>
                : */}
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={flatlistData}
                        // contentContainerStyle={{ flex: 1 }}
                        renderItem={( { item, index } ) => {
                            console.log('item::::::::::::::::',index, item)
                            return (

                                <View style={{
                                    backgroundColor: item.is_read == true ? '#FFFFFF' : '#D9E8F9',
                                    marginVertical:hp(0.2)
                                }}>
                                    <Text style={styles.dayText}>{moment.utc( item.created_at ).local().startOf( 'seconds' ).fromNow()}</Text>

                                    <View style={[ styles.flatlistStyle, {
                                        marginTop: hp( -1 ),
                                        overflow: 'hidden',
                                    } ]}>

                                        <View
                                            style={styles.ImageStyle}>
                                            <ImageComponent
                                                source={require( '../../assets/med2.png' )}
                                                height={6}
                                                width={hp( 6 )}
                                                mode={'cover'} tintColor={undefined}                                            />
                                            {/* {item.sender_image == null ?
                        :
                        <ImageComponent
                          source={item.sender_image}
                          height={6}
                          width={hp( 6 )}
                          mode={'cover'}
                        />
                      } */}
                                        </View>


                                        <View style={styles.textView}>
                                            <Text
                                                numberOfLines={2}
                                                ellipsizeMode={'tail'}
                                                style={styles.titleText}>
                                                {item?.body}
                                            </Text>
                                            {/* <TouchableOpacity
                        onPress={() => handleNavigation(item, index)}
                        style={styles.buttonView}>
                        <Text style={styles.buttonText}>View Messages</Text>
                      </TouchableOpacity>
                      <Text style={styles.dayText}>{moment.utc(item.created_at).local().startOf('seconds').fromNow()}</Text> */}
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                                {item.type != "na" ? <View></View> :
                                                    <TouchableOpacity
                                                        // onPress={()=> navigation.}
                                                        onPress={() => handleNavigation( item, index )}
                                                        style={styles.buttonView}>
                                                        <Text style={styles.buttonText}>View</Text>
                                                    </TouchableOpacity>
                                                }
                                                {/* <Text style={styles.dayText}>{moment.utc(item.created_at).local().startOf('seconds').fromNow()}</Text> */}
                                            </View>
                                        </View>


                                        <View style={[ styles.dayTextView, { paddingVertical: hp( 0.5 ) } ]}>

                                            <Menu
                                                visible={item.check}
                                                anchor={
                                                    <TouchableOpacity
                                                        onPress={() => showHandle( item, index )}
                                                        style={{
                                                            // alignItems: 'flex-end',
                                                            // backgroundColor:'yellow',
                                                            // padding: hp(10),
                                                        }}>
                                                        {/* <Image source={Images.grayDots} style={{ resizeMode: 'contain' }} /> */}
                                                        <View style={{ backgroundColor: '#000000', height: hp( 0.6 ), width: hp( 0.6 ), borderRadius: hp( 0.3 ) }}></View>
                                                        <View style={{
                                                            backgroundColor: '#000000', height: hp( 0.6 ), width: hp( 0.6 ),
                                                            marginVertical: hp( 0.3 ),
                                                            borderRadius: hp( 0.3 )
                                                        }}></View>
                                                        <View style={{ backgroundColor: '#000000', height: hp( 0.6 ), width: hp( 0.6 ), borderRadius: hp( 0.3 ) }}></View>
                                                    </TouchableOpacity>
                                                }
                                                onRequestClose={() => showHandle( item, index )}>
                                                {item.is_read == true ? null :
                                                    <MenuItem textStyle={{ color: '#444444' }} onPress={() => showHandle( item, index, 'Read' )}> {'Read'}</MenuItem>
                                                }
                                                <MenuDivider />
                                                <MenuItem textStyle={{ color: '#444444' }} onPress={() => showHandle( item, index, 'Delete' )}> {'Delete'}</MenuItem>
                                            </Menu>

                                        </View>

                                    </View>
                                </View>
                            );
                        }}
                    />
                    <View style={{ height: hp( 2 ) }}></View>
                </View>
            {/* } */}

        </View>
    );
};


export default Notification;

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        // backgroundColor: Colors.bg,
    },
    flatlistStyle: {
        flex: 1,
        paddingTop: hp( 1 ),
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:'red'
        // paddingVertical: hp(1),
    },
    ImageStyle: {
        height: hp( 6 ),
        width: hp( 6 ),
        borderRadius: hp( 3 ),
        overflow: 'hidden',
        marginLeft: wp( 4 )
    },
    Image1Style: {
        // height: hp(30),
        // width: hp(30),
        position: 'absolute',
        marginTop: hp( 1 ),
        marginLeft: hp( 1 ),
    },
    Image2Style: {
        // height: hp(30),
        // width: hp(30),
        position: 'absolute',
        marginTop: hp( 2 ),
        marginLeft: hp( 2 ),
    },
    textView: {
        // flex: 7,
        width: wp( 75 ),
        // marginLeft: wp(2),
        justifyContent: 'space-between',
        // marginLeft: wp(2),
        paddingHorizontal: wp( 4 ),
        borderBottomWidth: 0.2,
        borderBottomColor: 'rgba(0, 0, 0, 0.1);',
    },
    titleText: {
        color: '#000000',
        // fontFamily: Font.PoppinsRegular,
        // fontSize: hp(9),
    },
    buttonView: {
        borderWidth: 1,
        // flex: 1,
        paddingHorizontal: wp( 2 ),
        justifyContent: 'center',
        alignSelf: 'flex-start',
        borderColor: 'blue',
        borderRadius: hp( 1 ),
        backgroundColor: '#99BBEB',
        marginVertical: hp( 1 ),
    },
    buttonText: {
        // fontSize: hp(10),
        textAlign: 'center',
        color: '#06325F',
        // fontFamily: Font.PoppinsRegular,
    },
    dayTextView: {
        flex: 1,
        borderBottomWidth: 0.2,
        borderBottomColor: 'rgba(0, 0, 0, 0.1);',
    },
    dayText: {
        color: "#000000",
        // fontSize: hp(8),
        textAlign: 'right',
        marginRight: wp( 3 ),
        // fontFamily: Font.PoppinsRegular,
        // marginBottom: hp(-0.5),
        marginTop: hp( 1 )
    },
} );