import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'


// const SplashScreen = () => {
//   const dispatch = useDispatch()
//
//   useEffect(() => {
//     console.log("SplashScreen");
//   })
//
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>
//         SplashScreen
//       </Text>
//     </View>
//   )
// }
//
// export default SplashScreen

class SplashScreen extends Component {
  render() {
    return (
      <View style={{
        backgroundColor: "blue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text>Hello, world!</Text>
      </View>
    );
  }
}

export default SplashScreen;
