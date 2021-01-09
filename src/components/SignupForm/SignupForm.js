import { useState } from 'react';
import { Link, render } from 'react-router-dom';
import InputField from '../InputField/InputField';

import './SignupForm.css';

function SignupForm(props) {

 
    return(

        <div className="SignupForm">
            <form className="formBody">
                <InputField 
                id={1}
                label="User Name"
                predicted=""
                locked={false}
                active={false}
                />
                <InputField 
                id={2}
                label="Email"
                predicted=""
                locked={false}
                active={false}
                />
                <InputField 
                id={3}
                label="Password"
                predicted=""
                locked={false}
                active={false}
                />
                <div className="Button">
                    <button>Sign Up</button>
                </div>
                <div className="cancelLink">
                    <Link className="cancel" to='/'>Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;