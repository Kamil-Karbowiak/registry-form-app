import React, { useState } from 'react';
import JobPosition from './JobPosition';

function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        description: '',
        position: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Do something with form data
    };

    return (
        <form onSubmit={handleSubmit} className={'mx-auto'}>
            <h4 className="text-center">Formularz rejestracyjny</h4>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name="firstName" value={formData.firstName}
                       onChange={handleChange}
                       placeholder="First Name"/>
            </div>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name="lastName" value={formData.lastName}
                       onChange={handleChange}
                       placeholder="Last Name"/>
            </div>
            <div className={'mb-3 mt-5'}>
                <input type="email" className={'form-control'} name="email" value={formData.email}
                       onChange={handleChange} placeholder="Email"/>
            </div>
            <div className={'mb-3 mt-5'}>
                <textarea name="description" className={'form-control'} value={formData.description}
                          onChange={handleChange}
                          placeholder="Description"></textarea>
            </div>
            <JobPosition formData={formData} handleChange={handleChange}/>
            <button type="submit" className={'btn btn-primary'}>Submit</button>
        </form>
    )
        ;
}

export default Form;
