// import React from "react";

// const ProductListing = ({ products, addItemHandler }) => {
//   return (
//     <div className="row cards-container">
//       <h3>{categoryTitle}</h3>
//       {products.map((product, index) => (
//         <div className="col-md-4 col-sm-6 mb-4" key={index}>
//           <div className="card h-100">
//             <img
//               className="card-img-top"
//               height={100}
//               width={100}
//               src={URL + product.images[0]}
//               alt={product.product_name}
//             />
//             <div className="card-body">
//               <h5 className="card-title">{product.product_name}</h5>
//               <p className="card-text">{product.description}</p>
//               <p className="card-text">{product.category_type}</p>
//             </div>
//             <div className="card-footer">
//               <button
//                 onClick={() => addItemHandler(product.product_id)}
//                 className="btn btn-primary w-100"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductListing;