/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

import { iOSColors, systemWeights} from 'react-native-typography'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Note - You have Also added react-native sound library (Learn & implement)

import FirstPage from './src/Screens/FirstPage';
import SecondPage from './src/Screens/SecondPage';
import ThirdPage from './src/Screens/ThirdPage';
import FourthPage from './src/Screens/FourthPage';

import Splash from './src/Screens/Splash'; // Verify & Implement it later


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderStyleColor = iOSColors.purple;
const HeaderTintColor = iOSColors.white;
const HeaderFontWeight = systemWeights.bold;

const NavigationDrawerStructure = (props)=> {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        <Image
          source={require('/Users/codalyze/Nilesh-Native/ReactNavigation/src/Assets/Image-Source-PlusPNG.com.png')}
          style={{ width: 25, height: 25, marginLeft: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
  <Stack.Navigator initialRouteName="FirstPage">
    <Stack.Screen
      name="FirstPage"
      component={FirstPage}
      options={{
        title: 'Random Color Picker',
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: HeaderStyleColor,
        },
        headerTintColor: HeaderTintColor,
        headerTitleStyle: {
          ...HeaderFontWeight,
        },
      }}
    />
  </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: HeaderStyleColor,
        },
        headerTintColor: HeaderTintColor,
        headerTitleStyle: {
          ...HeaderFontWeight,
        }
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Slack Navigation',
        }}/>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Settings',
        }}/>
    </Stack.Navigator>
  );
}

function FourthScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="FourthPage"
      screenOptions={{
        headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: HeaderStyleColor,
        },
        headerTintColor: HeaderTintColor,
        headerTitleStyle: {
          ...HeaderFontWeight,
        }
      }}>
        <Stack.Screen
        name="FourthPage"
        component={FourthPage}
        options={{
          title: 'Infinite Scrolling',
        }}/>
    </Stack.Navigator>
  );
}
class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
          activeTintColor: iOSColors.purple,
          style: {backgroundColor : iOSColors.black},
          inactiveTintColor: iOSColors.gray,
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'Random Color picker' }}
          component={firstScreenStack} />
         <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Slack Navigation' }}
          component={secondScreenStack} />
           <Drawer.Screen
          name="FourthPage"
          options={{ drawerLabel: 'Infinit Scrolling' }}
          component={FourthScreenStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
  }

  export default App