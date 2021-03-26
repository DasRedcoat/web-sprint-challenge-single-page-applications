import React, {useState} from "react";
import './App.css';
import Home from './Home'
// import axios from 'axios';
// import * as yup from 'yup';
// import schema from "./formValidation"
import Form from './Form';



const initialFormValues = {
  // Text Inputs
  name: '',
  email: '',
  password: '', 
  // checkboxes
  termsOfService: false, 
};

const initialFormErrors = {
  name: '',
  email: '', 
  password: '', 
  termsOfService: false,
}

export default function App() {



  return (
      <Form/>
  );
}
