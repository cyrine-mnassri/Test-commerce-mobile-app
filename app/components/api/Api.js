import apiClient from './client';


const getSingle = async id => {
  try {
    const response = await apiClient.get(`/products/${id}`);

    if (response.data.success) {
      return response.data.product;
    }
  } catch (error) {
    console.log('error while getting single product', error);
  }
};

const searchPost = async prod_name => {
  try {
    const response = await apiClient.get(`/search/${prod_name}`);
    if (response.data.success) {
  //   console.log(response.products)
    return response.data.products;
   
  }
  } catch (error) {
   // console.log('Error', error.message);
    return [];
  }
};



export default {
  getSingle,
  searchPost

};