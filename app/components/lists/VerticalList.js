import React from 'react';
import { View, StyleSheet } from 'react-native';
import FlatCard from '../cards/FlatCard';
import Title from '../common/Title';
import { useNavigation } from '@react-navigation/native';

const VerticalList = ({ title, data }) => {
  const navigation = useNavigation();

  return (
    <View >
        <Title>{title}</Title>
        <View style={styles.container}>
        {data.map(item => <FlatCard item={item} onPress={() => navigation.navigate('ProductDetails',{item})} 
        key={item._id} />)}
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default VerticalList;