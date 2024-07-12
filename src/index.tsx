import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import User from './pages/User';
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Provider } from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = 
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/user' element={<User/>}/>
        </Routes>
    </BrowserRouter>
    </Provider>
    
root.render(
  router
);
