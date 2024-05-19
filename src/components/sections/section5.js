import React, {useState} from 'react'
import Web3 from 'web3';
import axios from 'axios';
import { CONTRACT_ADDRESS, CONTRACT_ABI, TOKEN_ADDRESS, TOKEN_ABI } from '../../utils/constants'
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { URL } from '../../utils/constants';

const Section5 = () => {

    const { address, isConnected } = useWeb3ModalAccount()
    const { walletProvider } = useWeb3ModalProvider();
    const [sponsor_id, set_sponsor_id] = useState("")
    const [plan_amt, set_plan_amt] = useState(10);
    const [hashcode, setHashcode] = useState("");

    const formData = new FormData();  
    formData.append('wallet_address', address); 
    formData.append('sponsor_id', sponsor_id); 
    formData.append('plan_amt', plan_amt); 
    formData.append('hashcode', hashcode); 
  
    const ApproveAndTransfer =  async() => {
          const web3              = new Web3(walletProvider || "http://localhost:8545");
          const contract         = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
          const token_contract   = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);
  
          const plan_amount = toFixed(plan_amt*1e18);
  
          token_contract.methods.approve(CONTRACT_ADDRESS, plan_amount.toString()).send({ from: address }).then((res)=>{
            
          contract.methods.registerandbuy(address,sponsor_id,plan_amount).send({ from: address }).then((d)=>{
            // console.log("success",d);
            // All signup code......
            const Hashcode =  d.transactionHash.toString(); 
            setHashcode(Hashcode);

            axios.post(`${URL}/signup`, formData)
                .then((response) => {
                    console.log(response.data);
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
  
  //console.log(sponsor_id);
  function handleChange(event) {
    set_sponsor_id(event.target.value);
  }
 
  return (
    <>
       <section class="services" style={{ marginTop: "100px" }}>
        <div class="container glass">
            <div class="section-title">
                <h2 class="title-line-center title text-left left-left">Sign up</h2>
            </div>

            <div class="row align-items-center">
                <div class="col-lg-10">
                    <input type="text" 
                           placeholder="Sponsor User Id" 
                           id="txtviewuserid" 
                           class="form-control bg-white"
                           value={sponsor_id}
                           onChange={handleChange}
                           />
                    <ul class="matic-ul">
                        <li>
                            <a onClick={ApproveAndTransfer}>
                                Sign Up
                            </a>
                            {/* <button type="submit">Submit</button> */}
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <img src="img/user.png" class="img-fluid w-100" />
                </div>
            </div>
           
        </div>
    </section>
    </>
  )
}

export default Section5