import React, { useState, useEffect } from 'react';
import UserList from './UserList';
import {getUsers, loginUser} from '../api';
import LoginForm from "./LoginForm";

const Dashboard = ({onSave, onDelete}) => {
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogin = async (credentials) => {
        const loginResult = await loginUser(credentials);
    }

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsers();
            setUsers(usersData);
        };

        fetchUsers();
    }, []);

    return (
        isLoggedIn ?
        (<div className={'container-fluid dashboard-container'}>
            <UserList onSave={onSave} onDelete={onDelete} users={users} isEditMode={true}/>
        </div>) : (
            <LoginForm onSubmit={handleLogin }/>
        )
    );
};

export default Dashboard;
