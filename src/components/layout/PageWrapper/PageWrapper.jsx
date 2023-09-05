import Header from "../Header/Header";
import MainPage from "../../pages/MainPage/MainPage";
import Footer from "../Footer/Footer";
import {Outlet, Routes} from "react-router-dom";

const PageWrapper = () => {
  return (
    <>
      <Header/>
      <Outlet />

      <Footer/>
    </>
  )
}

export default PageWrapper;
