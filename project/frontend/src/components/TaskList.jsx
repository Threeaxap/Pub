import { useState, useEffect } from 'react'
import axios from 'axios'

function TaskList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(res => setProducts(res.data))
    axios.post('http://localhost:8000/api/products/')
      .then(response => {
        console.log('Данные успешно отправлены:', response.data);
      })
  }, [])

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {products.map(product=> (
          <li key={product.id}>
            {product.name} - {product.price.toString()} руб.
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList