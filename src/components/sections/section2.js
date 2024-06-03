import React, { useEffect, useState } from 'react'
import Web3 from 'web3';
import axios from 'axios';
import { CONTRACT_ADDRESS, CONTRACT_ABI, TOKEN_ADDRESS, TOKEN_ABI } from '../../utils/constants'
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { URL } from '../../utils/constants';
import { toast } from 'react-toastify';

const Section2 = () => {
    const [upgraded_plan, setUpgraded_plan] = useState([]);
    const packages = [10,100,200,1150,2400,11500,24000,29000,45000,100000];
    
    const { address, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider();
    const [planAmount, set_plan_amt] = useState(0);
    const [hashcode, setHashcode] = useState("");
    
    // console.log(planAmount);

    const formData = new FormData();  
    formData.append('wallet_address', address);    
   
    const upgradePackage =  async(plan_amt) => {
          const web3              = new Web3(walletProvider || "http://localhost:8545");
          const contract         = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
          const token_contract   = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);
          // console.log(plan_amt);
          set_plan_amt(plan_amt); 
          formData.append('package',plan_amt);
          
          const plan_amount = toFixed(plan_amt*1e18);
  
          token_contract.methods.approve(CONTRACT_ADDRESS, plan_amount.toString()).send({ from: address }).then((res)=>{
            
          contract.methods.Deposit(plan_amount).send({ from: address }).then((d)=>{
             console.log("success",d);
            // All signup code......
            const Hashcode =  d.transactionHash.toString(); 
            //console.log("hash",Hashcode);
            setHashcode(Hashcode);
            formData.append('hashcode',Hashcode);

            axios.post(`${URL}/deposit`, formData)
                .then((response) => {
                    // console.log(response.data);
                    toast.success(response.data.msg);
                    upackages();
                })
                .catch((error) => {
                console.log(error);
                });
            
          }).catch((e)=>console.log('eeeee',e))
        }).catch((e)=>console.log('error',e))
  }
  
  
       
  function toFixed(x) {
    if (Math.abs(x) < 1.0) {
        var e = parseInt(x.toString().split("e-")[1]);
        if (e) {
            x *= Math.pow(10, e - 1);
            x = "0." + new Array(e).join("0") + x.toString().substring(2);
        }
    } else {
        var e = parseInt(x.toString().split("+")[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10, e);
            x += new Array(e + 1).join("0");
        }
    }
  return String(x);
  }
   
  const upackages = async() =>{
    const response = await axios.get(`${URL}/packages?address=${address}`);
    if(response){
        setUpgraded_plan(response.data);
    }
  }

  useEffect(()=>{
    upackages();
  },[])

  return (
    <>
        <section class=" section-padding bg-color-light invest joining spad" style={{ paddingBottom: "110px" }}>

            <div class="container glass" style={{ marginTop:"100px" }}>
                <div class="section-title">
                    <h2 class="title-line-center title text-left left-left">Upgrade Now</h2>
                </div>
                <div class="row">
                    <div class="form-group col-lg-12">
                        <ul class="matic-ul upgrade-ul">
                        { packages.map((d)=>(
                                <li   key={d} > 
                                    <a style={ (upgraded_plan.includes(d)) ? { background:"orange" } : {} } onClick={ (upgraded_plan.includes(d)) ? ()=>console.log("clicked") : ()=>upgradePackage(d) } >
                                        {d} XRP 
                                    </a>
                                </li>
                        ))}

                        </ul>
                    </div>
                    {/* <div class="col-lg-3">
                        <img src="img/new/joining_1.png" alt="" />
                    </div> */}
                </div>
            </div>

        </section>   

     </>
  )
}

export default Section2