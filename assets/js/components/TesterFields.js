import React, {useState} from 'react';

function TesterFields({onChange, isEditMode = false, user= null }) {

    const [isSeleniumKnowsChecked, setIsSeleniumKnowsChecked] = useState(() => {
        return isEditMode ? user.has_selenium_knowledge : false;
    });

    const handleSeleniumCheckboxChange = (e) => {
        setIsSeleniumKnowsChecked(e.target.checked);
        onChange(e.target.name, e.target.checked);
    };

    return (
        <>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name={"testing_systems"} defaultValue={isEditMode ? user.testing_systems : ''}
                       placeholder="Testing Systems" onChange={(e) => onChange(e.target.name, e.target.value)}/>
            </div>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name={"reporting_systems"} defaultValue={isEditMode ? user.reporting_systems : ''}
                       placeholder="Reporting Systems" onChange={(e) => onChange(e.target.name, e.target.value)}/>
            </div>
            <div className={'form-check mb-3 mt-5'}>
                <input type="checkbox" checked={isSeleniumKnowsChecked} className={'form-check-input'}
                       name={"has_selenium_knowledge"} id={'seleniumCheckInput'} onChange={handleSeleniumCheckboxChange} />
                <label className={'form-check-label'} htmlFor={'seleniumCheckInput'}>zna Selenium</label>
            </div>
        </>
    );
}

export default TesterFields;
