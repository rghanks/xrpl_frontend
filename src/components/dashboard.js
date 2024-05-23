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
import Profile from './sections/profile'


const Dashboard = () => {
  const { address, isConnected } = useWeb3ModalAccount()
  const [isExits, setIsExits] = useState(false);
  const [user, setUser] = useState();

  
  useEffect(() =>{
    //  console.log(isConnected,address);
        if(isConnected && !isExits){
            fetch(`${URL}/user?id=${address}`)
            .then( (res) => {
                return res.json();
              })
            .then((user) => {
                (user.length === 0) ? setIsExits(false) : setIsExits(true); 
                
                setUser(user);
             }).catch((e)=>{
              setIsExits(false);
              console.log("User not exist!!!")
            })         

        }else{
            console.log('Not Connected')
        }
  
  },[address,isConnected])
     // console.log(address,isExits)
     if (window.ethereum) {
          window.ethereum.on('accountsChanged', function () {
              setIsExits(false);
          })
    }

    

  return (
    <>
      <Preloader />
      <Header />

      { (isExits && isConnected) ?  
          <>
           <Profile data={user} />
           {/* <Section1 data={user} />  */}
           <Section2 /> 
           <Section4 />
          </>  
          :
          <Section5 />            
      }     
      
       
      <Footer />
    </>
  )
}

export default Dashboard