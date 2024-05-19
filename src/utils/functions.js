export const ApproveAndTransfer =  async() => {
    const web3              = new Web3(walletProvider || "http://localhost:8545");
    const contract         = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    const token_contract   = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);

    const plan_amount = toFixed(plan_amt*1e18);

    token_contract.methods.approve(CONTRACT_ADDRESS, plan_amount.toString()).send({ from: address }).then((res)=>{
      
    contract.methods.registerandbuy(address,sponsor_id,plan_amount).send({ from: address }).then((d)=>{
      console.log("success",d);
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
      

    })
    .catch((e)=>console.log('eeeee',e))
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


