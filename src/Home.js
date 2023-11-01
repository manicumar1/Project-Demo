import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
//import axios from 'axios';



const Home = () => {
    const navigate = useNavigate();

    const redirectCAll = () =>{
        navigate("/login")
        }
        
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"10%"}}>
     <button onClick={redirectCAll}>Log in</button>
    </div>
  );
};

export default Home;
