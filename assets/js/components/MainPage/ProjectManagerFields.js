import React from 'react';

function ProjectManagerFields({ handleChange }) {
    return (
        <>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name="projectManagementMethodologies"
                       onChange={handleChange} placeholder="Project Management Methodologies"/>
            </div>
            <div className={'mb-3 mt-5'}>
                <input type="text" className={'form-control'} name="reportingSystems" onChange={handleChange}
                       placeholder="Reporting Systems"/>
            </div>
            <div className={'form-check'}>
                <input type="checkbox" className={'form-check-input'} name="knowsScrum" id={'scrumCheckInput'} onChange={handleChange}/>
                <label className={'form-check-label'} htmlFor={'scrumCheckInput'}>zna Scrum</label>
            </div>
        </>
    );
}

export default ProjectManagerFields;
