import axios from "axios";
import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from "./actionTypes"

  const APP_ID = "6b65d700";
  const APP_KEY = "ba00e92f79382e4ac81ca53f592db493";
  var url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&&health=alcohol-free` ;

export const getData = (q) => async (dispatch) => {
    dispatch({
        type:GET_DATA,
    });
    
    try {
        const res = await axios.get( `https://api.edamam.com/search?q=${q}&app_id=${APP_ID}&app_key=${APP_KEY}&&health=alcohol-free`);
        console.log(res);
        dispatch({
            type:GET_DATA_SUCCESS,
            payload: res.data.hits,
        });
        
    } catch (error) {
        dispatch({
            type:GET_DATA_FAIL,
            payload: error.response.data,
        });
    }
}