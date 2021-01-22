import React from 'react';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import { FlatList, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/ListItemSeparator';
import useAuth from '../auth/useAuth';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    targetScreen: 'Messages',
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require('../assets/mosh.jpg')}
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                ></Icon>
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            ></ListItem>
          )}
        ></FlatList>
      </View>
      <ListItem
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d'></Icon>}
        onPress={() => logOut()}
      ></ListItem>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
