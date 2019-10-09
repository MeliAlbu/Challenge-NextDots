import { GET_DATA_SUCCESS ,DELETE_COCKTAILS, FINDING_DATOS } from "./types";

export const deleteCocktails = () =>{
  return  dispatch => {
    dispatch({type:DELETE_COCKTAILS})
  }
}

export const searchCocktails = (text) => {
    return async dispatch => {
      try
      {
     
dispatch ({type: FINDING_DATOS})


        fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + text,
        )
          .then(response => response.json())
          .then(responseJson => {
            dispatch({type:GET_DATA_SUCCESS,payload:responseJson.drinks});
          })
          .catch(error => {
            console.error('errrrrrrro', error);
          });

     
      }
      catch(e)
      {
        dispatch(cocktailError(e.message));
      }
    }; 
  };