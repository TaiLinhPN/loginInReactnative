import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import styles from './style';

const Input = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>label</Text>
      <View>
        <FontAwesomeIcon icon={faMugSaucer}/>
        <TextInput style={styles.textInput} placeholder="useless placer" />
      </View>
    </View>
  );
};

export default Input;
