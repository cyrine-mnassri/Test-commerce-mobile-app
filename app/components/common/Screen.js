import React, { useState } from 'react';
import { View, TextInput, StyleSheet,StatusBar, ScrollView } from 'react-native';


const Screen = ({children,isSearchFocused }) => {
 // const keyboardShouldPersistTaps = isSearchFocused ? 'always' : 'never';

  return (

      <ScrollView 
      scrollEnabled={!isSearchFocused}
      style={styles.container}>
     {children}
      </ScrollView >

  );
    };


    const styles = StyleSheet.create({
        container: {
        marginTop:StatusBar.currentHeight,
        paddingHorizontal:15,
        backgroundColor:'#f7f3f3',
        flex:1
        }
      });

      export default Screen;