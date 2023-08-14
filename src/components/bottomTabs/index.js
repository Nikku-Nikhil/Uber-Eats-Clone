import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Browse from '../../screens/Browse';
import Grocery from '../../screens/Grocery';
import Orders from '../../screens/Orders';
import Account from '../../screens/Account';
import CustomTabBar from './CustomTabBar/index';
import {SafeAreaView} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function HomeStack({logout}) {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Browse"
          component={Browse}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Grocery"
          component={Grocery}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Account"
          options={{
            headerShown: false,
          }}>
          {props => <Account {...props} logout={logout} />}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default HomeStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
