import { EMPLOYEES_LOADED } from './constants';
import { ADD_EMPLOYEE } from './constants';
import { FETCHING_STARTED } from './constants';
import { FETCHED_PROPERLY } from './constants';
import { FETCHED_ERROR }  from './constants';
 
export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}

export const addEmployee = (newEmployee) => {
  return {
    type: ADD_EMPLOYEE,
    payload: {
      newEmployee
    }
  };
}

export const launchDataFetching = () => {
  return {
    type: FETCHING_STARTED
  };
}

export const dataFetchedProperly = (employees) => {
  return {
    type: FETCHED_PROPERLY,
    payload: {
      employees
    }
  };
}

export const dataFetchedError = (error) => {
  return {
    type: FETCHED_ERROR,
    payload: {
      error
    }
  };
}

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch(launchDataFetching());
    console.log("FETCHING");
    fetch('http://localhost:3004/employees')
      .then((data) => data.json())
      .then((employees) => {
        //throw("ERRORRRR");
        dispatch(employeesLoaded(employees))
      })
      .catch((err) => {
        dispatch(dataFetchedError(err.message))
      });
  };
}