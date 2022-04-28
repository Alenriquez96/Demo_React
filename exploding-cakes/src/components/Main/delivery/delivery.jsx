import React from 'react';
import { useState } from 'react';

function Delivery() {
  


const [count, setCount] = useState(0);
// useState devuelve un array [state, ()setState]
// asique usamos destructuring para sacarlos a variables

const [userData, setUserData] = useState({
  email: '',
  address: '',
  quantity:""     
});

const handleAddClick = () => {
    setCount(count + 1)
}

const handleSubClick = () => {
    setCount(count - 1)
}

// const handleChange = (e) => {
//   setValues({
//       ...values,
//       [e.target.name]: e.target.value
//   })
// }

const handleSubmit = (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const address = e.target.address.value;
  const quantity = count;
  setUserData({email,address,quantity});
  console.log(userData)
}

return (
    <>
        <h1>Delivery</h1>
        <h2>Encarga aquí una buena tarta</h2>
        <button name='add' onClick={handleAddClick} >+</button>
        <h1>Tartas encargadas: {count}</h1>
        <button name='sub' onClick={handleSubClick} >-</button>

        <form onSubmit={handleSubmit}>
                <label htmlFor="email">Usuario</label>
                <input name="email" type="text" ></input>
                <br/><br/>    
                <label htmlFor="address">Address</label>
                <input name="address" type="text"></input>

                <button>Login</button>
            </form>{userData.email?<p>El usuario {userData.email} ha pedido {userData.quantity} tartas</p>:""}
    </>
);

}

export default Delivery
