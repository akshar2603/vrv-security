// Dashboard Component

import React from 'react'
import { useNavigate } from 'react-router-dom';
import Register from './Register';
const Dashboard = () => {
  const navigate = useNavigate() ;

  const userRegister = localStorage.getItem('registerToken') ;
  const role = localStorage.getItem('role') ;

  navigate('')
  if(role == 'admin'){
    return (
      <div className='dashboard'>
        i am admin dashboard 
      </div>
    )
  }
  else if(role == 'moderator'){
    return(
    <div className='dashboard'>
      i am moderator page
    </div>)
  }
  else{
    return(
    <div className='dashboard'>
      i am main page for user interface.
    </div>)
  }
}

export default Dashboard