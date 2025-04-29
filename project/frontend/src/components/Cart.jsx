import React from 'react'

function CartList() {
    const [cart, setCart] = useState([])
  
    useEffect(() => {
      axios.get('http://localhost:8000/api/cart/')
        .then(res => setCart(res.data))
      axios.post('http://localhost:8000/api/cart/')
        .then(response => {
          console.log('Данные успешно отправлены:', response.data);
        })
    }, [])
  
    return (
      <div>
        <h2>Tasks</h2>
        <ul>
          {cart.map(cartItem=> (
            <li key={cartItem.id}>
              {cartItem.name} - {cartItem.quantity.toString()} 
              {cartItem.price*cartItem.quantity} руб.
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default CartList