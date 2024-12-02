import React from 'react'



const AdminPage = () => {

  const userRegister = localStorage.getItem('registerToken') ;
  const role = localStorage.getItem('role') ;

  console.log(role) 
  if(role == 'admin'){
    return (
      <div className='dashboard'>
        i am admin dashboard 
      </div>
    )
  }
  else{
    return(
    <div className='dashboard'>
      Access Deined.
    </div>
    )
  }
}

export default AdminPage