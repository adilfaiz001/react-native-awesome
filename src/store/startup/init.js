import { createSlice } from "@reduxjs/toolkit"
import SplashScreen from 'react-native-splash-screen'

const initialState = {
  loading: true,
  error: null,
  user: null
}

const InitSlice = createSlice({
  name: 'startup',
  initialState,
  reducers: {
    getInit: state => {
      state.loading = true
    },
    getInitSuccess: (state, {payload}) => {
      state.user = payload.user
      state.loading = payload.loading
      state.error = null
    },
    getInitFailure: state => {
      state.loading = false
      state.error = true
    }
  }
});

// Three actions generated from the slice
export const { getInit, getInitSuccess, getInitFailure } = InitSlice.actions

// A selector
export const initSelector = state => state

// The reducer
export default InitSlice.reducer

export const VerifyUser = (user) => async dispatch => {
  return new Promise(async (resolve, reject) => {
    console.log("Verifying already logged in user");
    try {
      if(user) {
        console.log("USER IS LOGGED IN")
        await new Promise(resolve => {
          setTimeout(() => {
            dispatch(getInitSuccess({
              user: "Adil",
              loading: false,
              error: null
            }))
          }, 3000);
        })
      } else {
        console.log("NO LOGGED IN USER");
        setTimeout(() => {
          dispatch(getInitSuccess({
            user: null,
            loading: false,
            error: null
          }));
        }, 3000);
      }
    } catch (error) {
    }
  })
}
