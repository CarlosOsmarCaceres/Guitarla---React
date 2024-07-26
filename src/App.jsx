import { useState, useEffect } from "react";
import Guitar from "./Components/Guitar/Guitar"
import Header from "./Components/Header/Header"
import { db } from "./data/db";


function App() {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  // eslint-disable-next-line no-unused-vars
  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart)

  const MAX_ITEM = 5
  const MIN_ITEM = 1

  // eslint-disable-next-line no-unused-vars


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  /* Agregar cantidad al carrito */
  function addToCart(item) {
    const itemExists = cart.findIndex(guitar => guitar.id === item.id)
    if(itemExists >= 0 ) {
      if (cart[itemExists].quantity >= MAX_ITEM) return
      const updateCart = [...cart]
      updateCart[itemExists].quantity++
      setCart(updateCart)
    } else {
      item.quantity = 1 
      setCart([...cart,item] )
    }
}
/* Eliminar del carrito */
function removeFromCart(id) {
  setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
}

/* Incrementar carrito compras */
function increaseQuatity(id){
  const updateCart = cart.map( item => {
    if (item.id === id && item.quantity < MAX_ITEM)  {
      return{
      ...item,
      quantity: item.quantity + 1
      }
    }
    return item
  })
  setCart(updateCart)
}

/* Decrementar carrito de compras */
  function decrementQuatity(id) {
    const updateCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEM) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updateCart)
  }

  function clearCart() {
    setCart([])
  }




  return (
    <>
      <Header 
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQuatity={increaseQuatity}
      decrementQuatity={decrementQuatity}
      clearCart={clearCart}
      
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección holaaaaaa</h2>

        <div className="row mt-5">
          {data.map((guitar) =>
            <Guitar
              key={guitar.id}
              guitar={guitar}
              cart={cart}
              setCart={setCart}
             addToCart={addToCart}

            />
          )}

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App

// const [auth, setAuth] = useState(false);

// useEffect(() => {
//   if (auth) {
//     console.log("Es una prueba")
//   }
// }, [auth]);

// setTimeout(() => {
//   setAuth(true)
// }, 3000);