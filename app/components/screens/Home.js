import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../../components/common/Screen';
import ProductsList from '../ProductsList';
import SearchBar from '../SearchBar';
import ProductsFeed from "../hooks/ProductsFeed"
import ActivityIndicator from '../common/ActivityIndicator';
const Home = () => {
  const [isSearchFocused, setSearchFocused] = useState(false);

    const[
      Products,loading

      ]=ProductsFeed();

    return(
      <>
      <ActivityIndicator visible={loading}/>
        <Screen isSearchFocused={isSearchFocused}>
        <SearchBar  setSearchFocused={setSearchFocused}  />
        <ProductsList data={Products}/>
        </Screen>
     </>
    )
    



    };


    const styles = StyleSheet.create({
        container: {
  
        }
      });

      export default Home;