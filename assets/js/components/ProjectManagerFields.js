import React, {useState} from 'react';

const ProjectManagerFields = ({onChange, isEditMode = false, user = null }) => {

    const [isScrumKnowsChecked, setIsScrumKnowsChecked] = useState(() => {
        return isEditMode ? user.skills.has_scrum_knowledge : false;
    });

    const handleScrumCheckboxChange = (e) => {
        setIsScrumKnowsChecked(e.target.checked);
        onChange(e.target.name, e.target.checked);
    };

    return (
        <>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name={"project_methodologies"} defaultValue={isEditMode ? user.skills.project_management_methodologies : ''}
                       placeholder="Project Management Methodologies" onChange={(e) => onChange(e.target.name, e.target.value)}/>
            </div>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name={"reporting_systems"} defaultValue={isEditMode ? user.skills.reporting_systems : ''}
                       placeholder="Reporting Systems" onChange={(e) => onChange(e.target.name, e.target.value)}/>
            </div>
            <div className={'form-check mb-3 mt-5'}>
                <input type="checkbox" checked={isScrumKnowsChecked} className={'form-check-input'}
                       name={"has_scrum_knowledge"} id={'scrumCheckInput'} onChange={handleScrumCheckboxChange}/>
                <label className={'form-check-label'} htmlFor={'scrumCheckInput'}>zna Scrum</label>
            </div>
        </>
    );
}

export default ProjectManagerFields;
