export const FooterStyle = () => (
  <style jsx="true" global="true">{` 
  .bg_dark_theme{
    background-color: #240B36;
 }
 .footer_bg_line{
    background: linear-gradient(to left, #FCB503 25%, #37A3D2 25% 50%, #522472 50% 75%, #FF385C 75% );
 } 
 .pt_45 {
    padding-top: 45px;
  }
  .pt_35 {
    padding-top: 35px;
  }
  .pt_25 {
    padding-top: 25px;
  }
  .pt_15 {
    padding-top: 15px;
  }
  .pt_5 {
    padding-top: 5px;
  }
 
  
  .pb_45 {
    padding-bottom: 45px;
  }
  .pb_35 {
    padding-bottom: 35px;
  }
  .pb_15 {
    padding-bottom: 15px;
  }
  .pl-0 {
    padding-left: 0px;
  }
 .height_3{
    height: 3px;
 }
 .op_5{
    opacity: 0.5;
 }
 
  .list_style_none {
    list-style: none;
  }
 
  ul.footer_ul li a {
    color: #fff;
    opacity: 0.5;
    text-decoration: none;
    font-size: 15px;
    line-height: 27px;
    -moz-transition: all 0.3s ease-in-out;
     -o-transition: all 0.3s ease-in-out;
     -webkit-transition: all 0.3s ease-in-out;
     -ms-transition: all 0.3s ease-in-out;
     transition: all 0.3s ease-in-out;
  }
  ul.footer_ul li a:hover {
    color: #FF385C;
    padding-left: 10px !important;
     opacity: 1;
  }
 
 
  .social_icon a {
    margin-right: 15px;
  }
  
 .social_icon a svg path {
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
 
  .social_icon a:hover svg path {
    fill: #FF385C !important;
 
  }
 
  @media screen and (max-width: 767px) and (min-width: 320px) { 
    ul.footer_ul li a {
       font-size: 12px;
       line-height: 19px;
     }
     .fm12 {
       font-size: 12px;
     }
 } 
  `}</style>
  )