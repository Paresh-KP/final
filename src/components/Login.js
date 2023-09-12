import React, { useState} from "react";
// import { Navigate} from "react-router-dom";
// import axios from "axios";
// import {toast} from 'react-hot-toast';
// import { UserContext } from "../context/userContext";
import logo from './logo.svg';

export default function Login() {
  const [data, setData] = useState({
    email : '',
    password : '',
  });
//   const [redirect,setRedirect] = useState(false);
//   const {setUser} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/.netlify/functions/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type':'application/json'},
      });
      if (response.status === 200) {
        alert('registration successful');
      } else {
        alert('registration failed');
      }
  }

//   if(redirect){
//     return <Navigate to={'/dashboard'} />
//   }

  return (
    
    
    <div className="overflow-hidden bg-gradient-to-r from-blue-500 to-green-500 relative flex items-center justify-center min-h-screen">
      
      <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
     <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
    <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />
   <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8" />

   
    
  

    <div className="flex justify-center items-center bg-white p-8 rounded shadow-md w-96">
          
          <form className="bg-white" style={{width:'400px'}} onSubmit={handleSubmit}>
          <div className="flex justify-center items-center ">
          <img className="w-40 h-40 justify-center" src={logo} alt="" />
           
      </div>
            <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center">Login</h1>
             <p className="text-sm font-normal text-gray-600 mb-7"></p>
            
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              
               <input className="pl-2 outline-none border-none w-full" value={data.email}
               onChange={(e) => setData({...data,email: e.target.value})}
               type="email" 
               placeholder="Email"  />
             </div>
             <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              
               <input className="pl-2 outline-none border-none w-full" value={data.password}
                onChange={(e) => setData({...data,password: e.target.value})}
               type="password"  placeholder="Password" />
             </div>
             <button type="submit" className="block w-full mt-4 py-2 rounded-2xl text-white font-semibold mb-2" style={{backgroundColor:'#140061'}}>Login</button>
             <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
           </form>
        </div>
      </div>
      
    
      
    
  );
}

 




