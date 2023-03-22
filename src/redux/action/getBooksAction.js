import axios from "axios";
const API_KEY = "AIzaSyAcoy_NAwNkE-c92CiJx9vzIHCKj6rKOoQ";

export const getBooksAction = (searchText) => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=${API_KEY}`
      );
      dispatch({
        type: "FULFILLED",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: error,
      });
    }
  };
};
