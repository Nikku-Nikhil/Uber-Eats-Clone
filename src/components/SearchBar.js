import React,{useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SText from './common/SText';



const SearchBar = ({
  value,
  onChangeText,
  onPress,
}) => {
 

  


  return (
    <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#eee',
      borderRadius: 50,
      marginTop:10,
      paddingHorizontal:10,
      paddingVertical:2,
    }}>
    <View>
      <Ionicons name="location-sharp" size={20} color={'black'} />
    </View>
    <TextInput
      placeholder="Search Food eg. Pizza, Burger... "
      value={value}
      onChangeText={onChangeText}
      style={{
        backgroundColor: '#eee',
        borderRadius: 20,
        fontWeight: '700',
        fontSize:16,
        flex: 1,
        marginLeft: 10,
        marginRight: 8,
      }}
    />
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 9,
        borderRadius: 30,
        alignItems: 'center',
      }}>
      <AntDesign
        name="clockcircle"
        size={11}
        color={'black'}
        style={{ marginRight: 6 }}
      />
      <SText text="Search" size={15} />
    </TouchableOpacity>

    </View>
  );
};

export default SearchBar;
