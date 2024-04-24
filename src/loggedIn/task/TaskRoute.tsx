import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderCustom from '../../component/HeaderCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { commonCSS, wp, hp } from '../../commonCSS/GlobalCss';
import { routeDaySelection } from '../../data/Data';
import { Colors } from '../../commonCSS/Colors';
import Font from '../../commonCSS/Font';
import FontSize from '../../commonCSS/FontSize';
import TextComponent from '../../component/custom/TextComponent';
import CustomCalendar from './CustomCalendar';
import ModalCalendar from '../../component/ModalCalendar';
import { getData } from '../../services/mobileApi';
import constants from '../../services/constants';
import { getRemainingMonthDates, getRemainingWeekDates } from '../../services/commonFunc';
import moment from 'moment';
import ImageComponent from '../../component/custom/ImageComponent';
import { Images } from '../../assets';


export default function TaskRoute ( { navigation }: { navigation: any } ) {

    const [ filterDataValue, setFilterDataValue ] = useState( routeDaySelection );
    const [ selectedIndex, setSelectedIndex ] = useState( 0 );
    const [ isCalendarmodalvisisble, setIsCalendarmodalvisisble ] = useState( false );

    // data
    const [ todayData, setTodayData ] = useState( [] );
    const [ todayRouteData, setTodayRouteData ] = useState( [] );

    const [ thisWeekData, setThisWeekData ] = useState( [] );
    const [ thisWeekRouteData, setThisWeekRouteData ] = useState( [] );

    const [ thisMonthData, setThisMonthData ] = useState( [] );
    const [ thisMonthRouteData, setThisMonthRouteData ] = useState( [] );

    const [ customData, setCustomData ] = useState( [] );
    const [ customRouteData, setCustomRouteData ] = useState( [] );

    const [ fromDate, setFromDate ] = useState( 'Select Date' );
    const [ toDate, setToDate ] = useState( 'Select Date' );

    const [ isFromDateSelected, setIsFromDateSelected ] = useState( true )
    const [ iscustomDone, setIsCustomDone ] = useState( false );


    const todayTaskFromApi = () => {
        getData( constants.getTodayTask )
            .then( ( res: any ) => {
                if ( res && typeof res == 'object' ) {
                    if ( res.message.toLowerCase() === 'no route assignments found within the specified date range.' ) {
                        console.log( 'nothing found in the today api' )
                    } else {
                        console.log( 'todayTaskFromApiResponse', res, typeof ( res ) );
                        setTodayData( res )
                    }
                } else {
                    console.log( 'todayTaskFromApiResponse1', res, typeof ( res ) );
                }
            } )
            .catch( ( error: any ) => {
                console.log( 'todayTaskFromApi Error ::', error )
            } );
    }

    const weekTaskFromApi = () => {
        getData( constants.getCurrentweekTask )
            .then( ( res: any ) => {
                if ( res && typeof res == 'object' ) {
                    console.log( 'weekTaskFromApi', res );
                    setThisWeekData( res )
                } else {
                    console.log( 'weekTaskFromApi 1', res, typeof ( res ) );
                }
            } )
            .catch( ( error: any ) => {
                console.log( 'todayTaskFromApi Error ::', error )
            } );
    }

    const monthTaskFromApi = () => {
        getData( constants.getCurrentweekTask )
            .then( ( res: any ) => {
                if ( res && typeof res == 'object' ) {
                    console.log( 'monthTaskFromApi', res );
                    setThisMonthData( res )
                } else {
                    console.log( 'monthTaskFromApi 1', res, typeof ( res ) );
                }
            } )
            .catch( ( error: any ) => {
                console.log( 'todayTaskFromApi Error ::', error )
            } );
    }

    const customTaskFromApi = ( fromDate, toDate ) => {
        getData( `route/custom?from=${ fromDate }&to=${ toDate }` )
            .then( ( res: any ) => {
                if ( res && typeof res == 'object' ) {
                    console.log( 'todayTaskFrom custon ApiResponse', res );
                    if ( res.message !== undefined && res.message.toLowerCase() === 'no route assignments found within the specified date range.' ) {
                        setCustomData( 'none' )
                    } else {
                        console.log( 'todayTaskFromApiResponse', res, typeof ( res ) );
                        setCustomData( res )
                    }

                } else {
                    console.log( 'todayTaskFrom custom ApiResponse1', res, typeof ( res ) );
                }
            } )
            .catch( ( error: any ) => {
                console.log( 'todayTask custom FromApi Error ::', error )
            } );
    }

    useEffect( () => {
        if ( toDate.toLocaleLowerCase() !== 'select date' ) {
            customTaskFromApi( fromDate, toDate )
        }
    }, [ toDate ] )

    useEffect( () => {
        todayTaskFromApi();
        weekTaskFromApi();
        monthTaskFromApi()
    }, [] )

    useEffect( () => {
        const reArrangeData = ( incomingDAta: any ) => {
            console.log( 'incomingDAta:::::::::::', incomingDAta )
            incomingDAta.sort( ( a, b ) => new Date( a.assignedDate ) - new Date( b.assignedDate ) );
            const uniqueRoutes = [];
            incomingDAta.forEach( item => {
                const existingItem = uniqueRoutes.find(
                    uniqueItem => uniqueItem.assignedDate === item.assignedDate
                );

                if ( !existingItem ) {
                    uniqueRoutes.push( {
                        assignedDate: item.assignedDate,
                        routes: [ item.route ],
                    } );
                } else {
                    existingItem.routes.push( item.route );
                }
            } );
            // console.log('uniqueRoutes::::::::::::', uniqueRoutes)
            return uniqueRoutes;
        }

        // Log the result
        if ( todayData.length > 0 ) {
            const newTodayData = reArrangeData( todayData );
            // console.log('newTodayData', newTodayData);
            setTodayRouteData( newTodayData );
        }
        if ( thisWeekData.length > 0 ) {
            const newWeekData = reArrangeData( thisWeekData );
            // console.log('newWeekData', newWeekData);
            setThisWeekRouteData( newWeekData )
        }
        if ( thisMonthData.length > 0 ) {
            const newMonthData = reArrangeData( thisMonthData )
            // console.log('newMonthData', newMonthData);
            setThisMonthRouteData( newMonthData );
        }
        if ( customData.length > 0 && ( customData !== undefined && customData !== 'none' ) ) {
            console.log( 'test 1:::::::::::::::::', customData )
            setIsCustomDone( false );
            const customFromToDateData = reArrangeData( customData )
            // console.log('customFromToDateData', customFromToDateData);
            setCustomRouteData( customFromToDateData )
        } if ( customData.length > 0 && ( customData !== undefined && customData === 'none' ) ) {
            console.log( 'test 2:::::::::::::::::', customData );
            setCustomRouteData( [] )
            setIsCustomDone( true );
        }
    }, [ thisWeekData, thisMonthData, customData ] )



    const renderRoute = ( { item } ) => (
        <View>
            <Text style={style.location}>{item?.city?.name} {item?.district?.name}: {item?.pincode?.code}</Text>
        </View>
    );


    const renderCard = ( { item } ) => (
        <View style={style.v1}>
            <Text style={style.t3}>{moment( item.assignedDate ).format( 'DD MMM YYYY' )}</Text>
            <FlatList
                data={item.routes}
                keyExtractor={( route ) => route.someUniqueKey}
                renderItem={renderRoute}
            />
        </View>
    );


    return (

        <View style={{
            ...commonCSS.bodyFAFAFA,
            backgroundColor: Colors.backgroundColorf8,

        }}>
            <HeaderCustom
                title={'Order History'}
                onPressBackArrow={() => navigation.goBack()}
                button={false}
                onPressButton={undefined}
                btnText={''} isSearchAvailable={false} searchKeyword={''} onchangeText={undefined}
            />

            {/* flat list headers */}
            <View style={{ marginTop: hp( 1 ) }}>
                <FlatList
                    data={routeDaySelection}
                    horizontal
                    contentContainerStyle={{ paddingHorizontal: wp( 4 ) }}
                    renderItem={( { item, index } ) => {
                        return (
                            <TouchableOpacity
                                style={[ style.btn, {
                                    backgroundColor: index === selectedIndex ? Colors.lightBrandColor : Colors.backgroundColorf8,
                                    borderBottomWidth: index === selectedIndex ? hp( 0.15 ) : 0,
                                } ]}
                                onPress={() => setSelectedIndex( Number( index ) )}
                            >
                                <Text style={{
                                    color: index === selectedIndex ? Colors.ThemeColorDark : Colors.primartText,
                                    fontFamily: Font.InterBlack,
                                    fontWeight: '500',
                                    fontSize: FontSize.fs14
                                }}>{item.name} </Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>

            <View style={{
                alignContent: 'center',
                justifyContent: 'space-between',
                // backgroundColor: 'red',
                width: wp( 100 ),
                paddingHorizontal: wp( 4 )
            }}>
                {selectedIndex === 3 ?
                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>

                        <TouchableOpacity
                            onPress={() => { [ setIsFromDateSelected( true ), setIsCalendarmodalvisisble( true ) ] }}
                            style={style.box}>
                            <Text style={style.int}>From</Text>

                            <View style={{ ...commonCSS.fdralic }}>
                                <Text style={style.sd}>{fromDate}</Text>
                                <ImageComponent source={Images.rightArrow} height={1.2} width={hp( 1.2 )} mode={'contain'} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { [ setIsFromDateSelected( false ), setIsCalendarmodalvisisble( true ) ] }}
                            style={style.box}>
                            <Text style={style.int}>To</Text>

                            <View style={{ ...commonCSS.fdralic }}>
                                { }
                                <Text style={style.sd}>{toDate}</Text>
                                <ImageComponent source={Images.rightArrow} height={1.2} width={hp( 1.2 )} mode={'contain'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    : <View></View>
                }
            </View>


            <KeyboardAwareScrollView contentContainerStyle={style.main}>



                {/* <View style={style.flist}>
                    <FlatList
                        data={selectedIndex === 0 ? todayRouteData : selectedIndex === 1 ? thisWeekRouteData : selectedIndex === 2 ? thisMonthRouteData : customRouteData}
                        keyExtractor={( item ) => item.assignedDate}
                        renderItem={renderCard}
                    />
                </View> */}


                <View style={{
                    alignItems: 'center',
                    justifyContent:'center'
                    // paddingTop: hp( 14 )
                }}>
                    <ImageComponent source={Images.noTask} height={30} width={wp( 60 )} mode={'contain'} tintColor={undefined} />
                    <Text style={style.t2}>No Orders left</Text>
                    <Text style={{
                        fontFamily: Font.InterBlack,
                        fontWeight: '400',
                        color: Colors.secondaryText94,
                        paddingVertical: hp( 1 ),
                        fontSize: FontSize.fs14
                    }}>{`No Orders Found`}</Text>
                </View>



                <ModalCalendar
                    visible={isCalendarmodalvisisble}
                    onRequestClose={() => { setIsCalendarmodalvisisble( false ); }}
                    onPressOk={() => { setIsCalendarmodalvisisble( false ); }}
                    selectedDate={( val ) => { isFromDateSelected ? setFromDate( val ) : setToDate( val ) }}
                    initialDate={fromDate.toLowerCase() === 'select date' ? '2023-01-01' : fromDate} />
            </KeyboardAwareScrollView>


        </View >
    );
}


const style = StyleSheet.create( {
    main: {
        // height: hp( 80 ),
        // width
        // backgroundColor:'red',
        flex: 1,
        // marginTop: hp( 1.5 ),
        alignItems: 'center',
        justifyContent: 'center',
    },
    v1: {
        ...commonCSS.shadowBox,
        backgroundColor: Colors.white, ...commonCSS.pvh,
        marginTop: hp( 1.5 ),
        borderRadius: hp( 1 ),
    },

    t3: {
        fontFamily: Font.InterBlack,
        fontWeight: '400',
        fontSize: FontSize.fs14,
        color: Colors.primartText,
        paddingBottom: hp( 1 )
    },
    btn: {
        ...commonCSS.alicjc,
        width: wp( 23 ),
        height: hp( 5 ),
        borderBottomColor: Colors.ThemeColorDark
    },
    location: {
        fontFamily: Font.MontserratBlack,
        fontWeight: '700',
        fontSize: FontSize.fs14,
        color: Colors.ThemeColorDark
    },
    flist: {
        flex: 1,
        width: wp( 100 ),
        paddingHorizontal: wp( 4 )
    },
    int: {
        ...commonCSS.smallfw400fs10,
        fontFamily: Font.InterBlack,
        color: Colors.secondaryText94,
        paddingBottom: hp( 1 )
    },
    box: {
        ...commonCSS.box,
        backgroundColor: Colors.splash
    },
    sd: {
        fontFamily: Font.InterBlack,
        fontSize: FontSize.fs14,
        color: Colors.secondaryText94,
        paddingRight: wp( 10 )
    },


} )