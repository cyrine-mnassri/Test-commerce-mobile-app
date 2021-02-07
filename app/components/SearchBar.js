  
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import SearchModel from '../components/common/SearchModel';
import Api from './api/Api';

let timeOutId;

const debounce = (func, delay) => {
  return (...args) => {
    if (timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
const SearchBar = ({setSearchFocused }) => {
  const [prod_name, setQuery] = useState('');
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState('');





  const handleChange = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    setQuery(text);
    setVisible(true);
    debounceSearch(prod_name);
  };

  const handleSearch = async value => {
    const res = await Api.searchPost(value);
    //console.log(res)

   if (res != 0) {
     setNotFound('');
      setData(res);

   }

    if (res == 0) {
      setNotFound("no product with this name");
    }
  };


  const debounceSearch = debounce(handleSearch, 500);

  return (
<>
      <View style={styles.container}>
        <TextInput
         style={styles.searchInput}
          placeholder='Search here..'
          value={prod_name}
          onChange={handleChange}
          onFocus={() => {
            setSearchFocused(true);
          }}
          onBlur={() => {
            setSearchFocused(false);
            setQuery('');
            setVisible(false);
            setData([]);
            setNotFound('');
          }}
        />
      </View>
      <SearchModel visible={visible} data={data} notFound={notFound} />
</>
  );
    };


    const styles = StyleSheet.create({
        container: {
          width: '100%',
          height: 50,
          backgroundColor: 'white',
          borderRadius: 8,
          justifyContent: 'center',
        },
        searchInput: {
          width: '100%',
          height: '100%',
          paddingLeft: 8,
          fontSize: 16,
        },
      });

      export default SearchBar;