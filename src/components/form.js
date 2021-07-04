import React from 'react';


const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Your city or country"/>
        <button>Catch Weather</button>
    </form>  
);


export default Form;