import 'react-native-gesture-handler';
import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { SignUpOTPVerication } from './screens/SignUpOTPVerication';
import { screenOptions, stackOptions } from './constants/Constants';
import { SignUpConfirmSecret } from './screens/SignUpConfirmSecret';
import { RVUserRegistration } from './screens/RVUserRegistration';
import { RVBloodRequest } from './screens/RVBloodRequest';
import { RVUserDashboard } from './screens/RVUserDashboard';


export const SignUpContext = createContext();
const Stack = createStackNavigator();

export default function App() {

  const [signUpDetails, setSignUpDetails] = useState({
    phoneNumber: ``,
    secret: ``,
    registrationSuccessful: false
  });

  const [requestForm, setRequestForm] = useState({
    blood_group: 0,
    needed_request: `Immediate`,
    needed_request_date: ``,
    pincode: ``,
    hospital: ``
  });

  const [error, setError] = useState({
    message: ``
  })

  return (
    <SignUpContext.Provider value={{
      signUpDetails, setSignUpDetails, requestForm, setRequestForm,
      error, setError
    }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={`Home`} screenOptions={screenOptions}
          headerMode='float' animation="fade">
          <Stack.Screen name="Home" component={Home} options={stackOptions} />
          <Stack.Screen name="SignIn" component={SignIn} options={stackOptions} />
          <Stack.Screen name="SignUp" component={SignUp} options={stackOptions} />
          <Stack.Screen name="SignUpOTPVerication" component={SignUpOTPVerication} options={stackOptions} />
          <Stack.Screen name="SignUpSecret" component={SignUpConfirmSecret} options={stackOptions} />
          <Stack.Screen name="RVUserRegistration" component={RVUserRegistration} options={stackOptions} />
          <Stack.Screen name="RVUserDashboard" component={RVUserDashboard} options={stackOptions} />
          <Stack.Screen name="RVBloodRequest" component={RVBloodRequest} options={stackOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </SignUpContext.Provider>
  );
}