import 'react-native-gesture-handler';
import React, { createContext, useEffect, useState } from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { SignUpOTPVerification } from './screens/SignUpOTPVerification';
import {
  neededOptions, numericConstants, routeConsts, screenOptions,
  stackOptions, stringConstants
} from './constants/Constants';
import { SignUpConfirmSecret } from './screens/SignUpConfirmSecret';
import { RVUserRegistration } from './screens/RVUserRegistration';
import { RVBloodRequest } from './screens/RVBloodRequest';
import { RVUserDashboard } from './screens/RVUserDashboard';
import { RVBloodRequestsNotifications } from './screens/RVBloodRequestsNotifications';
import { SplashScreen } from './screens/SplashScreen';
import NetInfo from "@react-native-community/netinfo";
import { showSnackBar } from './helper/Helper';
import messaging from '@react-native-firebase/messaging';

export const SignUpContext = createContext();
const Stack = createStackNavigator();

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  //setNotificationDetails({ ...notificationDetails, isFromBackGroundNotification: true });
});


const NotificationHandler = async (messages) => {
  console.log("BgMessaging", messages);
  return Promise.resolve();
};

//Android
AppRegistry.registerHeadlessTask('ReactNativeFirebaseMessagingHeadlessTask', () => NotificationHandler);

function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }
  return <App />;
}

export default function App() {

  const [signUpDetails, setSignUpDetails] = useState({
    phoneNumber: stringConstants.EMPTY,
    secret: stringConstants.EMPTY,
    registrationSuccessful: false
  });

  const [requestForm, setRequestForm] = useState({
    blood_group: numericConstants.ZERO,
    needed_request: neededOptions[numericConstants.ZERO].value,
    needed_request_date: Date.now(),
    pincode: stringConstants.EMPTY,
    hospital: stringConstants.EMPTY
  });

  const [error, setError] = useState({
    title: stringConstants.EMPTY,
    message: stringConstants.EMPTY,
    showModal: false
  });

  const [notificationDetails, setNotificationDetails] = useState({
    showNotificationModal: false,
    message: stringConstants.EMPTY
  });

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      showSnackBar(state.isConnected && `Connected` || `Disconnected`, true);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <SignUpContext.Provider value={{
      signUpDetails, setSignUpDetails, requestForm,
      setRequestForm, error, setError, notificationDetails,
      setNotificationDetails
    }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={routeConsts.SPLASH_SCREEN} screenOptions={screenOptions}
          headerMode='float' animation="fade">
          <Stack.Screen name={routeConsts.SPLASH_SCREEN} component={SplashScreen} options={stackOptions} />
          <Stack.Screen name={routeConsts.BLOOD_REQUEST_NOTIFICATION} component={RVBloodRequestsNotifications} options={stackOptions} />
          <Stack.Screen name={routeConsts.HOME} component={Home} options={stackOptions} />
          <Stack.Screen name={routeConsts.SIGN_IN} component={SignIn} options={stackOptions} />
          <Stack.Screen name={routeConsts.SIGN_UP} component={SignUp} options={stackOptions} />
          <Stack.Screen name={routeConsts.SIGN_UP_OTP_VERIFICATION} component={SignUpOTPVerification} options={stackOptions} />
          <Stack.Screen name={routeConsts.SIGN_UP_SECRET} component={SignUpConfirmSecret} options={stackOptions} />
          <Stack.Screen name={routeConsts.USER_REGISTRATION} component={RVUserRegistration} options={stackOptions} />
          <Stack.Screen name={routeConsts.USER_DASHBOARD} component={RVUserDashboard} options={stackOptions} />
          <Stack.Screen name={routeConsts.BLOOD_REQUEST} component={RVBloodRequest} options={stackOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </SignUpContext.Provider>
  );
}