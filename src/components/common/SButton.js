import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SText from './SText';

const SButton = ({
  text,
  backgroundColor = '#000000',
  color = '#ffffff',
  width = '100%',
  containerStyle,
  icon,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor,
          width,
        },
        styles.btn,
        containerStyle,
      ]}>
      <SText text={text} color={color} />
      {icon && icon}
    </TouchableOpacity>
  );
};

export default SButton;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 18,
    justifyContent:"center",
    flexDirection:"row",
    borderRadius:8
  },
});
