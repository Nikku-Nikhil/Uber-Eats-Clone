import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Login from './src/screens/Login';
import HeaderTabs from './src/components/HeaderTabs';
import Home from './src/screens/Home';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import SLoader from './src/components/common/SLoader';
import * as Keychain from 'react-native-keychain';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/components/bottomTabs';

const App = () => {
  const [loggedIn, setloggedIn] = useState(true);
  const [loader, setLoader] = useState(false);


  const storeUser = async token => {
    try {
      await Keychain.setGenericPassword('userToken', token);
    } catch (error) {
      console.log(error);
    }
  };

  async function onGoogleButtonPress() {
    try {
      setLoader(true);
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      storeUser(googleCredential?.token);

      // Sign-in the user with the credential
      await auth().signInWithCredential(googleCredential);
      setLoader(false);
      setloggedIn(true);
      // console.log("credentisals",googleCredential)
      // console.log("auth",auth().signInWithCredential(googleCredential))
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  // const getUser = async () => {
  //   try {
  //     const savedUser = await AsyncStorage.getItem('isToken');
  //     return savedUser;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const getUser = async () => {
    try {
      const credentials = await Keychain.getGenericPassword();
      return credentials;
    } catch (error) {
      console.log(error);
    }
  };

  const getAuth = async () => {
    const userData = await getUser();
    if (userData) {
      setloggedIn(true);
    }
  };

  const logout = async () => {
    try {
      // Remove token from secure storage
      await Keychain.resetGenericPassword();

      // Sign out from Google
      await GoogleSignin.signOut();

      // Update logged in state
      setloggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '239404868624-6jllj68vr1qtt6cespe453no94dvbthk.apps.googleusercontent.com',
    });
    getAuth();
  }, []);

  return (
    <View style={styles.container}>
      {loggedIn ? (
        <NavigationContainer>
          <HomeStack logout={logout} />
        </NavigationContainer>
      ) : (
        <Login onPress={onGoogleButtonPress} />
      )}
      {loader && <SLoader />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
