import React, { useState } from 'react';
import JobPosition from './JobPosition';

function Form({onSave, isEditMode = false, user = null, onBack = null}) {

    const [inputs, setInputs] = useState({});

    const handleChange = (name, value) => {
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave(inputs);
    }

    return (
        <>
            {isEditMode && (<button className={'btn btn-primary'} onClick={onBack}>Powrót</button>)}
            <form onSubmit={handleSubmit} method={'POST'} className={'registry-form mx-auto'}>
                <h4 className="text-center">{isEditMode ? 'Edycja użytkownika' : 'Formularz rejestracyjny'}</h4>
                <div className={'mb-3 mt-5'}>
                    <input type="text" className={'form-control'} name={'first_name'} defaultValue={isEditMode ? user.first_name : ''}
                           placeholder="Imię" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
                </div>
                <div className={'mb-3 mt-5'}>
                    <input type="text" className={'form-control'} name={'last_name'} defaultValue={isEditMode ? user.last_name : ''}
                           placeholder="Nazwisko" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
                </div>
                <div className={'mb-3 mt-5'}>
                    <input type="email" className={'form-control'} name={'email'} defaultValue={isEditMode ? user.email : ''}
                           placeholder="Email" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
                </div>
                <div className={'mb-3 mt-5'}>
                    <textarea name="description" className={'form-control'} defaultValue={isEditMode ? user.description : ''}
                           placeholder="Opis" onChange={(e) => handleChange(e.target.name, e.target.value)}>
                    </textarea>
                </div>
                <JobPosition user={user} isEditMode={isEditMode} onChange={handleChange}/>
                <button type="submit" className={'btn btn-primary'}>Zapisz</button>
            </form>
        </>
    );
}

export default Form;
