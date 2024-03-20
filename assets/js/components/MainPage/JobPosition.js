import React from 'react';
import TesterFields from "./TesterFields";
import DeveloperFields from "./DeveloperFields";
import ProjectManagerFields from "./ProjectManagerFields";

function JobPosition({ formData, handleChange }) {
    return (
        <>
            <div className={'mb-3 mt-5'}>
                <select name="position" className={'form-control'} value={formData.position} onChange={handleChange}>
                    <option value="">Select Position</option>
                    <option value="tester">Tester</option>
                    <option value="developer">Developer</option>
                    <option value="projectManager">Project Manager</option>
                </select>
            </div>
            {formData.position === 'tester' && <TesterFields handleChange={handleChange} />}
            {formData.position === 'developer' && <DeveloperFields handleChange={handleChange} />}
            {formData.position === 'projectManager' && <ProjectManagerFields handleChange={handleChange} />}
        </>
    );
}

export default JobPosition;