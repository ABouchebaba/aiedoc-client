import {
    GET_INTERVENTIONS,
    ERROR_GET_INTERVENTIONS,
    GET_INTERVENTIONS_LOADING
  } from "../../constants/ActionTypes";
  
  const initialState = {
      interventions: [],
      loading: false,
      error: false,
  };
  
  const InterventionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_INTERVENTIONS: {
        return {
          ...state,
          interventions: action.data,
          loading: false,
          error: false,
        };
      }
      case ERROR_GET_INTERVENTIONS: {
        return {
          ...state,
          error: action.data,
          loading: false,
        };
      }
  
      case GET_INTERVENTIONS_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      default:
        return state;
    }
  };
  
  export default InterventionsReducer;
  