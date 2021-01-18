import 'react-native-gesture-handler';
import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { RegistrationOTPInput } from './screens/RegistrationOTPInput';
import { screenOptions, stackOptions } from './constants/Constants';

export const SignUpContext = createContext();
const Stack = createStackNavigator();

export default function App() {

  const [signUpDetails, setSignUpDetails] = useState({
    phoneNumber: ``,
    secret: ``
  });

  const usersDetailsStateContext = {
    signUpDetails,
    setSignUpDetails
  };

  return (
    <SignUpContext.Provider value={usersDetailsStateContext}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={`Home`} screenOptions={screenOptions}
          headerMode='float' animation="fade">
          <Stack.Screen name="Home" component={Home} options={stackOptions} />
          <Stack.Screen name="SignIn" component={SignIn} options={stackOptions} />
          <Stack.Screen name="SignUp" component={SignUp} options={stackOptions} />
          <Stack.Screen name="RegistrationOTPInput" component={RegistrationOTPInput} options={stackOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </SignUpContext.Provider>
  );
}