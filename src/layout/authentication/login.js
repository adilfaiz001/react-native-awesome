import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'


const LoginComponent = () => {
  console.log("Login Page");

  return (
    <View style={{ backgroundColor: "red", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Login Page
      </Text>
    </View>
  )
};

export default LoginComponent
