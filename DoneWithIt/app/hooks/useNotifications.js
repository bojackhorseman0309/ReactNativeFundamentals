import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { useEffect } from 'react';
import expoPushTokens from '../api/expoPushTokens';

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener) {
      Notifications.addListener(notificationListener);
    }
  }, []);
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) {
        return;
      }

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokens.register(token);
    } catch (error) {
      console.log('Error getting apush token', error);
    }
  };
};
