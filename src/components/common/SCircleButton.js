import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SText from './SText'

const SCircleButton = ({
    text='',
    backgroundColor="#EEEEEE",
    color="#000000",
    containerStyle={},
    size=16,
    weight=500,
    width="100%",
}) => {
  return (
   <TouchableOpacity style={[{backgroundColor,width},styles.btn,containerStyle]}>
    <SText text={text} color={color} size={size} weight={weight} />
   </TouchableOpacity>
  )
}

export default SCircleButton

const styles = StyleSheet.create({
    btn:{
        alignItems:"center",
        paddingHorizontal:20,
        paddingVertical:8,
        borderRadius:30
    }
})