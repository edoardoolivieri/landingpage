// const stockxAPI = require('stockx-api');
// const stockX = new stockxAPI();

// const apistockx = () => {
//     return stockX.fetchProductDetails('https://stockx.com/adidas-yeezy-boost-700-magnet')
//     .then(product => console.log(product)
//     .catch(err => console.log(`Error scraping product details: ${err.message}`)),
// };

// const wrapPromise = promise => {
//     let status = "pending";
//     let result = "";
//     let suspender = promise.then(
//       r => {
//         status = "success";
//         result = r;
//       },
//       e => {
//         status = "error";
//         result = e;
//       }
//     );
  
//     return {
//       read() {
//         if (status === "pending") {
//           throw suspender;
//         } else if (status === "error") {
//           throw result;
//         }
  
//         return result;
//       }
//     };
//   };

//   export const createResource = () => {
//     return {
//       shoes: wrapPromise(apistockx()),
//     };
//   };