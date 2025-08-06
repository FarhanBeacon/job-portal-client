import React, { useContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Common/Navbar";
import AuthContext from "../context/AuthContext/AuthContext";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import Footer from "../components/Common/Footer";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div>
      <header className="max-w-5xl mx-auto">
        <Navbar />
      </header>
      <main className="max-w-5xl mx-auto min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
