import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./footer.css"
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useRef } from "react";

function Footer() {

  const topArrow = useRef();

  useEffect(() => {

    window.addEventListener("scroll", () => {

      if(window.scrollY >= 500) {

        topArrow.current.style.display = "flex";

      } else {

        topArrow.current.style.display = "none";

      }

    })

    topArrow.current.addEventListener("click", () => {

      window.scrollTo(0, 0);

    })

  }, [])

  return(
    
    <div className="footer">

      <div className="container">

        <div className="text">

          2024 | AcousticAura. All Rights Reserved. Built by | <span>Mostafa Kamal</span>

        </div>

        <div className="icons">

          <FaFacebookF />

          <FaTwitter />

          <FaInstagram />

          <FaLinkedinIn />

        </div>

      </div>

      <div className="to-up" ref={topArrow}><IoIosArrowUp /></div>

    </div>

  )

}

export default Footer;