import { EMPLOYEES_LOADED } from './constants';
import { ADD_EMPLOYEE } from './constants';
import { FETCHING_STARTED } from './constants';
import { FETCHED_PROPERLY } from './constants';
import { FETCHED_ERROR }  from './constants';
import { LOGIN_OK }  from './constants';
 
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

export const userFound = (user) => {
  return {
    type: LOGIN_OK,
    payload: {
      user
    }
  };
}

export const login = (user) => {
  return (dispatch) => {
    dispatch(launchDataFetching());
    console.log("LOGING IN");
    fetch('http://localhost:3004/users')
      .then((data) => data.json())
      .then((users) => {
        const res = users.find(res => res.username === user);
        if(res !== undefined){
          console.log("User found!");
          dispatch(userFound(res));
          this.props.history.push("/");
        }
        else{
          console.log("User not found!");
          //throw("User not found!");
        }
      })
      .catch((err) => {
        //dispatch(dataFetchedError(err.message))
      });
  };
}