import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../global.css";

export default function Layout() {
  return (
    <div id="container--main">
      <Navbar />

      {/* This is where your page content renders dynamically */}
      <Outlet /> 

      <Footer />
    </div>
  );
}