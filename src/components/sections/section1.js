import React, { useEffect, useState } from 'react'
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import {URL} from '../../utils/constants'

const Section1 = ({data}) => {
    const { address, isConnected } = useWeb3ModalAccount() 
    // const [data, setData] = useEffect();

    // useEffect(()=>{
    //     console.log('callled...')
    //     fetch(`${URL}/user?id=${address}`)
    //         .then( (res) => {
    //             return res.json();
    //           })
    //         .then((user) => {
    //               setData(user);                
    //          }).catch((e)=>{             
    //           console.log("User not exist!!!")
    //         }) 
    //  })

  return (
    <>
      
    <section class="services" style={{marginTop:"100px"}} >
        <div class="container text-center">
            <div class="services__title">
                <div class="section-title">
                    <h2>Affiliate Details     </h2>
                    <a href="#" class="div-collapse-btn" id="user-details">
                        <i class="fa-solid fa-chevron-down"></i>
                    </a>
                </div>
                <p>
                  <img src="img/new/about_1.png" alt="" />
                </p>
                <a href="#learn" class="primary-btn">Learn More About XRPL</a> 
            </div>
            <div class="div-collapse">
                <div class="row align-items-center">
                    <div class="col-lg-4">
                    </div>
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 text-center">
                                <div class="level-item bordered mb-4 mt-xl-3">
                                    <div class="bordered__inner bordered--double_angled bordered--bg_top">
                                        <div class="level-item__title title title--grad mb-0">Connected user</div>
                                        <div class="level__inner pb-4 pt-3">
                                            <div class="level-item__digit title" id="spancompletewalletaddress"> { data ? data[0]?.member_user_id : "" }</div>
                                        </div>
                                        <div class="bordered__border bordered__border--left"></div>
                                        <div class="bordered__border bordered__border--right"></div>
                                    </div>
                                    <div class="bordered__icon bordered__icon--left"><img src="img/new/bordered-lines.svg" alt="" /></div>
                                    <div class="bordered__icon bordered__icon--right">
                                        <img src="img/new/bordered-lines-narrow.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 text-center">
                                <div class="level-item bordered mb-4 mt-xl-3">
                                    <div class="bordered__inner bordered--double_angled bordered--bg_top">
                                        <div class="level-item__title title title--grad mb-0">Reffered By</div>
                                        <div class="level__inner pb-4 pt-3">
                                            <div class="level-item__digit title" id="spanreferredby">{ data ? data[0]?.sponsor_id : ""}</div>
                                        </div>
                                        <div class="bordered__border bordered__border--left"></div>
                                        <div class="bordered__border bordered__border--right"></div>
                                    </div>
                                    <div class="bordered__icon bordered__icon--left"><img src="img/new/bordered-lines.svg" alt="" /></div>
                                    <div class="bordered__icon bordered__icon--right">
                                        <img src="img/new/bordered-lines-narrow.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" id="referrrallinksection" style={{display:"none"}}>
                            <div class="col-lg-12">
                                <div class="row text-center">
                                    <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                                        <div class="level-item bordered mb-4 mt-xl-3">
                                            <div class="bordered__inner bordered--double_angled bordered--bg_top refreral_section" style={{paddingBottom:"20px"}}>
                                                <div class="level-item__title title title--grad mb-0">My Referral Link</div>
                                                <div class="level__inner pb-4 pt-3">
                                                    <input type="hidden" id="refaddress" value="indexa0c0.html?ref=0x0000000000000000000000000000000000000000" />
                                                    <div class="level-item__digit title" id="spanreferralkey" onclick="copyToClipboard()" ondblclick="copyToClipboard()">https://dapp.metaomatic.in?ref=0x</div>
                                                    <h6 class="level-item__digit title" id="spancopiedmessage" style={{color: "#ffff", position: "absolute", display:"none", left: 0, right: 0, margin: "auto", bottom: "10px", background: "#d1a926", width: "220px", padding: "5px 0" }}></h6>
                                                </div>
                                                <div class="bordered__border bordered__border--left"></div>
                                                <div class="bordered__border bordered__border--right"></div>
                                            </div>
                                            <div class="bordered__icon bordered__icon--left"><img src="img/new/bordered-lines.svg" alt="" /></div>
                                            <div class="bordered__icon bordered__icon--right">
                                                <img src="img/new/bordered-lines-narrow.svg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-6 col-md-4 col-sm-6 text-center">
                                <div class="level-item bordered mb-4 mt-xl-3">
                                    <div class="bordered__inner bordered--double_angled bordered--bg_top">
                                        <div class="level-item__title title title--grad mb-0">Total Earning</div>
                                        <div class="level__inner pb-4 pt-3">
                                            <div class="level-item__digit title" id="spanavailablematic"> { data ? data[0]?.wallet_amount : 0.0000 } </div>
                                        </div>
                                        <div class="bordered__border bordered__border--left"></div>
                                        <div class="bordered__border bordered__border--right"></div>
                                    </div>
                                    <div class="bordered__icon bordered__icon--left"><img src="img/new/bordered-lines.svg" alt="" /></div>
                                    <div class="bordered__icon bordered__icon--right">
                                        <img src="img/new/bordered-lines-narrow.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-4 col-sm-6 text-center">
                                <div class="level-item bordered mb-4 mt-xl-3">
                                    <div class="bordered__inner bordered--double_angled bordered--bg_top">
                                        <div class="level-item__title title title--grad mb-0">Total Investment</div>
                                        <div class="level__inner pb-4 pt-3">
                                            <div class="level-item__digit title" id="spanmyinvestment"> { data ? data[0]?.topup_amount : 0.0000 } </div>
                                        </div>
                                        <div class="bordered__border bordered__border--left"></div>
                                        <div class="bordered__border bordered__border--right"></div>
                                    </div>
                                    <div class="bordered__icon bordered__icon--left"><img src="img/new/bordered-lines.svg" alt="" /></div>
                                    <div class="bordered__icon bordered__icon--right">
                                        <img src="img/new/bordered-lines-narrow.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

 


    </>
  )
}

export default Section1