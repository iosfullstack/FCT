import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header>
      <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
            <form method="post">
                <input type="text" class="textbox" placeholder="Search"/>
                <input title="Search" value="" type="submit" class="button"/>
            </form>
                {/* <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Category</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Testimonial</a></li> */}
            </ul>
            <h1 class="logo">FCT.it</h1>
        </div>
    </nav>
  </header>
    );
}

export default Navbar;