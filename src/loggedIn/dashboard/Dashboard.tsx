import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DashboardHeader from '../../component/DashboardHeader';
import { useIsFocused } from '@react-navigation/native';
import TextComponent from '../../component/custom/TextComponent';
import { Colors } from '../../commonCSS/Colors';
import Font from '../../commonCSS/Font';
import FontSize from '../../commonCSS/FontSize';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ImageComponent from '../../component/custom/ImageComponent';
import { Images, dummyImages } from '../../assets';
import Carousel from 'react-native-reanimated-carousel';
import DotPagination from 'react-native-dots-pagination';
import { Announcement, EmployeeOfTheMonth } from '../../data/Data';
import { commonCSS } from '../../commonCSS/GlobalCss';
import EmpOfTheWeek from '../../component/EmpOfTheWeek';
import CheckIn from '../../component/CheckIn';
import TaskElement from '../../component/TaskElement';
import TargetElement from '../../component/TargetElement';
import SeminarsElement from '../../component/SeminarsElement';
import AnnouncementElement from '../../component/AnnouncementElement';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../component/custom/Loader';
import { getData, postDataWithToken } from '../../services/mobileApi';
import constants from '../../services/constants';
import { getCurrentLocalDate, matchDateFormats, removeDataFromLocalStorage, storeDataInLocalStorage } from '../../services/commonFunc';

const data = [
  {
    image: dummyImages.dummyOne,
    id: 1,
    heading: 'HeadingOne',
  },
  {
    image: dummyImages.dummyOne,
    id: 2,
    heading: 'HeadingTwo'
  },
  {
    image: dummyImages.dummyOne,
    id: 3,
    heading: 'HeadingThree'
  },
  {
    image: dummyImages.dummyOne,
    id: 4,
    heading: 'HeadingFour'
  }
]

export default function DashBoard ( { navigation }: { navigation: any } ) {
  const isFocused = useIsFocused();

  // states zone
  const [ timeSheet, setTimeSheet ] = useState( {
    'day': '-',
    'ftype': '-',
    'fhCin': '-',
    'fhCout': '-',

    'stype': '-',
    'shCin': '-',
    'shCout': '-',
  } );

  const [ userName, setUserName ] = useState < string > ( 'Sonal' );
  const [ activeDotIndex, setActiveDotIndex ] = useState < number > ( 0 );
  const [ activeDotIndexTwo, setActiveDotIndexTwo ] = useState < number > ( 0 );

  // attendence
  const [ isServerApiIsNew, setIsServerApiIsNew ] = useState < boolean > ( false );
  const [ isUserAlreadyCheckedIn, setIsUserAlreadyCheckedIn ] = useState( false );
  const [ isAttendenceDone, setIsAttendenceDone ] = useState( false );
  const [ savedAttendence, setSavedAttendence ] = useState( [] );

  // loader
  const [ loading, setLoading ] = useState( false );

  // function zone :D
  // getting tiemsheet and altering the chekin/ot option here
  const getTimeSheetFromLocalStorage = async () => {
    console.log( 'hello 1' );
    const todayDate = getCurrentLocalDate();
    setLoading( true );
    setIsUserAlreadyCheckedIn( false );
    setIsAttendenceDone( false );
    try {
      console.log( 'hello 2' );
      const value = await AsyncStorage.getItem( 'timesheet' );
      console.log( 'local storage timeSheet::::::::', value )
      if ( value !== null ) {
        console.log( 'hello 3' );
        const data = JSON.parse( value );
        const isSameDate = matchDateFormats( String( data?.day ).trim().toLowerCase(), String( todayDate ).trim().toLowerCase() )
        console.log( 'hello 4' );
        if ( isSameDate === true ) {
          console.log( 'hello 5' );

          // Check if user has selected the first half
          if ( data.ftype !== '-' && data.fhCin !== '-' && ( data.fhCout !== '-' || data.fhCout === null ) ) {
            console.log( 'first half is done' )
            // User has checked in and out for the first half
            setIsUserAlreadyCheckedIn( false );
            setIsAttendenceDone( false );
            if ( data.fhCout === null && data.stype === '-' ) {
              console.log( 'checkout is not available for the first half' );
              setIsUserAlreadyCheckedIn( true );
              setLoading( false )
              return
            }
            console.log( 'first half is done         1' )
          }

          // Check if user has selected the second half
          if ( data.stype !== '-' && data.shCin !== '-' && ( data.shCout !== '-' || data.shCout === null ) ) {
            console.log( 'hello 6, second half is done' );
            // User has checked in and out for the second half
            setIsUserAlreadyCheckedIn( false );
            if ( data.shCout === null || data.shCout === '-' ) {
              console.log( 'hello 6, second half is not done a' );
              setIsUserAlreadyCheckedIn( true );
              setIsAttendenceDone( false );
              setLoading( false )
              return
            } else if ( data.shCout !== '-' ) {
              console.log( 'hello 6, second half is done b' );
              setIsAttendenceDone( true );
            }
          }

          if ( data.stype !== '-' && data.shCin !== '-' && data.shCout === '-' ) {
            console.log( 'hello 6, second half is not done 1' );
            setIsUserAlreadyCheckedIn( true );
          }

          // Check if user has selected the whole day
          if ( data.ftype !== '-' && data.stype !== '-' && data.fhCin !== '-' && ( data.shCout !== '-' || data.shCout === null ) ) {
            // User has checked in and out for the whole day
            console.log( 'hello 7, User has checked in and out for the whole day' );
            setIsAttendenceDone( true );
            if ( data.shCout === null || data.shCout === '-' ) {
              setIsUserAlreadyCheckedIn( true );
              setIsAttendenceDone( false );
              setLoading( false );
              return
            }
          }

          else {
            // add exceptional condition here:-
            console.log( 'hello 8, user havent checked in and out today/yet', data );
            if ( data.ftype !== '-' && data.stype !== '-' && data.fhCin !== '-' && data.shCout === '-' ) {
              console.log( 'hello 8, user havent checked in and out today/yet 1' );
              setIsAttendenceDone( false );
              setIsUserAlreadyCheckedIn( true );
            }

            if ( data.ftype !== '-' && data.fhCin !== '-' && data.fhCout === '-' ) {
              console.log( 'hello 8, user havent checked in and out today/yet 2' );
              setIsAttendenceDone( false );
              setIsUserAlreadyCheckedIn( true );
            }

            if ( data.ftype !== '-' && data.shCin === '-' && data.fhCout !== '-' ) {
              console.log( 'hello 8, user havent checked in and out today/yet 3' );
              setIsAttendenceDone( false );
              setIsUserAlreadyCheckedIn( false );
            }

            if ( data.stype !== '-' && data.shCout === '-' ) {
              console.log( 'hello 8, user havent checked in and out today/yet 4' );
              setIsUserAlreadyCheckedIn( true );
            } else if ( data.stype !== '-' && data.shCout !== '-' ) {
              console.log( 'hello 8, user havent checked in and out today/yet 5' );
              setIsUserAlreadyCheckedIn( true );
              setIsAttendenceDone( true )
              if ( data.shCout === null ) {
                console.log( 'hello 8, user havent checked in and out today/yet 6' );
                setLoading( false )
                setIsUserAlreadyCheckedIn( true );
                setIsAttendenceDone( false );
                // return
              }
            }

          }
          setLoading( false );
        } else {
          console.log( 'timesheet is saved but date is not same.....!!!!!!!!!!!\n removing the saved timesheet form the local storage \n calling the api to check once if the server timsheet is todays' );
          removeDataFromLocalStorage( 'timesheet' );
          if ( isServerApiIsNew === false ) {
            getCheckinRecordsFromApi();
          }
          setLoading( false );
          return
        }
      } else {
        console.log( 'no timesheet is saved yet!!!!!!!!!!! calling the api to check' )
        getCheckinRecordsFromApi();
        setLoading( false );
        return
      }
    } catch ( e ) {
      // error reading value
      setLoading( false )
      console.log( 'rrror:', e )
    }
  };





  const getCheckinRecordsFromApi = async () => {
    const todayDate = getCurrentLocalDate();

    getData( constants.getAttendance )
      .then( ( res: any ) => {
        const previousRecord = res?.records
        console.log( 'timesheet fromt the api:::::::', previousRecord, typeof ( previousRecord ), previousRecord.length );

        if ( previousRecord.length !== 0 ) {
          if ( previousRecord && previousRecord[ 0 ]?.date !== todayDate ) {
            console.log( "saved timesheet date on device is not having todays date so, clearing the timesheet." );
            removeDataFromLocalStorage( 'timesheet' );
            setLoading( false );
            return
          } else if ( previousRecord && previousRecord[ 0 ]?.date === todayDate ) {
            console.log( "saving timesheet as api data date is of todays date." );
            setSavedAttendence( previousRecord );
          }
        } else {
          console.log( 'no timesheet found from the api' );
          removeDataFromLocalStorage( 'timesheet' );
          setLoading( false );
          setIsAttendenceDone( false );
          setIsUserAlreadyCheckedIn( false );
          return
        }
      } )
      .catch( ( error: any ) => {
        console.log( 'get Checkin Records ::', error )
      } );

  }

  // call this to implement attendence status once the timesheet is saved in the local storage
  useEffect( () => {
    getCheckinRecordsFromApi()
  }, [ isFocused ] )

  const updateValueInTimesheet = ( val: any, timesheet: any ) => {
    console.log( 'updating the value in the timesheet:::::::::', val, '\n previous timesheet:::::::::', timesheet )
    if ( val.hasOwnProperty( 'halfOfDay' ) ) {

      if ( val?.halfOfDay.toLowerCase() === "am" ) {
        setTimeSheet( ( timeSheet ) => ( {
          ...timeSheet,
          'day': val?.date,
          'fhCin': val?.checkInTime,
          'fhCout': val?.checkOutTime,
          'ftype': val?.visitType
        } ) );

      }

      else if ( val?.halfOfDay.toLowerCase() === "pm" ) {
        setTimeSheet( ( timeSheet ) => ( {
          ...timeSheet,
          'day': val?.date,
          'shCin': val?.checkInTime,
          'shCout': val?.checkOutTime,
          'stype': val?.visitType
        } ) );

      }

      else if ( val?.halfOfDay.toLowerCase() === "full_day" ) {
        setTimeSheet( ( timeSheet ) => ( {
          ...timeSheet,
          'day': val?.date,
          'fhCin': val?.checkInTime,
          'shCout': val?.checkOutTime,
          'ftype': val?.visitType,
          'stype': val?.visitType,
        } ) );

      }

      console.log( 'updated time sheet after loop:::::::::', timeSheet )
    }
  }

  useEffect( () => {
    console.log( 'saved Attendence after calling api:::::::::::::::::::::', savedAttendence );

    if ( savedAttendence.length === 1 ) {
      console.log( 'attendence api data length is one' )
      const firstRecord = savedAttendence[ 0 ];
      updateValueInTimesheet( firstRecord, timeSheet )
    }
    if ( savedAttendence.length === 2 ) {
      console.log( 'attendence api data length is two' )
      const firstRecord = savedAttendence[ 0 ];
      const secondRecord = savedAttendence[ 1 ];
      updateValueInTimesheet( firstRecord, timeSheet );
      updateValueInTimesheet( secondRecord, timeSheet );
    }
    else {
      console.log( 'no record found in api, attendence api data length is null []' );
    }
  }, [ savedAttendence ] )


  useEffect( () => {

    const todayDate = getCurrentLocalDate();
    const isSameDate = matchDateFormats( String( timeSheet?.day ).trim().toLowerCase(), String( todayDate ).trim().toLowerCase() )

    if ( isSameDate === true ) {
      console.log( 'saving this timesheet to local storage from the api data:::::::::', timeSheet )
      storeDataInLocalStorage( 'timesheet', timeSheet );
      // calling the below function so to revive attendence status
      getTimeSheetFromLocalStorage();
    }
  }, [ timeSheet ] )




  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
      <DashboardHeader
        onPressDrawer={() => { navigation.openDrawer() }}
        onPressNotification={() => { navigation.navigate( 'Notification' ) }}
        count={'4'}
      />


      <KeyboardAwareScrollView
        nestedScrollEnabled
      // contentContainerStyle={{ backgroundColor: Colors.splash }}
      >

        {/* userZone */}
        <View style={{ paddingHorizontal: wp( 4 ) }}>
          <TextComponent
            txtLabel={`Hi ${ userName }!`} fontColor={Colors.mainText} fontFamily={Font.MontserratBlack} fWeight={'700'}
            fSize={FontSize.fs16} textAlign={''} marginTop={1.5} fontLineHeight={''} />

          <CheckIn
            isUserAlreadyCheckedIn={isUserAlreadyCheckedIn}
            onPress={() => {
              navigation.navigate( 'CheckInOut',
                { 'isUserAlreadyCheckedIn': isUserAlreadyCheckedIn, 'isAttendenceDone': isAttendenceDone } );
            }}
            isAttendenceDone={isAttendenceDone}
          />
        </View>


        {/* carousel */}
        {/* <View style={{ marginTop: hp(3), }}>
          <Carousel
            loop
            width={wp(100)}
            height={hp(21)}
            autoPlay={true}
            data={data}
            onProgressChange={(_, absoluteProgress) => {
              setActiveDotIndex(Math.round(absoluteProgress));
            }}
            scrollAnimationDuration={1700}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('CarouselDetail', { key: item })}
                key={index}
                style={styles.carousel}
              >
                <ImageComponent source={item.image} height={20} width={wp(92)} mode={'stretch'} />
              </TouchableOpacity>
            )}
          />

          <DotPagination
            activeColor={Colors.ThemeColorDark}
            inactiveColor={Colors.inactiveDotColor}
            length={data.length}
            active={activeDotIndex}
          />
        </View> */}

        {/* Employee Of the week */}
        {/* <View style={{
          marginTop: hp(1.5),
        }}>
          <Carousel
            loop
            width={wp(100)}
            height={hp(15)}
            autoPlay={true}
            data={EmployeeOfTheMonth}
            onProgressChange={(_, absoluteProgress) => {
              setActiveDotIndexTwo(Math.round(absoluteProgress));
            }}
            scrollAnimationDuration={1000}
            renderItem={({ item, index }) => (
              <EmpOfTheWeek props={{
                name: item.name,
                designation: item.designation
              }}
              />
            )}
          />

          <DotPagination
            activeColor={Colors.ThemeColorDark}
            inactiveColor={Colors.inactiveDotColor}
            length={EmployeeOfTheMonth.length}
            active={activeDotIndexTwo}
          />
        </View> */}

        {/* Seminars */}
        {/* <View style={styles.announcement}>
          <Text style={{ ...commonCSS.titleMB70016, color: Colors.C464646 }}>Seminars</Text>
          <FlatList
            data={Announcement}
            // keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View key={index} style={{ marginTop: hp(1) }}>
                <SeminarsElement
                  label={item.label}
                  time={item.time}
                  description={item.description}
                  date={item.date}
                  Attendees={'10'}
                />
              </View>
            )}
          />
        </View> */}

        {/* Announcement */}
        {/* <View style={styles.announcement}>
          <Text style={{ ...commonCSS.titleMB70016, color: Colors.C464646 }}>Announcement</Text>
          <FlatList
            data={Announcement}
            renderItem={({ item, index }) => (
              <View key={index} style={{ marginTop: hp(1) }}>
                <AnnouncementElement
                  title={'Lorem ipsum'}
                  date={'Jan 27, 2022'}
                  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus sit felis tortor purus dolor sit amet, cons.'} />
              </View>
            )}
          />
        </View> */}

        {/* todays task */}
        {/* <View style={styles.announcement}>
          <Text style={{ ...commonCSS.titleMB70016, color: Colors.C464646 }}>Today’s Tasks</Text>
          <TaskElement completedProgress={4} totalTaskCount={8} onPressArrow={() => { navigation.navigate('Task') }} />
        </View> */}

        {/* your Target */}
        {/* <View style={styles.announcement}>
          <View style={{ ...commonCSS.fdralic, justifyContent: 'space-between' }}>
            <Text style={{ ...commonCSS.titleMB70016, color: Colors.C464646 }}>Your Target</Text>
            <TouchableOpacity
              style={{ height: hp(3), width: wp(3), ...commonCSS.alicjc }}
              onPress={() => { }}>
              <ImageComponent source={Images.forwardArrow} height={2} width={hp(2)} mode={'contain'} />
            </TouchableOpacity>
          </View>

          <TargetElement productName={'Kalpavriksha App'} revenue={'12,000'} achivedRevenue={'3000'} daysLeft={2} />
        </View> */}


      </KeyboardAwareScrollView>

      <Loader visible={loading} />
    </View >

  );
}

const styles = StyleSheet.create( {
  carousel: {
    borderRadius: hp( 2 ),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp( 92 ),
    overflow: 'hidden',
    marginHorizontal: wp( 4 ),
  },
  announcement: {
    ...commonCSS.defaultPadding,
    marginTop: hp( 1.5 ),
    backgroundColor: Colors.white,
    paddingVertical: hp( 1.5 ),
    paddingHorizontal: wp( 4 ),
  },


} )