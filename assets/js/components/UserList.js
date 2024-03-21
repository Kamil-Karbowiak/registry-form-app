import React, {useState} from 'react';
import Form from "./Form";

const UserList = ({onSave, onDelete, users, isEditMode = false }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEditView = (user) => {
        setSelectedUser(user);
        setShowDetails(true);
    };

    const handleBack = () => {
        setShowDetails(false);
    };

    return (
        <>
            {!showDetails ? (
            <>
                <h2>Lista użytkowników</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Email</th>
                        <th>Opis</th>
                        <th>Stanowisko</th>
                        <th>Akcje</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.description}</td>
                        <td>{user.job_position}</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="Akcje">
                                <button type="button" className="btn btn-sm btn-primary" onClick={() => handleEditView(user)}>Edycja</button>
                                <button type="button" className="btn btn-sm btn-danger" onClick={() => onDelete(user.id)}>Usuń</button>
                            </div>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </>
            ) : (
                <Form isEditMode={isEditMode} user={selectedUser} onBack={handleBack} onSave={onSave}/>
            )}
        </>
)
    ;
};

export default UserList;
