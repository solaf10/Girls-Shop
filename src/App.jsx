import { Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Footer from "./components/Footer/Footer";
import UpdatePassword from "./pages/UpdatePassword/UpdatePassword";
import UpdatePasswordCard from "./components/UpdatePasswordCard/UpdatePasswordCard";
import ForgetPassword from "./components/UpdatePasswordCard/ForgetPassword";
import OTPSend from "./components/UpdatePasswordCard/OTPSend";
import ChangePassword from "./components/UpdatePasswordCard/ChangePassword";
import ChangedPassword from "./components/UpdatePasswordCard/ChangedPassword";
import BlogsDetails from "./pages/BlogsDetails/BlogsDetails";
import Cart from "./pages/Cart/Cart";
import ComplateCart from "./sections/ComplateCart/ComplateCart";
import LogIn from "./components/LogIn/LogIn";
import Product from "./components/Product/Product";
import SignUp from "./components/SignUp/SignUp";
import Designer from "./pages/Designer/Designer";

const App = () => {
  const location = useLocation();
  const authPaths = ["login", "signup", "updatePassword"];
  const isAuthPage = authPaths.some((path) => location.pathname.includes(path));
  return (
    <>
      <div className="header-holder">
        <Header />
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/complate-cart" element={<ComplateCart />} />
        <Route path="/blogs/:id" element={<BlogsDetails />} />
        <Route path="/designer" element={<Designer />} />
        <Route path="/updatePassword" element={<UpdatePassword />}>
          <Route
            index
            element={
              <UpdatePasswordCard
                title="Forget Password"
                desc="Please enter your email to resend code on it"
              >
                <ForgetPassword />
              </UpdatePasswordCard>
            }
          />
          <Route
            path="sendOTP"
            element={
              <UpdatePasswordCard
                title="OTP Sent"
                desc={
                  <>
                    <span>
                      Please enter OTP that send to your email address
                      johnDoe@gmail.com
                    </span>
                    <Link to="/updatePassword"> change?</Link>
                  </>
                }
              >
                <OTPSend />
              </UpdatePasswordCard>
            }
          />
          <Route
            path="change"
            element={
              <UpdatePasswordCard
                title="Change Password"
                desc="Please enter new password"
              >
                <ChangePassword />
              </UpdatePasswordCard>
            }
          />
          <Route
            path="changed"
            element={
              <UpdatePasswordCard
                title="Great!!!"
                desc="Password Changed Successfully"
              >
                <ChangedPassword />
              </UpdatePasswordCard>
            }
          />
        </Route>
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
};

export default App;
