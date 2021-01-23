import React from 'react';
import { View, StyleSheet, Keyboard, Alert } from 'react-native';
import messages from '../api/messages';
import * as Notifications from 'expo-notifications';
import * as Yup from 'yup';
import { AppForm, AppFormField, SubmitButton } from './forms';

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messages.send(message, listing.id);

    if (!result.ok) {
      console.log('Error', result);
      return Alert.alert('Error', 'Could not send the message');
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Awesome!',
        body: 'Your message has been sent to the seller.',
      },
      trigger: null,
    });
  };

  return (
    <AppForm
      initialValues={{ message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name='message'
        numberOfLines={3}
        placeholder='Message...'
      />
      <SubmitButton title='Contact Seller' />
    </AppForm>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label('Message'),
});

export default ContactSellerForm;
