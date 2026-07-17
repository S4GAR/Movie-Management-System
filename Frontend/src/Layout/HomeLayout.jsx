import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import { useState } from "react";
const HomeLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="bg-[#0f172aec] min-h-screen">
        <Outlet context={{ setOpenMenu }}/>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
