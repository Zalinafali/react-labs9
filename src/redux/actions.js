import { EMPLOYEES_LOADED } from './constants';
import { ADD_EMPLOYEE } from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}

export const addEmployee = (newEmployee) => {
  return{
    type: ADD_EMPLOYEE,
    payload: {
      newEmployee
    }
  }
}