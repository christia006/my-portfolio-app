import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // atau App.jsx
import './index.css'; // <<< INI HARUS DIIMPOR PERTAMA UNTUK OVERRIDE TEMA
import 'bootstrap/dist/css/bootstrap.min.css'; // <<< Kemudian Bootstrap CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
