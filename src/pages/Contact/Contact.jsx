import ContactForm from "../../components/ContactForm/ContactForm";
import TopGreenBar from "../../components/TopGreenBar/TopGreenBar";

const Contact = () => {
  return (
    <div className="contact">
      <TopGreenBar/>
      <div className="container">
       <ContactForm/>
      </div>
    </div>
  );
};

export default Contact;
