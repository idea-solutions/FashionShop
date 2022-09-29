import classNames from "classnames/bind";
import styles from "./footer.module.scss";
import {PlaceOutlined, CallOutlined,MailOutlined, FacebookOutlined,YouTube,Twitter} from "@mui/icons-material"

const cx = classNames.bind(styles);



function Footer() {
  return (
    <div className={cx("footer")}>
      <ul className={cx("footer-benefit")}>
          <li>
            <img src="https://preview.colorlib.com/theme/fashi/img/xicon-1.png.pagespeed.ic.1MBleL9YE6.webp" alt="img" />
            <div className={cx("context")}>
              <h3>FREE SHIPPING</h3>
              <p>For all order over 99$</p>
            </div>
          </li>
          <li>
            <img src="https://preview.colorlib.com/theme/fashi/img/xicon-2.png.pagespeed.ic.GdrReyKBWV.webp" alt="img" />
            <div className={cx("context")}>
              <h3>DELIVERY ON TIME</h3>
              <p>If good have prolems</p>
            </div>
          </li>
          <li>
            <img src="https://preview.colorlib.com/theme/fashi/img/xicon-1.png.pagespeed.ic.1MBleL9YE6.webp" alt="img" />
            <div className={cx("context")}>
              <h3>SECURE PAYMENT</h3>
              <p>100% secure payment</p>
            </div>
          </li>
      </ul>
     <div className={cx("footer-content")}>
        <div>
            <h1>FASHION.</h1>
            <p><PlaceOutlined  className={cx("icon")}/> 60-49 Road 11378 New York</p>
            <p><CallOutlined className={cx("icon")}/> +65 11.188.888</p>
            <p><MailOutlined className={cx("icon")}/> hello.colorlib@gmail.com</p>
            <ul className={cx("social")}>
              <li> 
                <FacebookOutlined className={cx("social-icon")}/>
              </li>
              <li> 
                <YouTube className={cx("social-icon")}/>
              </li>
              <li> 
                <Twitter className={cx("social-icon")}/>
              </li>
            </ul>
        </div>


        <div >
           <h3>Information</h3>
           <ul className={cx("info")}>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Checkout</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Serivius</a>
              </li>
           </ul>
       </div>
        <div >
           <h3>My Account</h3>
           <ul className={cx("info")}>
              <li>
                <a href="/">My Account</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Shopping Cart</a>
              </li>
              <li>
                <a href="/">Shop</a>
              </li>
           </ul>
       </div>
    
       <div >
           <h3>Join Our Newsletter Now</h3>
           <p>Get E-mail updates about our latest shop and special offers.</p>
              <button>contact</button>
          
       </div>
       
        </div>
      <h3 className={cx("copyright")}>
        Copyright ©2022 All rights reserved 
      </h3>


    </div>
  )
}

export default Footer