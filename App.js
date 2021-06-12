/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store";
import { ApplicationNavigator } from "@/navigation";
import { VerifyUser } from "./src/store/startup/init";

const App = () => {
  const onBeforeLift = async () => {

  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} onBeforeLift={onBeforeLift} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App;
