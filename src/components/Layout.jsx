import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = memo(() => {
  return (
    <div className="">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
