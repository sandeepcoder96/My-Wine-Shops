@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
*, *::before, *::after {
    box-sizing: border-box;
}

body {
    font-family: 'Lato', sans-serif;
    line-height: 24px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    visibility: visible;
    color: #000;
    letter-spacing: 0.05em;
}

/* general css  */

.fix {
    overflow: hidden;
}

.hidden {
    display: none;
}

.clear {
    clear: both;
}

.container {
    max-width: 1170px;
}

@media only screen and (max-width: 767px) {
    .container {
        width: 450px;
    }
}

@media only screen and (max-width: 479px) {
    .container {
        width: 100%;
    }
}

.capitalize {
    text-transform: capitalize;
}

.uppercase {
    text-transform: uppercase;
}

.no-gutters>.col, .no-gutters>[class*="col-"] {
    padding-right: 0;
    padding-left: 0;
    margin: 0;
}

.off_canvas_overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    cursor: crosshair;
    background: #000;
    top: 0;
}

.off_canvas_overlay.active {
    opacity: 0.5;
    visibility: visible;
}

.offcanvas_menu {
    display: none;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .offcanvas_menu {
        display: block;
    }
}

@media only screen and (max-width: 767px) {
    .offcanvas_menu {
        display: block;
    }
    .offcanvas_two .canvas_open {
        top: 18px;
    }
}

.offcanvas_two .canvas_open a:hover {
    color: #cc9900;
    border-color: #cc9900;
}

.canvas_open {
    position: absolute;
    right: 17px;
    top: 34px;
    z-index: 9;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .canvas_open {
        right: 25px;
        top: 26px;
    }
}

@media only screen and (max-width: 767px) {
    .canvas_open {
        right: 19px;
        top: 28px;
    }
}

.canvas_open a {
    font-size: 30px;
    width: 43px;
    height: 40px;
    display: block;
    line-height: 39px;
    text-align: center;
    color: #555;
    border: 1px solid #555;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .canvas_open a {
        width: 33px;
        height: 33px;
        line-height: 30px;
        font-size: 26px;
    }
}

@media only screen and (max-width: 767px) {
    .canvas_open a {
        width: 30px;
        height: 30px;
        line-height: 26px;
        font-size: 24px;
    }
}

.canvas_open a:hover {
    color: #bda87f;
    border-color: #bda87f;
}

.canvas_close {
    position: absolute;
    top: 10px;
    right: 13px;
}

.canvas_close a {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 500;
    width: 32px;
    height: 32px;
    display: block;
    text-align: center;
    line-height: 31px;
    border: 1px solid #8b1b46;
    border-radius: 50%;
    color: #58240c;
}

.canvas_close a:hover {
    background: #bda87f;
    border-color: #bda87f;
    color: aliceblue;
}

.offcanvas_menu_wrapper {
    width: 290px;
    position: fixed;
    background: #fff;
    z-index: 99;
    top: 0;
    height: 100vh;
    transition: 0.5s;
    left: 0;
    margin-left: -300px;
    padding: 50px 15px 30px;
    overflow-y: auto;
}

.offcanvas_menu_wrapper.active {
    margin-left: 0;
}

.offcanvas_menu_wrapper .header_account {
    display: block;
}

ul {
    list-style: outside none none;
    margin: 0;
    padding: 0;
}

.header_account {
    margin-right: 45px;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .header_account {
        margin-right: 25px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .header_account {
        display: none;
        margin-right: 0;
        margin-bottom: 20px;
        text-align: center;
    }
}

@media only screen and (max-width: 767px) {
    .header_account {
        display: none;
        margin-right: 0;
        margin-bottom: 20px;
        text-align: center;
    }
}

.header_account>ul>li {
    display: inline-block;
    position: relative;
    margin-right: 30px;
}

.header_account>ul>li:last-child {
    margin-right: 0;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .header_account>ul>li {
        margin-right: 0;
    }
    .header_account>ul>li:hover>a {
        color: #fff;
    }
}

@media only screen and (max-width: 767px) {
    .header_account>ul>li {
        margin-right: 0;
    }
    .header_account>ul>li:hover>a {
        color: #fff;
    }
}

.header_account>ul>li:hover ul.dropdown_currency, .header_account>ul>li:hover ul.dropdown_language, .header_account>ul>li:hover ul.dropdown_links {
    visibility: visible;
    max-height: 200px;
}

.header_account>ul>li:hover>a {
    color: #fff;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .header_account>ul>li:hover>a {
        color: #bda87f;
    }
}

@media only screen and (max-width: 767px) {
    .header_account>ul>li:hover>a {
        color: #bda87f;
    }
}

.header_account>ul>li>a {
    text-transform: uppercase;
    line-height: 50px;
    font-size: 12px;
    display: inline-block;
    font-weight: 400;
    color: #999;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .header_account>ul>li>a {
        line-height: 22px;
        color: #000;
    }
}

@media only screen and (max-width: 767px) {
    .header_account>ul>li>a {
        line-height: 22px;
        color: #000;
    }
}

.header_account>ul>li>a i {
    margin-left: 3px;
    margin-right: 15px;
}

.header_account>ul>li>a img {
    margin-right: 4px;
}

.header_account>ul>li:hover a:not([href]):not([tabindex]) {
    color: #bda87f;
}

.dropdown_currency, .dropdown_language, .dropdown_links {
    position: absolute;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    min-width: 130px;
    text-align: left;
    top: 100%;
    left: 0;
    transition: all 0.5s ease-out;
    overflow: hidden;
    border-radius: 3px;
    visibility: hidden;
    max-height: 0;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .dropdown_currency, .dropdown_language, .dropdown_links {
        left: -30px;
    }
}

@media only screen and (max-width: 767px) {
    .dropdown_currency, .dropdown_language, .dropdown_links {
        left: -30px;
    }
}

.dropdown_currency li a, .dropdown_language li a, .dropdown_links li a {
    text-transform: uppercase;
    display: block;
    font-size: 12px;
    white-space: nowrap;
    padding: 8px 8px 8px 20px;
    line-height: 20px;
    color: #000;
}

.dropdown_currency li a:hover, .dropdown_language li a:hover, .dropdown_links li a:hover {
    background: #f2f2f2;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .dropdown_language {
        left: -10px;
    }
}

@media only screen and (max-width: 767px) {
    .dropdown_language {
        left: -10px;
    }
}

.dropdown_links {
    right: 0;
    left: auto;
}

.offcanvas_menu_wrapper .header_right_info {
    display: block;
    margin-bottom: 25px;
}

.offcanvas_menu_wrapper .header_right_info>ul>li>a {
    color: #000;
}

.header_right_info {
    text-align: right;
    margin-left: 15px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .header_right_info {
        display: none;
        text-align: center;
        margin-left: 0;
    }
}

@media only screen and (max-width: 767px) {
    .header_right_info {
        display: none;
        text-align: center;
        margin-left: 0;
    }
}

.header_right_info>ul>li {
    display: inline-block;
    position: relative;
    margin-right: 15px;
}

.header_right_info>ul>li:hover>a {
    color: #cc9900;
}

.header_right_info>ul>li:last-child {
    margin-right: 0;
}

.header_right_info>ul>li>a {
    font-size: 20px;
    color: #999;
}

.search_widget {
    position: absolute;
    right: 0;
    top: 36px;
    z-index: 99;
    display: none;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .search_widget {
        left: -68px;
        right: auto;
    }
}

@media only screen and (max-width: 767px) {
    .search_widget {
        left: -68px;
        right: auto;
    }
}

.search_widget form {
    position: relative;
    width: 400px;
    border: 1px solid #ebebeb;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .search_widget form {
        width: 225px;
    }
}

@media only screen and (max-width: 767px) {
    .search_widget form {
        width: 225px;
    }
}

.search_widget form input {
    padding: 10px 40px 10px 15px;
    height: 41px;
    line-height: 30px;
    font-size: 12px;
    color: #222;
    border: none;
    width: 100%;
    background: #f7f7f7;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .search_widget form input {
        padding: 8px 40px 8px 15px;
        height: 38px;
    }
}

@media only screen and (max-width: 767px) {
    .search_widget form input {
        padding: 8px 40px 8px 15px;
        height: 38px;
    }
}

.search_widget form button {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 100%;
    border: 0;
    background: none;
    font-size: 16px;
}

.search_widget form button:hover {
    color: #cc9900;
}

.header_wishlist span.item_count {
    position: absolute;
    top: -6px;
    right: -14px;
    width: 17px;
    height: 17px;
    line-height: 17px;
    border-radius: 100%;
    text-align: center;
    background: #cc9900;
    font-size: 10px;
    font-weight: 400;
    color: #fff;
}

.mini_cart_wrapper:hover .mini_cart {
    max-height: 550px;
    padding: 20px 28px 33px;
    visibility: visible;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .mini_cart_wrapper:hover .mini_cart {
        padding: 10px 11px 20px;
    }
}

@media only screen and (max-width: 767px) {
    .mini_cart_wrapper:hover .mini_cart {
        padding: 10px 11px 20px;
    }
}

.mini_cart_wrapper span.item_count {
    position: absolute;
    top: -6px;
    right: -14px;
    width: 17px;
    height: 17px;
    line-height: 17px;
    border-radius: 100%;
    text-align: center;
    background: #cc9900;
    font-size: 10px;
    font-weight: 400;
    color: #fff;
}

.mini_cart {
    position: absolute;
    min-width: 355px;
    padding: 0 28px;
    background: #fff;
    border: 0;
    z-index: 999;
    right: 0;
    top: 142%;
    max-height: 0;
    visibility: hidden;
    overflow: hidden;
    border: 1px solid #ebebeb;
    transition: all 0.5s;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .mini_cart {
        display: none;
        transition: unset;
        padding: 10px 11px 20px;
        min-width: 253px;
        right: -69px;
        max-height: inherit;
        visibility: inherit;
    }
}

@media only screen and (max-width: 767px) {
    .mini_cart {
        display: none;
        transition: unset;
        padding: 10px 11px 20px;
        min-width: 253px;
        right: -69px;
        max-height: inherit;
        visibility: inherit;
    }
}

.mini_cart2 .cart_info a:hover {
    color: #cc9900 !important;
}

.mini_cart2 .cart_img:hover {
    border-color: #cc9900 !important;
}

.mini_cart2 .cart_remove a:hover {
    border-color: #cc9900 !important;
    background: #cc9900 !important;
}

.mini_cart2 .cart_button a:hover {
    border-color: #cc9900 !important;
    background: #cc9900 !important;
}

.cart_item {
    overflow: hidden;
    padding: 11px 0;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    justify-content: space-between;
}

.cart_img {
    width: 70px;
    margin-right: 10px;
    border: 1px solid transparent;
}

.cart_img:hover {
    border-color: #cc9900 !important;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .cart_img {
        width: 70px;
    }
}

@media only screen and (max-width: 767px) {
    .cart_img {
        width: 70px;
    }
}

.cart_info {
    width: 60%;
    text-align: left;
    top: 20px;
    position: relative;
    color: #000;
}

.cart_info a {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    display: block;
    margin-bottom: 6px;
    color: #000;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .cart_info a {
        font-size: 13px;
    }
}

@media only screen and (max-width: 767px) {
    .cart_info a {
        font-size: 13px;
    }
}

img {
    max-width: 100%;
    height: auto;
}

.cart_info a:hover {
    color: #cc9900;
    text-decoration: none;
}

.cart_info p {
    font-size: 12px;
}

.cart_info p span {
    font-size: 16px;
    font-weight: 600;
}

.cart_remove a {
    font-size: 15px;
    border: 1px solid #ebebeb;
    width: 20px;
    height: 20px;
    display: block;
    line-height: 18px;
    text-align: center;
    border-radius: 50%;
    text-decoration: none;
    color: #555;
}

.cart_remove a:hover {
    background: #cc9900;
    border-color: #cc9900;
    color: #fff;
}

.cart_remove a i {
    display: block;
    padding-left: 2px;
    padding-top: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
}

.mini_cart_table {
    padding: 23px 0px;
}

.cart_total {
    display: flex;
    justify-content: space-between;
    color: #000;
}

.cart_total span {
    font-size: 14px;
    font-weight: 400;
}

.cart_total span.price {
    font-weight: 700;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .cart_total span {
        font-size: 13px;
    }
}

@media only screen and (max-width: 767px) {
    .cart_total span {
        font-size: 13px;
    }
}

.cart_button:first-child {
    margin-bottom: 15px;
}

.cart_button a {
    text-transform: uppercase;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 500;
    display: block;
    text-align: center;
    line-height: 20px;
    margin-bottom: 0;
    padding: 10px 0px;
    color: #000;
    border: 2px solid #000;
    text-decoration: none;
}

.cart_button a:hover {
    color: #fff;
    border-color: #cc9900;
}

.offcanvas_main_menu li a:hover {
    color: #cc9900;
}

.offcanvas_main_menu li ul.sub-menu {
    padding-left: 20px;
}

.offcanvas_main_menu>li.menu-item-has-children.menu-open>span.menu-expand {
    transform: rotate(180deg);
}

.offcanvas_main_menu>li ul li.menu-item-has-children.menu-open span.menu-expand {
    transform: rotate(180deg);
}

.offcanvas_main_menu li {
    position: relative;
}

.offcanvas_main_menu li:last-child {
    margin: 0;
}

.offcanvas_main_menu li span.menu-expand {
    position: absolute;
    right: 0;
}

.offcanvas_main_menu li a {
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
    display: block;
    padding-bottom: 10px;
    margin-bottom: 10px;
    color: #000;
    border-bottom: 1px solid #ebebeb;
}

a:focus {
    text-decoration: none !important;
    color: inherit;
    outline: none;
}

a:hover {
    text-decoration: none !important;
}

.offcanvas_main_menu li a:hover {
    color: #cc9900;
}

.offcanvas_main_menu li ul.sub-menu {
    padding-left: 20px;
}

p:last-child {
    margin-bottom: 0;
}

a, button {
    color: inherit;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
}

a, button, img, input, span {
    transition: all 0.3s ease 0s;
}

*:focus {
    outline: none !important;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
    margin-top: 0;
}

.offcanvas_footer {
    margin-top: 50px;
    padding-bottom: 50px;
    text-align: center;
}

.offcanvas_footer span a {
    font-size: 14px;
}

.offcanvas_footer span a:hover {
    color: #cc9900;
}

.offcanvas_footer ul {
    margin-top: 20px;
}

.offcanvas_footer ul li {
    display: inline-block;
    margin-right: 4px;
}

.offcanvas_footer ul li:last-child {
    margin-right: 0;
}

.offcanvas_footer ul li a {
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    font-size: 13px;
    color: #fff;
}

.offcanvas_footer ul li.facebook a {
    background: #3c5b9b;
}

.offcanvas_footer ul li.twitter a {
    background: #1da1f2;
}

.offcanvas_footer ul li.pinterest a {
    background: #bd081b;
}

.offcanvas_footer ul li.linkedin a {
    background: #242492;
}

.offcanvas_footer ul li.google-plus a {
    background: #2af645;
}

.offcanvas_footer ul li.facebook a:hover {
    background: #cc9900;
}

.offcanvas_footer ul li.twitter a:hover {
    background: #cc9900;
}

.offcanvas_footer ul li.pinterest a:hover {
    background: #cc9900;
}

.offcanvas_footer ul li.linkedin a:hover {
    background: #cc9900;
}

.offcanvas_footer ul li.google-plus a:hover {
    background: #cc9900;
}

.fa-envelope {
    margin-right: 5px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    font-size: 13px;
    background: #9a1ee2;
    color: #fff;
}

.offcanvas_footer a {
    letter-spacing: 2px;
}

/* ***************************** */

.header_transparent {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .header_transparent {
        position: inherit;
    }
}

@media only screen and (max-width: 767px) {
    .header_transparent {
        position: inherit;
    }
}

.header_transparent .header_container {
    background: rgba(0, 0, 0, 0.9);
    padding: 17px 0;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .header_transparent .header_container {
        background: #1c1d22;
    }
}

@media only screen and (max-width: 767px) {
    .header_transparent .header_container {
        background: #1c1d22;
    }
}

.header_transparent .sticky-header.sticky {
    background: rgba(28, 29, 24, 0.7);
    padding: 8px 0;
}

.header_container {
    padding: 22px 0;
    background: #1c1d22;
}

@media only screen and (max-width: 767px) {
    .header_container {
        padding: 25px 0;
    }
}

.sticky-header.sticky {
    position: fixed;
    z-index: 99;
    width: 100%;
    top: 0;
    background: rgba(28, 29, 24, 0.7);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.11);
    animation: fadeInDown;
    animation-duration: 900ms;
    animation-timing-function: cubic-bezier(0.2, 1, 0.22, 1);
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    border-bottom: 0;
    display: block;
    padding: 10px 0;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .sticky-header.sticky {
        position: inherit;
        box-shadow: inherit;
        animation-name: inherit;
        padding: 0;
        background: inherit;
        opacity: inherit;
    }
}

@media only screen and (max-width: 767px) {
    .sticky-header.sticky {
        position: inherit;
        box-shadow: inherit;
        animation-name: inherit;
        padding: 0;
        background: inherit;
        opacity: inherit;
    }
}

.sticky-header.sticky .logo a img {
    max-width: 118px;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .sticky-header.sticky .logo a img {
        max-width: 100%;
    }
}

@media only screen and (max-width: 767px) {
    .sticky-header.sticky .logo a img {
        max-width: 100px;
    }
}

.header_transparent .sticky-header.sticky {
    background: rgba(28, 29, 24, 0.7);
    padding: 8px 0;
}

@media only screen and (max-width: 767px) {
    .logo {
        display: inline-block;
    }
}

@media only screen and (max-width: 767px) {
    .logo a img {
        max-width: 110px;
    }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
    .main_menu {
        display: none;
    }
}

@media only screen and (max-width: 767px) {
    .main_menu {
        display: none;
    }
}

.main_menu nav>ul {
    display: flex;
    justify-content: flex-end;
}

.main_menu nav>ul>li {
    position: relative;
    flex-shrink: 0;
}

.main_menu nav>ul>li:hover ul.sub_menu {
    visibility: visible;
    max-height: 300px;
    padding: 24px 30px;
}

.main_menu nav>ul>li:hover .mega_menu {
    visibility: visible;
    max-height: 300px;
    padding: 25px 30px 30px 30px;
}

.main_menu nav>ul>li:hover>a {
    color: #cc9900;
}

.main_menu nav>ul>li>a {
    display: block;
    font-size: 14px;
    line-height: 20px;
    padding: 10px 23px;
    text-transform: uppercase;
    font-weight: 400;
    position: relative;
    color: #fff;
}

.main_menu nav>ul>li>a i {
    margin-left: 3px;
}

.main_menu nav>ul>li>a.active {
    color: #cc9900;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .main_menu nav>ul>li>a {
        padding: 10px 15px;
    }
}

.main_menu nav>ul>li ul.sub_menu {
    position: absolute;
    min-width: 215px;
    padding: 0 30px;
    background: #fff;
    box-shadow: 0 3px 11px 0 rgba(0, 0, 0, 0.1);
    max-height: 0;
    transform-origin: 0 0 0;
    left: 0;
    right: auto;
    visibility: hidden;
    overflow: hidden;
    transition: 0.5s;
    z-index: 99;
    top: 100%;
    text-align: left;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.main_menu nav>ul>li ul.sub_menu li a {
    font-size: 13px;
    font-weight: 400;
    display: block;
    line-height: 32px;
    text-transform: capitalize;
}

.main_menu nav>ul>li ul.sub_menu li a:hover {
    color: #cc9900;
}

.main_menu nav>ul>li.mega_items {
    position: static;
}

.main_menu nav>ul>li .mega_menu {
    position: absolute;
    min-width: 100%;
    padding: 0 30px 0 30px;
    background: #fff;
    box-shadow: 0 3px 11px 0 rgba(0, 0, 0, 0.1);
    max-height: 0;
    transform-origin: 0 0 0;
    left: 0;
    right: auto;
    visibility: hidden;
    overflow: hidden;
    transition: 0.5s;
    z-index: 99;
    top: 100%;
    text-align: left;
}

.menu_two nav>ul {
    justify-content: center;
}

.menu_two nav>ul>li:hover>a {
    color: #cc9900;
}

.menu_two nav>ul>li>a {
    padding: 10px 20px;
}

@media only screen and (min-width: 1200px) and (max-width: 1600px) {
    .menu_two nav>ul>li>a {
        padding: 10px 14px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .menu_two nav>ul>li>a {
        padding: 10px 5px;
        font-size: 13px;
    }
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .menu_two nav>ul>li>a i {
        margin-left: 1px;
    }
}

.menu_two nav>ul>li>a.active {
    color: #cc9900;
}

.menu_two nav>ul>li ul.sub_menu li a:hover {
    color: #cc9900;
}

.menu_two .mega_menu_inner>li>a:hover {
    color: #cc9900;
}

.menu_two .mega_menu_inner>li ul li a:hover {
    color: #cc9900;
}

.menu_position {
    position: relative;
    padding-top: 12px;
}

.mega_menu_inner {
    display: flex;
    justify-content: space-between;
}

.mega_menu_inner>li>a {
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    font-weight: 600;
    display: block;
    margin-bottom: 12px;
}

.mega_menu_inner>li>a:hover {
    color: #cc9900;
}

.mega_menu_inner>li ul li {
    display: block;
}

.mega_menu_inner>li ul li a {
    font-size: 13px;
    font-weight: 400;
    display: block;
    line-height: 30px;
    text-transform: capitalize;
}

.mega_menu_inner>li ul li a:hover {
    color: #cc9900;
}

.header_top_right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.header_top_right .header_right_info {
    margin-left: 0;
}

.header_top_right .header_right_info>ul>li {
    margin-right: 11px;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .header_top_right .header_right_info>ul>li {
        margin-right: 10px;
    }
}

.header_top_right .header_right_info>ul>li:last-child {
    margin-right: 0;
}

.header_top_right .header_right_info>ul>li>a {
    color: #fff;
}

.header_top_right .header_right_info>ul>li:hover>a {
    color: #cc9900;
}

.header_top_right .header_account {
    margin-right: 0;
    margin-left: 20px;
}

.header_top_right .header_account>ul>li {
    position: relative;
    margin-right: 10px;
}

@media only screen and (min-width: 992px) and (max-width: 1199px) {
    .header_top_right .header_account>ul>li {
        margin-right: 8px;
        padding-right: 8px;
    }
}

.header_top_right .header_account>ul>li::before {
    content: "";
    width: 1px;
    height: 18px;
    background: #a4a5a7;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.header_top_right .header_account>ul>li:last-child {
    margin-right: 0;
    padding-right: 0;
}

.header_top_right .header_account>ul>li:last-child::before {
    display: none;
}

.header_top_right .header_account>ul>li>a {
    color: #fff;
    font-size: 13px;
}

.header_top_right .header_account>ul>li.top_links>a {
    font-size: 18px;
}

.header_top_right .header_account>ul>li:hover>a {
    color: #cc9900;
}

.header_top_right .dropdown_language, .header_top_right .dropdown_currency, .header_top_right .dropdown_links {
    right: 0;
    left: auto;
}

/* ************************* */

.master-slider {
    position: relative;
    visibility: hidden;
    font-family: 'Lato', sans-serif;
}

.master-slider a {
    transition: none;
}

.master-slider, .master-slider * {
    box-sizing: content-box;
}

.pt-pb {
    padding-top: 0;
    padding-bottom: 0;
}

.ms-slide {
    position: absolute;
    height: 100%;
    transform: translateZ(0px);
}

.ms-slide .ms-layer {
    position: absolute;
    pointer-events: auto;
}

.ms-layer.bold-title {
    font-weight: 900;
    font-size: 26pt;
    color: #222;
    margin: 0;
}

.ms-layer.light-title {
    margin: 0;
    font-weight: 300;
    font-size: 38pt;
    text-transform: uppercase;
    color: #f1f1f1;
    letter-spacing: -3px;
}

html, body {
    height: 100%;
    overflow-x: hidden;
    width: 100%;
}

body {
    color: #c5c5c5;
    background-color: #0a0c0b;
}

.btn, .btn:hover {
    transition: all 0.5s ease-in-out;
}

a {
    color: #000;
    transition: all 0.5s ease-in-out;
}

a:hover, a:focus {
    color: #d9932f;
    outline: none;
    outline-offset: 0px;
    text-decoration: none !important;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
}

.ms-slide .ms-slide-layers {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    z-index: 109;
    top: 0px;
    pointer-events: none;
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background-image: linear-gradient(125deg, #fb3c7f 0%, #ffc05e 100%);
    border-radius: 10px;
}

.no-padding {
    padding: 0;
}

.no-gutter>[class*='col-'] {
    padding-right: 0;
    padding-left: 0;
}

.lineeffect {
    margin-bottom: 0;
}

.lineeffect a:hover::before, .lineeffect a:hover::after {
    opacity: 1;
    transform: scale(1);
}

.lineeffect a::before, .lineeffect a::after {
    bottom: 10px;
    content: "";
    left: 10px;
    opacity: 0;
    position: absolute;
    right: 10px;
    top: 10px;
    transition: opacity 0.35s ease 0s, transform 0.35s ease 0s;
    z-index: 1;
}

.lineeffect a::before {
    border-bottom: 1px solid rgba(255, 255, 255);
    border-top: 1px solid #fff;
    transform: scale(0, 1);
}

.lineeffect a::after {
    border-left: 1px solid rgba(255, 255, 255);
    border-right: 1px solid #fff;
    transform: scale(1, 0);
}

.img-fill {
    min-width: -webkit-fill-available;
}

section {
    padding: 50px 0;
}

.category-img img {
    display: block;
    margin-bottom: 15px;
}

.category-img .cat-link {
    text-align: center;
}

.category-img .cat-link a {
    display: inline-block;
    font-weight: normal;
    color: #cc9900;
}

.category-img .cat-link a:hover {
    color: #f0dc6f;
}

.super-deal-section {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;
    min-height: 500px;
}

.super-deal h1 {
    color: #fff;
    font-weight: 600;
    font-size: 3.42em;
}

.super-deal h2 {
    color: #fff;
}

.super-deal a.btn {
    border: 1px solid #fff;
    padding: 10px 25px;
    color: #fff;
}

.super-deal a.btn:hover {
    border: 1px solid #d9932f;
    color: #d9932f;
    background-color: #fff;
}

.super-deal {
    margin-top: 85px;
    margin-bottom: 85px;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.6);
    color: #fff;
}

@media only screen and (max-width: 991px) {
    .super-deal-section {
        min-height: 350px;
    }
    .super-deal {
        margin-top: 0px;
        margin-bottom: 15px;
    }
    .super-deal h1 {
        font-weight: 600;
        font-size: 24px;
    }
}

@media only screen and (max-width: 767px) {
    .super-deal-section {
        background-position: top center;
        min-height: 300px;
    }
}

.product-slide .row {
    height: auto;
    margin: 0 auto;
}

.tabSix .nav-tabs {
    border-bottom: none;
}

.tabSix .nav-tabs>li>a {
    margin-right: 0;
    line-height: 1.42;
    background-color: transparent;
    border-style: solid;
    border-color: #898989;
    color: #999;
    border-width: 0 0 0 0;
    border-radius: 0px;
    padding: 10px 25px;
    font-weight: 600;
}

.tabSix .nav-tabs>li.active>a, .tabSix .nav-tabs>li.active>a:focus, .tabSix .nav-tabs>li.active>a:hover, .tabSix .nav-tabs>li>a:hover {
    color: #d9932f;
    cursor: pointer;
    border-width: 0 0 0 0;
    background-color: transparent;
}

.tabSix .nav-tabs li a p {
    margin-bottom: 0;
    font-size: 1em;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
}

.tabSix .nav-tabs li {
    display: inline-block;
    float: none;
}

@media (min-width: 768px) {
    .tabSix .tab-content {
        margin-top: 24px;
    }
}

.tabSix ul li::after {
    font: normal normal normal 14px/1 FontAwesome;
    content: "\f111";
    display: inline-block;
    position: absolute;
    right: -4px;
    top: 18px;
    font-size: 7px;
}

.tabSix ul li:last-child::after {
    display: none;
}

.product-main {
    float: left;
    width: calc(100% - 2px);
    transition: all 0.45s ease-in-out;
    overflow: hidden;
}

figure {
    float: left;
    position: relative;
}

.product-main figure::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.45s ease-in-out;
}

.product-main figure.dark-theme::before {
    background-color: #000;
}

figure img {
    width: 100%;
}

.ribbon {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    background-color: #d9932f;
}

.ribbon span {
    color: aliceblue;
    text-transform: capitalize;
    padding: 22px 0px;
    display: inline-block;
    font-size: 15px;
    transform: rotate(-90deg);
    font-weight: 600;
}

.ribbon::after {
    content: "";
    width: 0px;
    height: 0;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    position: absolute;
    bottom: -4px;
    left: 50%;
    margin-left: -4px;
    border-top: 4px solid #d9932f;
}

.block-sticker-tag1 {
    width: 50px;
    height: 50px;
    background-color: #313131;
    position: absolute;
    top: 50%;
    margin-top: -75px;
    right: -51px;
    color: #fff;
    opacity: 0;
    transition: all 0.45s ease-in-out;
}

.off_tag {
    position: absolute;
    top: 9px;
    left: 0;
    font-size: 13px;
    color: #fff;
    line-height: 15px;
    text-transform: uppercase;
    text-align: center;
}

.block-sticker-tag1 strong {
    font-size: 18px;
    text-align: center;
    padding: 7px 0 0 15px;
    display: inline-block;
}

.block-sticker-tag2 {
    width: 50px;
    height: 50px;
    background-color: #313131;
    position: absolute;
    top: 50%;
    margin-top: -25px;
    right: -51px;
    color: #fff;
    opacity: 0;
    transition: all 0.45s ease-in-out;
}

.off_tag1 {
    position: absolute;
    top: 20px;
    left: 0;
    font-size: 13px;
    color: #fff;
    line-height: 15px;
    text-transform: uppercase;
    text-align: center;
}

.block-sticker-tag2 strong {
    font-size: 18px;
    text-align: center;
    padding: 0px 0 0 16px;
    display: inline-block;
    margin-top: -2px;
}

.block-sticker-tag3 {
    width: 50px;
    height: 50px;
    background-color: #313131;
    position: absolute;
    top: 50%;
    margin-top: 25px;
    right: -51px;
    color: #fff;
    opacity: 0;
    transition: all 0.45s ease-in-out;
}

.off_tag2 {
    position: absolute;
    top: 20px;
    left: 0;
    font-size: 13px;
    color: #fff;
    line-height: 15px;
    text-transform: uppercase;
    text-align: center;
}

.block-sticker-tag3 strong {
    font-size: 18px;
    text-align: center;
    padding: 0px 0 0 16px;
    display: inline-block;
    margin-top: -2px;
}

.block-caption1 {
    width: 100%;
    display: inline-block;
    position: relative;
    text-align: center;
}

.block-caption1 h4 {
    font-size: 1.42em;
    font-weight: 400;
    margin-top: 10px;
    color: #fff;
}

.rpice {
    padding: 0;
    margin-top: 6px;
    margin-bottom: 10px;
}

.sell-price {
    font-size: 1.2em;
    font-weight: 700;
    margin-right: 10px;
    color: #d9932f;
}

.rpice .actual-price {
    color: #ababab;
    font-size: 1.3em;
    text-decoration: line-through;
}

.product-main:hover {
    transition: all 0.45s ease-in-out;
}

.product-main:hover figure::before {
    opacity: 0.4;
    transition: all 0.45s ease-in-out;
}

.product-main:hover figure .block-sticker-tag1, .product-main:hover figure .block-sticker-tag2, .product-main:hover figure .block-sticker-tag3 {
    opacity: 1;
    right: 0;
    transition: all 0.45s ease-in-out;
}

.block-sticker-tag1:hover strong, .block-sticker-tag2:hover strong, .block-sticker-tag3:hover strong {
    color: #d9932f;
    cursor: pointer;
}

.testi {
    text-align: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
}

.testi #quote-carousel.carousel {
    padding-bottom: 30px;
}

.testi #quote-carousel.carousel .carousel-inner .item {
    opacity: 0;
    transition-property: opacity;
}

.testi #quote-carousel.carousel .carousel-inner .active {
    opacity: 1;
    transition-property: opacity;
}

.testi #quote-carousel.carousel .carousel-indicators {
    bottom: -10px;
    z-index: 2;
}

.testi #quote-carousel.carousel .carousel-indicators li {
    background-color: #848484;
    border: none;
}

.testi #quote-carousel.carousel .carousel-indicators .active {
    background-color: #cc9900;
    border: none;
    width: 10px;
    height: 10px;
    margin: 1px;
}

.testi #quote-carousel.carousel blockquote {
    text-align: left;
    border: none;
    font-size: 14px;
    color: #fff;
    width: 90%;
    margin: 15px auto;
}

.testi #quote-carousel.carousel blockquote p {
    letter-spacing: 1px;
    padding-top: 15px;
}

.testi #quote-carousel.carousel blockquote .profile-circle img {
    margin: 0 auto;
    border-radius: 50%;
    border: 8px solid #d9932f;
}

.testi .item .name {
    color: #fff;
    font-size: 18px;
}

.testi .item .position {
    text-align: left;
}

@media only screen and (max-width: 1199px) {
    .testi #quote-carousel blockquote {
        text-align: center;
    }
}

@media only screen and (max-width: 767px) {
    .testi #quote-carousel blockquote {
        width: 100%;
    }
}

.blog-title a {
    color: #fff;
}

.blog-img .bubble-top::before {
    pointer-events: none;
    position: absolute;
    z-index: 999;
    content: "";
    border-style: solid;
    transition-duration: 0.3s;
    transition-property: top;
    left: calc(50% - 20px);
    bottom: 0;
    border-width: 0 20px 20px 20px;
    border-color: transparent transparent #0a0c0b transparent;
}

.blog-img .bubble-bottom::before {
    pointer-events: none;
    position: absolute;
    z-index: 999;
    content: "";
    border-style: solid;
    transition-duration: 0.3s;
    transition-property: top;
    left: calc(100% - 20px);
    top: 0;
    border-width: 20px 20px 0 20px;
    border-color: #0a0c0b transparent transparent transparent;
}

.ImageWrapper .PStyleHe {
    position: absolute;
    background: url(images/plus.png) no-repeat scroll center center / 100% 100% #222222;
    width: 100%;
    height: 100%;
    z-index: 199;
    background-origin: padding-box, padding-box;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 10px 10px, 100% 100%;
    opacity: 0;
    top: 0;
    transition: all 0.3s ease 0s;
}

.ImageWrapper {
    display: block;
    overflow: hidden;
    position: relative;
}

.ImageWrapper:hover .PStyleHe {
    opacity: 0.6;
    background-size: 60px 60px, 100% 100%;
    visibility: visible;
}

.blog-content {
    padding: 15px;
    min-height: 265px;
}

.read-more {
    color: #cc9900;
}

@media only screen and (max-width: 1024px) {
    .blog-content {
        min-height: 220px;
    }
}

@media only screen and (max-width: 991px) {
    .blog-content {
        padding: 15px;
        min-height: 170px;
    }
    .blog-title h4 {
        margin-top: 0;
        margin-bottom: 5px;
    }
    .post-date {
        margin-bottom: 5px;
    }
    .post-content {
        margin-bottom: 10px;
    }
}

@media only screen and (max-width: 767px) {
    .blog-content {
        padding: 15px;
        min-height: 170px;
        background-color: #000;
        margin-bottom: 10px;
    }
    .blog-img .bubble-top::before {
        border-color: transparent transparent #000 transparent;
    }
    .blog-img .bubble-bottom::before {
        border-color: #000 transparent transparent transparent;
    }
}

.newsletter-bg {
    background: linear-gradient(to right, #111514 50%, #540b23 0, #540b23 50%, #540b23 100%);
    padding-bottom: 60px;
    min-height: 250px;
}

.newsletter-bg form {
    text-align: right;
}

.newsletter {
    width: auto;
    display: inline-block;
    margin: 0 auto;
}

.form-inline .newsletter .form-control {
    border: 1px solid #0a0c0b;
    border-radius: 0;
    width: 370px;
    background-color: #0a0c0b;
    height: 50px;
}

.newsletter .btn-default {
    border: 1px solid #d9932f;
    border-radius: 0;
    background-color: #d9932f;
    color: #fff;
    transition: ease 0.5s ease-in-out;
    padding: 8px 25px;
    /* font-size: 18px; */
    align-items: center;
}

.newsletter .btn-default:hover {
    border: 1px solid #d9932f;
    background-color: #fff;
    color: #d9932f;
    transition: ease-in-out 0.5s ease-in-out;
}

.newsletter .btn-default i {
    margin-left: 7px;
    font-size: 15px;
    background-color: transparent;
}

.newsletter .btn-default:hover i {
    color: #d9932f;
}

.t-mb-20 {
    margin-bottom: 20px;
}

.t-pt-40 {
    padding-top: 40px;
}

.t-pb-30 {
    padding-bottom: 30px;
}

.t-pt-70 {
    padding-top: 70px;
}

@media only screen and (max-width: 991px) {
    .newsletter-bg {
        background-position: top;
    }
    .newsletter .btn-default {
        margin-top: 8px;
    }
}

@media only screen and (max-width: 767px) {
    .newsletter-bg form {
        text-align: center;
    }
}

.footer {
    text-align: center;
    padding: 80px 0 0;
    background-color: #000;
}

.footer .footer-block {
    text-align: left;
}

.footer .footer-block li a {
    color: #ccc;
    padding-bottom: 5px;
    padding-top: 5px;
    display: block;
}

.footer .footer-block li a::before {
    content: "\f068";
    font-family: fontawesome;
    margin-right: 10px;
    font-size: 7px;
    vertical-align: middle;
    color: #fff;
}

.footer .footer-block li a:hover {
    margin-left: 5px;
    text-decoration: none;
}

.footer-title {
    color: #d9932f;
    text-transform: capitalize;
    padding-bottom: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
}

hr.footer_border {
    color: #d9932f;
    width: 20%;
    text-align: left;
    border-color: #d9932f;
    border-width: 2px;
    margin: 0 0 20px 0;
}

.footer_icon {
    padding-top: 5px;
}

.footer_icon i {
    color: #ccc;
    margin-right: 10px;
}

.contact_footer, .contact_footer a {
    color: #ccc;
}

.footer_icon .fa-envelope {
    background: transparent;
}

.footer_icon div {
    padding: 5px 0 0;
}

.footer_botom_outer {
    margin-top: 50px;
}

.footerbottom_link {
    border-top: 1px solid #d9932f;
    border-bottom: 1px solid #d9932f;
    padding: 20px 0 15px 0;
}

.footerbottom_link, .copyright {
    text-align: center;
    color: #ccc;
}

footer .card .ul.list-inline {
    margin: 0;
}

.copyright p {
    color: #ccc;
    padding: 25px 0;
    font-size: 1em;
    line-height: 15px;
    height: 50px;
}

.copyright i {
    color: #d9932f;
    margin-right: 5px;
}

@media only screen and (max-width: 991px) {
    .footer {
        padding: 30px 0 0;
    }
}

blockquote {
    text-align: center !important;
}
