import React, { useState } from 'react';
import { View, StyleSheet, Image,TouchableWithoutFeedback } from 'react-native';
import Title from "../common/Title"
import Subtitle from "../common/Subtitle"

const FlatCard = ({item,onPress }) => {
   const {imageUrl,prod_name,price}=item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
         <Image source={{uri:imageUrl}} 
         style={styles.image} />
       
       <View  style={styles.contentcontainer}>

       <Title >
           {prod_name}
           </Title>
         <Subtitle>
             {price} Dt
             </Subtitle>
       </View>
    
      </View>
      </TouchableWithoutFeedback >
  );
    };

    const styles = StyleSheet.create({
        container:{
           flexDirection:"row" ,
           alignItems:"center",
           backgroundColor:"white",
           borderRadius:8,
           overflow:"hidden",
           marginBottom:10,
           height:120

        },
        image:{
            flex:0.35,
            height:"100%"
        },
        contentcontainer:{
            flex:0.65,
            paddingHorizontal:5
        }


      });

      export default FlatCard;