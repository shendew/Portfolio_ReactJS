// import React, { useEffect, useState } from "react";
// import "./Confirm.css";
// import ServiceItem from "../ServiceItem/ServiceItem";
// import logo from "../../img/logo.png";
// import { useLocation } from "react-router-dom";
// import md5 from "crypto-js/md5";
// import axios from "axios";
// import { Alert } from "@mui/material";
// // import payhere from"https://www.payhere.lk/lib/payhere.js";

// export const Confirm = () => {
//   const location = useLocation();
//   const pack = location.state;
//   const [orderVals, setOrderVals] = useState({
//     merchant_id: process.env.merchant_id,
//     return_url:
//       "https://dev.bhasha.lk/payhere/payhere-playground/checkout-api/checkout-response",
//     cancel_url:
//       "https://dev.bhasha.lk/payhere/payhere-playground/checkout-api/checkout-response",
//     notify_url:
//       "https://dev.bhasha.lk/payhere/payhere-playground/checkout-api/checkout-notify",
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "Colombo",
//     country: "Sri Lanka",
//     order_id: "75725",
//     // items: pack.Title,
//     currency: "LKR",
//     amount: pack.Price,
//     hash: "",

//     whatsapp: "",
//     business_name: "",
//     theme_colors: "",
//     business_type: "",
//     data_zip: "",
//     more: "",
//   });






// // Put the payment variables here
// var payment = {
//     "sandbox": true,
//     "merchant_id": "121XXXX",    // Replace your Merchant ID
//     "return_url": undefined,     // Important
//     "cancel_url": undefined,     // Important
//     "notify_url": "http://sample.com/notify",
//     "order_id": "ItemNo12345",
//     "items": "Door bell wireles",
//     "amount": "1000.00",
//     "currency": "LKR",
//     "hash": "45D3CBA93E9F2189BD630ADFE19AA6DC", // *Replace with generated hash retrieved from backend
//     "first_name": "Saman",
//     "last_name": "Perera",
//     "email": "samanp@gmail.com",
//     "phone": "0771234567",
//     "address": "No.1, Galle Road",
//     "city": "Colombo",
//     "country": "Sri Lanka",
//     "delivery_address": "No. 46, Galle road, Kalutara South",
//     "delivery_city": "Kalutara",
//     "delivery_country": "Sri Lanka",
//     "custom_1": "",
//     "custom_2": ""
// };


//   const genHash = () => {
//     let merchantSecret = "MTc1MjM2MjUzNjEwNzc4NTM4MDUzNjQ3MzcyODMyMjgzNTc5NzUzOA==";
//     let merchantId = "1228394";
//     let orderId = "ItemNo12345";
//     let amount = pack.Price;
//     let hashedSecret = md5(merchantSecret).toString().toUpperCase();
//     let amountFormated = parseFloat(amount)
//       .toLocaleString("en-us", { minimumFractionDigits: 2 })
//       .replaceAll(",", "");
//     let currency = "LKR";
//     let hash = md5(
//       merchantId + orderId + amountFormated + currency + hashedSecret
//     )
//       .toString()
//       .toUpperCase();
//     handleChange("hash", hash);
//     console.log("hash generated :" + hash);
//   };

//   const placeORder = async (e) => {

//     // e.preventDefault();
//     // Payment completed. It can be a successful failure.
//     payhere.onCompleted = function onCompleted(orderId) {
//       console.log("Payment completed. OrderID:" + orderId);
//       // Note: validate the payment and show success or failure page to the customer
//   };

//   // Payment window closed
//   payhere.onDismissed = function onDismissed() {
//       // Note: Prompt user to pay again or show an error page
//       console.log("Payment dismissed");
//   };

//   // Error occurred
//   payhere.onError = function onError(error) {
//       // Note: show an error page
//       console.log("Error:"  + error);
//   };


//     window.payhere.startPayment({
//       "sandbox": true,
//     "merchant_id": "1228394",    // Replace your Merchant ID
//     "return_url": undefined,     // Important
//     "cancel_url": undefined,     // Important
//     "notify_url": "http://sample.com/notify",
//     "order_id": "ItemNo12345",
//     "items": "Door bell wireles",
//     "amount": "1000.00",
//     "currency": "LKR",
//     "hash": orderVals.hash, // *Replace with generated hash retrieved from backend
//     "first_name": "Saman",
//     "last_name": "Perera",
//     "email": "samanp@gmail.com",
//     "phone": "0771234567",
//     "address": "No.1, Galle Road",
//     "city": "Colombo",
//     "country": "Sri Lanka",
//     "delivery_address": "No. 46, Galle road, Kalutara South",
//     "delivery_city": "Kalutara",
//     "delivery_country": "Sri Lanka",
//     })
//     // const formData = new FormData();
//     // formData.append("sandbox", true);
//     // formData.append("merchant_id", orderVals.merchant_id);
//     // formData.append("order_id", orderVals.order_id);
//     // formData.append("hash", orderVals.hash);

//     // formData.append("first_name", orderVals.first_name);
//     // formData.append("last_name", orderVals.last_name);
//     // formData.append("email", orderVals.email);
//     // formData.append("phone", orderVals.phone);
//     // formData.append("address", orderVals.address);
//     // formData.append("city", orderVals.city);
//     // formData.append("country", orderVals.country);
//     // formData.append("items", orderVals.items);
//     // formData.append("currency", orderVals.currency);
//     // formData.append("amount", orderVals.amount);

//     // console.log(formData);

//     // axios.post('https://sandbox.payhere.lk/pay/checkout',formData,{
//     //   headers: {
//     //   'Content-Type': 'multipart/form-data',
//     //   }
//     //   })
//     // await fetch("https://sandbox.payhere.lk/pay/checkout", {
//     //   method: "POST",
//     //   mode: "cors",
//     //   headers: {
//     //     "Content-Type": "application/x-www-form-urlencoded",
//     //   },
//     //   body: {
//     //     sandbox: true, // true if using Sandbox Merchant ID
//     //     merchant_id: orderVals.merchant_id, // Replace your Merchant ID
//     //     notify_url: "http://sample.com/notify",
//     //     order_id: "ItemNo12345",
//     //     hash: orderVals.hash,
//     //     items: "Hello from React Native!",
//     //     amount: "50.00",
//     //     currency: "LKR",
//     //     first_name: "Saman",
//     //     last_name: "Perera",
//     //     email: "samanp@gmail.com",
//     //     phone: "0771234567",
//     //     address: "No.1, Galle Road",
//     //     city: "Colombo",
//     //     country: "Sri Lanka",
//     //     delivery_address: "No. 46, Galle road, Kalutara South",
//     //     delivery_city: "Kalutara",
//     //     delivery_country: "Sri Lanka",
//     //     custom_1: "",
//     //     custom_2: "",
//     //   },
//     // })
//     //   .then((resp) => resp.json())
//     //   .then((data) => {
//     //     console.log(data.data);
//     //     alert(data);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //     alert(error);
//     //   });
//   };

//   const handleChange = (name, value) => {
//     setOrderVals((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   useEffect(() => {
    
//     var script = document.createElement('script')
//     script.src = "https://www.payhere.lk/lib/payhere.js"
//     script.class = "external-script"
//     document.body.appendChild(script);
//     genHash();
//   }, []);

//   return (
//     <form
//       className="confirmContainer"
//       method="post"
//       // action="https://sandbox.payhere.lk/pay/checkout"
//     >
//       <div className="leftSide">
//         <img src={logo} alt="logo" className="confirmBarLogo" />
//         <span className="leftTitle">Confirm Order</span>
//         <br></br>
//         <input
//           className="inputText"
//           type="hidden"
//           name="merchant_id"
//           value="1228394"
//         />
//         <input
//           className="inputText"
//           type="hidden"
//           name="return_url"
//           value="http://sample.com/return"
//         />
//         <input
//           className="inputText"
//           type="hidden"
//           name="cancel_url"
//           value="http://sample.com/cancel"
//         />
//         <input
//           className="inputText"
//           type="hidden"
//           name="notify_url"
//           value="http://sample.com/notify"
//         />
//         {/* <br></br>Item Details<br></br> */}
//         <div className="inputItem">
//           {/* <span className="inputBanner">First Name</span> */}
//           <input
//             className="inputText"
//             type="text"
//             name="order_id"
//             hidden
//             value="ItemNo12345"
//           />
//         </div>
//         <div className="inputItem">
//           <input
//             className="inputText"
//             type="text"
//             name="items"
//             hidden
//             value={pack.Title}
//           />
//         </div>
//         <div className="inputItem">
//           <input
//             className="inputText"
//             type="text"
//             name="currency"
//             hidden
//             value="LKR"
//           />
//         </div>
//         <div className="inputItem">
//           <input className="inputText" type="text" hidden name="amount" value={pack.Price} />
//         </div>
//         <br></br>Customer Details<br></br>
//         <div className="inputItem">
//           <input
//             className="inputText"
//             type="text"
//             name="first_name"
//             value="Saman"
//           />
//         </div>
//         <div className="inputItem">
//           <input
//             className="inputText"
//             type="text"
//             name="last_name"
//             value="Perera"
//           />
//         </div>
//         <div className="inputItem">
//           <input
//             className="inputText"
//             type="text"
//             name="email"
//             value="samanp@gmail.com"
//           />
//         </div>
//         <div className="inputItem">
//           <input
//             className="inputText"
//             type="text"
//             name="phone"
//             value="0771234567"
//           />
//         </div>
//         <div className="inputItem">
//           <input
//             className="inputText"
//             type="text"
//             name="address"
//             value="No.1, Galle Road"
//           />
//         </div>
//         <div className="inputItem">
//           <input
//             className="inputText"
//             type="text"
//             name="city"
//             value="Colombo"
//           />
//         </div>
//         <div className="inputItem">
//           <input
//             className="inputText"
//             type="hidden"
//             name="country"
//             value="Sri Lanka"
//           />
//         </div>
//         <div className="inputItem">
//           <input
//             className="inputText"
//             type="hidden"
//             name="hash"
//             value={orderVals.hash}
//           />
//         </div>
//         <div className="inputItem">
//           {/* <input className="confirmButton" type="submit" value="Buy Now" /> */}
//         <button title="form" onClick={()=>placeORder()}/>
//         </div>
//       </div>
//       <div className="rightSide">
//         <span className="rightTitle">Package</span>

//         <div className="serviceItem">
//           <div className="emp"></div>
//           <span className="packTitle">{pack.Title}</span>
//           <span className="packPrice">LKR {pack.Price}.00</span>

//           <ul className="packFeatures">
//             {pack.Features.map((value, index, array) => {
//               return <span>{value.ftitle}</span>;
//             })}
//           </ul>
//         </div>
//         <div className="confirmButtonPannel">
//           <span>After confirming the order, we will contact you.</span>
//         </div>
//       </div>
//     </form>
//   );
// };
