import React, { useState } from 'react';
import VerticalList from './lists/VerticalList';


const ProductsList = ({data}) => {

  return <VerticalList title="Products List" data={data}/>
    };

      export default ProductsList;