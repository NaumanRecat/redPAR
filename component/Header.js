import React, { useState } from "react";
import {View, Text, Button} from 'react-native';

const Header =()=>{
    const [count, setCount]= useState(0)
  return(
    <View>
      <View  style={{
        height: 50,
        width: 400,
        backgroundColor: 'pink',
        justifyContent:'center',
      }}>
        <Text style={{
            textAlign:'right',
            padding:10,
            fontSize:25,
        }}> {count} </Text>
      </View>
    </View>
  )
}
export default Header