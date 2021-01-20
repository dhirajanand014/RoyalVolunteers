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
          <Stack.Screen name="SignUpOTPVerication" component={SignUpOTPVerication} options={stackOptions} />
          <Stack.Screen name="SignUpSecret" component={SignUpConfirmSecret} options={stackOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </SignUpContext.Provider>
  );
}