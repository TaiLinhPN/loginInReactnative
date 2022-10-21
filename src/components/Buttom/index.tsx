import React from 'react';
import {Pressable, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';
const MyButton = () => {
  const onPressFunction = () => {};

  return (
    <View>
      <LinearGradient
        style={styles.button}
        colors={['rgb(74, 225, 213)', 'rgb(4, 176, 162)']}>
        <Pressable onPress={onPressFunction}>
          <Text style={styles.buttonText}>I'm pressable!</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default MyButton;
