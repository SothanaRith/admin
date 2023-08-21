
import './App.css';
import React from 'react';
import Data from "./page/data"
import User from './page/user';
import Home from './page/home';
import UpdateData from './page/updateData';
import UpdateUser from './page/updateUser';
import Add from './page/add.jsx';
import Comment from './page/comment'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './style.scss'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Home/>,
  },
  {
    path: '/user', 
    element: <User/>,
  },
  {
    path: '/data', 
    element: <Data/>,
  },
  {
    path: '/updateData/:id', 
    element: <UpdateData/>,
  },
  {
    path: '/updateUser', 
    element: <UpdateUser/>,
  },
  {
    path: '/add', 
    element: <Add/>,
  },
  {
    path: '/comment', 
    element: <Comment/>,
  },
  
  
  

]);
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
      
    </div>
  );
}

export default App;
