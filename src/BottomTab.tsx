

import {StyleSheet, View} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


import DashBoard from "./loggedIn/dashboard/Dashboard";
import ImageComponent from "./component/custom/ImageComponent";
import Task from "./loggedIn/task/Task";
import Lead from "./loggedIn/lead/Lead";
import Account from "./loggedIn/account/Account";
import {Images} from "./assets";
import {Colors} from "./commonCSS/Colors";
import CheckInOut from "./loggedIn/dashboard/CheckInOut";
import Notification from "./loggedIn/dashboard/Notification";
import TaskRoute from "./loggedIn/task/TaskRoute";
import Analytics from "./loggedIn/analytics/Analytics";
import CompleteTaskSelfie from "./loggedIn/task/CompleteTaskSelfie";
import AllLead from "./loggedIn/lead/AllLead";
import AllDeal from "./loggedIn/lead/AllDeal";
import NewLead from "./loggedIn/lead/NewLead";
import BusinessAddress from "./loggedIn/lead/BusinessAddress";
import CreateDeal from "./loggedIn/lead/CreateDeal";
import MyProfile from "./loggedIn/account/myprofile/MyProfile";
import CashInHand from "./loggedIn/account/cashInHand/CashInHand";
import Seminar from "./loggedIn/account/seminar/Seminar";
import Demo from "./loggedIn/account/demo/Demo";
import Offers from "./loggedIn/account/offers/Offers";
import OrginationTree from "./loggedIn/account/ot/OrginationTree";
import Incentive from "./loggedIn/account/Incentive/Incentive";
import Support from "./loggedIn/account/helpSupport/Support";
import Refer from "./loggedIn/account/Refer/Refer";
import HandOverCash from "./loggedIn/account/cashInHand/HandOverCash";
import CreateEvent from "./loggedIn/account/seminar/CreateEvent";
import ClientTickets from "./loggedIn/account/helpSupport/ClientTickets";
import YourConcern from "./loggedIn/account/helpSupport/YourConcern";
import RaiseConcern from "./loggedIn/account/helpSupport/RaiseConcern";
import TicketsDetails from "./loggedIn/account/helpSupport/TicketDetails";
import CarouselDetail from "./loggedIn/dashboard/CarouselDetail";
import SubUser from "./loggedIn/account/subuser/SubUser";
import CreateSubUser from "./loggedIn/account/subuser/CreateSubUser";
import FontSize from "./commonCSS/FontSize";
import NewSubUser from "./loggedIn/account/subuser/NewSubUser";
import Map from "./loggedIn/map/Map";


const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DashBoard"
                component={DashBoard}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Notification"
                component={Notification}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="CheckInOut"
                component={CheckInOut}
                options={{headerShown: false}}
            />
            {/*
            <Stack.Screen
                name="Task"
                component={Task}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TaskRoute"
                component={TaskRoute}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name="CarouselDetail"
                component={CarouselDetail}
                options={{ headerShown: false }}
            /> */}
        </Stack.Navigator>
    )
}
// TaskStack

const TaskStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Task"
                component={Task}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="TaskRoute"
                component={TaskRoute}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="CompleteTaskSelfie"
                component={CompleteTaskSelfie}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="NewLead"
                component={NewLead}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="BusinessAddress"
                component={BusinessAddress}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}
// AnalyticsStack

const AnalyticsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Analytics"
                component={Analytics}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}


// LeadStack

const LeadStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Lead"
                component={Lead}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="AllLead"
                component={AllLead}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="AllDeal"
                component={AllDeal}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="NewLead"
                component={NewLead}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="BusinessAddress"
                component={BusinessAddress}
                options={{headerShown: false}}
            />
            {/* CreateDeal */}

            <Stack.Screen
                name="CreateDeal"
                component={CreateDeal}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}


// AccountStack
const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Account"
                component={Account}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MyProfile"
                component={MyProfile}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SubUsers"
                component={SubUser}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="CreateSubUser"
                component={CreateSubUser}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="NewSubUser"
                component={NewSubUser}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Map"
                component={Map}
                options={{headerShown: false}}
            />



            {/*  */}
            {/*  */}
            {/* <Stack.Screen
                name="CashInHand"
                component={CashInHand}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HandOverCash"
                component={HandOverCash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Seminar"
                component={Seminar}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CreateEvent"
                component={CreateEvent}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Demo"
                component={Demo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Offers"
                component={Offers}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OrginationTree"
                component={OrginationTree}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Incentive"
                component={Incentive}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Support"
                component={Support}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="RaiseConcern"
                component={RaiseConcern}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ClientTickets"
                component={ClientTickets}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="YourConcern"
                component={YourConcern}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="TicketsDetails"
                component={TicketsDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Refer"
                component={Refer}
                options={{ headerShown: false }}
            /> */}
        </Stack.Navigator>
    )
}


const Coachmarkscreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.white,
                    height: hp(6.5),
                    borderTopLeftRadius: hp(2),
                    borderTopRightRadius: hp(2),
                    paddingBottom: hp(0.5),
                    overflow: 'hidden',
                },
                tabBarLabelStyle: {
                    color: Colors.mainText
                },
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: Colors.ThemeColorDark,
                tabBarInactiveTintColor: Colors.inactiveTintColor,
            }}

        >
            <Tab.Screen
                name="DashboardScreen"
                component={HomeStack}
                options={({route}) => ({
                    // const tabStyle = isFocused ? styles.focusedTab : styles.inactiveTab;
                    // tabBarStyle: ((route) => {
                    //   const routeName = getFocusedRouteNameFromRoute(route) ?? "";
                    //   if (routeName === "DashboardScreen" || routeName === "") {
                    //     return { display: "flex" };
                    //   } else {
                    //     return { display: "none" };
                    //   }
                    //   return;
                    // })(route),
                    tabBarLabel: 'Home',
                    headerShown: false,
                    title: "",
                    tabBarIcon: ({focused}) => (
                        <View style={[styles.customTab, {
                            borderTopWidth: focused ? hp(0.2) : 0,
                            borderTopColor: focused ? Colors.ThemeColorDark : Colors.inactiveTintColor
                        }]}>
                            <ImageComponent source={Images.home} height={3} width={hp(3)} mode={"contain"} tintColor={!focused ? '#7E8894' : Colors.ThemeColorDark} />
                        </View>
                    ),
                })}
            />

            <Tab.Screen
                name="TaskStack"
                component={TaskStack}
                options={{
                    tabBarLabel: 'Orders',
                    headerShown: false,
                    title: "",
                    tabBarIcon: ({focused}) => (
                        <View style={[styles.customTab, {
                            borderTopWidth: focused ? hp(0.2) : 0,
                            borderTopColor: focused ? Colors.ThemeColorDark : Colors.inactiveTintColor
                        }]}>
                            <ImageComponent
                                tintColor={!focused ? '#7E8894' : Colors.ThemeColorDark}
                                source={Images.task} height={3} width={hp(3)} mode={"contain"} />
                        </View>
                    ),
                }}
            />


            {/* <Tab.Screen
                name="AnalyticsStack"
                component={AnalyticsStack}
                options={( { route } ) => ( {
                    tabBarLabel: 'Analytics',
                    headerShown: false,
                    title: "",
                    tabBarIcon: ( { focused } ) => (
                        <View style={[ styles.customTab, {
                            borderTopWidth: focused ? hp( 0.2 ) : 0,
                            borderTopColor: focused ? Colors.ThemeColorDark : Colors.inactiveTintColor
                        } ]}>
                            <ImageComponent source={Images.analytics} height={3} width={hp( 3 )} mode={"contain"} />
                        </View>
                    ),
                } )}
            /> */}


            <Tab.Screen
                name="LeadStack"
                component={LeadStack}
                options={({route}) => ({
                    tabBarLabel: 'Medicine',
                    headerShown: false,
                    title: "",
                    tabBarIcon: ({focused}) => (
                        <View style={[styles.customTab, {
                            borderTopWidth: focused ? hp(0.2) : 0,
                            borderTopColor: focused ? Colors.ThemeColorDark : Colors.inactiveTintColor
                        }]}>
                            <ImageComponent
                                tintColor={!focused ? '#7E8894' : Colors.ThemeColorDark}
                                source={Images.lead} height={3} width={hp(3)} mode={"contain"} />
                        </View>
                    ),
                })}
            />

            <Tab.Screen
                name="AccountStack"
                component={AccountStack}
                options={({route}) => ({
                    tabBarLabel: 'Account',
                    // tabBarLabelStyle={{}}
                    headerShown: false,
                    title: "",
                    tabBarIcon: ({focused}) => (
                        <View style={[styles.customTab, {
                            borderTopWidth: focused ? hp(0.2) : 0,
                            borderTopColor: focused ? Colors.ThemeColorDark : Colors.inactiveTintColor
                        }]}>
                            <ImageComponent
                                tintColor={!focused ? '#7E8894' : Colors.ThemeColorDark}
                                source={Images.account} height={3} width={hp(3)} mode={"contain"} />
                        </View>
                    ),
                })}
            />


        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    customTab: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: hp(0),
        height: hp(4.5),
        width: hp(4.5),
        paddingTop: hp(1),
        paddingBottom: hp(0.5),
    }

})


export default Coachmarkscreen;
