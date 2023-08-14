import {StyleSheet, Text, Alert, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

const HeaderTabs = () => {
  
  const remoteNotificationHandler = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      await messaging()
        .getToken()
        .then(fcmToken => {
          console.log('FCM Token -> ', fcmToken);
        });
    } else console.log('Not Authorization status:', authStatus);
  };

  useEffect(() => {
    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(async(remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
      
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(async(remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });
    // Register background handler
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });
  }, []);

  return (
    <TouchableOpacity style={styles.btn} onPress={remoteNotificationHandler}>
      <Text>Send Notification</Text>
    </TouchableOpacity>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'skyblue',
    padding: 20,
  },
});
