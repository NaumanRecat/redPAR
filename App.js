import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Header from "./component/Header";
import Product from "./component/Product";

 const Stack = createNativeStackNavigator();

const App =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Product' component={Product} />
      <Stack.Screen name='Header' component={Header} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
































// import React from "react";
// import {View, Text} from 'react-native';
// import Header from "./component/Header";
// import Product from "./component/Product";

// const App =()=>{
//   return(
//     <Product/>
//     // <Header/>
//   )
// }
// export default App