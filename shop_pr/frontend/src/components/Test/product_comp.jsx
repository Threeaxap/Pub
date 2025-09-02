import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from '@mui/material/Modal';


const Products = () => {
    const [productModels, setProductModels] = useState([])
    const [productVariants, setProductVariants] = useState([])
    const [productUnits, setProductUnits] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const handleOpen = (id) => setSelectedProduct(id);
    const handleClose = () => setSelectedProduct(null);

    useEffect(()=>{
        Promise.all([
          axios.get('http://127.0.0.1:8000/api/bra/product_bra/'),
          axios.get('http://127.0.0.1:8000/api/bra/product_bra_variant/'),
          axios.get('http://127.0.0.1:8000/api/bra/product_bra_unit/')
        ])       
        .then(([modelResponse,variantResponse,unitResponse]) => {
            setProductModels(modelResponse.data);
            setProductVariants(variantResponse.data);
            setProductUnits(unitResponse.data);
            setLoading(false)
        })

        .catch(error=>{
            console.error('ошибка при загрузке данных')
            setLoading(false)
        })
    },[])

  return (
      <div class='grid grid-cols-6 gap-[24px]'>
        {productModels.map(item =>(
          <div onClick={() => handleOpen(item?.id)} key={item?.id}> 
              <div class='items-end border-black p-[8px] m-[8px] w-fit rounded-[7px] relative'>
                {/* <img src={item.variant.product.image} class='w-[300px] rounded-[4px]' alt="" /> */}
                <h3 class='font-bold'>{item?.name}</h3>
                <h4 class='text-[rgba(182,38,61)]'>${item?.price}</h4>
              </div>
              <Modal
                open={selectedProduct === item?.id}
                onClose={handleClose}
              >
                <div class='w-[200px] h-[200px] bg-white'>
                  {productVariants.filter(item =>(item?.product == selectedProduct)).map(item =>(
                  <h3>{item?.product_color?.color}</h3>,
                ))                
                }
                </div>        
              </Modal>      
          </div>
        ))} 
      </div>
    )
}
/* /* <img src={product_comp.img_url} alt="" /> */ 
export default Products