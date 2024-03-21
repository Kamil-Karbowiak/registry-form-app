import React from 'react';
import Form from "./components/Form";
import {createRoot} from "react-dom/client";
import { registryUser } from './api';

const root = createRoot(document.getElementById('root'));

root.render(
    <div className={'container-fluid'}>
    <Form onSave={registryUser}/>
    </div>
);