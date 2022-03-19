/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import useGlobal from '../store';
import LoadingOverlay from '../components/loadingOverlay.component';
import AlertBox from '../components/alertBox.component';
import colors from '../styles/colors.style';
// App screens are imported below
import LoadingScreen from '../screens/loading.screen';
import HomeScreen from '../screens/home.screen';
import RadioScreen from '../screens/radio.screen';

const Stack = createStackNavigator();

function appNavigator() {
  const [loadingOverlay] = useGlobal(state => state.loadingOverlay);
  const [initialLoading] = useGlobal(state => state.initialLoading);
  const [alertBox] = useGlobal(state => state.alertBox);
  if (initialLoading) {
    return (
      <>
        <StatusBar backgroundColor={colors.greys[4]} barStyle="light-content" />
        {/* <View><Text>Hey</Text></View> */}
        <LoadingScreen />
      </>
    );
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.greys[4]} barStyle="light-content" />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Radio" component={RadioScreen} />
      </Stack.Navigator>
      <AlertBox visible={alertBox.visible} />
      <LoadingOverlay visible={loadingOverlay} />
    </NavigationContainer>
  );
}

export default appNavigator;
