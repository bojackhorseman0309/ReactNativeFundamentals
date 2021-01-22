import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import { useState } from 'react';
import { useEffect } from 'react';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  return (
    <React.Fragment>
      <ActivityIndicator visible={getListingsApi.loading}></ActivityIndicator>
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <React.Fragment>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton
              title='Retry'
              onPress={getListingsApi.request}
            ></AppButton>
          </React.Fragment>
        )}
        <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={'$' + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            ></Card>
          )}
        ></FlatList>
      </Screen>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
