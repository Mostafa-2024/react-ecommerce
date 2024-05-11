import"./contact-us.css"


function ContactUs() {

  return(

    <>

      <div style={{backgroundColor: "#000000", padding: "50px 0",borderBottom: "1px solid rgb(54 54 55 / 65%)"}}>

        <div className="contact-us container">

          <div className="form">

            <h3 className= "title">AcousticAura</h3>
            
            <p className="description">Subscribe to our Email alerts to receive <br /> early discount offers, and new products info.</p>

            <input type="text" placeholder="Email Address"/>

            <button>Subscribe</button>

          </div>

          <div className="box">

          <h3 className="title">Help</h3>

          <span>FAQS</span>

          <span>Track Order</span>

          <span>Cancel Order</span>

          <span>Return Order</span>

          <span>Warranty Info</span>

          </div>

          <div className="box">

          <h3 className="title">Policies</h3>

          <span>Return Policy</span>

          <span>Security</span>

          <span>Sitemap</span>

          <span>Privacy Policy</span>

          <span>Terms & Conditions</span>

          </div>

          <div className="box">

          <h3 className="title">Company</h3>

          <span>About Us</span>

          <span>Contact Us</span>

          <span>Service Centres</span>

          <span>Careers</span>

          <span>Affiliates</span>

          </div>

        </div>

      </div>
    
    </>

  )

}

export default ContactUs;