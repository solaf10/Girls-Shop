import ContactForm from "../../components/ContactForm/ContactForm";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";

const Contact = () => {
  return (
    <div className="contact">
      <TopGreenBar secondLink="../../components/ContactForm/ContactForm.jsx" secondPageName="Contact Us" />
      <div className="container">
       <ContactForm/>
      </div>
    </div>
  );
};

export default Contact;
