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
    <Provider store={store}>
        <HashRouter>
                <Routes>
                    <Route path="/" element={<App/>} />
                </Routes>
        </HashRouter>
    </Provider>
);

