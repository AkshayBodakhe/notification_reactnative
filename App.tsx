import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// import * as Notifications from 'react-native-notifications';
import PushNotification from 'react-native-push-notification';
import { getFcmToken, notificationListener, requestUserPermission } from './util/NotificationService';

PushNotification.createChannel(
  {
    channelId: 'my-channel-id', // unique channel ID
    channelName: 'My Channel', // channel name
    channelDescription: 'My Channel Description', // channel description
    importance: 4, // notification importance (default is 4)
    vibrate: true, // enable vibration (default is true)
    soundName: 'ringtone1.mp3',
   
  },
  (created) => console.log(`channel '${created}' created`), // callback function
);

const App = () => {
  useEffect(()=>{
    requestUserPermission();
    getFcmToken();
    notificationListener();
  },[])

  function scheduleNotificationHandler(){
    PushNotification.localNotification({
      channelId: 'my-channel-id',
      title: 'My Notification Title',
      message: 'My Notification Message',
      soundName: 'ringtone1.mp3',
    });
  }

  return (
    <View>
     
      <Button title='Schedule Notification' onPress={scheduleNotificationHandler}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})