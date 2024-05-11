import { FaArrowRight, FaStar } from "react-icons/fa";
import Heading from "../heading/Heading";
import "./products.css"
import img1 from "../../assets/images/jbl200bt-1.png"
import img2 from "../../assets/images/boat255r-1.png"
import img3 from "../../assets/images/sonyXb400-1.png"
import img4 from "../../assets/images/boat518-1.png"
import img5 from "../../assets/images/jbl760nc-1.png"
import { useEffect, useRef } from "react";

function Products() {

  const browseAll = useRef();
  const browseLess = useRef();

  useEffect(() => {

    const mores = document.querySelectorAll(".more");

    browseAll.current.addEventListener("click", () => {

      mores.forEach((el) => {

        el.style.display =  "grid";

      });

      browseAll.current.style.display = "none";

      browseLess.current.style.display = "block";

    })

    browseLess.current.addEventListener("click", () => {

      mores.forEach((el) => {

        el.style.display =  "none";

      });

      browseAll.current.style.display = "block";

      browseLess.current.style.display = "none";

    })
    
  } ,[])

  return(

    <>

      <Heading title="Top Products" />
    
      <div className="products">

        <ul className="products-nav">

          <li><a className="active" href="#/">All</a></li>

          <li><a href="#/">Headphones</a></li>

          <li><a href="#/">Earbuds</a></li>

          <li><a href="#/">Earphones</a></li>

          <li><a href="#/">Neckbands</a></li>

        </ul>

        <div className="products-items container">

          <div className="product-item">

            <div className="image">

              <img src={img1} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />

            </div>

            <h3 className="title">JBL Live 200BT</h3>

            <p className="">In-Ear Wireless Neckbands</p>

            <hr />

            <span className="one">$3,699</span>

            <span className="two">$5,299</span>


            <button>Add To Cart</button>

          </div>

          <div className="product-item">

            <div className="image">

              <img src={img5} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">JBL Tune 760NC</h3>

            <p className="">Wireless Over Headphones</p>

            <hr />

            <span className="one">$5,999</span>

            <span className="two">$7,999</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item">

            <div className="image">

              <img src={img4} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">boAt Rockerz 518</h3>

            <p className="">On-Ear Wireless Headphones</p>

            <hr />

            <span className="one">$1,299</span>

            <span className="two">$3,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item">

            <div className="image">

              <img src={img2} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">boAt Rockerz 255</h3>

            <p className="">In-Ear Wireless Neckbands</p>

            <hr />

            <span className="one">$899</span>

            <span className="two">$2,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item">

            <div className="image">

              <img src={img3} alt="" />

            </div>

            <div className="stars">

            <FaStar />
            
            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">Sony WI-XB400</h3>

            <p className="">Wireless In-Ear Neckbands</p>

            <hr />

            <span className="one">$2,690</span>

            <span className="two">$4,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item">

            <div className="image">

              <img src={img1} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />

            </div>

            <h3 className="title">JBL Live 200BT</h3>

            <p className="">In-Ear Wireless Neckbands</p>

            <hr />

            <span className="one">$3,699</span>

            <span className="two">$5,299</span>


            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img5} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">JBL Tune 760NC</h3>

            <p className="">Wireless Over Headphones</p>

            <hr />

            <span className="one">$5,999</span>

            <span className="two">$7,999</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img4} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">boAt Rockerz 518</h3>

            <p className="">On-Ear Wireless Headphones</p>

            <hr />

            <span className="one">$1,299</span>

            <span className="two">$3,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img2} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">boAt Rockerz 255</h3>

            <p className="">In-Ear Wireless Neckbands</p>

            <hr />

            <span className="one">$899</span>

            <span className="two">$2,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img3} alt="" />

            </div>

            <div className="stars">

            <FaStar />
            
            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">Sony WI-XB400</h3>

            <p className="">Wireless In-Ear Neckbands</p>

            <hr />

            <span className="one">$2,690</span>

            <span className="two">$4,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img1} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />

            </div>

            <h3 className="title">JBL Live 200BT</h3>

            <p className="">In-Ear Wireless Neckbands</p>

            <hr />

            <span className="one">$3,699</span>

            <span className="two">$5,299</span>


            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img5} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">JBL Tune 760NC</h3>

            <p className="">Wireless Over Headphones</p>

            <hr />

            <span className="one">$5,999</span>

            <span className="two">$7,999</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img4} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">boAt Rockerz 518</h3>

            <p className="">On-Ear Wireless Headphones</p>

            <hr />

            <span className="one">$1,299</span>

            <span className="two">$3,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img2} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">boAt Rockerz 255</h3>

            <p className="">In-Ear Wireless Neckbands</p>

            <hr />

            <span className="one">$899</span>

            <span className="two">$2,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img3} alt="" />

            </div>

            <div className="stars">

            <FaStar />
            
            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">Sony WI-XB400</h3>

            <p className="">Wireless In-Ear Neckbands</p>

            <hr />

            <span className="one">$2,690</span>

            <span className="two">$4,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img1} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />

            </div>

            <h3 className="title">JBL Live 200BT</h3>

            <p className="">In-Ear Wireless Neckbands</p>

            <hr />

            <span className="one">$3,699</span>

            <span className="two">$5,299</span>


            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img5} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">JBL Tune 760NC</h3>

            <p className="">Wireless Over Headphones</p>

            <hr />

            <span className="one">$5,999</span>

            <span className="two">$7,999</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img4} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">boAt Rockerz 518</h3>

            <p className="">On-Ear Wireless Headphones</p>

            <hr />

            <span className="one">$1,299</span>

            <span className="two">$3,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img2} alt="" />

            </div>

            <div className="stars">

            <FaStar />

            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">boAt Rockerz 255</h3>

            <p className="">In-Ear Wireless Neckbands</p>

            <hr />

            <span className="one">$899</span>

            <span className="two">$2,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item more">

            <div className="image">

              <img src={img3} alt="" />

            </div>

            <div className="stars">

            <FaStar />
            
            <FaStar />

            <FaStar />

            <FaStar />
            
            <FaStar />

            </div>

            <h3 className="title">Sony WI-XB400</h3>

            <p className="">Wireless In-Ear Neckbands</p>

            <hr />

            <span className="one">$2,690</span>

            <span className="two">$4,990</span>

            <button>Add To Cart</button>

          </div>

          <div className="product-item see-all">

            <h3 ref={browseAll}>Browse All<br /> Products {<FaArrowRight />}</h3>
            <h3 ref={browseLess}>Browse Less<br /> <span>Products</span> {<FaArrowRight />}</h3>

          </div>

        </div>

      </div>
    
    </>
  )

}

export default Products;