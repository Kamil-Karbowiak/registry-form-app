import React from 'react';

function TesterFields({ handleChange }) {
    return (
        <>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name="testingSystems" onChange={handleChange} placeholder="Testing Systems" />
            </div>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name="reportingSystems" onChange={handleChange} placeholder="Reporting Systems" />
            </div>
            <div className={'form-check mb-3 mt-5'}>
                <input type="checkbox" className={'form-check-input'} name="knowsSelenium" id={'seleniumCheckInput'} onChange={handleChange}/>
                <label className={'form-check-label'} htmlFor={'seleniumCheckInput'}>zna Selenium</label>
            </div>
        </>
    );
}

export default TesterFields;
