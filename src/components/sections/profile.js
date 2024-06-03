import React from 'react'

const Profile = ({ data }) => {
  return (
    <>
    
    <section class="services pt-0" style={{marginTop:"100px"}}>
        <div class="services__title">
            <div class="section-title text-center">
                <span>Welcome!!!</span>
                <h2>User Id : <b id="spanuserid">{ data ? data[0]?.member_user_id : "" }</b>  </h2> 
                {/* <a class="btn btn-warning bg-warning" onClick={() => {navigator.clipboard.writeText(`${window.location.href}?id=${data[0].member_user_id}`)}}>Copy Referral Link</a> */}
            </div>
            <br />
        </div>
        <div class="container ">
            <div class="row">
                <div class="col-lg-4">
                </div>
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-4 col-md-3 col-sm-6 text-center">
                            <div class="level-item bordered mb-4 mt-xl-3">
                                <div class="bordered__inner bordered--double_angled bordered--bg_top">
                                    <div class="level-item__title title title--grad mb-0">Reffered By</div>
                                    <div class="level__inner pb-4 pt-3">
                                        <div class="level-item__digit title" id="yourspanreferralbonus">
                                            { data ? data[0]?.sponsor_id : "" }
                                        </div>
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
                        <div class="col-lg-4 col-md-3 col-sm-6 text-center">
                            <div class="level-item bordered mb-4 mt-xl-3">
                                <div class="bordered__inner bordered--double_angled bordered--bg_top">
                                    <div class="level-item__title title title--grad mb-0"> Partners</div>
                                    <div class="level__inner pb-4 pt-3">
                                        <div class="level-item__digit title" id="yourspanuniversalpool">
                                        { data ? data[0]?.total_direct : 0 }
                                        </div>
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
                        <div class="col-lg-4 col-md-3 col-sm-6 text-center">
                            <div class="level-item bordered mb-4 mt-xl-3">
                                <div class="bordered__inner bordered--double_angled bordered--bg_top">
                                    <div class="level-item__title title title--grad mb-0"> Team</div>
                                    <div class="level__inner pb-4 pt-3">
                                        <div class="level-item__digit title" id="yourspanm6bonus">
                                            { data ? data[1]?.total_team : 0 }
                                        </div>
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
                                        <div class="level-item__title title title--grad mb-0"> Profits </div>
                                        <div class="level__inner pb-4 pt-3">
                                            <div class="level-item__digit title" id="spancompletewalletaddress">  { data ? data[0]?.wallet_amount : 0  }</div>
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
                                        <div class="level-item__title title title--grad mb-0">Direct Business</div>
                                        <div class="level__inner pb-4 pt-3">
                                            <div class="level-item__digit title" id="spanreferredby"> { data ? data[1]?.direct_business : 0 }</div>
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
    </section>
    
    </>
  )
}

export default Profile