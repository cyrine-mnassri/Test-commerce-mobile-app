import { useState, useEffect } from 'react';
import apiClient from "../api/client"

export default ProductsFeed =()=>{

    const [Products,setProducts]=useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () =>{
        setLoading(true);

        const response =   await apiClient.get('/products');
        const allproducts=response.data.products
        setProducts(allproducts);
        setLoading(false);

    }
    
    useEffect(()=>{
        getProducts()
    
    },[])

    return [
        Products,loading
      
      ];
};