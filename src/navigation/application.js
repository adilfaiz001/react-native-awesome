import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, StatusBar } from 'react-native'
import { VerifyUser } from "@/store/startup/init";
import  AuthenticationNavigator  from "./authentication"
import SplashScreen from 'react-native-splash-screen'
import { getInit } from "../store/startup/init";

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  const application = useSelector(state => state)
  const applicationIsLoading = useSelector(state => state.startup.loading);
  const applicationUser = useSelector(state => state.startup.user)

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Starting Application")
    dispatch(getInit());
    dispatch(VerifyUser(applicationUser));
  }, []);

  useEffect(() => {
    if(!applicationIsLoading) {
      console.log("Application Loaded");
      setIsApplicationLoaded(true);
      SplashScreen.hide();
    }
  }, [applicationIsLoading])

  // on destroy needed to be able to reset when app close in background (Android)
  useEffect(
    () => () => {
      setIsApplicationLoaded(false)
    },
    [],
  )

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {
          isApplicationLoaded && <AuthenticationNavigator />
        }
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
