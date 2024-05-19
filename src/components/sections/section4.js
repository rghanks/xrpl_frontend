import React, { useEffect, useState } from 'react'
import {URL} from '../../utils/constants'

const Section4 = () => {     
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(`${URL}/transactions`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
        });
    }, []);
    
  return (
     <>
           
        <section class="container glass">
            <div class="col-md-12 text-center">
                <div class="services__title">
                    <div class="section-title">
                        <h2>Recent Transactions</h2>
                        <br />
                    </div>
                    {/* <p>
                      <img src="img/new/about_1.png" alt="" />
                    </p> */}
                    {/* <a href="#learn" class="primary-btn">Learn More About XRPL</a>  */}
                </div>
                <div class="table-responsive">
                    <table class="table mb-0 pp-table-info table-striped mb-4" id="levelincomelist">
                        <tr>
                            <th class="col-1">Date</th>
                            <th class="col-2"> User Id</th>
                            <th class="col-3"> Hashcode </th>
                            <th class="col-4"> Profits </th>
                        </tr>
                       
                        {data.map((data, index) => (
                            <tr key={index}> 
                                <td >                                 
                                    {new Date(data.created_at).toLocaleDateString()}
                                </td>
                                <td> 
                                    {data.member_user_id}
                                </td> 
                                <td> 
                                    {data.hash_code}
                                </td> 
                                <td> 
                                    {data.income_amt}
                                </td> 
                            </tr>
                            
                        ))}
                            
                       
                    </table>
                </div>
            </div>
        </section>
   
     </>
  )
}

export default Section4