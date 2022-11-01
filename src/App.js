import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Pages/Dashboard';
import Login from './component/Pages/Login';
import Welcome from "./component/Pages/Profile/Welcome"
import Profile from "./component/Pages/Profile/Profile"
import { Route, Router, Routes } from 'react-router-dom';
import Api from './api/Api';
import { useEffect, useState } from 'react';
import Property from './component/Pages/Property/Property';
import Contact from './component/Pages/Contact/Contact';
import ContactDetail from './component/Pages/Contact/ContactDetail';
import NewProperty from './component/Pages/Property/NewProperty';
import DetailProperty from './component/Pages/Property/DetailProperty';


import axios from 'axios';

function App() {

  
  // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMTQ5MDViOGE1N2UxOGU3MzI3NzBmOGM4MTEwMjE1ODE0YzQyYzhiODM0MDdjMjYwYmQwYzQ0N2E0NDZjNDRiMDZhNTU0M2UzM2ViNDA2MzMiLCJpYXQiOjE2NjcxNjc2MzEuOTEyOTM2LCJuYmYiOjE2NjcxNjc2MzEuOTEyOTQ1LCJleHAiOjQ4MjI4NDEyMzEuNzQ2NDUzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.MyLylXJMKIcphMP0kplTaZRnymZNxfwMDlazUAwp--t-FSHcZIsQjV2waBEcDEztzplRZYdQzgmNE96BcxhwQoQOj51TUwb-Y9-MWPbGDRHPknKsxTU1U9p039ARlg8GgTDpRaPfA18APAfN7DY1GVCLE-pSJN43Cr5YubfOzfdZGjOpD5YaDdoozOaLMRMiyk8StUqXhjy1ghUvLgLBqPT5UU5fJcAlApq1y5pA34d8cGXdGtm4LD20ol64m7HfwS2iWez94KGW-bAQSm6QK94CF2M-nmPxtJOuOO7WSDbwFvrYqgHQR3f7pfqVr-GIG_7tmO6B9_gH8T6_1sHRhagolapD7FQafHMySAO-lqgun1y6deE-y5hnjZXAGgF-fooq2a8raXyIo9skAhOazxeEwjCSl2ABDw-pZZRAQ6jIMaA4z4A5q_5TozMYCA4rrq_owA5ZC9TpL_3rOZ28NLRkYekIY0Zvbf9RmHMZ91Q6Quvxzwo-0nuw73H2o7dqFNt3md3oi4qxBlq6eKVpVANcLa0edru0rSPyuCJcaFhRcMB4PjTCySvw4W6c_jW7Ilye4zWkswD-233MbpxVim8SX9_9ezpuVdO5AYbgHZCEACPtL71IbzAr2ENGDu-B0pbj-LcoCROJcOq_og7BrsQIf0BU_4oZ_7JZ95k69js';
  
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` }
  // };

  // const getPropertyList = ()=>{
  //   api
  //   .getPropertyList()
  //   .then((response) => console.log(response.data.results.properties))
  //   .catch((err) => console.log(err));
  // }


  // useEffect(()=>{
  //   getPropertyList();
  // })

  return (
    <div className="App flex h-full bg-ghostWhite ">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>     
              <Route path="welcome" element={<Welcome/>}/>
              <Route path="profile" element={<Profile/>}/>

              <Route path="property" element={<Property />}/>
              <Route path="property/:id" element={<DetailProperty />} />
              <Route path="property/new" element={<NewProperty />} />
              <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
