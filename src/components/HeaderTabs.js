import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import SText from './common/SText';

const HeaderButtons = ({
  text = '',
  containerStyle = {},
  size = 16,
  weight = 500,
  activetab,
  setActiveTab,
}) => {
  return (
    <TouchableOpacity
      style={[
        {backgroundColor: activetab === text ? '#000000' : '#ffffff'},
        styles.btn,
        containerStyle,
      ]}
      onPress={() => setActiveTab(text)}>
      <SText
        text={text}
        color={activetab === text ? '#ffffff' : '#000000'}
        size={size}
        weight={weight}
      />
    </TouchableOpacity>
  );
};

const HeaderTabs = () => {
  const [activetab, setActiveTab] = useState('Delivery');
  return (
    <View style={styles.container}>
      <HeaderButtons
        text={'Delivery'}
        activetab={activetab}
        setActiveTab={setActiveTab}
      />
      <HeaderButtons
        text={'Pickup'}
        activetab={activetab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  btn: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 30,
  },
});
