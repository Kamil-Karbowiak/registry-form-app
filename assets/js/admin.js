import React from 'react';
import {createRoot} from "react-dom/client";
import Dashboard from "./components/Dashboard";
import {deleteUser, loginUser, updateUser} from "./api";

const root = createRoot(document.getElementById('root'));
root.render(
    <Dashboard onSave={updateUser} onDelete={deleteUser}/>
);