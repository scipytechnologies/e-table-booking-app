import React,{useState,useEffect} from 'react'
import styles from './InternalApp.module.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Settings from './containers/Settings';
import NavBar from './containers/NavBar';
import Home from './containers/Home';
import TablesPage from './pages/booking/TablesPage';
import BookingPage from './pages/booking/BookingPage';
import AdminPage from './pages/booking/admin';

const InternalApp = () => {
 
  const [admin,setAdmin] = useState();
  
  
 
  useEffect(() => {
     const resName = JSON.parse(localStorage.getItem("admin"));
     console.log(resName);  
    if(resName == null){
    setAdmin(false)
  }
  else{
    setAdmin(true)
  }
  console.log(admin);
  });


  function Dashboard(){
    return(
    <div className={styles.InternalApp}>
    <div className={styles.NavBar}>
      <NavBar/>
    </div>
    <div className={styles.View}>
      <Routes>
        <Route path='*' element={<Navigate replace to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/booking'>
          <Route path='/booking' element={<BookingPage/>}/>
          <Route path='/booking/tables' element={<TablesPage/>}/>
        </Route>
      </Routes>
    </div>
  </div>
  )
  }
 
  return (
    <div className='App'>
    {admin ?
     <AdminPage/>
      :
    <Dashboard/>
    }
  </div>
  )
}

export default InternalApp;