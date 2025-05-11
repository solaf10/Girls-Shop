import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
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
import LogIn from "./components/LogIn/LogIn";
import Product from "./components/Product/Product";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <div className="header-holder">
        <Header />
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/updatePassword" element={<Contact />} />
        <Route path="/blogs/:id" element={<BlogsDetails />} />
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
      <Footer />
    </BrowserRouter>
  );
};

export default App;
