import React from 'react';
import Form from "./components/MainPage/Form";
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById('root'));
root.render(
    <div className={'container-fluid'}>
    <Form/>
    </div>
);