/**
 * @format
 */

import {AppRegistry,Platform,Linking} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import PushNotification from 'react-native-push-notification'


PushNotification.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
      const postOnFacebook = () => {
        const facebookShareURL=notification.bigPictureUrl
        const postContent =notification.message
        let facebookParameters = [];
        if (facebookShareURL)
          facebookParameters.push('u=' + encodeURI(facebookShareURL));
        if (postContent)
          facebookParameters.push('quote=' + encodeURI(postContent));
        const url =
          'https://www.facebook.com/sharer/sharer.php?' +
          facebookParameters.join('&');
      
        Linking.openURL(url)
          .then((data) => {
            alert('Facebook Opened');
          })
          .catch(() => {
            alert('Something went wrong');
          });
      };
      postOnFacebook()
    },
      // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    popInitialNotification: true,
    requestPermissions:Platform.OS === 'ios' ,
  });

AppRegistry.registerComponent(appName, () => App);
