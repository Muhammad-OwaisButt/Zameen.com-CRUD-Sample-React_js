import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="d-flex" style={{width: '95%', height: '45vh', marginTop: 30, justifyContent: 'space-evenly', textAlign: 'left'}}>
    <div id="_footer" className="p-2" style={{flex: '30%', height: '45vh'}}>
      <h4 style={{paddingBottom: 20}}>NEED HELP?</h4>
      <h6>+92-1234567890 (9am - 10pm , Mon - Sat)</h6>
      <h6> &nbsp;</h6>
      <h6><Link to="/">www.Zameen.com</Link></h6>
    </div>
    <div className="p-2" style={{flex: '25%', height: '45vh'}}>
      <h4 style={{paddingBottom: 20}}>CUSTOMER SERVICE</h4>
      <h6>Contact Us</h6>
      <h6>Delivery &amp; Orders</h6>
      <h6>Returns &amp; Exchanges</h6>
      <h6>Terms &amp; Conditions</h6>
      <h6>Privacy Policy</h6>
      <h6>Track My Order</h6>
      <h6>Payment Guide</h6>
    </div>
    <div className="p-2" style={{flex: '20%', height: '45vh'}}>
      <h4 style={{paddingBottom: 20}}>COMPANY</h4>
      <h6>Abouts Us</h6>
      <h6>Careers</h6>
    </div>
    <div className="p-2" style={{flex: '25%', height: '45vh'}}>
      <h4 style={{paddingBottom: 20}}>FOLLOW US</h4>
      <Link to="https://www.facebook.com/" className="fa fa-facebook"></Link>
      <Link to="https://twitter.com/" className="fa fa-twitter"></Link>
      <Link to="https://www.linkedin.com/login" className="fa fa-linkedin"></Link>
      <Link to="https://www.youtube.com/" className="fa fa-youtube"></Link>
      <Link to="https://www.instagram.com/?hl=en" className="fa fa-instagram"></Link>
      <Link to="https://www.pinterest.com/" className="fa fa-pinterest"></Link>
    </div>
  </div>
</div>
  )
}

export default Footer;