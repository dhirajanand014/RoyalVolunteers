import 'react-native-gesture-handler';
import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { SignUpOTPVerification } from './screens/SignUpOTPVerification';
import {
  neededOptions, numericConstants, screenOptions,
  stackOptions, stringConstants
} from './constants/Constants';
import { SignUpConfirmSecret } from './screens/SignUpConfirmSecret';
import { RVUserRegistration } from './screens/RVUserRegistration';
import { RVBloodRequest } from './screens/RVBloodRequest';
import { RVUserDashboard } from './screens/RVUserDashboard';
import { RVBloodRequestsNotifications } from './screens/RVBloodRequestsNotifications';
import { SplashScreen } from './screens/SplashScreen';

export const SignUpContext = createContext();
const Stack = createStackNavigator();

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

  return (
    <SignUpContext.Provider value={{
      signUpDetails, setSignUpDetails, requestForm,
      setRequestForm, error, setError
    }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={`SplashScreen`} screenOptions={screenOptions}
          headerMode='float' animation="fade">
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={stackOptions} />
          <Stack.Screen name="Home" component={Home} options={stackOptions} />
          <Stack.Screen name="SignIn" component={SignIn} options={stackOptions} />
          <Stack.Screen name="RVBloodRequestNotification" component={RVBloodRequestsNotifications} options={stackOptions} />
          <Stack.Screen name="SignUp" component={SignUp} options={stackOptions} />
          <Stack.Screen name="SignUpOTPVerification" component={SignUpOTPVerification} options={stackOptions} />
          <Stack.Screen name="SignUpSecret" component={SignUpConfirmSecret} options={stackOptions} />
          <Stack.Screen name="RVUserRegistration" component={RVUserRegistration} options={stackOptions} />
          <Stack.Screen name="RVUserDashboard" component={RVUserDashboard} options={stackOptions} />
          <Stack.Screen name="RVBloodRequest" component={RVBloodRequest} options={stackOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </SignUpContext.Provider>
  );
}