import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // TailwindCSS가 설정되어 있다면 필요

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
