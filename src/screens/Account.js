import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const Account = ({logout}) => {
  return (
    <View>
      <Text>Account</Text>
      <TouchableOpacity onPress={logout}>
      <Text>Logout</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})