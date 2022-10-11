import React from 'react';
import {Text, View} from 'react-native';
import MyButton from '../Buttom';
import Input from '../Input';
import styles from './style';
const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
          <View style={styles.content}>
              <View style={styles.inputWrap}>
                  <Input />
        <Input />
        <Input />
              </View>
              <View style={styles.buttonWrap}>
                  <MyButton/>
                  <MyButton/>
              </View>
        
      </View>
    </View>
  );
};

export default Login;
