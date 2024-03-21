import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import { getUsers } from '../api';

const Dashboard = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsers();
            setUsers(usersData);
        };
        fetchUsers();
    }, []);

    return (
        <div className={'container-fluid dashboard-container'}>
            <UserList users={users} isEditMode={true}/>
        </div>
    );
};

export default Dashboard;
