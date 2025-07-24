import React, { useEffect, useState } from 'react'
import axios from 'axios'


const product_comp = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get('https:/localhost:8000/api/bra/')
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
        (products.map(product = (
            <div>
                (product.image_url && (
                    <img src={product_comp.img_url} alt="" />

                ))
            </div>
        )))
    </div>
  )
}

export default product_comp