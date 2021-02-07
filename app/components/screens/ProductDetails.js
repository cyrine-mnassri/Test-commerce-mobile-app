import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions,
} from 'react-native';
import Api from '../api/Api';
import ActivityIndicator from '../common/ActivityIndicator';

const { width, height } = Dimensions.get('window');

const ProductDetails = ({route}) => {
  const [Singleproduct,setSingleProduct]=useState({});
 const {_id:postId}= route.params.item;

 const [loading, setLoading] = useState(false);


console.log(route.params.item._id)
const fetchPost = async id => {
  setLoading(true)
  const result = await Api.getSingle(id);
  
  setSingleProduct(result);
  setLoading(false)
};

 useEffect(()=>{
 fetchPost(postId)
 
 },[])

 const { prod_name , model, imageUrl,price } = Singleproduct;


  return (

<>
<ActivityIndicator visible={loading} />
<ScrollView style={styles.container}>
<Image style={styles.image} source={{ uri: imageUrl }} />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{prod_name}</Text>
          <Text style={styles.content}>Model: {model}</Text>
          <Text style={styles.content}>Price: {price} Dt</Text>

        </View>
       
      </ScrollView>
</>

  )
    };

    const styles = StyleSheet.create({
        container: {},
        image: {
          borderRadius:16,
          marginTop:5,
          width: width,
          height: height /3,
        },
        contentContainer: {
          padding: 10,
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
        },
        content: {
          fontSize: 16,
          color: '#4e4d4d',
        },
     
      });

      export default ProductDetails;