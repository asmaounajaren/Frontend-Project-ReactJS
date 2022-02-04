// import StripeCheckout from 'react-stripe-checkout';
// import {useState, useEffect} from "react"
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const KEY="pk_test_51KMEhUIfyVqiBUpiifOjWcMph1U17JKAQ25BGsmY3eg129Zx6OcM9AWi0umMEtULCsJx6bb8VCW2QRGjaJ0aQg7X001NVAXEDC"

// const Pay=()=>{
//     const [stripeToken, setStripeToken] = useState(null);

//     const history = useNavigate();
//     const onToken=(token)=>{
//         setStripeToken(token);
//     }
//     useEffect(()=>{
//         const makeRequest = async()=>{
//             try{
//                 const res= axios.post("http://localhost:5000/api/checkout/payment",
//                 {
//                     tokenId: stripeToken.id,
//                     amount: 2000,
//                 }
//                 );  
//                 console.log(res.data); 
//                 history.push("/succees");
//             }catch(err){
//                 console.log(err);
//             }
//         };
//         stripeToken && makeRequest()
//     },[stripeToken, history]);
//     return (
//         <div
//             style={{
//                 height: "100vh",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//             }}
//             >
//                 {stripeToken? (
//                     <span> Processing, Please wait...</span>
//                 ):(
//             <StripeCheckout 
//             name="Shop" 
//             image="https://avatars.githubusercontent.com/u/1486366?v=4"
//             billingAddress
//             shippingAddress
//             description='Your Total is ...$'
//             amount={2000}
//             token={onToken}
//             stripeKey={KEY}>
//                 <button
//                     style={{
//                         border:"none",
//                         width: 120,
//                         borderRadius: 5,
//                         padding: "20px",
//                         backgroundColor: "black",
//                         color: "white",
//                         fontWeight: "600",
//                         cursor: "pointer",
//                     }}
//                     >
//                         Pay Now
//                 </button>

//             </StripeCheckout>
//             )}
//         </div>   
//     );
// };
// export default Pay;