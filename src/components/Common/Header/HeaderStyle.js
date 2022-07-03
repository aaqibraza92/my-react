export const HeaderStyle = () => (
  <style jsx="true" global="true">{`
    nav.primary-navigation {
      font-size: 14px;
    }
    nav.primary-navigation ul li {
      list-style: none;
      margin: 0 auto;
      display: inline-block;
      padding: 0 0px;
      position: relative;
      text-decoration: none;
      text-align: center;
      margin-right: 15px;
      transition: all 200ms linear;
    }
    nav.primary-navigation li a {
      color: #5b5d6b;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      text-transform: uppercase;
    }
    nav.primary-navigation li a:hover {
      color: #ff385c;
    }
    nav.primary-navigation li:hover {
      cursor: pointer;
    }
    nav.primary-navigation ul li ul {
      visibility: hidden;
      opacity: 0;
      position: absolute;
      padding-left: 0;
      left: 0;
      display: none;
      background: white;
    }
    nav.primary-navigation ul li:hover > ul,
    nav.primary-navigation ul li ul:hover {
      visibility: visible;
      opacity: 1;
      display: block;
      min-width: 250px;
      text-align: left;
      padding-top: 20px;
      box-shadow: 0px 3px 14px -5px #0000008c;
      border-radius: 7px;
    }
    nav.primary-navigation ul li ul li {
      clear: both;
      width: 100%;
      text-align: left;
      margin-bottom: 10px;
      border-style: none;
      padding: 0px 15px;
    }

    nav.primary-navigation ul li ul li a {
      text-transform: capitalize;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
    nav.primary-navigation ul li ul li a:hover {
      padding-left: 10px;
      border-left: 2px solid #ff385c;
      transition: all 0.3s ease;
    }
    a {
      text-decoration: none;
    }
    a:hover {
      color: #3ca0e7;
    }
    ul li ul li a {
      transition: all 0.5s ease;
    }

    .f14 {
      font-size: 14px;
      line-height: 20px;
    }
    .text_d_none {
      text-decoration: none;
    }
    .header_top_menu div:nth-child(1) {
      margin-right: 15px;
    }
    .color_theme {
      color: #5b5d6b;
    }
    .color_theme a {
      color: #5b5d6b;
      -moz-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      -webkit-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
    .color_theme a:hover {
      color: #ff385c;
    }
    ul.dropdown {
      animation: 0.5s ease-in 0s normal forwards 1 fadein;
      animation: 0.2s ease-in-out 0s normal forwards 1 fadein;
    }
    @keyframes fadein {
      from {
        transform: translate3d(0, 8px, 0);
        opacity: 0;
      }
      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }
    .bradius30 {
      border-radius: 30px;
    }

    .bshadow {
      box-shadow: 1px 2px 10px #3e3e3e4f;
    }

    .borBottomGrey {
      border-bottom: 3px solid #453054;
    }

    .w24 {
      height: 24px;
      width: 24px;
    }

    /* destop view css for  header  customer*/
    .wc-75 {
      width: 75%;
    }

    /* tablet view css for  header  customer*/
    @media screen and (max-width: 1024px) {
      .wc-75 {
        display: none;
      }
    }

    /* mobile view css for new header */
    @media screen and (max-width: 767px) {
      .mobile-end-none {
        justify-content: center !important;
      }
      .mobile-center {
        text-align: center;
      }
      .mobile_view_order {
        display: flex;
      }
      .mobile_view_order {
        display: flex;
      }
      .o1 {
        order: -1;
      }
      .o2 {
        order: 0;
      }
      .o3 {
        order: -1;
      }
    }

    /* Header Business CSS  */

    #toggle {
      display: none;
    }

    /**
  Hamburger
**/
    .hamburger {
      position: absolute;
      top: 15px;
      right: 16px;
      margin-left: 0em;
      margin-top: -30px;
      width: 30px;
      height: 30px;
      z-index: 5;
      cursor: pointer;
    }

    .hamburger div {
      position: relative;
      width: 35px;
      height: 2px;
      border-radius: 3px;
      background-color: #6c7584;
      margin-top: 7px;
      transition: all 0.3s ease-in-out;
    }
    .humber_menu {
      padding-left: 0px;
      list-style: none;
    }
    .humber_menu li {
      text-align: center;
    }
    .humber_menu a {
      color: #000;
      font-size: 19px;
      text-align: center;
      line-height: 33px;
    }
    /**
Nav Styles
**/
    .nav {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: #ffebe7;
      top: 0%;
      left: 0;
      right: -100%;
      bottom: 0;
      overflow: hidden;
      transition: all 0.4s ease-in-out;
      transform: scale(0);
      z-index: 3;
    }
    .nav-wrapper {
      position: relative;
      overflow: hidden;
      overflow-y: auto;
      height: 100%;
      width: 100%;
    }
    .nav-wrapper {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    nav a:before {
      content: "";
      height: 0;
      position: absolute;
      width: 0.25em;
      background-color: white;
      left: -0.5em;
      transition: all 0.2s ease-in-out;
    }
    nav a:hover {
      color: white;
    }
    nav a:hover:before {
      height: 100%;
    }

    /**
Animations
**/
    #toggle:checked + .hamburger .top-bun {
      transform: rotate(-45deg);
      margin-top: 14px;
    }
    #toggle:checked + .hamburger .bottom-bun {
      opacity: 0;
      transform: rotate(45deg);
    }
    #toggle:checked + .hamburger .meat {
      transform: rotate(45deg);
      margin-top: -1px;
    }

    #toggle:checked + .hamburger + .nav {
      top: 0;
      transform: scale(1);
    }

    .z-5 {
      position: relative;
      z-index: 5;
    }

    @media screen and (max-width: 767px) {
      /* / STYLES HERE / */
      .destop_none {
        display: block;
      }
      .mobile_none {
        display: none;
      }
      .z-9999 {
        position: relative;
        z-index: 3;
      }
      body .mobile-left {
        text-align: left !important;
      }
    }

    .sticky_auth_header {
      position: sticky;
      top: 0px;
      background-color: #fff;
      z-index: 1;
    }
  `}</style>
);
