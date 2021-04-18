const header = document.getElementById('header');
const footer = document.getElementById('footer');

const headerContent = `
    <div class="menu-bar">
    <ul>
        <li>
            <a href="./index.html">Home</a>
        </li>
        <li class="verticle-line"></li>
        <li>
            
            <a href="#">Category</a>
        </li>
    </ul>
    <div class="search-button">
        <input type="text" name="Search" id="Search bar" placeholder="Search your items">
        <button>
            <i class="fas fa-search"></i>
        </button>
    </div>
    <ul>
        <li>
            <a href="#">Log in</a>
        </li>
        <li class="verticle-line"></li>
        <li>
            <a href="cart.html"><i class="fas fa-shopping-cart"></i></a>
        </li>
    </ul>
    </div>
`;

const footerContent = `
    <div class="separate-line"></div>
    <div class="footer">
        <div class="footer-item">
            <h3>Customer Care</h3>
            <a>Help Center</a>
            <a>Instruction</a>
            <a>Shipment</a>
            <a>Return Policy</a>
        </div>
        <div class="footer-item">
            <h3>About</h3>
            <a>About us</a>
            <a>Careers</a>
            <a>Security</a>
            <a>Warranty Policy</a>
        </div>
        <div class="footer-item">
            <h3>Help</h3>
            <a>FAQ</a>
            <a>Contact Us</a>
            <a>Feedback</a>
        </div>
        <div class="footer-item">
            <h3>Payment Method</h3>
            <img src="./image/payment.jpg" alt="">
        </div>
    </div>
    <div class="separate-line"></div>
    <div class="copyrights">
        <p>Created by a noob learning how to code</p>
        <p>All rights reserved</p>
    </div>
`;

$(document).ready(function() {
    $('#header').append(headerContent);
    $('#footer').append(footerContent);
})