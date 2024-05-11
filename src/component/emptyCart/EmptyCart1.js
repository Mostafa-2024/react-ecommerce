import { BsCartX } from "react-icons/bs";
import "./empty-cart.css"

function EmptyCart() {

  window.scrollTo(0, 0);

  return(

    <>

      <div className="empty-cart">

      <BsCartX />

      <div className="description">Your Cart Is Empty</div>

      <button>Start Shopping</button>

      </div>

    </>

  )

}

export default EmptyCart;