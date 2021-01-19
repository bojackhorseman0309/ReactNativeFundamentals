import React, { useEffect, useState } from 'react';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import Screen from './app/components/Screen';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  return <ListingEditScreen></ListingEditScreen>;
}
