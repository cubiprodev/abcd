import React from "react";
import { Alert, View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import {
// wp as wp,
// hp as hp,
// } from "react-native-responsive-screen";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Colors } from "./commonCSS/Colors";
import CarouselDetail from './loggedIn/dashboard/CarouselDetail';
import BottomTab from "./BottomTab";
import { commonCSS, hp, wp } from "./commonCSS/GlobalCss";
import AsyncStorage from "@react-native-async-storage/async-storage";
import constants from "./services/constants";
import { CommonActions } from "@react-navigation/native";
import ImageComponent from "./component/custom/ImageComponent";
import FontSize from "./commonCSS/FontSize";
import MyProfile from "./loggedIn/account/myprofile/MyProfile";
import UserLocation from "./loggedIn/userLocation/UserLocation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Map from "./loggedIn/map/Map";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// drawer stack
const UserLocationStack = ({ navigation }: { navigation: any }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserLocation"
        component={UserLocation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Map"
        component={Map}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  )
}


const LoggedIn = ({ navigation }: { navigation: any }) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <Feed2 {...props} />}
      initialRouteName="BottomTab"
      screenOptions={{
        swipeEdgeWidth: 0,
        drawerStyle: {
          marginTop: hp(4),
          height: hp(100),
          overflow: 'hidden',
          borderRadius: hp(3),
          backgroundColor: '#E6EEFA',
          width: wp(80),
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen
        style={{ height: 0 }}
        name="Home"
        component={BottomTab}
      />
      <Drawer.Screen
        name="User Location"
        component={UserLocationStack}
      />
    </Drawer.Navigator>
  );
};





const Feed2 = (props: any) => {
  const logoutUser = () => {
    Alert.alert("Logout", "Are you sure want to logout?", [
      {
        text: "No",
        onPress: () => { },
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => confirmLogout(),
        style: "cancel",
      },
    ]);
  };

  const confirmLogout = () => {

  }




  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: Colors.backgroundColorf8
    //   }}
    // >

    //   <View style={{ width: wp( 100 ), flex: 1, backgroundColor: Colors.white, justifyContent: 'space-between', height: hp( 70 ) }}>
    //     <DrawerContentScrollView {...props}>
    //       <DrawerItemList {...props} />
    //     </DrawerContentScrollView>

    //     <TouchableOpacity
    //       style={{ height: hp( 30 ), paddingHorizontal: wp( 4 ) }}
    //       onPress={() => { logoutUser() }}
    //     >
    //       <Text style={{
    //         ...commonCSS.headingIB60014,
    //       }}>LogOut</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{
        marginTop: hp(1.5),
        marginBottom: hp(2)
      }}>


        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Myprofile');
          }}
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            marginLeft: wp(5),
            marginVertical: hp(1.5),
            marginTop: hp(3)
          }}>
          {/* <Imag
            source={{ uri: profile?.avatar }}
            resizeMode={'cover'}
            style={{
              height: hp( 7 ),
              width: hp( 7 ),
              borderRadius: hp( 3.5 )
            }}
          /> */}
          <View style={{
            height: hp(8),
            width: hp(8),
            borderRadius: hp(5),
            overflow: 'hidden'
          }}>
            <ImageComponent source={require('./assets/selfiePerson.png')} height={8} width={hp(8)} mode={"cover"} tintColor={undefined} />
          </View>
          <View
            style={{
              width: wp(52),
              flexDirection: 'column',
              marginLeft: wp(5),
              // backgroundColor: 'red'
            }}>
            <Text
              numberOfLines={1}
              ellipsizeMode='tail'
              style={{
                color: '#000',
                fontSize: FontSize.fs18,
                fontFamily: 'AvenirHeavy',
              }}>
              {/* {profile?.name} */}
              User Name
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: FontSize.fs11,
                fontWeight: '400',
                fontFamily: 'Actor-Regular',
                textAlign: 'left',
              }}>
              Verified Profile
            </Text>
          </View>
        </TouchableOpacity>

        {/* cross icon */}
        <TouchableOpacity
          onPress={() => props.navigation.closeDrawer()}
          style={{
            position: 'absolute',
            top: hp(1),
            right: wp(4),
          }}>
          {/* <ImageComp
            source={require( '../image/cut.png' )}
            height={2.5}
            width={hp( 2.5 )}
            mode={'contain'}
            style={{ tintColor: 'black' }}
          /> */}
          <ImageComponent source={require('./assets/crossblack.png')} height={2} width={hp(2)} mode={"contain"} tintColor={'#0C72C6'} />
        </TouchableOpacity>
      </SafeAreaView>



      {/* line */}
      <View
        style={{
          borderBottomColor: "#D4D6DB",
          borderBottomWidth: wp("0.2"),
          marginHorizontal: hp(3),
        }}
      />
      {/* drawer item */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <TouchableOpacity
          style={{
            marginTop: hp(3),
            height: hp(5),
            justifyContent: 'center'
          }}
          onPress={logoutUser}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>

  )
}

export default LoggedIn;


const styles = StyleSheet.create({
  logoutText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: hp(2),
    marginLeft: wp('5'),
  },
});