import 'react-native-gesture-handler';
import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';

// screens
import Splash from './src/splash/Splash';
import Authentication from './src/Auth/Authentication';
import configureStore from './src/store';
import LoggedIn from './src/LoggedIn';
import { Colors } from './src/commonCSS/Colors';


// config
import { enableLatestRenderer } from 'react-native-maps';


const Stack = createNativeStackNavigator();
const store = configureStore();

function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#000000'}
        // barStyle={'dark-content'}
        hidden={false} />
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Authentication"
          component={Authentication}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoggedIn"
          component={LoggedIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default function MainApp() {
  enableLatestRenderer();
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <App />
        </GestureHandlerRootView>
      </SafeAreaView>
    </Provider>
  )
}