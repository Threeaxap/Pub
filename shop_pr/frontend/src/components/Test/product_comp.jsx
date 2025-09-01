import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from '@mui/material/Modal';


const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const handleOpen = (id) => setSelectedProduct(id);
    const handleClose = () => setSelectedProduct(null);

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/bra/product_bra_unit/')
        .then(response => {
            setProducts(response.data);
            setLoading(false)
        })
        .catch(error=>{
            console.error('ошибка при загрузке данных')
            setLoading(false)
        })
    },[])

  return (
      <div class='grid grid-cols-6 gap-[24px]'>
        {products.map(item =>(
          <div onClick={() => handleOpen(item?.product_cup_size_variant?.product_variant?.product_model?.id)} key={item.product_cup_size_variant.product_variant.product_model.id}> 
              <div class='items-end border-black p-[8px] m-[8px] w-fit rounded-[7px] relative'>
                {/* <img src={item.variant.product.image} class='w-[300px] rounded-[4px]' alt="" /> */}
                <h3 class='font-bold'>{item?.product_cup_size_variant?.product_variant?.product_model?.name}</h3>
                <h4 class='text-[rgba(182,38,61)]'>${item?.product_cup_size_variant?.product_variant.product_model?.price}</h4>
              </div>
              <Modal
                open={selectedProduct === item?.product_cup_size_variant?.product_variant?.product_model?.id}
                onClose={handleClose}
              >
                <div class='w-200[px] h-200[px] bg-white'>
                  {products.filter(unit =>(unit?.product_cup_size_variant?.product_variant?.product_model?.id == selectedProduct)).map(unit =>(
                  <h3 key={unit?.product_cup_size_variant.id}>
                    {unit?.product_cup_size_variant.product_cup_size.size}
                  </h3>
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