// // basic_web3js_transaction_tutorial/src/App.js

// import React, { Component } from "react";
// // import "./App.css";
// import Web3 from "web3";
// import Tx from "ethereumjs-tx";

// const web3 = new Web3(
//   new Web3.providers.HttpProvider(
//     "https://mainnet.infura.io/v3/288173fec6314393908000509a9dc327"
//   )
// );

// //**Gen Keys
// let genKeyPairs = web3.eth.accounts.create();
// console.log("KEYS", genKeyPairs);

// const TestApp = () => {
//   const [sendingAddress, setSendingAddress] = React.useState("");
//   const [receivingAddress, setReceivingAddress] = React.useState("");
//   const [priKey, setPriKey] = React.useState("");
//   const [amount, setAmount] = React.useState(0);
//   const [sendingAddressBalance, setSendingAddressBalance] = React.useState("");
//   const [receivingAddressBalance, setReceivingAddressBalance] =
//     React.useState("");

//   const handleInputChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     if (name === "sendingAddress") {
//       setSendingAddress(value);
//     }
//     if (name === "receivingAddress") {
//       setReceivingAddress(value);
//     }
//     if (name === "priKey") {
//       setPriKey(value);
//     }
//     if (name === "amount") {
//       setAmount(value);
//     }
//   };

//   const handleCheckAccountBalance = async (e) => {
//     e.preventDefault();
//     if (
//       web3.utils.isAddress(sendingAddress) &&
//       web3.utils.isAddress(receivingAddress)
//     ) {
//       web3.eth.getBalance(sendingAddress).then((res) => {
//         console.log("Sending Address Balance", res);
//         setSendingAddressBalance(res);
//       });

//       web3.eth.getBalance(receivingAddress).then((res) => {
//         console.log("Receiving Address Balance", res);
//         setReceivingAddressBalance(res);
//       });
//     } else {
//       alert("Invalid Address");
//     }
//   };

//   const handleSendTransaction = async (e) => {
//     if (
//       web3.utils.isAddress(sendingAddress) &&
//       web3.utils.isAddress(receivingAddress)
//     ) {
//       const noncePromise = web3.eth.getTransactionCount(sendingAddress);

//       const gasPricePromise = web3.eth.getGasPrice();

//       const [nonce, gasPrice] = await Promise.all([
//         noncePromise,
//         gasPricePromise,
//       ]);

//       const rawTx = {
//         from: sendingAddress,
//         nonce: nonce,
//         gasPrice: "0x" + parseInt(gasPrice, 10).toString(16),
//         gasLimit: 21000,
//         to: receivingAddress,
//         value: web3.utils.toHex(amount),
//       }

//       if(priKey.slice(0,2) === "0x"){
//         setPriKey(priKey.slice(2));
//       }

//         const privateKey = new Buffer.from(priKey, "hex");
//         const tx = new Tx(rawTx);
//     }
//   };
// };

// export default TestApp;
