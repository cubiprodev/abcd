import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, FlatList } from 'react-native';
import { commonCSS } from '../../commonCSS/GlobalCss';
import HeaderCustom from '../../component/HeaderCustom';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../commonCSS/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImageComponent from '../../component/custom/ImageComponent';
import { Images } from '../../assets';
import TextComponent from '../../component/custom/TextComponent';
import FontSize from '../../commonCSS/FontSize';
import Font from '../../commonCSS/Font';
import TaskDetail from './TaskDetail';
import { getData } from '../../services/mobileApi';
import constants from '../../services/constants';
import { useIsFocused } from '@react-navigation/native';
import Search from '../../component/custom/Search';

export default function Task ( { navigation }: { navigation: any } ) {
    const isFocused = useIsFocused();
    const [ searchKeyword, setSeacrchKeyword ] = useState < string > ( '' );
    const [ routeData, setRouteData ] = useState( [] );
    const [ yourTask, setYourTask ] = useState( [] );
    const [ taskKey, setTaskKey ] = useState( [] )
    const [ arrangedYourTask, setArrangedYourTask ] = useState( [] );

    const todaysRouteFromApi = () => {
        getData( constants.getTodaysRoute )
            .then( ( res: any ) => {
                if ( res && typeof res == 'object' ) {
                    // console.log('todaysRouteFromApi', res);
                    setRouteData( res )
                } else {
                    // console.log('todaysRouteFromApi', res, typeof (res));
                }
            } )
            .catch( ( error: any ) => {
                console.log( 'todayTaskFromApi Error ::', error )
            } );
    }

    const getTodaysTaskFromApi = () => {
        // getData(constants.yourTask)
        //     .then((res: any) => {
        //         if (res && typeof res == 'object') {
        //             console.log('getTodaysTaskFromApi::::', res);
        //             var newDataArray = [];
        //             res.forEach(function (task) {
        //                 var leadId = task.lead.id;
        //                 var name = task.name;
        //                 var description = task.description;
        //                 var status = task.status;
        //                 // Check if an entry with the leadId already exists in newDataArray
        //                 var existingEntryIndex = newDataArray.findIndex(function (entry) {
        //                     return entry.leadId === leadId;
        //                 });
        //                 // If the entry doesn't exist, create a new one
        //                 if (existingEntryIndex === -1) {
        //                     var newEntry = {
        //                         leadId: leadId,
        //                         leadData: task.lead,
        //                         tasks: []
        //                     };
        //                     newDataArray.push(newEntry);
        //                     existingEntryIndex = newDataArray.length - 1; // Set the index to the newly added entry
        //                 }
        //                 // Extract and push relevant task information to the tasks array
        //                 var taskInfo = {
        //                     id: task.id,
        //                     name: task.name,
        //                     description: task.description,
        //                     status: task.status,
        //                     rescheduleReason: task.rescheduleReason
        //                 };
        //                 newDataArray[existingEntryIndex].tasks.push(taskInfo);
        //             });
        //             console.log('leadIdArrays,', newDataArray,)
        //             setYourTask(newDataArray)
        //         } else {
        //             console.log('getTodaysTaskFromApi::::1', res, typeof (res));
        //         }
        //     })
        //     .catch((error: any) => {
        //         console.log('getTodaysTaskFromApi Error ::', error)
        //     });
    }

    useEffect( () => {
        todaysRouteFromApi();
        getTodaysTaskFromApi();
    }, [ isFocused ] )

    return (
        <View style={{ ...commonCSS.bodyFAFAFA }}>
            <HeaderCustom
                title={'Orders'}
                onPressBackArrow={() => navigation.goBack()}
                button={true}
                // onPressButton={() => { navigation.navigate( 'NewOrder' ) }}
                onPressButton={() => { navigation.navigate( 'NewLead' ) }}
                btnText={'New Order'}
                isSearchAvailable={false}
                searchKeyword={''}
                onchangeText={undefined} />

            <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, ...commonCSS.pvh }}>

                <ScrollView>

                    <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between', marginTop: hp( 1) }}>
                        <Text style={style.h1}>Active Orders</Text>
                        <TouchableOpacity
                            // onPress={() => { navigation.navigate( 'TaskRoute', { 'todayData': routeData } ) }}
                            onPress={() => { navigation.navigate( 'TaskRoute', { 'todayData': routeData } ) }}
                            style={{ ...commonCSS.fdralic, }}>
                            <Text style={style.t1}>Show more</Text>
                            <ImageComponent source={Images.forwardArrowPcolor} height={1.2} width={hp( 2 )} mode={'contain'} />
                        </TouchableOpacity>
                    </View>



                    {/* <View style={style.v1}>
                        {routeData.length > 0 ?
                            <>
                                <Text style={style.t3}>Today</Text>
                                <FlatList
                                    data={routeData}
                                    scrollEnabled={false}
                                    renderItem={( { item, index } ) => (
                                        <View style={{
                                            marginTop: hp( 1 ),
                                        }}>
                                            <Text style={style.location}>{item?.route?.city?.name} {item?.route?.district?.name}: {item?.route?.pincode?.code}</Text>
                                        </View>
                                    )}
                                />
                            </>
                            :
                            <Text style={style.t3}>No route assigned today</Text>
                        }
                    </View> */}


                    {/* <Text style={style.h2}>Your Task</Text> */}

                    {/* <View style={{
                        paddingVertical: hp( 1.5 )
                    }}>
                        <Search
                            value={searchKeyword}
                            placeHolder={'Search Lead'}
                            placeHolderColor={Colors.secondaryText94}
                            maxLength={20}
                            onChangeText={( val: string ) => setSeacrchKeyword( val )}
                        />
                    </View> */}

                    {yourTask.length > 0 ?
                        <FlatList
                            data={yourTask}
                            keyExtractor={item => item.leadId}
                            renderItem={( item ) => {
                                return (
                                    <TaskDetail
                                        data={item}
                                        navigation={navigation}
                                        onPressRescheduleTask={() => { }}
                                        onPressRescheduleVisit={() => { }}
                                    />
                                )
                            }}
                        />
                        :
                        <View style={style.v3}>
                            <ImageComponent source={Images.noTask} height={30} width={wp( 60 )} mode={'contain'} />
                            <Text style={style.t2}>No Orders left</Text>
                            {/* <Text style={{
                                fontFamily: Font.InterBlack,
                                fontWeight: '400',
                                color: Colors.secondaryText94,
                                paddingVertical: hp( 1 ),
                                fontSize: FontSize.fs14
                            }}>{`You've done a great job`}</Text> */}
                        </View>
                    }
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}

const style = StyleSheet.create( {
    t1: { ...commonCSS.subTextIB40012secText, color: Colors.primartText, bottom: hp( 0.1 ) },
    t2: {
        marginTop: hp( 3 ),
        fontFamily: Font.MontserratBlack,
        fontWeight: '700',
        fontSize: FontSize.fs22,
        color: '#191D21'
    },
    h1: { ...commonCSS.titleMB70016, color: Colors.mainText },
    v1: {
        ...commonCSS.pvh,
        ...commonCSS.shadowBox,
        backgroundColor: Colors.white,
        marginTop: hp( 1.5 ),
        borderRadius: hp( 1 ),
    },
    v3: {
        alignItems: 'center',
        paddingTop: hp( 14 )
    },
    t3: {
        fontFamily: Font.InterBlack,
        fontWeight: '400',
        fontSize: FontSize.fs14,
        color: Colors.primartText
    },
    h2: { ...commonCSS.titleMB70016, color: Colors.mainText, paddingTop: hp( 1.5 ) },
    location: {
        fontFamily: Font.MontserratBlack,
        fontWeight: '700',
        fontSize: FontSize.fs14,
        color: Colors.ThemeColorDark
    }
} )
