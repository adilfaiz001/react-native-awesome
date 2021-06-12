import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// COMPONENT
import { LoginComponent } from '@/layout/authentication';

const Stack = createStackNavigator()

// @refresh reset
const AuthenticationNavigator = () => {
  console.log("AuthenticationNavigator");
  return (
    <Stack.Navigator initialRouteName='login'>
      <Stack.Screen name={"login"} component={LoginComponent} options={{ title: 'Home Screen' }}/>
      {/*<Stack.Screen name={"signup"} component={SignupComponent} />*/}
    </Stack.Navigator>
  )
}

export default AuthenticationNavigator
