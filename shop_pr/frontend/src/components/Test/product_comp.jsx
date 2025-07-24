import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/bra/product_bra_variant/')
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
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.product}</h3>                       
                </div>
            ))}
        </div>
  )
}
/* /* <img src={product_comp.img_url} alt="" /> */ 
export default Products