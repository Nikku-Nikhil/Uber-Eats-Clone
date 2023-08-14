import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet, Platform} from 'react-native';
import {parsePhoneNumberFromString} from 'libphonenumber-js';
import {Google} from '../assests/svgs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountryFlag from 'react-native-country-flag';
import CustomTextInput from '../components/common/STextInput';
import SText from '../components/common/SText';
import SButton from '../components/common/SButton';
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';

const FlagDropdown = ({onPress}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const getCountryCode = () => {
    const phoneNumberObj = parsePhoneNumberFromString(phoneNumber);
    if (phoneNumberObj) {
      return phoneNumberObj?.country;
    }
    return 'IN';
  };

  function Seperator() {
    return (
      <View style={{backgroundColor: '#A4A4A4', height: 1, width: '45%'}} />
    );
  }

  return (
    <View style={styles.container}>
      <SText
        text="Enter Your Phone Number"
        containerStyle={{paddingVertical: 18, marginTop: 20}}
      />

      <View style={styles.inputField}>
        <View style={styles.flag}>
          <CountryFlag isoCode={getCountryCode()} size={35} />
        </View>

        <CustomTextInput
          placeholder="+91 95xxxxxx"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          // type="phone-pad"
        />
      </View>
      <SButton
        text="Next"
        icon={
          <MaterialIcons
            name="keyboard-arrow-right"
            size={30}
            color="#ffffff"
            style={{position: 'absolute', right: 18, top: 15}}
          />
        }
      />
      <SText
        text={
          'By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from uber and its affiliates to the number provided.'
        }
        color={'#888888'}
        size={12}
        weight={500}
        containerStyle={{opacity: 0.5, paddingVertical: 20}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Seperator />
        <SText text={'or'} color={'#888888'} size={14} weight={400} />
        <Seperator />
      </View>
      {Platform.OS === 'android' && (
        <SButton
          backgroundColor="#ffffff"
          color="#000000"
          onPress={onPress}
          containerStyle={{borderWidth: 1, marginVertical: 25}}
          icon={
            <Google
              height={40}
              width={40}
              style={{position: 'absolute', left: 10, top: 10}}
            />
          }
          text="Continue with Google"
        />
      )}
    </View>
  );
};

export default FlagDropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 58,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  flag: {
    padding: 2,
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    width: '25%',
    alignItems: 'center',
    borderRadius: 8,
  },
  inputField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
});
