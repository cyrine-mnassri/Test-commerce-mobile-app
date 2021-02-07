import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../screens/ProductDetails';
import Home from '../screens/Home';


const Stack = createStackNavigator();


const AppNavigator = () => {

return (
<Stack.Navigator>
 <Stack.Screen name='Feed' component={Home} />
 <Stack.Screen name='ProductDetails' component={ProductDetails} />

</Stack.Navigator>

)


    };


    const styles = StyleSheet.create({
        container: {
  
        }
      });

      export default AppNavigator;