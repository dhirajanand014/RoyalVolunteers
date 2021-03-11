import React from 'react';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { getNotificationConfiguration, updateSetNotifications } from './helper/Helper';
import PushNotification from "react-native-push-notification";

LogBox.ignoreAllLogs(true);

messaging().setBackgroundMessageHandler(async remoteMessage => updateSetNotifications(remoteMessage));

const navigationRef = React.createRef();

const HeadlessCheck = ({ isHeadless }) => {
    if (isHeadless) {
        // App has been launched in the background by iOS, ignore
        return null;
    }
    return <App navigationRef={navigationRef} />;
}

PushNotification.configure(getNotificationConfiguration(navigationRef));

AppRegistry.registerComponent(appName, () => HeadlessCheck);