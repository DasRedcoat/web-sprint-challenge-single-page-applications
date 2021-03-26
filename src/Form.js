import React from "react";

export default function Form(props) {
const { values, submit, change, disabled, errors } = props;

const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
    };
  // States //

  // Axios //

  // Event Handlers // 

 // RETURN STATEMENT // 


// header - Build your own pizza
// Pizza picture
// h2 Build your own pizza
//      Choice of Size *required* - Drop Down

//Choice of Sauce - Radio button - up to 4

// Toppings - Checkboxes - up to 4

// Gluten Free Crust?/////////// STRECTH ///////////// - Radio button - Yes/No

// Special Instruction - textbox


const onChange = (event) => {  // onChange, an event,  perform: 
    const { name, value, type, checked } = event.target; // Targets the Keys that could change 
    const valueToUse = type === "checkbox" ? checked : value; // "valueToUse is the variable, that checks if the type of input is a checkbox, and IF it is checked, it's 'value' is true, and matches. Therefore it is allowed to pass.
    change(name, valueToUse); // change the name and value to use as described above by the ternary operator. 
};

    return (
        <form>
        <div className = "form-container">
            <h2>Build your own pizza!</h2>
            {/* <img src='Pizza'></img> */}
        <label>
          <h3>Who art thou?</h3>
          <input
            value={values.name}
            onChange={onChange}
            name="name"
            type="text"
          />
        </label>
            <label>
                <h3>Build your own pizza!</h3>
                <h4>Choice of Size</h4>
                <h5>Required*</h5>
                <select>
                    <option value="">- Select A Size! -</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="I have the munchies">I have the munchies</option>
                </select>
            </label>
    {/*it works from here as of 1st push*/}
            <br/>
            <label>
            <h4>Choose a sauce!</h4>
                <h3>Original Red</h3>
                <input
                    type="radio"
                    name="sauce"
                    value="oRed"
                    checked={values.sauce === "oRed"}
                />
            </label>
            <label>
                <h3>Garlic Ranch</h3>
                <input
                    type="radio"
                    name="sauce"
                    value="gRanch" 
                    checked={values.sauce === "gRanch"}
                />
            </label>
            <label>
                <h3>BBQ Sauce</h3>
                <input
                    type="radio"
                    name="sauce"
                    value="bbq" 
                    checked={values.sauce === "bbq"}
                />
            </label>
            <label>
                <h3>Spinach Alfredo</h3>
                <input
                    type="radio"
                    name="sauce"
                    value="sAlfredo"
                    checked={values.sauce === "sAlfredo"}
                />
            </label>
            <h3>Toppings</h3>
            <label> 
            Pepperoni
                <input
                type="checkbox"
                name="pepperoni"
                checked={values.pepperoni}
                onChange={onChange}
                />
            </label>
            <label> 
            Bacon
                <input
                type="checkbox"
                name="bacon"
                checked={values.bacon}
                onChange={onChange}
                />
            </label>
            <label> 
            Pineapple
                <input
                type="checkbox"
                name="pineapple"
                checked={values.pineapple}
                onChange={onChange}
                />
            </label>
            <label> 
            Onions
                <input
                type="checkbox"
                name="onions"
                checked={values.onions}
                onChange={onChange}
                />
            </label>
            <button disabled={disabled}>Send my Zaa!</button>
        </div> 
        </form>
    )
}