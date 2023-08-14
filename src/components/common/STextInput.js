import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const CustomTextInput = ({
    placeholder,
    value,
    onChangeText,
    type,
    containerStyle,
}) => {
  return (
    <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={type}
        style={[containerStyle,styles.textBox]}
        placeholderTextColor={"#7F7F7F"}
      />
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    textBox:{
        paddingVertical:13,
        paddingHorizontal:20,
        backgroundColor:"#EEEEEE",
        fontSize:16,
        color:"#000000", 
        width:"70%",
        borderRadius:8
    },
})