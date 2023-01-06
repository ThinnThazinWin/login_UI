import { StyleSheet, ImageBackground, View } from 'react-native'
import React from 'react';

export default function Background({children}) {
  return (
    <View>
      <ImageBackground 
      source={require('./assets/leave.jpeg')}
        style={{height:'100%'}}
      />
        <View style={{position:'absolute'}}>
            {children}
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({})
