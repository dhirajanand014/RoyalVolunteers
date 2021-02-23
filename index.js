import React from 'react';
import { Alert, AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { updateSetNotifications } from './helper/Helper';

LogBox.ignoreAllLogs(true);

messaging().setBackgroundMessageHandler(async remoteMessage => {
    updateSetNotifications(remoteMessage);
});

function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        // App has been launched in the background by iOS, ignore
        return null;
    }
    return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);