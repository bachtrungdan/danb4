import React from 'react'
function ListProDuct() {
    let cart = [
        { productName: 'ao', quantity: 3, price: 200000 },
        { productName: 'quan', quantity: 3, price: 400000 },
        { productName: 'giay', quantity: 3, price: 600000 },
    ]
    
//   const [index, setIndex] = useState([
//     { productName: 'ao', quantity: 3, price: 200000 },
//     { productName: 'quan', quantity: 3, price: 400000 },
//     { productName: 'giay', quantity: 3, price: 600000 },
//   ])
    function tang() {
        for (let i = 0; i < cart.length; i++) {
            console.log(cart[i].price * 2);
            cart[i].quantity++
            cart[i].price++
        }
    }
    function giam() {
        for (let j = 0; j < cart.length; j++) {
            return cart[j].quantity--
        }
    }
    return (
        <div>
            {cart.map(function (value, index) {
                return (
                    <div className='bang' key={index}>
                        <div>{value.productName}</div>
                        
                        <div>
                            <button onClick={function(){tang()}}>+</button>
                            <button onClick={giam}>-</button></div>
                        <div>
                            {value.quantity}
                        </div>
                        <div>{value.price}</div>
                        <div>{value.price * value.quantity}</div>
                    </div>
                )
            })}

        </div>
    )
}

export default ListProDuct






