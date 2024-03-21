import React, { useState } from 'react';

const LoginForm = ({onSubmit}) => {

    const [inputs, setInputs] = useState({});

    const handleChange = (name, value) => {
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputs);
    }

    return (
        <>
            <form onSubmit={handleSubmit} method={'POST'} className={'login-form mx-auto'}>
                <h4 className="text-center">Logowanie</h4>
                <div className={'mb-3 mt-5'}>
                    <input type="text" className={'form-control'} name={'username'}
                           placeholder="Login" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
                </div>
                <div className={'mb-3 mt-5'}>
                    <input type="test" className={'form-control'} name={'password'}
                           placeholder="Hasło" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
                </div>

                <button type="submit" className={'btn btn-primary'}>Zaloguj się</button>
            </form>
        </>
    );
}

export default LoginForm;
