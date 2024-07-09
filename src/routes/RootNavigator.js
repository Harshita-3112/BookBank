import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home/Home';
import SignUp from '../screens/SignUp/SignUp';
import Welcome from '../screens/Welcome/Welcome';
import Onboarding from '../screens/Onboarding/Onboarding';
import VendorsList from '../screens/VendorsList/VendorsList';
import Books from '../screens/books/Books';
import Authors from '../screens/Authors/Authors';
import FilterAuthors from '../components/FilterAuthors/FilterAuthors';

import Questions from '../screens/Questions/Questions';
import Splash from '../screens/Splash/Splash';
import auth from '@react-native-firebase/auth';


const Stack = createStackNavigator();
const RootNavigator = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (loading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="VendorsList" component={VendorsList} />
            <Stack.Screen name="Books" component={Books} />
            <Stack.Screen name="Authors" component={Authors} />
            <Stack.Screen name="FilterAuthors" component={FilterAuthors} />


            <Stack.Screen name="Questions" component={Questions} />
            {/* <Stack.Screen name="vendorsList" component={VendorsList} /> */}
          </>
        ) : (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
