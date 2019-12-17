import { EMPLOYEES_LOADED } from './constants';
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
    default:
        return state
  }
}

export default appReducer;