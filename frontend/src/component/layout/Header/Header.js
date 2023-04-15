import React from "react";
import {ReactNavbar} from "overlay-navbar"  
import logo from "../../../images/logo.png";
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";

const options = {
  burgerColor: "#881205",
  burgerColorHover: "#7149C6",
  logo,
  logoWidth: "20vmax",
  navColor1: "rgba(25, 24, 37, 1.1)",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "2.5vmax",
  link1Color: "rgba(136, 18, 5,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#881205",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
 
  profileIconColorHover: "#881205",
  searchIconColorHover: "#881205",
  cartIconColorHover: "#881205",
  cartIconMargin: "1vmax",
  profileIcon:true,
  profileIconColor: "rgba(136, 18, 5,0.8)",
  ProfileIconElement: MdAccountCircle, 
  searchIcon:true,
  searchIconColor: "rgba(136, 18, 5,0.8)",
  SearchIconElement:MdSearch,
  cartIcon:true,
  cartIconColor: "rgba(136, 18, 5,0.8)",
  CartIconElement: MdAddShoppingCart,
  
  searchIconSize:"2.5vmax",
cartIconSize:"2.5vmax",
profileIconSize:"2.5vmax",

};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
 