import React from 'react'
import {BsSearch} from 'react-icons/bs';
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
        <section>
            <div className={classes.header_container}>
                <div className= {classes.logo_container}>
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />
                </Link>
                <div className={classes.delivery}>
                <span>
                <SlLocationPin />
                </span>
                <div >
                    <p>Delivered to </p>
                    <span>Ethiopia</span>
                </div>
                </div>
             </div>    
                <div className={classes.search}>
                    <select name="" id="">
                        <option value="">All</option>
                    </select>
                    <input type="text" name='' id='' placeholder='search product '/>
                    <BsSearch/>
                </div>
            <div>
                <div className={classes.order_container}>
                    <a href="" className={classes.language}>
                       <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_United_States.svg.png" alt="" />
                         <select name='' id='' >
                           <option value="">EN</option>
                         </select>
                    </a>
                <Link to="auth">
                    <div>
                        <p>Sign in</p>
                        <span>Account & Lists</span>
                    </div>
                </Link>
                <Link to="orders">
                    <p>returns</p>
                    <span>& Orders</span>
                </Link>
                <Link to='cart' className={classes.cart}>
                <BiCart />
                   <span>0</span>                
                </Link>
                </div>

            </div>
        </div>
        </section>
    
    <LowerHeader/>
    </>
    
  )
}

export default Header