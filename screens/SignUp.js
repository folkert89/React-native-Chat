import React, { Component } from 'react';
import { View, Text } from 'react-native';

import t from 'tcomb-form-native';
import Person, { formOptions } from '../models/Person';

import styles from './SignUp.styles';

export default class SignUp extends Component {
  render() {
    const Form = t.form.Form

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign up for ChatApp</Text>
      
        <Form
          ref="form"
          type={Person}
          options={formOptions} />
      </View>
    );
  }
}
