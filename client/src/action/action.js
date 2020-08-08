import axios from "axios";
const URL_API = 'http://188.166.233.186:3001/api/';
export const getproduct = id => {
  return dispatch => {
    axios.get(`${URL_API}products/${id}`).then(() => {
      dispatch({
        type: "GET_product",
        playload: id
      });
    });
  };
};
export const getproductLists = () => {
  return dispatch => {
    axios.get(`${URL_API}products/`).then(res => {
      dispatch({
        type: "GET_product_LISTS",
        playload: res.data
      });
    });
  };
};

