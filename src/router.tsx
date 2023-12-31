import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import {RedditContextProvider} from './hooks/pics.context';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <RedditContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </RedditContextProvider>
  );
};

export default Router;
