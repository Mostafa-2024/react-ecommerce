import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import"./navbar.css"
import { ImSearch } from "react-icons/im";
import { IoCartOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

function Navbars() {

  const hideSpan = useRef();

  function toggleDisplay() {

    if(hideSpan.current.style.display === "flex") {

      hideSpan.current.style.display = "none";

    }else {
      
      hideSpan.current.style.display = "flex";

    }

  }

  function logInAlert() {

    hideSpan.current.style.display = "none";

    Swal.fire({
      html:`

        <form class="log-in" action="">
        
          <h3>Login</h3>

          <p>New To AcousticAura ? <span>Create an account</span></p>

          <input type="text" placeholder="Email" />

          <input type="password" placeholder="Password" />

          <button>Login</button>

          <div class="shape">

            <hr />

            <span>Or Login With</span>

            <hr />

          </div>

          <ul class="links">

            <li>Facebook</li>

            <li>Google</li>

            <li>Twitter</li>
          
          </ul>
        
        </form>
      
      `,
      confirmButtonText: "Cancel"
    })

  }

  const navBar = useRef();

  const closeButton = useRef();

  const searchPage = useRef();

  useEffect(() => {

    window.addEventListener("scroll", () => {
      
      if(window.scrollY > 0) {

        navBar.current.classList.add("change-background")

      }else {

        navBar.current.classList.remove("change-background")

      }

    })

    closeButton.current.addEventListener("click", () => {

      searchPage.current.style.display = "none"

    })

  }, [])

  return (

    <Navbar expand="lg" className="bg-body-tertiary" ref={navBar}>

      <Container>

        <Link to="/" className="navbar-brand">AcousticAura</Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ms-auto">

            <Link href="/" className="nav-link">
              
              <ImSearch onClick={() => searchPage.current.style.display = "block"}/>

              <span>Search</span>

              <div className="search" ref={searchPage}>

                <div className="close" ref={closeButton}>x</div>

                <input type="text" placeholder="Search For Product..."/>

              </div>
              
            </Link>

            <Link to="/cart" className="nav-link"><IoCartOutline /><span>Cart</span></Link>

            <div className="nav-link">

              <LuUser2 onClick={ toggleDisplay }/>

              <span ref={hideSpan}>

                <h3>Hello!</h3>

                <p>Access account and manage orders</p>

                <button onClick={logInAlert}>Login / Signup</button>

                <hr />

                <ul>

                  <li><Link to="/*">Orders</Link></li>

                  <li><Link to="/*">Wishlist</Link></li>

                  <li><Link to="/*">Gift Cards</Link></li>

                  <li><Link to="/*">Saved Cards</Link></li>

                  <li><Link to="/*">Saved Addresses</Link></li>

                </ul>
                
              </span>
              
            </div>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  );
}

export default Navbars;