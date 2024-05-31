import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
     employees: [],
     employee: {
          firstname: "",
          lastname: "",
          dateOfBirth: "",
          startDate: "",
          street: "",
          city: "",
          state: "",
          zipCode: "",
          department: "",
     },
};

const employeeSlice = createSlice({
     name: "employee",
     initialState,
     reducers: {
          setFirstname: (state, action) => {
               state.employee.firstname = action.payload;
          },
          setLastname: (state, action) => {
               state.employee.lastname = action.payload;
          },
          setDateOfBirth: (state, action) => {
               state.employee.dateOfBirth = action.payload;
          },
          setStartDate: (state, action) => {
               state.employee.startDate = action.payload;
          },
          setStreet: (state, action) => {
               state.employee.street = action.payload;
          },
          setCity: (state, action) => {
               state.employee.city = action.payload;
          },
          setState: (state, action) => {
               state.employee.state = action.payload;
          },
          setZipCode: (state, action) => {
               state.employee.zipCode = action.payload;
          },
          setDepartment: (state, action) => {
               state.employee.department = action.payload;
          },
          addEmployee: (state) => {
               state.employees.push({ ...state.employee });
               state.employee = {
                    firstname: "",
                    lastname: "",
                    dateOfBirth: "",
                    startDate: "",
                    street: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    department: "",
               };
          },
     },
});

export const {
     setFirstname,
     setLastname,
     setDateOfBirth,
     setStartDate,
     setStreet,
     setCity,
     setState,
     setZipCode,
     setDepartment,
     addEmployee,
} = employeeSlice.actions;

const persistConfig = {
     key: "root",
     storage,
};
export const persistedReducer = persistReducer(
     persistConfig,
     employeeSlice.reducer
);
export const store = configureStore({
     reducer: {
          employee: persistedReducer,
     },
});