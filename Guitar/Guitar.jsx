/* eslint-disable no-unused-vars */

// eslint-disable-next-line react/prop-types
const Guitar = ({ guitar, addToCart }) => {

    // eslint-disable-next-line react/prop-types
    const { id, name, image, description, price } = guitar;

   /*  const handleClick = (guitar) => {
        
    }  ejemplo N°1*/


    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}
                    //onClick={() => setCart( [...cart, guitar])}   ejemplo N°1 => De esta forma agregael articulo seleccionado al carrito
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default Guitar