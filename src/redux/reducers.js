import { EMPLOYEES_LOADED, FETCHING_STARTED, FETCHED_PROPERLY, FETCHED_ERROR } from './constants';
import { ADD_EMPLOYEE } from './constants';

export const initialState = {
  employees: [],
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {  
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees });
    }
    case ADD_EMPLOYEE: {
      return {
        ...state,
        employees: [...state.employees, action.payload.newEmployee]
      }
    }
    case FETCHING_STARTED: {
      return {
        ...state,
        isFetching: true
      }
    }
    case FETCHED_PROPERLY: {
      return {
        ...state,
        employees: action.payload,
        isFetching: false,
        error: null
      }
    }
    case FETCHED_ERROR: {
      return{
        ...state,
        error: action.payload.error,
        isFetching: false
      }
    }
    default:
        return state
  }
}

export default appReducer;