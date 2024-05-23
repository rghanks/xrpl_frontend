import React, { useEffect, useState } from 'react'
import Header from './inc/header'
import Footer from './inc/footer'
import Section1 from './sections/section1'
import Section2 from './sections/section2'
import Section3 from './sections/section3'
import Section4 from './sections/section4'
import Section5 from './sections/section5'
import Preloader from './inc/preloder'
import {  useWeb3ModalAccount, useDisconnect } from '@web3modal/ethers/react'
import { URL } from '../utils/constants'
import axios from 'axios'


const Dashboard = () => {
  const { address, isConnected } = useWeb3ModalAccount()
  const { disconnect } = useDisconnect()
  const [ isLoggedIn, setIsLoggedIn] = useState();
  localStorage.setItem('isLoggedIn',false);

  const checkUser = async() =>{
    console.log("called");
    const response = await axios.get(`${URL}/user?id=${address}`);
    if(response){
       (response.data.length === 0) ? localStorage.setItem("isLoggedIn", false) : localStorage.setItem("isLoggedIn", true);
         //(response.data.length === 0) ? setIsLoggedIn(false) : setIsLoggedIn(true);         
      }
    }
  
    useEffect(() =>{
     setInterval(() => {
         
      if(isConnected){
        checkUser();
      }
      
     }, 3000)
    },[])
       
  if (window.ethereum) {
      window.ethereum.on('accountsChanged', function () { 
        checkUser();
      })
  }

  return (
    <>
      <Preloader />
      <Header />

      {/* { (isConnected && isLoggedIn === 'true') ?   */}
          <>        
           <Section1 /> 
           <Section2 /> 
          </>  
          {/* : */}
          <Section5 />            
      {/* }      */}
      
       
      <Footer />
    </>
  )
}

export default Dashboard