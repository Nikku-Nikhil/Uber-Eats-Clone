import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your icon library
import PropTypes from 'prop-types';
import SText from '../../common/SText';

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[
              styles.tabButton,
              {backgroundColor: isFocused ? '#04AA6D' : '#FFFFFF'},
            ]}>
            <Icon
              name={getIconName(label)}
              size={20}
              color={isFocused ? '#FFFFFF' : '#000000'}
            />
            <SText
              color={isFocused ? '#FFFFFF' : '#000000'}
              weight={600}
              size={12}
              text={label}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const getIconName = label => {
  switch (label) {
    case 'Home':
      return 'home';
    case 'Browse':
      return 'search';
    case 'Grocery':
      return 'shopping-bag';
    case 'Orders':
      return 'list-alt';
    case 'Account':
      return 'user-o';
    default:
      return 'circle';
  }
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#F8F8F8',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 20,
    overflow: 'hidden',
    margin:10,
    elevation:5,   
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

CustomTabBar.propTypes = {
  state: PropTypes.object.isRequired,
  descriptors: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default CustomTabBar;
