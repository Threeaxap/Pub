// // // import React, { useEffect, useState } from 'react'
// // // import axios from 'axios'
// // // import Modal from '@mui/material/Modal';


// // // const Products = () => {
// // //     const [productModels, setProductModels] = useState([])
// // //     const [productVariants, setProductVariants] = useState([])
// // //     const [productUnits, setProductUnits] = useState([])
// // //     const [loading, setLoading] = useState(true)
// // //     const [selectedProduct, setSelectedProduct] = useState(null)
// // //     const handleOpen = (id) => setSelectedProduct(id);
// // //     const handleClose = () => setSelectedProduct(null);

// // //     useEffect(()=>{
// // //         Promise.all([
// // //           axios.get('http://127.0.0.1:8000/api/bra/product_bra/'),
// // //           axios.get('http://127.0.0.1:8000/api/bra/product_bra_variant/'),
// // //           axios.get('http://127.0.0.1:8000/api/bra/product_bra_unit/'),
// // //           axios.get('http://127.0.0.1:8000/api/bra/product_bra_/')
// // //         ])       
// // //         .then(([modelResponse,variantResponse,unitResponse]) => {
// // //             setProductModels(modelResponse.data);
// // //             setProductVariants(variantResponse.data);
// // //             setProductUnits(unitResponse.data);
// // //             setLoading(false)
// // //         })

// // //         .catch(error=>{
// // //             console.error('ошибка при загрузке данных')
// // //             setLoading(false)
// // //         })
// // //     },[])

// // //   return (
// // //       <div class='grid grid-cols-6 gap-[24px]'>
// // //         {productModels.map(item =>(
// // //           <div onClick={() => handleOpen(item?.id)} key={item?.id}> 
// // //               <div class='items-end border-black p-[8px] m-[8px] w-fit rounded-[7px] relative'>
// // //                 {/* <img src={item.variant.product.image} class='w-[300px] rounded-[4px]' alt="" /> */}
// // //                 <h3 class='font-bold'>{item?.name}</h3>
// // //                 <h4 class='text-[rgba(182,38,61)]'>${item?.price}</h4>
// // //               </div>
// // //               <Modal
// // //                 open={selectedProduct === item?.id}
// // //                 onClose={handleClose}
// // //               >
// // //                 <div class='w-[200px] h-[200px] bg-white'>
// // //                   {productVariants.filter(item =>(item?.product == selectedProduct)).map(item =>(
// // //                   <h3>{item?.product_color?.color}</h3>
// // //                 ))                
// // //                 }
// // //                 </div>        
// // //               </Modal>      
// // //           </div>
// // //         ))} 
// // //       </div>
// // //     )
// // // }
// // // /* /* <img src={product_comp.img_url} alt="" /> */ 
// // // export default Products
// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios'
// // import Modal from '@mui/material/Modal';

// // const Products = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [selectedProduct, setSelectedProduct] = useState(null);

// //   const handleOpen = (product) => setSelectedProduct(product);
// //   const handleClose = () => setSelectedProduct(null);

// //   useEffect(() => {
// //     Promise.all([
// //       axios.get('http://127.0.0.1:8000/api/bra/product_bra/'),
// //       axios.get('http://127.0.0.1:8000/api/bra/product_bra_variant/'),
// //       axios.get('http://127.0.0.1:8000/api/bra/product_bra_unit/')
// //     ])
// //       .then(([modelResponse, variantResponse, unitResponse]) => {
// //         const models = modelResponse.data;
// //         const variants = variantResponse.data;
// //         const units = unitResponse.data;

// //         // 🧩 Склеиваем всё в одну структуру
// //         const productsWithData = models.map(model => ({
// //           ...model,
// //           variants: variants.filter(v => v.product_model?.id === model.id),
// //           units: units.filter(u => u.product_cup_size_variant?.product_variant?.product_model?.id === model.id)
// //         }));

// //         setProducts(productsWithData);
// //         setLoading(false);
// //       })
// //       .catch(error => {
// //         console.error('Ошибка при загрузке данных', error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) return <p>Загрузка...</p>;

// //   return (
// //     <div className="grid grid-cols-6 gap-[24px]">
// //       {products.map(product => (
// //         <div
// //           onClick={() => handleOpen(product)}
// //           key={product.id}
// //           className="cursor-pointer"
// //         >
// //           <div className="items-end border p-[8px] m-[8px] w-fit rounded-[7px] relative">
// //             {/* Если будет картинка */}
// //             {/* <img src={product.variants[0]?.product_image?.url} className="w-[300px] rounded-[4px]" alt="" /> */}
// //             <h3 className="font-bold">{product.name}</h3>
// //             <h4 className="text-[rgba(182,38,61)]">${product.price}</h4>
// //           </div>

// //           {/* Модалка */}
// //           <Modal open={selectedProduct?.id === product.id} onClose={handleClose}>
// //             <div className="w-[300px] min-h-[200px] bg-white p-4 rounded shadow-lg m-auto mt-[10%]">
// //               <h2 className="text-lg font-bold mb-2">{product.name}</h2>
// //               <h4 className="text-[rgba(182,38,61)] mb-4">${product.price}</h4>

// //               <h3 className="font-semibold">Доступные цвета:</h3>
// //               <ul>
// //                 {product.variants.map(v => (
// //                   <li key={v.id}>{v.product_color?.color}</li>
// //                 ))}
// //               </ul>

// //               <h3 className="font-semibold mt-4">Размеры в наличии:</h3>
// //               <ul>
// //                 {product.units.map(u => (
// //                   <li key={u.id}>
// //                     {u.product_size?.size} — {u.stock} шт.
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </Modal>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Products;
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from '@mui/material/Modal'
import TiltedCard from './Carddesign'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)

  const handleOpen = (product) => {
    setSelectedProduct(product)
    setSelectedColor(null)
    setSelectedSize(null)
  }
  const handleClose = () => {
    setSelectedProduct(null)
    setSelectedColor(null)
    setSelectedSize(null)
  }

  useEffect(() => {
    Promise.all([
      axios.get('http://127.0.0.1:8000/api/bra/product_bra/'),
      axios.get('http://127.0.0.1:8000/api/bra/product_bra_variant/'),
      axios.get('http://127.0.0.1:8000/api/bra/product_bra_unit/')
    ])
      .then(([modelResponse, variantResponse, unitResponse]) => {
        const models = modelResponse.data
        const variants = variantResponse.data
        const units = unitResponse.data

        const productsWithData = models.map(model => {
          const productVariants = variants.filter(v => v.product_model?.id === model.id)
          const productUnits = units.filter(u => u?.product_variant?.product_model?.id === model.id)
          return {
            ...model,
            variants: productVariants,
            units: productUnits
          }
        })

        setProducts(productsWithData)
        setLoading(false)
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных', error)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Загрузка...</p>

  return (
    <div className="grid grid-cols-6 gap-[24px]">
      {products.map(product => (
        
        <div key={product.id} className="border p-4 m-2 rounded w-fit">
          <h3 className="font-bold">{product.name}</h3>
          <h4 className="text-[rgba(182,38,61)]">${product.price}</h4>
          <button
            onClick={() => handleOpen(product)}
            className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Подробнее
          </button>

          <Modal open={selectedProduct?.id === product.id} onClose={handleClose}>
            <div className="w-[400px] min-h-[250px] bg-white p-4 rounded shadow-lg m-auto mt-[10%]">
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <h4 className="text-[rgba(182,38,61)] mb-4">${product.price}</h4>

              {selectedColor && selectedSize && (
                <p className="mb-2">
                  Вы выбрали: <span className="font-bold">{selectedColor.product_color?.color}</span> /{' '}
                  <span className="font-bold">{selectedSize.product_cup_size?.size} / {selectedSize.product_size?.size}</span>
                </p>
              )}

              <h3 className="font-semibold">Доступные цвета:</h3>
              <div className="flex gap-2 flex-wrap mb-4">
                {product.variants.map(v => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      setSelectedColor(v)
                      setSelectedSize(null)
                    }}
                    className={`px-3 py-1 border rounded ${
                      selectedColor?.id === v.id ? 'bg-red-600 text-white' : 'bg-gray-100'
                    }`}
                  >
                    {v.product_color?.color}
                  </button>
                ))}
              </div>

              {selectedColor && (
                <>
                  <h3 className="font-semibold mb-2">Размеры в наличии:</h3>
                  <div className="flex gap-2 flex-wrap">
                    {product.units
                      .filter(u => u?.product_variant?.id === selectedColor.id)
                      .map(u => (
                        <button
                          key={u.id}
                          type="button"
                          onClick={() => setSelectedSize(u)}
                          className={`px-3 py-1 border rounded ${
                            selectedSize?.id === u.id ? 'bg-blue-600 text-white' : 'bg-gray-100'
                          }`}
                        >
                          {u?.product_cup_size?.size} / {u.product_size?.size}
                        </button>
                      ))}
                  </div>
                </>
              )}

              {selectedSize && (
                <p className="mt-4">
                  Остаток: <span className="font-bold">{selectedSize.stock}</span> шт.
                </p>
              )}

              <button
                className="mt-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={handleClose}
              >
                Закрыть
              </button>
            </div>
          </Modal>
        </div>
      ))}
    </div>
  )
}

export default Products
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Modal from '@mui/material/Modal'

// const Products = () => {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [selectedProduct, setSelectedProduct] = useState(null)
//   const [selectedColor, setSelectedColor] = useState(null)
//   const [selectedCupSize, setSelectedCupSize] = useState(null)
//   const [selectedSize, setSelectedSize] = useState(null)

//   const handleOpen = (product) => {
//     setSelectedProduct(product)
//     setSelectedColor(null)
//     setSelectedCupSize(null)
//     setSelectedSize(null)
//   }

//   const handleClose = () => {
//     setSelectedProduct(null)
//     setSelectedColor(null)
//     setSelectedCupSize(null)
//     setSelectedSize(null)
//   }

//   useEffect(() => {
//     Promise.all([
//       axios.get('http://127.0.0.1:8000/api/bra/product_bra/'),
//       axios.get('http://127.0.0.1:8000/api/bra/product_bra_variant/'),
//       axios.get('http://127.0.0.1:8000/api/bra/product_bra_unit/')
//     ])
//       .then(([modelRes, variantRes, unitRes]) => {
//         const models = modelRes.data
//         const variants = variantRes.data
//         const units = unitRes.data

//         const productsWithData = models.map(model => {
//           const productVariants = variants.filter(v => v.product_model?.id === model.id)
//           const productUnits = units.filter(u => u.product_cup_size_variant?.product_variant?.product_model?.id === model.id)
//           return {
//             ...model,
//             variants: productVariants,
//             units: productUnits
//           }
//         })

//         setProducts(productsWithData)
//         setLoading(false)
//       })
//       .catch(error => {
//         console.error(error)
//         setLoading(false)
//       })
//   }, [])

//   if (loading) return <p>Загрузка...</p>

//   return (
//     <div className="grid grid-cols-6 gap-[24px]">
//       {products.map(product => (
//         <div key={product.id} className="border p-4 m-2 rounded w-fit">
//           <h3 className="font-bold">{product.name}</h3>
//           <h4 className="text-[rgba(182,38,61)]">${product.price}</h4>

//           <button
//             onClick={() => handleOpen(product)}
//             className="mt-2 px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//           >
//             Подробнее
//           </button>

//           <Modal open={selectedProduct?.id === product.id} onClose={handleClose}>
//             <div className="w-[400px] min-h-[250px] bg-white p-4 rounded shadow-lg m-auto mt-[10%]">
//               <h2 className="text-lg font-bold mb-2">{product.name}</h2>
//               <h4 className="text-[rgba(182,38,61)] mb-4">${product.price}</h4>

//               <h3 className="font-semibold">Доступные цвета:</h3>
//               <div className="flex gap-2 flex-wrap mb-4">
//                 {product.variants.map(v => (
//                   <button
//                     key={v.id}
//                     onClick={() => {
//                       setSelectedColor(v)
//                       setSelectedCupSize(null)
//                       setSelectedSize(null)
//                     }}
//                     className={`px-3 py-1 border rounded ${
//                       selectedColor?.id === v.id ? 'bg-red-600 text-white' : 'bg-gray-100'
//                     }`}
//                   >
//                     {v.product_color?.color}
//                   </button>
//                 ))}
//               </div>

//               {selectedColor && (
//                 <>
//                   <h3 className="font-semibold mb-2">Выберите cup-size:</h3>
//                   <div className="flex gap-2 flex-wrap mb-4">
//                     {[...new Map(
//                       product.units
//                         .filter(u => u.product_cup_size_variant?.product_variant?.id === selectedColor.id)
//                         .map(u => [u.product_cup_size_variant.product_cup_size.id, u.product_cup_size_variant.product_cup_size])
//                     ).values()].map(cup => (
//                       <button
//                         key={cup.id}
//                         onClick={() => {
//                           const cupVariant = product.units.find(
//                             u => u.product_cup_size_variant.product_cup_size.id === cup.id &&
//                                  u.product_cup_size_variant.product_variant.id === selectedColor.id
//                           )?.product_cup_size_variant
//                           setSelectedCupSize(cupVariant)
//                           setSelectedSize(null)
//                         }}
//                         className={`px-3 py-1 border rounded ${
//                           selectedCupSize?.id === cup.id ? 'bg-blue-600 text-white' : 'bg-gray-100'
//                         }`}
//                       >
//                         {cup.size}
//                       </button>
//                     ))}
//                   </div>
//                 </>
//               )}

//               {selectedCupSize && (
//                 <>
//                   <h3 className="font-semibold mb-2">Выберите размер/объем:</h3>
//                   <div className="flex gap-2 flex-wrap mb-4">
//                     {product.units
//                       .filter(
//                         u =>
//                           u.product_cup_size_variant.product_variant.id === selectedColor.id &&
//                           u.product_cup_size_variant.id === selectedCupSize.id
//                       )
//                       .map(u => (
//                         <button
//                           key={u.id}
//                           onClick={() => setSelectedSize(u)}
//                           className={`px-3 py-1 border rounded ${
//                             selectedSize?.id === u.id ? 'bg-green-600 text-white' : 'bg-gray-100'
//                           }`}
//                         >
//                           {u.product_size?.size}
//                         </button>
//                       ))}
//                   </div>
//                 </>
//               )}
//               {selectedSize && (
//                 <p className="mt-4">
//                   Остаток: <span className="font-bold">{selectedSize.stock}</span> шт.
//                 </p>
//               )}

//               <button
//                 className="mt-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
//                 onClick={handleClose}
//               >
//                 Закрыть
//               </button>
//             </div>
//           </Modal>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Products
