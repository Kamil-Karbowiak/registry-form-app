import React, {useState} from 'react';

import '../../../styles/app.css';
import { createRoot } from 'react-dom/client';

const App = () => {
    const [name, setName] = useState("");

    return (
        <form>
            <label>Imię:
                <input type={'text'} value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>Nazwisko:
                <input type={'text'} value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>Email:
                <input type={'email'} value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
        </form>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>);