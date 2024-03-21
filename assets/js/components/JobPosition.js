import React, {useState} from 'react';
import TesterFields from "./TesterFields";
import DeveloperFields from "./DeveloperFields";
import ProjectManagerFields from "./ProjectManagerFields";

const JobPosition = ({ onChange, user = null, isEditMode = false  }) => {
    const [jobPosition, setJobPosition] = useState(isEditMode ? user.job_position : '');
    const [skills, setSkills] = useState(isEditMode ? user.skills : {});

    const handleSelectChange = (name, position) => {
        setJobPosition(position);
        onChange(name, position);
    };

    const handleSkillsChange = (name, value) => {
        const updatedSkills = { ...skills, [name]: value };

        setSkills(updatedSkills);
        onChange('skills', updatedSkills);
    }

    return (
        <>
            <div className={'mb-3 mt-5'}>
                <select name="job_position" className={'form-control'} defaultValue={jobPosition}
                        onChange={(e) => handleSelectChange(e.target.name, e.target.value)}>
                    <option value="">Wybierz stanowisko</option>
                    <option value="tester">Tester</option>
                    <option value="developer">Developer</option>
                    <option value="project-manager">Project Manager</option>
                </select>
            </div>
            {jobPosition === 'tester' && <TesterFields onChange={handleSkillsChange} isEditMode={isEditMode} user={user}/>}
            {jobPosition === 'developer' && <DeveloperFields onChange={handleSkillsChange} isEditMode={isEditMode} user={user}/>}
            {jobPosition === 'project-manager' && <ProjectManagerFields onChange={handleSkillsChange} isEditMode={isEditMode} user={user}/>}
        </>
    );
}

export default JobPosition;