import React, {useState} from "react";
import './App.css';
import Home from './Home'
import axios from 'axios';
import * as yup from 'yup';
import Form from './Form';
import schema from './Validation'
import { Route } from "react-router-dom";

// Initializations

const initialFormValues = {
  // Text Inputs
  name: '',
  sauce: false,
  toppings: false, 
  specialInstrucitons: '',
};

const initialFormErrors = {
  name: '',
  sauce: false,
}

const initialForm = [];
const initialDisabled = true;

// States //
export default function App() {
  // const [formValues, SetFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


// Posting the order?? submit?? //

// const postNewForm = (newForm) => {
//   axios
//     .post("http://localhost:3000/", newForm)
//     .then((response) => {
//       setFormValues(initialFormValues);
//       setDisabled(true);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   };


// EVENT HANDLERS //

// const inputChange = (name, value) => {
//   yup
//     .reach(schema, name)
//     .validate(value)
//     .then(() => {
//       setFormErrors({
//         ...formErrors,
//         [name]: "",
//       });
//     })
//     .catch((error) => {
//       setFormErrors({
//         ...formErrors,
//         [name]: error.errors,
//       });
//     });
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

  // const formSubmit = () => {
  //   const newForm = {
  //     name: formValues.name.trim(),
  //     sauce: formValues.sauce,
  //     toppings: formValues.toppings,
  //   };
  //   postNewForm(newForm);
  // };

  return (
    <div>
    <Home/>
      {/* <div>
            <Route exact path="/Home" component={Home} />
            <Route path="/Form" component={Form} />
      </div> */}
    </div>
  );
}