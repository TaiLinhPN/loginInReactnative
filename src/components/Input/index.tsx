import React from 'react'
import { Text, TextInput, View } from 'react-native'
import styles from './style'
const Input = () => {
  return (
      <View>
          
          <Text style={styles.lable}>label</Text>
          <TextInput style={styles.textInput}
              
              placeholder="useless placeholder"
           />
        </View>
  )
}

export default Input