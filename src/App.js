import React, {useState} from "react";
import './App.css';
import Home from './Home'
import axios from 'axios';
import * as yup from 'yup';
import Form from './Form';
import schema from './Validation'


// Initializations

const initialFormValues = {
  // Text Inputs
  name: '',
  // radios
  // checkboxes 
};

const initialFormErrors = {
  name: '',
  email: '', 
  password: '', 
  termsOfService: false,
}

const initialForm = [];
const initialDisabled = true;

// States //
export default function App() {
  const [formValues, SetFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  
// Posting the order?? submit?? //

const postNewForm = (newForm) => {
  axios
    .post("https://reqres.in/api/users", newForm)
    .then((response) => {
      setForm([response.data, ...form]);
      setFormValues(initialFormValues);
      setDisabled(true);
    })
    .catch((error) => {
      console.log(error);
    });
  };


// EVENT HANDLERS //
const inputChange = (name, value) => {
  yup
    .reach(schema, name) // search the schema for 'name'
    .validate(value) // validate the entry (formValidation)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
    .catch((error) => {
      setFormErrors({
        ...formErrors,
        // validation error from schema
        [name]: error.errors,
      });
    });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
    };
    postNewForm(newUser);
  };



  return (
    <Home/>
  );
}
