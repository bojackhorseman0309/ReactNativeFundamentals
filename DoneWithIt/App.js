import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import { useState } from 'react';
import AuthContext from './app/auth/context';
import storage from './app/auth/storage';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await storage.getUser();

    if (user) {
      setUser(user);
    }
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.log('Error', error)}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice></OfflineNotice>
      <NavigationContainer theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator></AuthNavigator>}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
