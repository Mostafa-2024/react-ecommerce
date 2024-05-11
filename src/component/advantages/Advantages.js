import { TbTruckDelivery } from "react-icons/tb";
import Heading from "../heading/Heading";
import "./advantages.css";
import { MdOutlineSecurity, MdPayment } from "react-icons/md";
import { FaTags } from "react-icons/fa";

function Advantages() {

  return(

    <>

    <Heading title="Our Advantages"/>

    <div className="advantages container">

      <div className="advantage">

        <TbTruckDelivery />

        <div className="text">

          <h3 className="title">Express Delivery</h3>

          <p className="description">Ships in 24 Hours</p>

        </div>

      </div>

      <div className="advantage">

        <MdOutlineSecurity />

        <div className="text">

          <h3 className="title">Brand Warranty</h3>

          <p className="description">100% Original products</p>

        </div>

      </div>

      <div className="advantage">

        <FaTags />

        <div className="text">

          <h3 className="title">Exciting Deals</h3>

          <p className="description">On all prepaid orders</p>

        </div>

      </div>

      <div className="advantage">

        <MdPayment />

        <div className="text">

          <h3 className="title">Secure Payments</h3>

          <p className="description">SSL / Secure Certificate</p>

        </div>

      </div>

    </div>
  
    </>

  )

}

export default Advantages;