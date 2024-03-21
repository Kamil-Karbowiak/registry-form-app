import React, {useState} from 'react';

const DeveloperFields = ({onChange, isEditMode = false, user = null }) => {

    const [isMysqlKnowsChecked, setIsMysqlKnowsChecked] = useState(() => {
        return isEditMode ? user.skills.has_mysql_knowledge : false;
    });

    const handleMysqlCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setIsMysqlKnowsChecked(isChecked);
        onChange(e.target.name, isChecked);
    };

    return (
        <>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name={"integrated_development_environments"} defaultValue={isEditMode ? user.skills.integrated_development_environments : ''}
                       placeholder="IDE Environments" onChange={(e) => onChange(e.target.name, e.target.value)}/>
            </div>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name={"programming_languages"} defaultValue={isEditMode ? user.skills.programming_languages : ''}
                       placeholder="Programming Languages" onChange={(e) => onChange(e.target.name, e.target.value)}/>
            </div>
            <div className={'form-check mb-3 mt-5'}>
                <input type="checkbox" className={'form-check-input'} name={"has_mysql_knowledge"} id={'mysqlCheckInput'} checked={isMysqlKnowsChecked}
                       onChange={handleMysqlCheckboxChange}/>
                <label className={'form-check-label'} htmlFor={'mysqlCheckInput'}>zna MySQL</label>
            </div>
        </>
    );
}

export default DeveloperFields;