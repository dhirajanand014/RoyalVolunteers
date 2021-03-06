import 'react-native-gesture-handler';
import React, { createContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './screens/Home';
import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';
import { SignUpOTPVerification } from './screens/SignUpOTPVerification';
import {
  neededOptions, numericConstants, routeConsts, screenOptions,
  stackOptions, stringConstants, miscMessage
} from './constants/Constants';
import { SignUpConfirmSecret } from './screens/SignUpConfirmSecret';
import { RVUserRegistration } from './screens/RVUserRegistration';
import { RVBloodRequest } from './screens/RVBloodRequest';
import { RVUserDashboard } from './screens/RVUserDashboard';
import { RVBloodRequestsNotifications } from './screens/RVBloodRequestsNotifications';
import { SplashScreen } from './screens/SplashScreen';
import NetInfo from "@react-native-community/netinfo";
import { getAcceptedTerms, showSnackBar } from './helper/Helper';
import { RVLoaderView } from './components/view/RVLoaderView';
import RVErrorBoundary from './components/view/RVErrorBounday';
import { MenuProvider } from 'react-native-popup-menu';
import { RVTermsAndConditions } from './components/modals/RVTermsAndConditions';
import { RVDisconnectedNetModal } from './components/modals/RVDisconnectedNetModal';

export const SignUpContext = createContext();
const Stack = createStackNavigator();

export default function App({ navigationRef }) {

  const [signUpDetails, setSignUpDetails] = useState({
    phoneNumber: stringConstants.EMPTY,
    secret: stringConstants.EMPTY,
    registrationSuccessful: false,
    tokenValidation: false
  });

  const [requestForm, setRequestForm] = useState({
    blood_group: numericConstants.ZERO,
    needed_request: neededOptions[numericConstants.ZERO].value,
    needed_request_date: new Date(),
    pincode: stringConstants.EMPTY,
    hospital: stringConstants.EMPTY
  });

  const [loader, setLoader] = useState(false);

  const [acceptedTnC, setAcceptedTnC] = useState({
    userAccepted: false,
    showAcceptanceModal: false
  });

  const [error, setError] = useState({
    title: stringConstants.EMPTY,
    message: stringConstants.EMPTY,
    showModal: false
  });

  const [notificationDetails, setNotificationDetails] = useState({
    message: stringConstants.EMPTY,
    isNewNotification: false,
    requestCount: numericConstants.ZERO
  });

  const [netConnection, setNetConnection] = useState({
    isConnected: true
  })

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      showSnackBar(state.isConnected && miscMessage.CONNECTED || miscMessage.DISCONNECTED, true);
      setNetConnection({ ...netConnection, isConnected: state.isConnected });
    });
    (async () => {
      if (!await getAcceptedTerms()) {
        setAcceptedTnC({ ...acceptedTnC, showAcceptanceModal: true });
      }
    })();
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <RVErrorBoundary>
      <SignUpContext.Provider value={{
        signUpDetails, setSignUpDetails, requestForm,
        setRequestForm, error, setError, notificationDetails,
        setNotificationDetails, loader, setLoader
      }}>
        <MenuProvider>
          <NavigationContainer ref={navigationRef}>
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
          {
            loader && <RVLoaderView />
          }
        </MenuProvider>
        <RVTermsAndConditions acceptedTnC={acceptedTnC} setAcceptedTnC={setAcceptedTnC} />
        <RVDisconnectedNetModal isConnected={netConnection.isConnected} />
      </SignUpContext.Provider>
    </RVErrorBoundary>
  );
}