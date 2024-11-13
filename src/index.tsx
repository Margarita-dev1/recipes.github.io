import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import { store } from './redux/store';
import {HashRouter, Route, Routes} from 'react-router-dom'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <HashRouter>
        <Provider store={store}>
            <Routes>
                <Route path="*" element={<App/>} />
            </Routes>
        </Provider>
    </HashRouter>
);

