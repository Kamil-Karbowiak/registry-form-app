import React from 'react';

function DeveloperFields({ handleChange }) {
    return (
        <>
        <div className={'mb-3 mt-5'}>
            <input type="text" className={'form-control'} name="ideEnvironments" onChange={handleChange}
                   placeholder="IDE Environments"/>
        </div>
        <div className={'mb-3 mt-5'}>
            <input type="text" className={'form-control'} name="programmingLanguages" onChange={handleChange}
                   placeholder="Programming Languages"/>
        </div>
        <div className={'form-check'}>
            <input type="checkbox" className={'form-check-input'} name="knowsMySQL" id={'mysqlCheckInput'} onChange={handleChange}/>
            <label className={'form-check-label'} htmlFor={'mysqlCheckInput'}>zna MySQL</label>
        </div>
        </>
    )
        ;
}

export default DeveloperFields;