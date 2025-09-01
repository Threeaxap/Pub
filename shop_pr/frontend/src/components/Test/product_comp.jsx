import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [isOpen, setIsOpen] = useState(false);

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
          <div onClick={handleOpen} key={item.id}> 
              <div class='items-end border-black p-[8px] m-[8px] w-fit rounded-[7px] relative'>
                {/* <img src={item.variant.product.image} class='w-[300px] rounded-[4px]' alt="" /> */}
                <h3 class='font-bold'>{item.variant.product.name}</h3>
                <h4 class='text-[rgba(182,38,61)]'>${item.variant.product.price}</h4>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
              >
                <div class='absolute bg-white top-1/4 left-1/4 p-[28px] rounded-[6px]'>
                  <div class='flex'>
                    {/* <img  class='w-[300px] rounded-[4px]' src={item.variant.product.image} alt="" /> */}
                    <div class='ml-[40px]'>
                      <h2 class='text-black my-[6px]'>{item.variant.product.name}</h2>
                      <div class='flex gap-[10px] mt-[20px]'>
                        <div class='w-[30px] h-[30px] border-[1px] rounded-[5px] bg-black'></div>
                        <div class='w-[30px] h-[30px] border-[1px] rounded-[5px] bg-slate-200'></div>
                        <div class='w-[30px] h-[30px] border-[1px] rounded-[5px] bg-orange-100'></div>
                      </div>
                      <div class='mt-[10px] mb-[40px]'>
                          <h3>Размеры:</h3>
                          <div 
                            class="border-[1px] absolute z-3 bg-white w-[100px]"
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                          >
                            <button className="">Меню</button>
                            
                            {isOpen && (
                              <div className="drop-scroll">
                                {products.map(item =>(
                                  <h3 key={item.id}>{item.size}</h3>
                                ))}
                              </div>
                            )}
                          </div>                         
                      </div>
                      <h4 class='text-[22px] mb-[10px]'>{item.price}</h4>
                      <button className='order_but'>
                        ДОБАВИТЬ В КОРЗИНУ
                      </button>
                    </div>
                  </div>
                </div>
              </Modal>      
          </div>
        ))} 
      </div>
    )
}
/* /* <img src={product_comp.img_url} alt="" /> */ 
export default Products