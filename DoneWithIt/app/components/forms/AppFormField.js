import { useFormikContext } from 'formik';
import React from 'react';
import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext();
  return (
    <React.Fragment>
      <TextInput
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </React.Fragment>
  );
}

export default AppFormField;
